import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Bar Component
function Bar3D({ position, height, color, label, value, isHovered, onHover }) {
  const meshRef = useRef();
  const glowRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, height, 0.1);
      
      // Glow effect
      if (glowRef.current) {
        glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
      }
    }
  });

  return (
    <group position={position}>
      {/* Glow Base */}
      <Box
        ref={glowRef}
        args={[1.2, 0.1, 1.2]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </Box>
      
      {/* Main Bar */}
      <Box
        ref={meshRef}
        args={[1, height, 1]}
        position={[0, height / 2, 0]}
        onPointerOver={() => onHover(true)}
        onPointerOut={() => onHover(false)}
        castShadow
        receiveShadow
      >
        <meshPhongMaterial 
          color={isHovered ? new THREE.Color(color).multiplyScalar(1.8) : color}
          emissive={isHovered ? new THREE.Color(color).multiplyScalar(0.4) : new THREE.Color(color).multiplyScalar(0.1)}
          shininess={100}
          transparent
          opacity={0.9}
        />
      </Box>
      
      {/* Top Glow */}
      <Box
        args={[1.1, 0.2, 1.1]}
        position={[0, height + 0.1, 0]}
      >
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </Box>
      
      {/* Label Background */}
      <Box
        args={[1.5, 0.3, 0.1]}
        position={[0, -0.7, 0]}
      >
        <meshStandardMaterial 
          color="#1e293b"
          transparent
          opacity={0.8}
        />
      </Box>
      
      {/* Label */}
      <Text
        position={[0, -0.7, 0.1]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
      
      {/* Value Display with Background */}
      <Box
        args={[1.8, 0.4, 0.1]}
        position={[0, height + 0.8, 0]}
      >
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.9}
        />
      </Box>
      
      <Text
        position={[0, height + 0.8, 0.1]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {value}
      </Text>
      
      {/* Hover Info Panel */}
      {isHovered && (
        <group position={[0, height / 2, 1.5]}>
          <Box args={[2, 1, 0.1]}>
            <meshStandardMaterial 
              color="#0f172a"
              transparent
              opacity={0.95}
            />
          </Box>
          <Text
            position={[0, 0.2, 0.1]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {label}
          </Text>
          <Text
            position={[0, -0.1, 0.1]}
            fontSize={0.25}
            color={color}
            anchorX="center"
            anchorY="middle"
          >
            {value}
          </Text>
          <Text
            position={[0, -0.35, 0.1]}
            fontSize={0.15}
            color="#94a3b8"
            anchorX="center"
            anchorY="middle"
          >
            Revenue Data
          </Text>
        </group>
      )}
    </group>
  );
}

// 3D Pie Slice Component
function PieSlice3D({ angle, radius, height, color, startAngle, label, value, isHovered, onHover }) {
  const meshRef = useRef();
  const glowRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.03;
      
      // Hover effect - lift up the slice
      const targetY = isHovered ? 0.3 : 0;
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.1);
      
      if (glowRef.current) {
        glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.05);
      }
    }
  });

  const geometry = new THREE.CylinderGeometry(radius, radius, height, 32, 1, false, startAngle, angle);
  const glowGeometry = new THREE.CylinderGeometry(radius + 0.1, radius + 0.1, height + 0.2, 32, 1, false, startAngle, angle);
  
  const midAngle = startAngle + angle / 2;
  const labelX = Math.cos(midAngle) * (radius + 1.5);
  const labelZ = Math.sin(midAngle) * (radius + 1.5);
  
  return (
    <group>
      {/* Glow Effect */}
      <mesh ref={glowRef} geometry={glowGeometry} position={[0, -0.1, 0]}>
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </mesh>
      
      {/* Main Pie Slice */}
      <mesh 
        ref={meshRef} 
        geometry={geometry}
        onPointerOver={() => onHover && onHover(true)}
        onPointerOut={() => onHover && onHover(false)}
        castShadow
        receiveShadow
      >
        <meshPhongMaterial 
          color={isHovered ? new THREE.Color(color).multiplyScalar(1.5) : color}
          emissive={isHovered ? new THREE.Color(color).multiplyScalar(0.3) : new THREE.Color(color).multiplyScalar(0.1)}
          shininess={100}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Connection Line - Simplified */}
      <mesh position={[labelX * 0.5, height / 2, labelZ * 0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      
      {/* Label Background */}
      <Box
        args={[1.8, 0.6, 0.1]}
        position={[labelX, height / 2, labelZ]}
      >
        <meshStandardMaterial 
          color="#0f172a"
          emissive={color}
          emissiveIntensity={0.1}
          transparent
          opacity={0.9}
        />
      </Box>
      
      {/* Label */}
      <Text
        position={[labelX, height / 2 + 0.1, labelZ + 0.1]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
      
      {/* Value */}
      <Text
        position={[labelX, height / 2 - 0.15, labelZ + 0.1]}
        fontSize={0.3}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {value}
      </Text>
      
      {/* Center Value Display */}
      {angle > 0.5 && (
        <Text
          position={[
            Math.cos(midAngle) * (radius * 0.7),
            height / 2,
            Math.sin(midAngle) * (radius * 0.7)
          ]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {value}
        </Text>
      )}
    </group>
  );
}

// Main Interactive 3D Chart Component
const Interactive3DChart = () => {
  const [chartType, setChartType] = useState('bar');
  const [timeRange, setTimeRange] = useState('monthly');
  const [hoveredBar, setHoveredBar] = useState(null);
  const [hoveredPie, setHoveredPie] = useState(null);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  // Dynamic data based on time range
  const [chartData, setChartData] = useState({
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
  });

  const currentData = chartData[timeRange];

  // Generate random data for dynamic updates
  const generateRandomData = () => {
    const newData = { ...chartData };
    Object.keys(newData).forEach(range => {
      newData[range].values = newData[range].values.map(val => 
        Math.max(0.1, val + (Math.random() - 0.5) * val * 0.3)
      );
    });
    setChartData(newData);
  };

  useEffect(() => {
    const interval = setInterval(generateRandomData, 3000);
    return () => clearInterval(interval);
  }, []);

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

          {/* Animation Speed */}
          <div className="flex items-center space-x-2">
            <span className="text-slate-300 text-sm">Speed:</span>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={animationSpeed}
              onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
              className="w-20 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Refresh Data Button */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateRandomData}
            className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-xl border border-green-400/30 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* 3D Chart Canvas */}
      <div className="h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/50 to-blue-900/50 border border-white/10">
        <Canvas
          camera={{ position: [6, 6, 6], fov: 50 }}
          style={{ background: 'transparent' }}
          shadows
        >
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.2} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[5, 8, 5]} intensity={0.8} color="#3B82F6" />
          <pointLight position={[-5, 8, -5]} intensity={0.6} color="#8B5CF6" />
          <spotLight 
            position={[0, 12, 0]} 
            angle={0.4} 
            penumbra={0.5} 
            intensity={1.5} 
            color="#06B6D4"
            castShadow
          />
          <hemisphereLight skyColor="#87CEEB" groundColor="#362d59" intensity={0.5} />

          {/* Controls */}
          <OrbitControls 
            enablePan={true} 
            enableZoom={true} 
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={animationSpeed}
          />

          {/* Chart Content */}
          {chartType === 'bar' ? (
            // 3D Bar Chart
            <group>
              {currentData.labels.map((label, index) => (
                <Bar3D
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
            // 3D Pie Chart
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
                    <PieSlice3D
                      key={`pie-${timeRange}-${index}`}
                      angle={angle}
                      radius={2.5}
                      height={0.8}
                      color={currentData.colors[index]}
                      startAngle={startAngle}
                      label={label}
                      value={`${(percentage * 100).toFixed(1)}%`}
                      isHovered={hoveredPie === index}
                      onHover={(hovered) => setHoveredPie(hovered ? index : null)}
                    />
                  );
                });
              })()}
            </group>
          )}

          {/* Ground Plane */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
            <planeGeometry args={[15, 15]} />
            <meshStandardMaterial 
              color="#1e293b" 
              transparent 
              opacity={0.3}
              roughness={0.8}
              metalness={0.1}
            />
          </mesh>
          
          {/* Enhanced Grid */}
          <gridHelper args={[12, 20, '#3B82F6', '#1e293b']} position={[0, -0.49, 0]} />
        </Canvas>
      </div>

      {/* Enhanced Data Summary */}
      <div className="mt-6 space-y-6">
        {/* Real-time Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-400/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm">Total Data Points</p>
                <p className="text-white text-2xl font-bold">{currentData.values.length}</p>
              </div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-200 text-sm">Average Value</p>
                <p className="text-white text-2xl font-bold">
                  {timeRange === 'monthly' ? 
                    `${(currentData.values.reduce((a, b) => a + b, 0) / currentData.values.length).toFixed(1)}M` :
                    Math.round(currentData.values.reduce((a, b) => a + b, 0) / currentData.values.length).toLocaleString()
                  }
                </p>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200 text-sm">Peak Value</p>
                <p className="text-white text-2xl font-bold">
                  {timeRange === 'monthly' ? 
                    `${Math.max(...currentData.values).toFixed(1)}M` :
                    Math.max(...currentData.values).toLocaleString()
                  }
                </p>
              </div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Detailed Data Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {currentData.labels.map((label, index) => {
            const percentage = chartType === 'pie' ? 
              ((currentData.values[index] / currentData.values.reduce((a, b) => a + b, 0)) * 100).toFixed(1) :
              null;
            
            return (
              <motion.div
                key={`summary-${timeRange}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                  (hoveredBar === index || hoveredPie === index) ? 'ring-2 ring-white/30 bg-white/15' : ''
                }`}
                onMouseEnter={() => {
                  if (chartType === 'bar') setHoveredBar(index);
                  else setHoveredPie(index);
                }}
                onMouseLeave={() => {
                  if (chartType === 'bar') setHoveredBar(null);
                  else setHoveredPie(null);
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-4 h-4 rounded-full shadow-lg"
                      style={{ 
                        backgroundColor: currentData.colors[index],
                        boxShadow: `0 0 10px ${currentData.colors[index]}40`
                      }}
                    />
                    <span className="text-xs text-slate-400 font-mono">#{index + 1}</span>
                  </div>
                  
                  <div>
                    <p className="text-white font-bold text-lg">{label}</p>
                    <p className="text-slate-300 text-sm">
                      {timeRange === 'monthly' ? 
                        `Rp ${currentData.values[index].toFixed(1)}M` : 
                        `${Math.round(currentData.values[index]).toLocaleString()} units`
                      }
                    </p>
                    {percentage && (
                      <p className="text-xs text-slate-400 mt-1">{percentage}% of total</p>
                    )}
                  </div>
                  
                  {/* Mini Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div 
                      className="h-1.5 rounded-full transition-all duration-500"
                      style={{ 
                        backgroundColor: currentData.colors[index],
                        width: `${(currentData.values[index] / Math.max(...currentData.values)) * 100}%`
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Instructions */}
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
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <span>Auto-updates every 3s</span>
        </div>
      </div>
    </div>
  );
};

export default Interactive3DChart;
