-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.11.6-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- project 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `project` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `project`;

-- 테이블 project.diary 구조 내보내기
CREATE TABLE IF NOT EXISTS `diary` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `text` varchar(1000) DEFAULT NULL,
  `old_user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoshn1htncl6b50n39pa5su9sd` (`old_user_id`),
  CONSTRAINT `FKoshn1htncl6b50n39pa5su9sd` FOREIGN KEY (`old_user_id`) REFERENCES `old_user_info` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.diary:~0 rows (대략적) 내보내기

-- 테이블 project.family_relation 구조 내보내기
CREATE TABLE IF NOT EXISTS `family_relation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `familyuser_id` bigint(20) DEFAULT NULL,
  `olduser_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5ot5ryq9whdw22clhafkv3swu` (`familyuser_id`),
  KEY `FKqa6niyu5rawle4u0tcj1ynys1` (`olduser_id`),
  CONSTRAINT `FK5ot5ryq9whdw22clhafkv3swu` FOREIGN KEY (`familyuser_id`) REFERENCES `family_user_info` (`id`),
  CONSTRAINT `FKqa6niyu5rawle4u0tcj1ynys1` FOREIGN KEY (`olduser_id`) REFERENCES `old_user_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.family_relation:~0 rows (대략적) 내보내기
INSERT INTO `family_relation` (`id`, `familyuser_id`, `olduser_id`) VALUES
	(1, 3, 1);

-- 테이블 project.family_user_info 구조 내보내기
CREATE TABLE IF NOT EXISTS `family_user_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `birth` date DEFAULT NULL,
  `lunar_solar` enum('LUNAR','SOLAR') DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_sfx8mmb5dj2jebcjwwke5cn6j` (`user_id`),
  UNIQUE KEY `UK_r1wvsvoloealq71q9516ptcmx` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.family_user_info:~1 rows (대략적) 내보내기
INSERT INTO `family_user_info` (`id`, `birth`, `lunar_solar`, `password`, `user_id`, `username`) VALUES
	(1, '2000-01-01', 'SOLAR', '$2a$10$FnVXCwMkBQNU.4D4wyRaqO0HaAIRuOHhacqDk6cyrkoFxPTh9/rYi', 'testfamily', '홍길동'),
	(3, '2000-01-01', 'SOLAR', '$2a$10$qmufUQSKdwU1Y2ICfx7XWuVSDsnTwPilXx5r2xraqhxHwkOrlGuz6', 'testfamily2', '홍박사');

-- 테이블 project.medication 구조 내보내기
CREATE TABLE IF NOT EXISTS `medication` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `medication_time` time(6) DEFAULT NULL,
  `medicine` varchar(255) DEFAULT NULL,
  `old_user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgbfhbv1ffv63dtpptitir38bf` (`old_user_id`),
  CONSTRAINT `FKgbfhbv1ffv63dtpptitir38bf` FOREIGN KEY (`old_user_id`) REFERENCES `old_user_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.medication:~2 rows (대략적) 내보내기
INSERT INTO `medication` (`id`, `medication_time`, `medicine`, `old_user_id`) VALUES
	(1, '10:00:00.000000', '비타민C', 1),
	(2, '20:00:00.000000', '오메가3', 1);

-- 테이블 project.old_user_info 구조 내보내기
CREATE TABLE IF NOT EXISTS `old_user_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `birth` date DEFAULT NULL,
  `gender` enum('MALE','FEMALE') NOT NULL,
  `lunar_solar` enum('LUNAR','SOLAR') DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_qxcuywmecge7xjk1l8ujma4kh` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.old_user_info:~0 rows (대략적) 내보내기
INSERT INTO `old_user_info` (`id`, `birth`, `gender`, `lunar_solar`, `user_id`, `username`) VALUES
	(1, '1930-01-01', 'FEMALE', 'LUNAR', 's7kvo9t2', '김점순');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
