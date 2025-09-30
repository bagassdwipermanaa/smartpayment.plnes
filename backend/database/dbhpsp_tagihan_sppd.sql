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
-- Table structure for table `tagihan_sppd`
--

DROP TABLE IF EXISTS `tagihan_sppd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tagihan_sppd` (
  `id_invoice` varchar(12) NOT NULL DEFAULT '',
  `id_pengguna_invoice` varchar(75) DEFAULT NULL,
  `no_po` varchar(75) DEFAULT NULL,
  `no_submission` varchar(75) DEFAULT NULL,
  `tgl_po` date DEFAULT NULL,
  `perihal` varchar(255) DEFAULT NULL,
  `no_invoice` varchar(255) DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `tgl_bastp` date DEFAULT NULL,
  `bank_urut` varchar(2) DEFAULT NULL,
  `bank_norek` varchar(50) DEFAULT NULL,
  `bank_noreknama` varchar(100) DEFAULT NULL,
  `bank_nama` varchar(100) DEFAULT NULL,
  `rtgs_code` varchar(25) DEFAULT NULL,
  `bank_cabang` varchar(100) DEFAULT NULL,
  `bank_kota` varchar(100) DEFAULT NULL,
  `nosap_ajuan` varchar(50) DEFAULT NULL,
  `upload_spk` varchar(255) DEFAULT NULL,
  `upload_po` varchar(255) DEFAULT NULL,
  `upload_amandemen` varchar(255) DEFAULT NULL,
  `upload_invoice` varchar(255) DEFAULT NULL,
  `upload_spp` varchar(255) DEFAULT NULL,
  `upload_kwitansi` varchar(255) DEFAULT NULL,
  `upload_efacture` varchar(255) DEFAULT NULL,
  `upload_bastp` varchar(255) DEFAULT NULL,
  `upload_other` varchar(255) DEFAULT NULL,
  `upload_sppkp` varchar(255) DEFAULT NULL,
  `upload_skt` varchar(255) DEFAULT NULL,
  `upload_sptjp` varchar(255) DEFAULT NULL,
  `upload_nodin` varchar(255) DEFAULT NULL,
  `upload_voucher` varchar(255) DEFAULT NULL,
  `upload_zdpp` varchar(255) DEFAULT NULL,
  `upload_ba_penyebaran` varchar(255) DEFAULT NULL,
  `upload_sp_pph` varchar(255) DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `tgl_input` datetime DEFAULT NULL,
  `nilai_tagihan` double DEFAULT NULL,
  `persen` double DEFAULT NULL,
  `ppn` double DEFAULT NULL,
  `denda` double DEFAULT NULL,
  `total_tagihan` double DEFAULT NULL,
  `total_anggaran` double DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `jenis` varchar(50) DEFAULT NULL,
  `jenis_tagihan` varchar(50) DEFAULT NULL,
  `jenis_pekerjaan` varchar(50) DEFAULT NULL,
  `jenis_pph` varchar(50) DEFAULT NULL,
  `persen_pph` double DEFAULT NULL,
  `pph` double DEFAULT NULL,
  `no_skko` varchar(50) DEFAULT NULL,
  `no_io` varchar(50) DEFAULT NULL,
  `no_spk` varchar(50) DEFAULT NULL,
  `no_faktur` varchar(50) DEFAULT NULL,
  `tgl_faktur` datetime DEFAULT NULL,
  `no_kwitansi` varchar(50) DEFAULT NULL,
  `tgl_kwitansi` datetime DEFAULT NULL,
  `no_sptjp` varchar(50) DEFAULT NULL,
  `tgl_sptjp` datetime DEFAULT NULL,
  `tgl_pengajuanvendor` datetime DEFAULT NULL,
  `tgl_appuser` datetime DEFAULT NULL,
  `tgl_appmanuser` datetime DEFAULT NULL,
  `tgl_appvpuser` datetime DEFAULT NULL,
  `tgl_appupsdmkeu` datetime DEFAULT NULL,
  `tgl_appupmanager` datetime DEFAULT NULL,
  `tgl_appanggaran` datetime DEFAULT NULL,
  `tgl_appmananggaran` datetime DEFAULT NULL,
  `tgl_appakutansi` datetime DEFAULT NULL,
  `tgl_appmanakutansi` datetime DEFAULT NULL,
  `tgl_appkeuangan` datetime DEFAULT NULL,
  `tgl_appmankeuangan` datetime DEFAULT NULL,
  `tgl_appvpkeuangan` datetime DEFAULT NULL,
  `tgl_bayar` datetime DEFAULT NULL,
  `post_anggaran` varchar(50) DEFAULT NULL,
  `user_create` varchar(255) DEFAULT NULL,
  `no_antrian` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id_invoice`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tagihan_sppd`
--

LOCK TABLES `tagihan_sppd` WRITE;
/*!40000 ALTER TABLE `tagihan_sppd` DISABLE KEYS */;
INSERT INTO `tagihan_sppd` VALUES ('2','dharmaku99@gmail.com',NULL,'123',NULL,'Pembayaran SPPD Organik dan Tugas Karya Kantor Pusat- Periode :02 2025-Pembayaran SPPD Organik dan Tugas Karya Kantor Pusat- No Po :-',NULL,NULL,'2025-03-02',NULL,'123344','Dharma','BCA','12344','KCP Ahmad Yani','Bandung','1233','upload_spk-.pdf',NULL,'upload_amandemen-.pdf',NULL,NULL,'upload_kwitansi-.pdf','upload_efacture-.pdf','upload_bastp-.pdf','upload_other-.pdf',NULL,NULL,'upload_sptjp-.pdf',NULL,NULL,'upload_zdpp-.pdf',NULL,NULL,'Testing',NULL,1000000,1,100000,0,1000000,8341846276,NULL,NULL,'RUTIN',NULL,'23',2,20,'09546/ANG.PJ/SDM/2025-24794','110149K00010','1233','1233','2025-03-04 00:00:00','123','2025-03-02 00:00:00','','2025-03-03 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('202503110001','baturabara@gmail.com',NULL,'PBH//2025/00002',NULL,'Sewa Mesin Fotocopy HP Pusat - Feb 2025- Periode :02 2025-Mesin Fotocopy- No Po :-',NULL,NULL,'2025-03-04',NULL,'12223344','Batubara','Mandiri','BMRIIDJA','KCP Bekasi Barat','Bekasi','1233','upload_spk-202503110001.pdf',NULL,NULL,NULL,NULL,'upload_kwitansi-202503110001.pdf','upload_efacture-202503110001.pdf','upload_bastp-202503110001.pdf',NULL,NULL,NULL,NULL,NULL,NULL,'upload_zdpp-202503110001.pdf',NULL,NULL,'test 3',NULL,1000000,12,110000,100000,1190000,13332686,NULL,NULL,'RUTIN',NULL,'PASAL 23',2,20000,'09785/ANG.PJ/SDM/2025-25323','110149K00010','0001.Amd/HKM.00.01/HP010201/2024','1233','2025-03-02 00:00:00','123','2025-03-04 00:00:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'8',NULL),('3','tera@gmail.com',NULL,'PBH//2025/00001',NULL,'Sewa Kendaraan Operasional HP Pusat - Jan 2025- Periode :01 2025-Sewa Kendaraan- No Po :049.PJ/HKM.00.01/DIR-HP/2024-',NULL,NULL,'2025-03-04',NULL,'56789','PT Tara Bosa','BNI','DINJE','KCP Ahmad Yani','Bandung','','upload_spk-.pdf',NULL,NULL,NULL,NULL,NULL,NULL,'upload_bastp-.pdf',NULL,NULL,NULL,NULL,NULL,NULL,'upload_zdpp-.pdf',NULL,NULL,'Testing',NULL,1000000,11,110000,100000,1190000,16543440,NULL,NULL,'RUTIN',NULL,'PASAL 23',2,20000,'09786/ANG.PJ/SDM/2025-25334','110149K00010','049.PJ/HKM.00.01/DIR-HP/2024','',NULL,'',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'8',NULL);
/*!40000 ALTER TABLE `tagihan_sppd` ENABLE KEYS */;
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
