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
-- Table structure for table `pengajuan`
--

DROP TABLE IF EXISTS `pengajuan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pengajuan` (
  `id` varchar(12) NOT NULL,
  `tgl_pengajuan` datetime DEFAULT NULL,
  `tgl_proses` datetime DEFAULT NULL,
  `no_nodin` varchar(55) DEFAULT NULL,
  `judul_nodin` varchar(255) DEFAULT NULL,
  `nilai_pagu` varchar(50) DEFAULT NULL,
  `jenis_anggaran` varchar(55) DEFAULT NULL,
  `skko_skki` varchar(55) DEFAULT NULL,
  `tor_kak` varchar(55) DEFAULT NULL,
  `upload_nodin` varchar(55) DEFAULT NULL,
  `jenis_pengadaan` varchar(55) DEFAULT NULL,
  `nilai_hpe` varchar(55) DEFAULT NULL,
  `doc_hpe` varchar(55) DEFAULT NULL,
  `status_vfm` varchar(55) DEFAULT NULL,
  `doc_vfm` varchar(55) DEFAULT NULL,
  `doc_rks` varchar(55) DEFAULT NULL,
  `referensi_vendor` varchar(55) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `no_nodin2` varchar(55) DEFAULT NULL,
  `doc_hps` varchar(255) DEFAULT NULL,
  `doc_vfm_lakdan` varchar(55) DEFAULT NULL,
  `undang_vendor` varchar(55) DEFAULT NULL,
  `pembagian_rks` varchar(55) DEFAULT NULL,
  `BAP` varchar(255) DEFAULT NULL,
  `doc_penawaran` varchar(55) DEFAULT NULL,
  `doc_adm_tek` varchar(55) DEFAULT NULL,
  `bastb` varchar(55) DEFAULT NULL,
  `bapr` varchar(55) DEFAULT NULL,
  `bastp` varchar(55) DEFAULT NULL,
  `invoice` varchar(55) DEFAULT NULL,
  `faktur_pajak` varchar(55) DEFAULT NULL,
  `lampiran_spk` varchar(55) DEFAULT NULL,
  `ba_denda` varchar(55) DEFAULT NULL,
  `doc_denda` varchar(55) DEFAULT NULL,
  `doc_bak` varchar(55) DEFAULT NULL,
  `spph` varchar(55) DEFAULT NULL,
  `spkpko` varchar(55) DEFAULT NULL,
  `ba_aanwijzing` varchar(55) DEFAULT NULL,
  `ba_evaluasi` varchar(55) DEFAULT NULL,
  `ba_nego` varchar(55) DEFAULT NULL,
  `ba_pemasukan` varchar(55) DEFAULT NULL,
  `ba_pembukaan` varchar(55) DEFAULT NULL,
  `pengumuman` varchar(55) DEFAULT NULL,
  `spk_askes` varchar(55) DEFAULT NULL,
  `sppjb_askes` varchar(55) DEFAULT NULL,
  `undangan` varchar(55) DEFAULT NULL,
  `npp` varchar(55) DEFAULT NULL,
  `nupas` varchar(55) DEFAULT NULL,
  `upload_nodin2` varchar(55) DEFAULT NULL,
  `nodin_lakdan` varchar(55) DEFAULT NULL,
  `upload_nodin_lakdan` varchar(55) DEFAULT NULL,
  `bastk` varchar(255) DEFAULT NULL,
  `ID_DATA_PERMOHONAN_ANGGARAN` varchar(55) DEFAULT NULL,
  `pemasukan_penawaran` varchar(55) DEFAULT NULL,
  `spk` varchar(55) DEFAULT NULL,
  `undangan_lakdan` varchar(55) DEFAULT NULL,
  `rks_lakdan` varchar(55) DEFAULT NULL,
  `pembukaan_penawaran` varchar(55) DEFAULT NULL,
  `evaluasi` varchar(55) DEFAULT NULL,
  `negosiasi` varchar(55) DEFAULT NULL,
  `penetapan_pemenang` varchar(55) DEFAULT NULL,
  `penunjukan_pemenang` varchar(55) DEFAULT NULL,
  `surat_per_ker` varchar(55) DEFAULT NULL,
  `usulan_pemenang` varchar(55) DEFAULT NULL,
  `masa_sanggah` varchar(55) DEFAULT NULL,
  `sanggah_banding` varchar(55) DEFAULT NULL,
  `jaw_sanggah` varchar(55) DEFAULT NULL,
  `surat_pen_pem` varchar(55) DEFAULT NULL,
  `cda` varchar(55) DEFAULT NULL,
  `penyerahan_jaminan` varchar(55) DEFAULT NULL,
  `pengumuman_pemenang` varchar(55) DEFAULT NULL,
  `permohonan_anggaran` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pengajuan`
--

LOCK TABLES `pengajuan` WRITE;
/*!40000 ALTER TABLE `pengajuan` DISABLE KEYS */;
/*!40000 ALTER TABLE `pengajuan` ENABLE KEYS */;
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
