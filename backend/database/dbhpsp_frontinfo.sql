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
-- Table structure for table `frontinfo`
--

DROP TABLE IF EXISTS `frontinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `frontinfo` (
  `id_info` int(11) NOT NULL AUTO_INCREMENT,
  `info_head` varchar(255) DEFAULT NULL,
  `info_content` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modifed_at` datetime DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  `mulai_tayang` datetime DEFAULT NULL,
  `akhir_tayang` datetime DEFAULT NULL,
  `creator` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_info`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frontinfo`
--

LOCK TABLES `frontinfo` WRITE;
/*!40000 ALTER TABLE `frontinfo` DISABLE KEYS */;
INSERT INTO `frontinfo` VALUES (1,'Tata Tertib Penagihan','1. Submit Dokumen Tagihan dilayani selama jam kerja 08.00 sd 16.00 wib dalam hari kerja Senin sd Jum\'at <br>\r\n2. Mitra memastikan terlebih dahulu e-file sebelum melakukan submit tagihan<br>\r\n3. Apabila terdapat koreksi tagihan, maka status posisi tagihan di aplikasi akan dikembalikan ke mitra dan perhitungan waktu proses verifikasi tagihan akan dimulai dari awal kembali <br>\r\n4. Setiap Mitra wajib menjaga kerahasiaan data dan akses didalam Aplikasi Smart Payment. <br>\r\n5. Segala bentuk kerugian akibat penyalahgunaan akses, menjadi tanggung jawab Mitra\r\n','2024-11-18 17:21:59','2024-11-18 17:21:51','Aktif','2024-11-20 17:21:34','2024-11-29 17:21:43','Adminkeu'),(2,'Penagihan Via SmartPayment','Mitra-Mitra penyedia Jasa dan Barang untuk Haleyora Power Pusat dan Unit Pelaksana 5 (UP5) dianjurkan mulai tanggal 20 November 2024 melakukan penagihan melalui Aplikasi Smart Payment','2024-11-21 20:07:53','2024-11-21 20:07:56','Aktif','2024-11-21 20:08:08','2024-11-21 20:08:11','Adminkeu'),(3,'Libur Natal, 25-26 Desember','Sesuai dengan Kalender Nasional, tanggal 25 sd 26 Desember 2024 sebagai Libur Natal','2024-11-24 17:21:34','2024-11-24 17:22:35','Aktif','2024-12-25 00:00:00','2024-12-27 00:00:00','Admin'),(4,'Update perubahan email dan kontak','Update perubahan email notifikasi dan korespodensi menjadi smartpayment@plnes.co.id serta perubahan nomor kontak kantor pusat PLN Electricity Services menjadi 021-7919-2517','2025-09-02 00:00:00','2025-09-02 00:00:00','1','2025-09-02 00:00:00','2025-12-12 00:00:00','Admin');
/*!40000 ALTER TABLE `frontinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-30 16:11:08
