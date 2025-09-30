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
-- Table structure for table `pengumuman_lelang`
--

DROP TABLE IF EXISTS `pengumuman_lelang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pengumuman_lelang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `judul` varchar(255) DEFAULT NULL,
  `tgl_op` datetime DEFAULT NULL,
  `tgl_cl` datetime DEFAULT NULL,
  `deskripsi` longtext DEFAULT NULL,
  `no_rks` varchar(255) DEFAULT NULL,
  `dokumen_rks` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pengumuman_lelang`
--

LOCK TABLES `pengumuman_lelang` WRITE;
/*!40000 ALTER TABLE `pengumuman_lelang` DISABLE KEYS */;
INSERT INTO `pengumuman_lelang` VALUES (12,'Pengadaan Jasa Perpanjangan Sertifikasi Kompetensi Tenaga Kerja KSO dilingkungan PT HP Tahun 2022','2022-12-06 09:00:00','2022-12-08 15:00:00',NULL,NULL,NULL),(13,'Pengadaan Pelaksanaan Pelatihan Alat Berat PT Haleyora Power Tahun 2022','2022-12-13 10:00:03','2022-12-15 15:00:03',NULL,NULL,NULL),(14,'PENGADAAN JASA ASURANSI KESEHATAN DAN PERAWATAN KESEHATAN PEGAWAI TAHUN 2023','2023-03-06 08:00:58','2023-03-09 17:00:58',NULL,'0015.RKS/613/HPI/11/2023','rks-6406db5231975.pdf');
/*!40000 ALTER TABLE `pengumuman_lelang` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-30 16:11:06
