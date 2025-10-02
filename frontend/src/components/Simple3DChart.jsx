import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Simple 3D Bar Component
function SimpleBar3D({ position, height, color, label, value, isHovered, onHover }) {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, height, 0.1);
    }
  });

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[1, 1, 1]}
        position={[0, height / 2, 0]}
        onPointerOver={() => onHover(true)}
        onPointerOut={() => onHover(false)}
      >
        <meshStandardMaterial 
          color={isHovered ? new THREE.Color(color).multiplyScalar(1.5) : color}
          emissive={isHovered ? new THREE.Color(color).multiplyScalar(0.3) : new THREE.Color(color).multiplyScalar(0.1)}
        />
      </Box>
      
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
      
      <Text
        position={[0, height + 0.8, 0]}
        fontSize={0.25}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {value}
      </Text>
    </group>
  );
}

// Simple 3D Pie Slice
function SimplePieSlice3D({ angle, radius, height, color, startAngle, label, value }) {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(Date.now() * 0.001) * 0.05;
    }
  });

  const geometry = new THREE.CylinderGeometry(radius, radius, height, 32, 1, false, startAngle, angle);
  const midAngle = startAngle + angle / 2;
  const labelX = Math.cos(midAngle) * (radius + 1.5);
  const labelZ = Math.sin(midAngle) * (radius + 1.5);
  
  return (
    <group>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial 
          color={color} 
          emissive={new THREE.Color(color).multiplyScalar(0.1)}
        />
      </mesh>
      
      <Text
        position={[labelX, height / 2, labelZ]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}: {value}
      </Text>
    </group>
  );
}

// Main Simple 3D Chart Component
const Simple3DChart = () => {
  const [chartType, setChartType] = useState('bar');
  const [timeRange, setTimeRange] = useState('monthly');
  const [hoveredBar, setHoveredBar] = useState(null);

  const chartData = {
    monthly: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
      values: [6.8, 6.3, 10.2, 7.3, 9.7, 4.7],
      colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4']
    },
    weekly: {
      labels: ['W1', 'W2', 'W3', 'W4'],
      values: [580, 620, 590, 666],
      colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']
    },
    daily: {
      labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
      values: [120, 150, 180, 160, 200, 90, 70],
      colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#F97316']
    }
  };

  const currentData = chartData[timeRange];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Interactive 3D Analytics</h3>
          <p className="text-slate-300 text-sm">Drag to rotate • Scroll to zoom • Hover for details</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          {/* Chart Type Selector */}
          <div className="flex bg-white/10 rounded-xl p-1 border border-white/20">
            {['bar', 'pie'].map((type) => (
              <motion.button
                key={type}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setChartType(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  chartType === type
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {type === 'bar' ? '📊 3D Bar' : '🥧 3D Pie'}
              </motion.button>
            ))}
          </div>

          {/* Time Range Selector */}
          <div className="flex bg-white/10 rounded-xl p-1 border border-white/20">
            {['daily', 'weekly', 'monthly'].map((range) => (
              <motion.button
                key={range}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  timeRange === range
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Chart Canvas */}
      <div className="h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/50 to-blue-900/50 border border-white/10">
        <Canvas
          camera={{ position: [5, 5, 5], fov: 60 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />

          <OrbitControls 
            enablePan={true} 
            enableZoom={true} 
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={1}
          />

          {chartType === 'bar' ? (
            <group>
              {currentData.labels.map((label, index) => (
                <SimpleBar3D
                  key={`${timeRange}-${index}`}
                  position={[(index - currentData.labels.length / 2) * 2, 0, 0]}
                  height={currentData.values[index] / (timeRange === 'monthly' ? 2 : timeRange === 'weekly' ? 100 : 50)}
                  color={currentData.colors[index]}
                  label={label}
                  value={timeRange === 'monthly' ? 
                    `${currentData.values[index].toFixed(1)}M` : 
                    Math.round(currentData.values[index]).toString()
                  }
                  isHovered={hoveredBar === index}
                  onHover={(hovered) => setHoveredBar(hovered ? index : null)}
                />
              ))}
            </group>
          ) : (
            <group>
              {(() => {
                const total = currentData.values.reduce((sum, val) => sum + val, 0);
                let currentAngle = 0;
                
                return currentData.labels.map((label, index) => {
                  const percentage = currentData.values[index] / total;
                  const angle = percentage * Math.PI * 2;
                  const startAngle = currentAngle;
                  currentAngle += angle;
                  
                  return (
                    <SimplePieSlice3D
                      key={`pie-${timeRange}-${index}`}
                      angle={angle}
                      radius={2}
                      height={0.8}
                      color={currentData.colors[index]}
                      startAngle={startAngle}
                      label={label}
                      value={`${(percentage * 100).toFixed(1)}%`}
                    />
                  );
                });
              })()}
            </group>
          )}

          <gridHelper args={[10, 10, '#ffffff30', '#ffffff10']} />
        </Canvas>
      </div>

      {/* Simple Data Summary */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {currentData.labels.map((label, index) => (
          <motion.div
            key={`summary-${timeRange}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: currentData.colors[index] }}
              />
              <div>
                <p className="text-white font-medium">{label}</p>
                <p className="text-slate-300 text-sm">
                  {timeRange === 'monthly' ? 
                    `Rp ${currentData.values[index].toFixed(1)}M` : 
                    `${Math.round(currentData.values[index]).toLocaleString()} units`
                  }
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span>Drag to rotate view</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>Scroll to zoom in/out</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <span>Hover for details</span>
        </div>
      </div>
    </div>
  );
};

export default Simple3DChart;
