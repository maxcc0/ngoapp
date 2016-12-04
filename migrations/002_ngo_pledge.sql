/*
SQLyog Ultimate v11.28 (64 bit)
MySQL - 5.6.30-cll-lve : Database - domutthiapp
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`domutthiapp` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `domutthiapp`;

/*Table structure for table `ngo_pledge_table` */

DROP TABLE IF EXISTS `ngo_pledge_table`;

CREATE TABLE `ngo_pledge_table` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `contact_alternate` varchar(255) DEFAULT NULL,
  `donation_type` varchar(255) DEFAULT NULL,
  `donor_location` varchar(255) DEFAULT NULL,
  `geoLocation` varchar(4000) DEFAULT NULL,
  `created_by` varchar(4000) DEFAULT NULL,
  `assigned_to` varchar(4000) DEFAULT NULL,
  `assigned_on_date` varchar(4000) DEFAULT NULL,
  `picked_by` varchar(4000) DEFAULT NULL,
  `picked_on_date` varchar(4000) DEFAULT NULL,
  `closed_by` varchar(4000) DEFAULT NULL,
  `closed_on_date` varchar(4000) DEFAULT NULL,
  `created_on_date` varchar(4000) DEFAULT NULL,
  `UID` varchar(4000) DEFAULT NULL,
  `donation_status` varchar(4000) DEFAULT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM AUTO_INCREMENT=221 DEFAULT CHARSET=latin1;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
