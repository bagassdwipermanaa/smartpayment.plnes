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
-- Table structure for table `vendor_pembayaran`
--

DROP TABLE IF EXISTS `vendor_pembayaran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_pembayaran` (
  `id_vendor` varchar(25) NOT NULL,
  `email_vendor` varchar(75) DEFAULT NULL,
  `no_ktp_vendor` varchar(50) DEFAULT NULL,
  `upload_ktp` varchar(100) DEFAULT NULL,
  `nama_vendor` varchar(75) DEFAULT NULL,
  `alamat_vendor` varchar(150) DEFAULT NULL,
  `kontak_vendor` varchar(50) DEFAULT NULL,
  `pusatup` varchar(50) DEFAULT NULL,
  `bank_norek` varchar(25) DEFAULT NULL,
  `bank_noreknam` varchar(100) DEFAULT NULL,
  `bank_nama` varchar(100) DEFAULT NULL,
  `rtgs_code` varchar(50) DEFAULT NULL,
  `bank_cabang` varchar(100) DEFAULT NULL,
  `bank_kota` varchar(100) DEFAULT NULL,
  `upload_butab` varchar(100) DEFAULT NULL,
  `no_npwp_vendor` varchar(50) DEFAULT NULL,
  `upload_npwp` varchar(100) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `kategori` varchar(15) DEFAULT NULL,
  `verify` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_vendor`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_pembayaran`
--

LOCK TABLES `vendor_pembayaran` WRITE;
/*!40000 ALTER TABLE `vendor_pembayaran` DISABLE KEYS */;
INSERT INTO `vendor_pembayaran` VALUES ('20','sujatmokosilo1@gmail.com','3306130810750006','upload_ktp-20.pdf','SUJATMOKO','SILO RT 006/RW 001 KELURAHAN TEGALSARI KECAMATAN BRUNO','085228617666','2','1226998083','SUJATMOKO','PT BANK NEGARA INDONESIA 1946 (Persero) Tbk','009','SEMARANG','SEMARANG','upload_butab-20.pdf','41.867.078.2-531.000','upload_npwp-20.pdf','1','Perorangan','1'),('21','sewakantorup2.2@gmail.com','3174084605730006','','PUJI MANGESTI KUSUMA ASRI','JL. MINYAK MESRAN NO 10 RT 009/RW 003 KELURAHAN DUREN TIGA KECAMATAN PANCORAN','','2','0003877028','PUJI MANGESTI KUSUMA ASRI','PT BANK NEGARA INDONESIA 1946 (Persero) Tbk','009','SENAYAN','JAKARTA','','48.711.178.3-061.000','','1','Perorangan','1'),('23','elisabethromini33@gmail.com','3322066712680002','upload_ktp-23.pdf','ROMINI, S.Pd M.Pd','LOPAIT RT 008/RW 001 KELURAHAN LOPAIT KECAMATAN TUNTANG','081326564829','2','2033184681','ROMINI','PT. BANK PEMBANGUNAN DAERAH JAWA TENGAH','113','SALATIGA','SALATIGA','upload_butab-23.pdf','08.831.380.4-505.000','upload_npwp-23.pdf','1','Perorangan','1'),('24','rafandrapradana9@gmail.com','3308196408920001','upload_ktp-24.pdf','RISTA NUGRAHENI','KEMIRI RT 009/RW 003 KELURAHAN GLAGAHOMBO KECAMATAN TEGALREJO','085774374374','2','677601038103538','RISTA NUGRAHENI','PT.BANK RAKYAT INDONESIA (Persero) Tbk.','002','6776 BRI UNIT TEGALREJO','MAGELANG','upload_butab-24.pdf','13.913.483.7-524.000','upload_npwp-24.pdf','1','Perorangan','1'),('25','keuangan.klaten@gmail.com','3309041103830004','upload_ktp-25.pdf','WIDODO','TAMPIR BARU RT 005/RW 005 KELURAHAN MUSUK KECAMATAN MUSUK','082314275331','2','0105832168','WIDODO','PT BANK NEGARA INDONESIA 1946 (Persero) Tbk','009','SURAKARTA','SURAKARTA','upload_butab-25.pdf','26.225.593.8-572.000','upload_npwp-25.pdf','1','Perorangan','1'),('2508011546340001','kuswayaedwin@gmail.com','3207010610680002','upload_ktp-2508011546340001.jpg','EDWIN KUSWAYA','JL. R.E MARTADINATA RT 005 RW 003 MALEBER CIAMIS','0895392824471','1','404101009887530','EDWIN KUSWAYA','PT.BANK RAKYAT INDONESIA (Persero) Tbk.','','UNIT MALEBER','','upload_butab-2508011546340001.png','093978666442000','upload_npwp-2508011546340001.jpg','','Perorangan','1'),('2508041842320001','renosaputra041098@gmail.com','3304184107700121','upload_ktp-2508041842320001.jpeg','SULASIH','Sikumpul RT 3 RW 5 Kel. Sikumpul Kec. Kalibening ','085226613032','2','6617-01-012541-53-6','SULASIH','PT.BANK RAKYAT INDONESIA (Persero) Tbk.','002','6617 BRI UNIT KALIBENING','BANJARNEGARA','upload_butab-2508041842320001.jpeg','71.827.102.6-6-529.000','upload_npwp-2508041842320001.jpeg','1','Perorangan','1'),('2508042003350001','pratomorevange@gmail.com','3302172606480001','upload_ktp-2508042003350001.pdf','SIWAN','PERNASIDI RT 005/RW 005 KELURAHAN PERNASIDI KECAMATAN CILONGOK','0895416612070','2','3763-01-000095-53-7','SIWAN','PT.BANK RAKYAT INDONESIA (Persero) Tbk.','002','3763 UNIT PERNASIDI AJIBARANG','BANJARNEGARA','upload_butab-2508042003350001.pdf','88.140.260.6-521.000','upload_npwp-2508042003350001.pdf','1','Perorangan','1'),('2508150958170001','sumberjati044@gmail.com','3204320708730003','upload_ktp-2508150958170001.png','RIVAN KARSONA','Jalan Anggadireja No. 105 RT 005 RW 009 Baleendah Kab. Bandung','','0','1070819735','Bpk RIVAN KARSONA','PT BANK NEGARA INDONESIA 1946 (Persero) Tbk','','MAJALAYA','','upload_butab-2508150958170001.jpg','354839557445000','upload_npwp-2508150958170001.png','','Perorangan',''),('2508151504070001','sumberjati044@gmail.com','3204320708730003','upload_ktp-2508151504070001.png','RIVAN KARSONA','Jalan Anggadireja No. 105 RT 005 RW 009 Baleendah Kab. Bandung','','0','1070819735','Bpk RIVAN KARSONA','PT BANK NEGARA INDONESIA 1946 (Persero) Tbk','','MAJALAYA','','upload_butab-2508151504070001.jpg','354839557445000','upload_npwp-2508151504070001.png','','',''),('2508261345120001','itw.syah@gmail.com','3275021010820021','upload_ktp-2508261345120001.pdf','IRWANSYAH TEGUH WS','Perum Utopia Jl. Cilandak Tengah Raya','081334326417','2','135-00-0515453-7','IRWANSYAH TEGUH WS','PT. BANK MANDIRI (PERSERO)','008','KC SEMARANG PEMUDA','SEMARANG','upload_butab-2508261345120001.pdf','57.533.939.5-407.000','upload_npwp-2508261345120001.pdf','1','Perorangan','1'),('2508261352100001','herimansyur007@gmail.com','3372010507550002','upload_ktp-2508261352100001.pdf','HERI MANSYUR','Panularan RT 005 RW 006 Kel. Panularan, Laweyan','081329627020','0','138.00-0745318-1','ISTIQOMAH','PT. BANK MANDIRI (PERSERO)','008','KCP SOLO','SURAKARTA','upload_butab-2508261352100001.pdf','39.780.275.2-526.000','upload_npwp-2508261352100001.pdf','1','Perorangan','1'),('2508261355520001','menujuperubahan5857@gmail.com ','3311090809950002','upload_ktp-2508261355520001.pdf','DARMADI','PEPE RT 002/RW 005 Kel. Langenharjo Kec. Grogol','082265422100','2','6912-01-030905-53-0','DARMADI','PT.BANK RAKYAT INDONESIA (Persero) Tbk.','002','6912 UNIT MOJOLABAN KARANGANYAR','SUKOHARJO','upload_butab-2508261355520001.pdf','3311 0908 0995 0002','upload_npwp-2508261355520001.pdf','1','Perorangan','1'),('2508261404050001','titin.rahayu1290@gmail.com','3313092310810005','upload_ktp-2508261404050001.pdf','SETYO NUGROHO','Tegalasri RT 001/RW 008 Kel Bejen Kec. Karanganyar','085647023909','2','0149-01-094404-50-1','SETYO NUGROHO','PT.BANK RAKYAT INDONESIA (Persero) Tbk.','002','0149 Kanca Karanganyar','SUKOHARJO','upload_butab-2508261404050001.pdf','935564997528000','upload_npwp-2508261404050001.pdf','1','Perorangan','1'),('2508271444060001','alfidalilla123@gmail.com','3308090606640002','upload_ktp-2508271444060001.pdf','MUHYIDIN','Citran RT 002 RW 014 Kel. Paremono Kec. Mungkid','081328369988','2','5379413036698790','ARIZKI FIRMANSYAH','PT. BANK CENTRAL ASIA Tbk.','014','0','MAGELANG','upload_butab-2508271444060001.pdf','95.553.078.7-524.000','upload_npwp-2508271444060001.pdf','1','Perorangan','1'),('2509021931170001','hasan.plncorpu@gmail.com','3575011110830003','upload_ktp-2509021931170001.pdf','DJUBAIDILLAH HASAN','KOMP. Walikota JL. Bul Bul Blok D.3/11','081338018600','2','0339-01-000171-30-1','RECEIPT PT PLN PERSERO JASDI','PT.BANK RAKYAT INDONESIA (Persero) Tbk.','002','Kantor cabang Pasar Minggu','Jakarta','upload_butab-2509021931170001.pdf','01.00.629.3-051.000','upload_npwp-2509021931170001.pdf','1','Perusahaan','1'),('2509031414140001','herimansyur007@gmail.com','3372010507550002','upload_ktp-2509031414140001.pdf','HERI MANSYUR','Panularan RT 005 RW 006 Kel. Panularan, Laweyan','081329627020','2','138.00-0745318-1','ISTIQOMAH','PT. BANK MANDIRI (PERSERO)','008','SOLO','SURAKARTA','upload_butab-2509031414140001.pdf','39.780.275.2-526.000','upload_npwp-2509031414140001.pdf','1','Perorangan','1'),('2509031431380001','simonkatmo@gmail.com','327503191904740022','upload_ktp-2509031431380001.pdf','KATMO','Jogoprajan','085713103704','2','2-076-04443-3','KATMO','PT. BANK PEMBANGUNAN DAERAH JAWA TENGAH','113','SUKOHARJO','SUKOHARJO','upload_butab-2509031431380001.pdf','60.493.765.6-526.000','upload_npwp-2509031431380001.pdf','1','Perorangan','1'),('26','irfan11hendri@gmail.com','3302100701790002','upload_ktp-26.pdf','KHADIONO','PEKAJA RT 006/RW 001 KELURAHAN PEKAJA KECAMATAN KALIBAGOR','085640549338','2','683101007414530','KHADIONO','PT.BANK RAKYAT INDONESIA (Persero) Tbk.','002','6831 BRI UNIT KALIBAGOR','BANYUMAS','upload_butab-26.pdf','11.445.155.2-521.000','upload_npwp-26.pdf','1','Perorangan','1'),('3','dharmaku99@gmail.com','123','','Dharma Kusumah','Jl Golf Timur IV No 1 Arcamanik','081384292279','0','123344','Dharma','','12344','KCP Ahmad Yani','Bandung','','345','','1','Perorangan','1'),('4','tera@gmail.com','1234567','','PT Tara Bosa','Jl. Tabatoki No 19','08134567','0','56789','PT Tara Bosa','BNI','DINJE','KCP Ahmad Yani','Bandung',NULL,'789123','','1','Perorangan','1'),('5','baturabara@gmail.com','123456','','Batubara Sinulingga','Bekasi Barat No 2','081345675','0','12223344','Batubara','Mandiri','BMRIIDJA','KCP Bekasi Barat','Bekasi',NULL,'78909','','1','Perorangan','1'),('6','tiarakhoe@gmail.com','3172034103690010','','Tiara Christina Khoe','Jl. Gading 2 Blok I/31 RT04 RW06 Kelurahan Tugu Selatan, Kecamatan Koja, Jakarta Utara','081219333807','5','2272-2383-33','Tiara Christina Khoe','PT. BANK CENTRAL ASIA Tbk.','CENAIDJA','KCP Kelapa Gading','Jakarta','','58.158.433.3-045.000','','1','Perorangan','1'),('7','kadariatari7@gmail.com','3101020711670002','','Kadaria','Pulau Lancang, RT02 RW01, Kepulauan Seribu Selatan','081219333807','5','204.20.03291.4','Kadaria','PT. BANK PEMBANGUNAN DAERAH DKI JAKARTA','BDKIIDJ1','Pulau Pramuka','Pulau Pramuka','','70.383.064.6-044.000','','1','Perorangan','1'),('8','jakiyahherawati9@gmail.com','3173030806660008','','He Wen Ping','Jl. RE Martadinata Komplek Ruko Mahkota Ancol Blok C 26 RT 07 RW016, Pademangan Barat, Pademangan','081219333807','5','0833013618','HE WENPING','PT. BANK CENTRAL ASIA Tbk.','CENAIDJA','Jakarta','Jakarta','','','','1','Perorangan','1'),('9','ubaidillahchotib@gmail.com','3101024207730001','','Ubaidillah','Pulau Untung Jawa, RT03 RW 01 , Pulau Untung Jawa, Kepulaun Seribu','081219333807','5','312.20.00959.6','Ubaidillah','PT. BANK PEMBANGUNAN DAERAH DKI JAKARTA','BDKIIDJ1','Jakarta','Jakarta','','54.778.653.3-044.000','','1','Perusahaan','1');
/*!40000 ALTER TABLE `vendor_pembayaran` ENABLE KEYS */;
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
