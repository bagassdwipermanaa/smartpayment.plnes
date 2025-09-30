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
-- Table structure for table `kalenderlibur`
--

DROP TABLE IF EXISTS `kalenderlibur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kalenderlibur` (
  `id_tgl` int(11) NOT NULL AUTO_INCREMENT,
  `tgl_libur` date DEFAULT NULL,
  `keterangan` varchar(65) DEFAULT NULL,
  PRIMARY KEY (`id_tgl`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kalenderlibur`
--

LOCK TABLES `kalenderlibur` WRITE;
/*!40000 ALTER TABLE `kalenderlibur` DISABLE KEYS */;
INSERT INTO `kalenderlibur` VALUES (1,'2024-11-02','Sabtu'),(2,'2024-11-03','Minggu'),(3,'2024-11-09','Sabtu'),(4,'2024-11-10','Minggu'),(5,'2024-11-16','Sabtu'),(6,'2024-11-17','Minggu'),(7,'2024-11-23','Sabtu'),(8,'2024-11-24','Minggu'),(9,'2024-11-30','Sabtu'),(10,'2024-12-01','Minggu'),(11,'2024-12-07','Sabtu'),(12,'2024-12-08','Minggu'),(13,'2024-12-14','Sabtu'),(14,'2024-12-15','Minggu'),(15,'2024-12-21','Sabtu'),(16,'2024-12-22','Minggu'),(17,'2024-12-25','Hari Raya Natal '),(18,'2024-12-26','Cuti Bersama Hari Raya Natal'),(19,'2024-12-28','Sabtu'),(20,'2024-12-29','Minggu'),(21,'2025-01-01','Hari Nasional Tahun Baru'),(22,'2025-01-04','Sabtu'),(23,'2025-01-05','Minggu'),(24,'2025-01-11','Sabtu'),(25,'2025-01-12','Minggu'),(26,'2025-01-18','Sabtu'),(27,'2025-01-19','Minggu'),(28,'2025-01-25','Sabtu'),(29,'2025-01-26','Minggu'),(30,'2025-01-27','Isra Mikraj'),(31,'2025-01-28','Tahun Baru Imlek 2576 Kongzili'),(56,'2025-01-29','Tahun Baru Imlek 2576 Kongzili'),(57,'2025-03-28','Hari Suci Nyepi'),(58,'2025-03-29','Hari Suci Nyepi'),(59,'2025-03-31','Idul Fitri 1446H'),(60,'2025-04-01','Idul Fitri 1446H'),(61,'2025-04-02','Idul Fitri 1446H'),(62,'2025-04-03','Idul Fitri 1446H'),(63,'2025-04-04','Idul Fitri 1446H'),(64,'2025-04-07','Idul Fitri 1446H'),(65,'2025-04-18','Wafat Yesus Kristus'),(66,'2025-04-20','Kebangkitan Yesus Kristus (Paskah)'),(67,'2025-05-01','Hari Buruh Internasional'),(68,'2025-05-12','Hari Raya Waisak'),(69,'2025-05-13','Hari Raya Waisak'),(70,'2025-05-29','Kenaikan Yesus Kristus'),(71,'2025-05-30','Kenaikan Yesus Kristus'),(72,'2025-06-01','Hari Lahir Pancasila'),(73,'2025-06-06','Idul Adha 1446H'),(74,'2025-06-09','Idul Adha 1446H'),(75,'2025-06-27','1 Muharram Tahun Baru Islam 1447H'),(76,'2025-08-17','Proklamasi Kemerdekaan'),(77,'2025-09-05','Maulid Nabi Muhammad SAW'),(78,'2025-12-25','Kelahiran Yesus Kristus'),(79,'2025-12-26','Kelahiran Yesus Kristus'),(80,'2024-11-27','Libur Nasional Pilkada'),(82,'2025-05-31','Sabtu'),(83,'2025-06-01','Minggu'),(84,'2025-06-15','Minggu'),(85,'2025-06-14','Sabtu'),(86,'2025-06-07','Sabtu'),(87,'2025-06-08','Minggu'),(88,'2025-06-21','Sabtu'),(89,'2025-06-22','Minggu'),(90,'2025-06-28','Sabtu'),(91,'2025-06-29','Minggu'),(92,'2025-07-05','Sabtu'),(93,'2025-07-06','Minggu'),(94,'2025-07-12','Sabtu'),(95,'2025-07-13','Minggu'),(96,'2025-07-19','Sabtu'),(97,'2025-07-20','Minggu'),(98,'2025-07-26','Sabtu'),(99,'2025-07-27','Minggu'),(100,'2025-08-02','Sabtu'),(101,'2025-08-03','Minggu'),(102,'2025-08-09','Sabtu'),(103,'2025-08-10','Minggu'),(104,'2025-08-16','Sabtu'),(105,'2025-08-17','Minggu (Hari Kemerdekaan Republik Indonesia)'),(106,'2025-08-23','Sabtu'),(107,'2025-08-24','Minggu'),(108,'2025-08-30','Sabtu'),(109,'2025-08-31','Minggu'),(110,'2025-09-06','Sabtu'),(111,'2025-09-07','Minggu'),(112,'2025-09-13','Sabtu'),(113,'2025-09-14','Minggu'),(114,'2025-09-20','Sabtu'),(115,'2025-09-21','Minggu'),(116,'2025-09-27','Sabtu'),(117,'2025-09-28','Minggu'),(119,'2025-10-04','Sabtu'),(120,'2025-10-05','Minggu'),(121,'2025-10-11','Sabtu'),(122,'2025-10-12','Minggu'),(123,'2025-10-18','Sabtu'),(124,'2025-10-19','Minggu'),(125,'2025-10-25','Sabtu'),(126,'2025-10-26','Minggu'),(127,'2025-11-01','Sabtu'),(128,'2025-11-02','Minggu'),(129,'2025-11-08','Sabtu'),(130,'2025-11-09','Minggu'),(131,'2025-11-15','Sabtu'),(132,'2025-11-16','Minggu'),(133,'2025-11-22','Sabtu'),(134,'2025-11-23','Minggu'),(135,'2025-11-29','Sabtu'),(136,'2025-11-30','Minggu'),(137,'2025-12-06','Sabtu'),(138,'2025-12-07','Minggu'),(139,'2025-12-13','Sabtu'),(140,'2025-12-14','Minggu'),(141,'2025-12-20','Sabtu'),(142,'2025-12-21','Minggu'),(143,'2025-12-25','Hari Raya Natal'),(144,'2025-12-26','Cuti Bersama Hari Raya Natal'),(145,'2025-12-27','Sabtu'),(146,'2025-12-28','Minggu');
/*!40000 ALTER TABLE `kalenderlibur` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-30 16:11:04
