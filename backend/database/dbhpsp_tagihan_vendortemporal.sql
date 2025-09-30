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
-- Table structure for table `tagihan_vendortemporal`
--

DROP TABLE IF EXISTS `tagihan_vendortemporal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tagihan_vendortemporal` (
  `id_invoice` varchar(12) NOT NULL DEFAULT '',
  `id_pengguna_invoice` varchar(75) DEFAULT NULL,
  `plan_dtl_id` varchar(25) DEFAULT NULL,
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
  `alamat_sewa` varchar(255) DEFAULT NULL,
  `kota_sewa` varchar(255) DEFAULT NULL,
  `provinsi_sewa` varchar(255) DEFAULT NULL,
  `foto_sewa` varchar(255) DEFAULT NULL,
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
-- Dumping data for table `tagihan_vendortemporal`
--

LOCK TABLES `tagihan_vendortemporal` WRITE;
/*!40000 ALTER TABLE `tagihan_vendortemporal` DISABLE KEYS */;
INSERT INTO `tagihan_vendortemporal` VALUES ('202503110001','baturabara@gmail.com',NULL,NULL,'PBH/2025/00002',NULL,'Sewa Mesin Fotocopy HP Pusat - Feb 2025- Periode :02 2025-Mesin Fotocopy- No Po :-',NULL,NULL,'2025-03-04',NULL,'12223344','Batubara','Mandiri','BMRIIDJA','KCP Bekasi Barat','Bekasi','1233',NULL,NULL,NULL,NULL,'upload_spk-202503110001.pdf',NULL,NULL,NULL,NULL,'upload_kwitansi-202503110001.pdf','upload_efacture-202503110001.pdf','upload_bastp-202503110001.pdf',NULL,NULL,NULL,NULL,NULL,NULL,'upload_zdpp-202503110001.pdf',NULL,NULL,'test 3',NULL,1000000,12,110000,100000,1190000,13332686,'12',NULL,'RUTIN',NULL,'PASAL 23',2,20000,'09785/ANG.PJ/SDM/2025-25323','110149K00010','0001.Amd/HKM.00.01/HP010201/2024','1233','2025-03-02 00:00:00','123','2025-03-04 00:00:00','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'8',NULL),('202503130001','tiarakhoe@gmail.com',NULL,NULL,'PBH/UP5/2025/00003',NULL,'Pembayaran Sewa Kantor PoskoYantek Melayu UL Teluk Naga  Ny.Tiara Christina Khoe (01.06.25 - 31.05.27)',NULL,NULL,'2025-05-30',NULL,'2272-2383-33','Tiara Christina Khoe','PT. BANK CENTRAL ASIA Tbk.','CENAIDJA','KCP Kelapa Gading','Jakarta','1900001960',NULL,NULL,NULL,NULL,'upload_spk-202503130001.pdf',NULL,'upload_amandemen-202503130001.pdf',NULL,NULL,'upload_kwitansi-202503130001.pdf',NULL,'upload_bastp-202503130001.pdf','upload_other-202503130001.pdf',NULL,NULL,'upload_sptjp-202503130001.pdf',NULL,NULL,'upload_zdpp-202503130001.pdf',NULL,NULL,'',NULL,266700000,NULL,NULL,NULL,240030000,266700000,'212',NULL,'RUTIN',NULL,'PASAL 4 Ayat 2',10,26670000,'09873/ANG.PJ/REG5/2025-25637','110149K01040','0033.PJ/DAN.01.01/HP060000/2025','',NULL,'0125.KWT/DAN.01.01/HP060000/2025','2025-02-28 00:00:00','002.00013/SPTJP/2025','2025-03-03 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'254',NULL),('202503160001','kadariatari7@gmail.com','25457',NULL,'PBH/2025/00004',NULL,'PERMOHONANPEMBAYARAN;OP;PTOYIKAENERGIIND;INVOEIJKT25-02-0761 (SMARTPAYMENT)- Periode :02 2025-SWKEND- No Po :0149/POS-HP PUSAT/2020-',NULL,NULL,'2025-03-04',NULL,'204.20.03291.4','Kadaria','PT. BANK PEMBANGUNAN DAERAH DKI JAKARTA','BDKIIDJ1','Pulau Pramuka','Pulau Pramuka','1233',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'test 3',NULL,1000000,12,110000,100000,1192500,3193402,'2',NULL,'RUTIN',NULL,'PASAL 23',1.75,17500,'09802/ANG.PJ/OP/2025-25457','110190089000','0145.PJ/HKM.00.01/DIR-HP/2020','1233','2025-03-03 00:00:00','123','2025-03-03 00:00:00','1233','2025-03-03 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'8',NULL),('202503180001','baturabara@gmail.com','25576',NULL,'PBH//2025/00001',NULL,'Cash Card Bidang Umum Bulan Maret 2025- Periode :03 2025-Alat dan Keperluan Kantor- No Po :-',NULL,NULL,'2025-03-04',NULL,'12223344','Batubara','Mandiri','BMRIIDJA','KCP Bekasi Barat','Bandung','12334','Jl Golf Timur IV No 1 Arcamanik','Bandung','Jawa Barat','foto_sewa-202503180001.pdf','upload_spk-202503180001.pdf',NULL,'upload_amandemen-202503180001.pdf',NULL,NULL,'upload_kwitansi-202503180001.pdf','upload_efacture-202503180001.pdf','upload_bastp-202503180001.pdf','upload_other-202503180001.pdf',NULL,NULL,'upload_sptjp-202503180001.pdf',NULL,NULL,'upload_zdpp-202503180001.pdf',NULL,NULL,'Testing 4',NULL,1000000,12,110000,0,1092500,28000000,'2',NULL,'RUTIN',NULL,'PASAL 23',1.75,17500,'09841/ANG.PJ/SDM/2025-25576','110149K00010','12333','12334','2025-03-04 00:00:00','12334','2025-03-04 00:00:00','123345','2025-03-04 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'8',NULL),('202503190001','ubaidillahchotib@gmail.com','25643',NULL,'PBH/UP5/2025/00002',NULL,'Pembayaran Sewa Kantor Posko Yantek P.Untung jawa UL.Kep.seribu Ny.Ubaidillah Rp 57.777.000 (INV 0096)- Periode :03 2025-Biaya Overhead- No Po :0020.PJ/DAN.01.01/HP060000/2025.JK-',NULL,NULL,'2025-03-28',NULL,'312.20.00959.6','Ubaidillah','PT. BANK PEMBANGUNAN DAERAH DKI JAKARTA','BDKIIDJ1','Jakarta','Jakarta','1900001959','Jl. Pulau Untung Jawa RT 3 RW 01, Kecamatan Kepuakaun Seribu, Kabupaten Kepulauan Seribu','Jakarta','Kepualuan Seribu','foto_sewa-202503190001.jpg','upload_spk-202503190001.pdf',NULL,'upload_amandemen-202503190001.pdf',NULL,NULL,'upload_kwitansi-202503190001.pdf',NULL,'upload_bastp-202503190001.pdf','upload_other-202503190001.jpg',NULL,NULL,'upload_sptjp-202503190001.pdf',NULL,NULL,'upload_zdpp-202503190001.pdf',NULL,NULL,'',NULL,57777000,NULL,NULL,NULL,51999300,57777000,'212',NULL,'RUTIN',NULL,'PASAL 4 Ayat 2',10,5777700,'09875/ANG.PJ/REG5/2025-25643','110149K01040','0020.PJ/DAN.01.01/HP060000/2025','-','2025-03-19 00:00:00','0096.KWT/DAN.02.01/HP060000/2025',NULL,'002.0008/SPTJP/2025','2025-02-21 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'254',NULL),('202503190002','jakiyahherawati9@gmail.com','25630',NULL,'PBH/UP5/2025/00003',NULL,'Pembayaran Sewa Kantor Posko Yantek Sepatan ULTeluk naga Tn. He Wen Ping Rp 219.110.000. (INV 0127)- Periode :03 2025-Biaya Overhead- No Po :0034.PJ/DAN.01.01/HP060000/2024.JK-',NULL,NULL,'2025-06-27',NULL,'0833013618','HE WENPING','PT. BANK CENTRAL ASIA Tbk.','CENAIDJA','Jakarta','Jakarta','1900001961','Jl. Mauk KM. 7, Blok A No. 9, Ruko Sepatan Mas, RT05 Rw02, Kabupaten Tangerang, Provinsi Banten','Tangerang','Banten','foto_sewa-202503190002.jpeg','upload_spk-202503190002.pdf',NULL,'upload_amandemen-202503190002.pdf',NULL,NULL,'upload_kwitansi-202503190002.pdf',NULL,'upload_bastp-202503190002.pdf','upload_other-202503190002.jpeg',NULL,NULL,'upload_sptjp-202503190002.pdf',NULL,NULL,'upload_zdpp-202503190002.pdf',NULL,NULL,'',NULL,219199000,NULL,NULL,NULL,197279100,219110000,'212',NULL,'RUTIN',NULL,'PASAL 4 Ayat 2',10,21919900,'09868/ANG.PJ/REG5/2025-25630','110149K01040','0034.PJ/DAN.01.01/HP060000/2024','-','2025-03-19 00:00:00','0127.KWT/DAN.01.01/HP060000/2025','2025-02-28 00:00:00','002.00014/SPTJP/2025','2025-03-03 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'254',NULL),('202503200001','tera@gmail.com','24794',NULL,'PBH/REN/2025/00021',NULL,'Pembayaran SPPD Organik dan Tugas Karya Kantor Pusat- Periode :02 2025-Pembayaran SPPD Organik dan Tugas Karya Kantor Pusat- No Po :-',NULL,NULL,'2025-03-05',NULL,'56789','PT Tara Bosa','BNI','DINJE','KCP Ahmad Yani','Bandung','1233','Jl Golf Timur IV No 1 Arcamanik','Kota Bandung','Jawa Barat','foto_sewa-202503200001.pdf','upload_spk-202503200001.pdf',NULL,NULL,NULL,NULL,'upload_kwitansi-202503200001.pdf','upload_efacture-202503200001.pdf','upload_bastp-202503200001.pdf','upload_other-202503200001.pdf',NULL,NULL,'upload_sptjp-202503200001.pdf',NULL,NULL,'upload_zdpp-202503200001.pdf',NULL,NULL,'Testing 5',NULL,3000000,11,330000,0,3270000,1028698880,'2',NULL,'RUTIN',NULL,'PASAL 23',2,60000,'09546/ANG.PJ/SDM/2025-24794','110149K00010','123','1233','2025-03-04 00:00:00','12334','2025-03-04 00:00:00','123345','2025-03-12 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'8',NULL),('202503200002','dharmaku99@gmail.com','24578',NULL,'PBH/REN/2025/00022',NULL,'Permohonan Biop Rutin Non Captive Niaga Kantor Pusat- Periode :02 2025-Rutin- No Po :-',NULL,NULL,'2025-03-04',NULL,'123344','Dharma','','12344','KCP Ahmad Yani','Bandung','','Jl Golf Timur IV No 1 Arcamanik','Bandung','Jawa Barat',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'TEsting 6',NULL,2000000,11,220000,NULL,2180000,2310621327,'2',NULL,'RUTIN',NULL,'PASAL 23',2,40000,'09399/ANG.PJ/NIAGA/2025-24578','110149K00010','','',NULL,'',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'8',NULL),('202506130004','geanovaar08@gmail.com','29371',NULL,'PBH/UP2/2025/00006',NULL,'PERMOHONAN ANGGARAN;CAPTIVE-SUBKON-PT ASKANA JAYA SANTOSO;RP.41.919.150;UP2- Periode :01 2025-PEMELIHARAAN TEBANG POHON ULP SUKOHARJO DI UNIT LAYANAN SUKOHARJO- No Po :0011.AJS/PO UP2 JTY/2025-',NULL,NULL,'2025-06-03',NULL,'372501032538535','ATUT NURKHASAH','PT.BANK RAKYAT INDONESIA (Persero) Tbk.','002','REMBANG PURBALINGGA','Bandung','1234','Jl Golf Timur IV No 1 Arcamanik','Bandung','Jawa Barat','foto_sewa-202506130004.pdf','upload_spk-202506130004.pdf',NULL,'upload_amandemen-202506130004.pdf',NULL,NULL,'upload_kwitansi-202506130004.pdf','upload_efacture-202506130004.pdf','upload_bastp-202506130004.pdf','upload_other-202506130004.pdf',NULL,NULL,'upload_sptjp-202506130004.pdf',NULL,NULL,'upload_zdpp-202506130004.pdf',NULL,NULL,'Simulasi UP2 - 3',NULL,10000000,11,1100000,NULL,10100000,41919150,'212',NULL,'RUTIN',NULL,'PASAL 4 Ayat 2',10,1000000,'11710/ANG.PJ/REG2/2025-29371','110200021000','0003.PJ/HKM.02.01/HPUP2/2025','1233','2025-06-04 00:00:00','12334','2025-06-09 00:00:00','123346','2025-06-04 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'224',NULL);
/*!40000 ALTER TABLE `tagihan_vendortemporal` ENABLE KEYS */;
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
