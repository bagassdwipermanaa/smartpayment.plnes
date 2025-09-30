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
-- Table structure for table `rekap_spk`
--

DROP TABLE IF EXISTS `rekap_spk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rekap_spk` (
  `id` varchar(12) NOT NULL,
  `no_spk` varchar(255) DEFAULT NULL,
  `jenis_pengadaan` varchar(255) DEFAULT NULL,
  `tgl_terbit` date DEFAULT NULL,
  `masa_berlaku` varchar(255) DEFAULT NULL,
  `no_anggaran_skko` varchar(255) DEFAULT NULL,
  `tgl_skko` date DEFAULT NULL,
  `nilai_skko` varchar(255) DEFAULT NULL,
  `nilai_spk` varchar(255) DEFAULT NULL,
  `selisih` varchar(255) DEFAULT NULL,
  `pemenang_lelang` varchar(255) DEFAULT NULL,
  `metode_lelang` varchar(255) DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `create_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rekap_spk`
--

LOCK TABLES `rekap_spk` WRITE;
/*!40000 ALTER TABLE `rekap_spk` DISABLE KEYS */;
INSERT INTO `rekap_spk` VALUES ('202210130001','0052.PJ/613/HPI/VII/2021 ','Pengadaan Chemical Cleaning Servis Tahun 2021','2021-07-16','1 Tahun','0018/521/SKKO/DIR/2021-R','2021-04-24','2520180600','1826488382','693692218','CV MITRA MULIA SEJAHTERA','Lelang Terbatas','Selesai, ','2022-10-13 10:53:34',NULL),('202210130002','0096.PJ/613/HPI/VII/2021','Pengadaan Sewa Alat Kerja PT HALEYORA POWER','2021-07-21','3 Tahun','055/521/SKKI/DIR/2021-R','2021-06-14','1382040000','915156000','466884000','PT JASKO PRIMA SEJAHTERA','Lelang Terbatas','Selesai','2022-10-13 10:53:47',NULL),('202210130003','0051.PJ/613/HPI/VII/2021','Pengadaan Analisis Penyusunan Norma Asesmen Psikologi','2021-07-26','15 Hari Kalender',NULL,NULL,NULL,'22750000',NULL,'PT.DIYANTI SATYA SAHAKARYA','Pengadaan Langsung','Selesai','2022-10-27 09:16:30',NULL),('202210130004','0053.PJ/613/HPI/VIII/2021 ','Pengadaan Konsultasi Tinjauan Dokumen & Penerapan System Dan Surveillance Audit ','2021-08-18','44 Hari Kalender','038/521/SKKI/DIR/2021-R','2021-06-30','99550000','84617500','14932500','PT MITRA UTAMA SERTIFIKASI','Pengadaan Langsung','Selesai','2022-10-13 10:53:57',NULL);
/*!40000 ALTER TABLE `rekap_spk` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-30 16:11:09
