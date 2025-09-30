CREATE DATABASE  IF NOT EXISTS `dbhpsp` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `dbhpsp`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 10.69.255.196    Database: dbhpsp
-- ------------------------------------------------------
-- Server version	5.5.5-10.11.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `daftar_pengadaan`
--

DROP TABLE IF EXISTS `daftar_pengadaan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daftar_pengadaan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_pengadaan` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daftar_pengadaan`
--

LOCK TABLES `daftar_pengadaan` WRITE;
/*!40000 ALTER TABLE `daftar_pengadaan` DISABLE KEYS */;
INSERT INTO `daftar_pengadaan` VALUES (1,'Pengadaan Jasa Konsultasi Analisa Beban Kerja PT HALEYORA POWERINDO Tahun 2022'),(2,'Pengadaan Pelatihan dan Sertifikasi Internal Auditor SMAP ISO 37001 : 2016 Sistem Manajemen ISO 19011 : 2018 Tahun 2022'),(3,'Pengadaan Jasa Sertifikasi Teknik'),(4,'Pengadaan Jasa Asuransi Kesehatan'),(5,'Pengadaan Server dan Upgrading System Server'),(6,'Pembelian dan Sewa Laptop'),(7,'Seragam dan Atribut Satpam (KHS)'),(8,'Sepatu Satpam (KHS)'),(9,'Peralatan Pos Satpam (KHS)'),(10,'Alat Pelindung Diri (KHS)'),(11,'Peralatan Cleaning Service (KHS)'),(12,'Perlengkapan Keperluan Kantor'),(13,'Seragam Non Teknik'),(14,'Pengadaan Jasa Borongan Renovasi Gedung (Rooftop)'),(15,'Jasa Borongan Renovasi Ruangan BUJP'),(16,'Proses Kontrak Pekerjaan CSMS'),(17,'Pengadaan ID Card Project Tahun 2022'),(18,'Kontrak Surveillance Audit dan Pendampingan SMM ISO 9001 : 2015, SML ISO 14001 : 2015, dan SMK3 ISO 45001 : 2018'),(19,'Pengadaan Sewa Kendaraan Listrik'),(20,'Pengadaan Sewa Kendaraan Operasi'),(21,'Pengadaan Sewa Milik Kendaraan '),(22,'Pengadaan Consumable Cleaning Service'),(23,'Pengadaan sewa dan Beli Mobil Sweeper'),(24,'Pengadaan Sewa dan Beli Tangga Hidrolik');
/*!40000 ALTER TABLE `daftar_pengadaan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-30 16:11:11
