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

/*Table structure for table `ngo_droplocations_table` */

DROP TABLE IF EXISTS `ngo_droplocations_table`;

CREATE TABLE `ngo_droplocations_table` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `addressid` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `geolocation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `ngo_droplocations_table` */

insert  into `ngo_droplocations_table`(`sno`,`addressid`,`address`,`geolocation`) values (1,'1','Jayshree Periwal International School, Mahapura - SEZ Road, Ajmer Road, Jaipur 302026','26.8260993,75.6639455'),(2,'2','Jayshree Periwal High School, Adjoining Stadium, Ajmer Road, Chitrakoot, Vaishali Nagar,\r\n\r\nJaipur 302021','26.8992786,75.7335221'),(3,'3','Jayshree Periwal Pre-school, E4/47 Mangal Marg Chitrakoot, Vaishali Nagar, Jaipur 302021','26.8992786,75.7335221'),(4,'4','Jayshree Periwal Pre-school, 2/19 Malviya Nagar, near Balaji Turn, Jagatpura Under Bypass\r\n\r\n302017','26.8504825,75.8001958');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
