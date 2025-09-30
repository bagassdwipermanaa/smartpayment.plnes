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
-- Table structure for table `pemenang_lelang`
--

DROP TABLE IF EXISTS `pemenang_lelang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pemenang_lelang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_pengadaan` varchar(255) DEFAULT NULL,
  `pemenang_lelang` varchar(255) DEFAULT NULL,
  `metode_lelang` varchar(255) DEFAULT NULL,
  `tgl_menang` date DEFAULT NULL,
  `tgl_create` datetime DEFAULT NULL,
  `dokumen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pemenang_lelang`
--

LOCK TABLES `pemenang_lelang` WRITE;
/*!40000 ALTER TABLE `pemenang_lelang` DISABLE KEYS */;
INSERT INTO `pemenang_lelang` VALUES (1,'Pengadaan Chemical Cleaning Servis Tahun 2021','CV MITRA MULIA SEJAHTERA','Lelang Terbatas','2021-07-16','2022-10-13 10:53:34',NULL),(2,'Pengadaan Sewa Alat Kerja PT HALEYORA POWER','PT JASKO PRIMA SEJAHTERA','Lelang Terbatas','2021-07-21','2022-10-13 10:53:47',NULL),(3,'Pengadaan Analisis Penyusunan Norma Asesmen Psikologi','PT.DIYANTI SATYA SAHAKARYA','Pengadaan Langsung','2021-07-26','2022-10-27 09:16:30',NULL),(4,'Pengadaan Konsultasi Tinjauan Dokumen & Penerapan System Dan Surveillance Audit ','PT MITRA UTAMA SERTIFIKASI','Pengadaan Langsung','2021-08-18','2022-10-13 10:53:57',NULL),(5,'Pengadaan Sewa Kendaraan Operasional PT. PLN PUSMANPRO UPMK III Tahun 2021','CV AGUNG GUNA SUKSES, MANDIRI JAYA MOK, SINTIMA, ASSA RENT','Pengadaan Langsung','2021-09-01','2022-10-13 10:54:06',NULL),(6,'Pengadaan Survey Kepuasan Pelanggan di PT. Haleyora Powerindo Kantor Pusat tahun 2021','PT. MITRA UTAMA SERTIFIKASI','Pengadaan Langsung','2021-09-03','2022-10-13 10:54:17',NULL),(7,'Pengadaan Diklat dan Sertifikasi Kompetensi Ahli Muda K3 Umum BNSP','PT. DELTA INDONESIA PRANENGGAR','Pengadaan Langsung','2021-09-20',NULL,NULL),(8,'Pengadaan Pembinaan dan Pelatihan Ahli K3 Umum Sertifikasi KEMNAKER RI Tahun 2021','PT. MAHIR LASTANA GANTARI','Pengadaan Langsung','2021-09-24',NULL,NULL),(9,'Sewa Alat Kerja MANBILL PT. PLN BATAM Tahun 2021','PT. LINTAS MEDIA SOLUTION','Lelang Terbatas','2021-10-01','2022-10-13 10:54:25',NULL),(10,'Pengadaan Sewa Beli Alat Kerja (Tang Amphere) AMC ICON+ Tahun 2021 Tahap I s/d III, dan Kendaraan Operasional ','PT RADIUS ALKINDO','Lelang Terbatas','2021-10-22','2022-10-13 07:59:46',NULL),(11,'Pengadaan Tang Amphere AMC Tahun 2021 Tahap I','PT RADIUS ALKINDO','Pengadaan Langsung','2021-10-15','2022-10-13 07:59:48',NULL),(12,'Pengadaan Tang Amphere AMC Tahun 2021 Tahap II','PT RADIUS ALKINDO','Pengadaan Langsung','2021-10-22','2022-10-13 07:59:50',NULL),(13,'Pengadaan ThermoGun AMC Tahun 2021 Tahap I','PT RADIUS ALKINDO','Pengadaan Langsung','2021-10-18','2022-10-13 08:00:04',NULL),(14,'Pengadaan ThermoGun AMC Tahun 2021 Tahap II','PT RADIUS ALKINDO','Pengadaan Langsung','2021-10-22','2022-10-13 08:00:06',NULL),(15,'Pengadaan Peralatan AMC Tahun 2021 Tahap I','PT RADIUS ALKINDO','Pengadaan Langsung','2021-10-15','2022-10-13 08:00:08',NULL),(16,'Pengadaan Peralatan AMC Tahun 2021 Tahap II','PT RADIUS ALKINDO','Pengadaan Langsung','2021-10-18','2022-10-13 08:00:10',NULL),(17,'Pengadaan sewa Kendaraan Operasional AMC Tahun 2021','PT CSM CORPORATAMA','Lelang Terbatas','2021-10-24','2022-10-13 08:00:11',NULL),(18,'Pengadaan Seragam TK AMC Tahun 2021','PT TAKON UNIFORM PRODUCTION','Pengadaan Langsung','2021-10-27','2022-10-13 08:00:22',NULL),(19,'Pengadaan Pendukung Alat Kerja di PT. HALEYORA POWERINDO Kantor Pusat tahun 2021','PT. INDOVISUAL PRESENTATAMA BANDUNG','Pengadaan Langsung','2021-11-23','2022-10-13 10:54:36',NULL),(20,'PENGADAAN SEWA LAPTOP MAGANG PT ICON+ TAHUN 2021','CV. NATA ARIFAH TEKNIK','Pengadaan Langsung','2021-12-01','2022-10-13 10:54:50',NULL),(21,'Pengadaan Pendukung Alat Kerja di PT. HALEYORA POWERINDO Kantor Pusat tahun 2021','PT BEST INSTRUMENT','Pengadaan Langsung','2021-12-06','2022-10-13 08:00:49',NULL),(22,'SEWA KENDARAAN LISTRIK TAHUN 2021','PT.DIYANTI SATYA SAHAKARYA','Pengadaan Langsung','2021-12-01','2022-10-13 08:00:51',NULL),(23,'Pengadaan Sewa Alat Kerja PT. PLN PUSERTIF Tahun 2021','PT WAHANA INSANI','Lelang Terbatas','2021-09-30','2022-10-13 10:55:01',NULL),(24,'Pengadaan Jasa Konsultasi Analisa Beban Kerja PT HALEYORA POWERINDO Tahun 2022','PT. SADAYA KINERJA UTAMA','Pengadaan Langsung','2022-01-26','2022-10-13 10:55:14',NULL),(25,'Pengadaan Alat Kerja PT PLN UPMK II PUSMANPRO UNIT Jawa Tengah Tahun 2022 ','PT. DATASCRIP BUSINESS SOLUTIONS','Pengadaan Langsung','2022-01-26','2022-10-13 10:55:22',NULL),(26,'Permohonan Sertifikasi ISO SMAP','PT. MITRA UTAMA SERTIFIKASI','Pengadaan Langsung','2022-01-28','2022-10-13 10:55:29',NULL),(27,'Pengadaan Pelatihan Internal Auditor SMAP ISO 37001 : 2016 Sistem Manajemen ISO 19011 : 2018 Tahun 2022','PT MITRA UTAMA SERTIFIKASI','Pengadaan Langsung','2022-01-28','2022-10-13 10:55:36',NULL),(28,'Pengadaan Jasa Asuransi Kesehatan Pegawai Organik PT Haleyora Powerindo Tahun 2022','PT MANDIRI INHEALTH INDONESIA','Penunjukan Langsung','2022-02-25','2022-10-13 10:55:42',NULL),(29,'Pendukung Alat Kerja PT PLN UIP SUMBAGSEL','PT TIRTA MADYA MANDIRI','Pengadaan Langsung','2022-02-25','2022-10-13 10:55:47',NULL),(30,'Pengadaan Server Ha Clutser 1, Pengadaan Server Ha Clutser 2, Upgrading System Server','PT. GRIYA MITRA PERSADA','Pengadaan Langsung','2022-03-30','2022-10-13 10:55:57',NULL),(31,'Sewa Laptop Jasa Produksi Langsung  PT ICON+','PT BANGUN SELARAS SOLUSINDO','Lelang Terbatas','2022-03-31','2022-10-13 10:56:05',NULL),(32,'Seragam dan Atribut Satpam Vol. 60% dan Vol. 40%','PT TAKON UNIFORM PRODUCTION dan PT TIRTA MADYA MANDIRI','Lelang Terbatas','2022-04-06','2022-10-13 10:56:10',NULL),(33,'Sepatu Satpam','PT JALY INDONESIA','Lelang Terbatas','2022-04-07','2022-10-13 10:56:17',NULL),(34,'Peralatan Pos Satpam','PT RADIUS ALLKINDO ELECTRIC','Lelang Terbatas','2022-04-07','2022-10-13 10:56:24',NULL),(35,'Alat Pelindung Diri','PT BEST INSTRUMENT INDONESIA','Lelang Terbatas','2022-04-11','2022-10-13 10:56:36',NULL),(36,'Peralatan Cleaning Service','PT KRISBOW INDONESIA','Lelang Terbatas','2022-04-11','2022-10-13 10:56:43',NULL),(37,'Perlengkapan Keperluan Kantor','PT JASKO PRIMA SEJAHTERA','Pengadaan Langsung','2022-04-27','2022-10-13 08:02:28',NULL),(38,'Seragam Non Teknik','PT ZAIN PERKASA INDONESIA','Lelang Terbatas','2022-05-09','2022-10-13 10:56:57',NULL),(39,'Pengadaan Jasa Borongan Renovasi Gedung (Rooftop)','PT ATHIRA JAYA ABADI','Pengadaan Langsung','2022-05-20','2022-10-13 10:57:06',NULL),(40,'Jasa Borongan Renovasi Ruangan BUJP','PT ATHIRA JAYA ABADI','Pengadaan Langsung','2022-06-17','2022-10-13 10:57:16',NULL),(41,'Proses Kontrak Pekerjaan CSMS','PT MITRA UTAMA SERTIFIKASI','Pengadaan Langsung','2022-06-24','2022-10-13 10:57:24',NULL),(42,'Pengadaan ID Card Project Tahun 2022','CV. NATA ARIFAH TEKNIK','Pengadaan Langsung','2022-07-11','2022-10-13 10:57:31',NULL),(43,'Kontrak Surveillance Audit dan Pendampingan SMM ISO 9001 : 2015, SML ISO 14001 : 2015, dan SMK3 ISO 45001 : 2018','PT MITRA UTAMA SERTIFIKASI','Pengadaan Langsung','2022-07-18','2022-10-13 10:57:45',NULL),(44,'Pengadaan Sewa Kendaraan Listrik PT PLN UIW SumSel, Jambi, dan Bengkulu Tahun 2022','PT BNI MULTIFINANCE','Penunjukan Langsung','2022-07-28','2022-10-27 11:18:13',NULL),(45,'Pengadaan Sewa Kendaraan di wilayah PT PLN UPT Jambi Tahun 2022','CV. JAC RENT CAR','Pengadaan Langsung','2022-08-02','2022-10-13 08:03:23',NULL),(46,'Pengadaan Sewa Kendaraan Operasional Har Kubikel PT. PLN UP3 Palembang Di PT Haleyora Powerindo Tahun 2022','PT MITRA MONITOR MANDIRI','Pengadaan Langsung','2022-08-30','2022-10-27 11:18:54',NULL),(47,'Pengadaan Mobil Ride Sweeper Tahun 2022','PT Megatriwexsindo','Lelang Terbatas','2022-11-22',NULL,NULL),(52,'PENGADAAN JASA ASURANSI KESEHATAN DAN PERAWATAN KESEHATAN PEGAWAI TAHUN 2023','PT ASURANSI JIWA INHEALTH INDONESIA','LELANG TERBUKA','2023-04-10',NULL,'pemenang-643390f174e0a.pdf');
/*!40000 ALTER TABLE `pemenang_lelang` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-30 16:11:03
