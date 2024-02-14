-- --------------------------------------------------------
-- 호스트:                          3.38.153.237
-- 서버 버전:                        11.2.2-MariaDB-1:11.2.2+maria~ubu2204 - mariadb.org binary distribution
-- 서버 OS:                        debian-linux-gnu
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
  `date` datetime(6) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `old_user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoshn1htncl6b50n39pa5su9sd` (`old_user_id`),
  CONSTRAINT `FKoshn1htncl6b50n39pa5su9sd` FOREIGN KEY (`old_user_id`) REFERENCES `old_user_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.diary:~12 rows (대략적) 내보내기
INSERT INTO `diary` (`id`, `date`, `summary`, `text`, `old_user_id`) VALUES
	(1, '2024-02-08 01:32:11.715290', '오늘의 일기 요약', '오늘은 날씨가 좋아서 산책을 다녀왔다.', 1),
	(2, '2024-02-12 00:00:00.000000', '- 어제 할머니와 함께 공원에 산책을 하고 나무 그늘에서 휴식을 취했다.\n- 할머니는 아침에 머그잔에 커피를 마셨고, 오후에는 마트에서 채소를 사러 나갔다.\n- 할머니를 따라 노래를 부르면서 행복한 시간을 보냈어요.', '', 1),
	(3, '2024-02-12 00:00:00.000000', '- 할머니가 오늘 일기를 쓰고 있었음\n- 할머니에게 오늘 있었던 일에 대해 물었음\n- 대화는 자연스럽게 이어졌음', '', 1),
	(4, '2024-02-12 00:00:00.000000', '- 할머니는 오늘 일기를 썼는지 한 번 물어보았다.\n- 할머니가 사는 일상에 관심을 보이며 대화를 이끌었다.\n- 할머니와의 짧은 대화를 통해 서로의 소소한 이야기를 공유했다.', '', 1),
	(5, '2024-02-12 00:00:00.000000', '- 손주가 경로당에서 난타를 배워서 즐거웠다.\n- 손주는 난타를 연습하면서 다른 친구들과 함께하는 게 더 즐거웠다.\n- 손주와 할머니는 함께 활동하면 더 즐거운 경험이 될 것을 이야기했다.', '오늘은 경로당에 가서 낙타를 배웠어 진짜 재밌었어 ', 1),
	(6, '2024-02-13 00:00:00.000000', '- 할머니가 경로당에 가는 도중 낙타를 타고 간 경험이 즐거웠다고 한다.\n- 그런데 양파를 타고 다니는 모습이 영감처럼 다가왔던 것 같다.\n- 만화를 많이 보는 것을 즐기는 할머니는 대화를 계속하기 보다는 만화를 보는 것을 더 좋아한다.', '오늘은 경로당에 가는데 말이야 거기도 낙타를 되었어 진짜 재밌었어 ', 1),
	(7, '2024-02-13 00:00:00.000000', '- 할머니는 청년희망적금 만기가 지나 문제를 겪고 있음\n- 할머니의 은행 접속에 문제가 생겨 찬성 통화가 안 되는 상황\n- 할머니를 도와서 은행 문제를 해결하고 싶다는 손주의 마음씨', '아빠 ', 1),
	(8, '2024-02-13 00:00:00.000000', '- 할머니는 오랜만에 오랜 친구를 만나서 행복한 시간을 보냈다.\n- 오래된 동네 친구와 함께 옛 이야기를 나누는 것을 즐겼다.\n- 할머니는 옛 추억을 떠올리며 친구들과의 소중한 만남을 크게 소중히 여긴다.', '나는 지금 너가 한번 말을 한 것 좀 길게 좀 한번 말해 볼래 최대한 길게 ', 1),
	(9, '2024-02-13 00:00:00.000000', '- 어제 수학 시험은 잘 봤고 영어 시험도 노력한 만큼 잘 봤다.\n- 방학에는 해변으로 여행가서 해수욕하고 해산물 먹으면서 행복한 시간 보내고 싶다.\n- 할머니와 함께 여행 계획을 세워보고 여행 좋아하시나 물어봤다.', '글쎄 난 지금 바로 말을 하게 쓸 거고 네가 한번 최대한 길게 이야기를 한번 해 봐 ', 1),
	(10, '2024-02-13 00:00:00.000000', '- 할머니는 오늘 이웃 할아버지를 만나서 오랜만에 얘기를 나눴다.\n- 새로 만든 꽃밭이 잘 자라고 있어서 기뻤던 것 같아요.\n- 저에게 맛있는 과자를 사준 후 아이들과 함께 즐거운 시간을 보냈다.', '', 1),
	(11, '2024-02-13 00:00:00.000000', '- 할머니는 이웃 할머니와 산책하면서 즐거운 대화를 나눴다.\n- 할머니는 요즘 집에서 티비를 많이 보시는 것 같다.\n- 할머니의 취향에 따라 어떤 프로그램을 좋아하시는지 물어봤다.', '오늘은 공원에 가서 산책을 하다가 옆집 포승 할머니를 만나서 그래서 열심히 대화를 나눠지 참 재미있었어 ', 1),
	(12, '2024-02-13 00:00:00.000000', '- 할머니가 공원에서 꽃송이 할머니를 만나 다양한 이야기를 나눴다.\n- 꽃송이 할머니는 강아지가 벌써 12살이 된다며 이야기를 했다.\n- 할머니는 강아지와 함께 나들이도 자주 다니신다는 이야기를 나누었다.', '오늘은 공원에 갔는데 꽃송이 할머니를 만났어 그래서 이런저런 얘기를 안 오지 ', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.family_relation:~28 rows (대략적) 내보내기
INSERT INTO `family_relation` (`id`, `familyuser_id`, `olduser_id`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 4, 1),
	(4, 4, 2),
	(5, 5, 4),
	(6, 8, 4),
	(7, 8, 5),
	(8, 9, 5),
	(9, 9, 6),
	(19, 2, 10),
	(27, 3, 5),
	(29, 3, 10),
	(30, 3, 1),
	(31, 3, 6),
	(32, 3, 7),
	(33, 3, 8),
	(34, 12, 11),
	(35, 12, 12),
	(36, 2, 11),
	(37, 2, 1),
	(38, 13, 1),
	(39, 14, 1),
	(40, 15, 1),
	(41, 16, 1),
	(42, 16, 7),
	(43, 17, 7),
	(44, 18, 8),
	(45, 11, 1);

-- 테이블 project.family_user_info 구조 내보내기
CREATE TABLE IF NOT EXISTS `family_user_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `birth` date DEFAULT NULL,
  `last_visited_id` varchar(255) DEFAULT NULL,
  `lunar_solar` enum('LUNAR','SOLAR') DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `user_type` enum('FAMILY','OLD') DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_sfx8mmb5dj2jebcjwwke5cn6j` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.family_user_info:~16 rows (대략적) 내보내기
INSERT INTO `family_user_info` (`id`, `birth`, `last_visited_id`, `lunar_solar`, `password`, `user_id`, `user_type`, `username`) VALUES
	(1, '2000-01-01', 'kyo5bvhw', 'SOLAR', '$2a$10$RllG1XRL01hnCpd..pyBi.PBt32BM0JyNZsf8LSUct9iRoos1AXay', 'testfamily', 'FAMILY', '홍길동'),
	(2, '2004-01-01', 'kyo5bvhw', 'SOLAR', '$2a$10$y96T0mHfgG2/0pJL8KZbaOVo6he4igy796Jil02S3mjxctWjOixH.', '11', 'FAMILY', '엄준식'),
	(3, '2023-12-08', 'kyo5bvhw', 'SOLAR', '$2a$10$rvWOofPfpqQaK2/ryR9FveXNbXlf3Q1XRsoUoBFiF.U5BK.kr38LW', '22', 'FAMILY', '22'),
	(4, '2001-01-01', 'kyo5bvhw', 'SOLAR', '$2a$10$CLTgAIBFRfFMcMNriijziuP57B07sCwBQUSBuyav7kJFGJ4poDAA2', 'test', 'FAMILY', '김싸피'),
	(5, '2000-01-01', 'vauvtkiz', 'SOLAR', '$2a$10$39xyTvngbNU6qINlUfXjT.1pGOBCB8TIRWxOkcwbBOO/xawOczzia', 'testfamily4', 'FAMILY', '홍길동'),
	(8, '2024-01-02', NULL, 'SOLAR', '$2a$10$vJUpCY/yclzTHoOP67aOFeNgp9G5nEPsthaVuuhip/iCRLC9iGdku', 'testfamily2', 'FAMILY', '새이름'),
	(9, '2000-05-30', NULL, 'SOLAR', '$2a$10$5MwKbfUbKQYWU4pple/.R.C9DSx8SuA3owJuny7L4O77abZbpp4Ta', 'testfamily3', 'FAMILY', '홍합'),
	(10, '2023-06-13', 'plak5u5z', 'SOLAR', '$2a$10$y32ux1PN1WpSQgJwht7Mier9OODdI0JV0JaOtQyhP17w/lAkwoaSu', 'hi', 'FAMILY', '고광현'),
	(11, '1970-02-10', 'kyo5bvhw', 'SOLAR', '$2a$10$eVtE3JL.Nedye4kXZLEU2ectkb4u3Ggy9a3loyQoK3IbM3.ACspmq', '33', 'FAMILY', '33'),
	(12, '2023-08-10', 'a9iswjw5', 'SOLAR', '$2a$10$ECrQPy7aPR7.YEBXUD4sDOaO22MfmFCc6Vi1zkRG68yXkWV.4Cvr6', '44', 'FAMILY', '44'),
	(13, '1998-11-07', 'kyo5bvhw', 'SOLAR', '$2a$10$MYx1yqHzf/KFZ4hwmMegoOhCcqI9M2lSFSeyizNeBdu8KuRx./TqK', 'mj3meal', 'FAMILY', '김대수'),
	(14, '2023-09-13', 'kyo5bvhw', 'SOLAR', '$2a$10$MDaibFcBqNAh/XWlK9ctgOgAYhUqfveptmaZf0dNcsVY5E1MRD6QC', 'qq', 'FAMILY', 'qq'),
	(15, '2023-10-17', 'KYO5BVHW', 'LUNAR', '$2a$10$Ri4MU/.GmgMPJyNwCBY8ge292/3CgRpB7CmHAvgYHW0vk/nl3xbdy', 'aa', 'FAMILY', 'aa'),
	(16, '2023-11-08', 'plak5u5z', 'SOLAR', '$2a$10$jyn3eLMTU5TXAdu0uvyHouUv/8kcV0y/iZWoqE1tXsla79LZG6wGC', 'zz', 'FAMILY', 'zz'),
	(17, '2023-10-11', 'plak5u5z', 'SOLAR', '$2a$10$SJ6VT8JXxBIucFve3Pa.f.xd0ICkk0eu/V3.ZSOdLwGJqntYUcNp2', 'xx', 'FAMILY', 'xx'),
	(18, '2023-06-28', 'y961rzaj', 'SOLAR', '$2a$10$oZy4oQn3CZJDGPHkMJqK1.sPuT3sjv9ZhHpLutvyWSYvE0vmtdDmy', 'cc', 'FAMILY', 'cc');

-- 테이블 project.gymnastics 구조 내보내기
CREATE TABLE IF NOT EXISTS `gymnastics` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `day` varchar(255) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `video_id` varchar(255) DEFAULT NULL,
  `old_user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcu8h93w1utrm9fysskmm0irrx` (`old_user_id`),
  CONSTRAINT `FKcu8h93w1utrm9fysskmm0irrx` FOREIGN KEY (`old_user_id`) REFERENCES `old_user_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.gymnastics:~53 rows (대략적) 내보내기
INSERT INTO `gymnastics` (`id`, `day`, `keyword`, `title`, `video_id`, `old_user_id`) VALUES
	(1, '화', '균형 운동', '균형운동 꼬깔 하나로 하는 방법 [뇌졸중,파킨슨,노인성질환]', 'wxj2t4fphWo', 3),
	(2, '일', '관절운동', '[생로병사의 비밀] - 관절염에 좋은 운동법', 'hBqfOXwcJDA', 3),
	(3, '토', '스트레스 해소', '🤗스트레스해소의  뇌파소리 | 3.4 Hz 델타파 - &#39;엔케팔린 (Enkephalin) 분비 촉진', 'kJBjBMGpJOo', 3),
	(4, '월', '관절운동', '[생로병사의 비밀] - 관절염에 좋은 운동법', 'hBqfOXwcJDA', 3),
	(5, '수', '스트레칭', '뭉친 몸 풀어주는 25분 요가 | 전신 요가 스트레칭', '8t8Xgl0HuYM', 3),
	(6, '금', '유산소 운동', '🔥단시간 칼로리 소모 2배🔥 20분 유산소운동 (No 스쿼트, No 런지, No 층간소음)', 'jjTjeNghWoM', 3),
	(7, '목', '자세 교정', '틀어진 척추 바로잡는 ‘척추 세우기 운동’ 3부작 제 1탄!  - 송영민의 바른자세만들기 #48 - 척추측만증 교정운동', 'Rq2BDpnXTmE', 3),
	(8, '월', '관절운동', '미국 최고 병원, 메이요 클리닉에서 추천하는 손 관절염 운동 요법', '1St4RP6zkDE', 1),
	(9, '목', '발목운동', '앉아서 따라하는 발목 강화 운동 1 _ Ankle Exercise 배경음악 있는거요', 'qdiqGIb66co', 4),
	(10, '', '목운', '교육의 중심! 목운초 목운중 배정되는 주상복합 - 목동 파라곤 35평 전세를 소개합니다 :)', 'uKSvOSjiyXY', 4),
	(11, '', '허리운동', '240. 허리디스크 통증 없애는 최고의 허리 운동ㅣft 부부한의사', '0I8PmUw6EV0', 4),
	(12, '수', '스트레칭', '골반, 허리, 무릎 통증을 없애는 8분 고관절 스트레칭!', 'q2jEHE7Ir3A', 7),
	(13, '목', '자세 교정', '통증을 부르는 잘못된 체형이 달라집니다! ‘자세교정 비법’만 모아서 보기 - 송영민의 바른자세만들기', 'QGzY_aOHljc', 7),
	(14, '금', '유산소 운동', '집에서 칼로리 불태우는 최고의 유산소운동 [칼소폭 매운맛]', 'lKwZ2DU4P-A', 7),
	(15, '일', '관절운동', '[생로병사의 비밀] - 관절염에 좋은 운동법', 'hBqfOXwcJDA', 7),
	(16, '화', '균형 운동', '몸의 균형을 잡는 전정 기능 자극하는 재활 운동 필요 [무엇이든 물어보세요] 20191216', 'akWVcPXGXgg', 7),
	(17, '월', '숨쉬기 운동', '평생 허리 삐끗하지 않는 코어 근육 만드는 호흡법! - 송영민의 바른자세만들기 #75 - 흉복식 호흡', 'TZWi26nc5cU', 7),
	(18, '토', '스트레스 해소', '[우리WON 클래스] &#39;건강한 조직생활을 위한 스트레스 관리법&#39;', 'nSXVkcz_-7Y', 7),
	(19, '화', '균형 운동', '20초만 버티세요! 한발로 서기만 해도 이런 증상이 좋아집니다. 50대 근력운동[정라레]', '6bouWmoFp1Y', 8),
	(20, '목', '자세 교정', '당신의 허리는? &#39;자세 교정의자&#39;의 모든 것, MBC 210218 방송', 'av8wrDR4iCM', 8),
	(21, '월', '숨쉬기 운동', '평생 허리 삐끗하지 않는 코어 근육 만드는 호흡법! - 송영민의 바른자세만들기 #75 - 흉복식 호흡', 'TZWi26nc5cU', 8),
	(22, '일', '관절운동', '무릎에 제일 좋은 근력 운동', 'tOJyThLjVbI', 8),
	(23, '수', '스트레칭', '강하나 스트레칭_stretching', 'null', 8),
	(24, '금', '유산소 운동', '집에서 칼로리 불태우는 최고의 유산소운동 [칼소폭 매운맛]', 'lKwZ2DU4P-A', 8),
	(25, '토', '스트레스 해소', '10시간 잔잔한 수면음악 🎵 스트레스 해소음악, 잠잘때 듣는 음악, 불면증치료음악, 수면유도음악 (My Dream)', 'p2fxv3PAtLU', 8),
	(26, '금', '유산소 운동', '🔥출렁이는 지방🔥단기간에 빼고 싶으면 이 유산소운동 1달만 하세요. (유산소 다이어트/전신 유산소 타바타/칼로리 폭발 운동)', 'sucNosF93w8', 9),
	(27, '수', '균형 운동', '한발서기운동 #체중지지운동 #균형운동 #체중지지운동 #뇌졸중 보행  #뇌졸중걷기 #걷기필수운동 #보행재활 #뇌질환 #stroke gait exercise#방문재활', 'npK5h-oWWYU', 9),
	(28, '월', '숨쉬기 운동', '허리 속근육 힘을 키우는 숨쉬기 운동 (새길병원 이재욱) #허리디스크 #협착증', 'D82ew5i5ijs', 9),
	(29, '일', '관절운동', '무릎관절 무리없는 이 운동 무조건 하세요! 엉덩이 하체에 놀라운 변화가 생깁니다 [정라레]', 'kmayTlYu_G8', 9),
	(30, '목', '균형 운동', '균형운동 꼬깔 하나로 하는 방법 [뇌졸중,파킨슨,노인성질환]', 'wxj2t4fphWo', 9),
	(31, '화', '자세 교정', '지금 딱 8분만 해보세요👌🏻골반과 고관절이 놀랍도록 편해집니다 | 골반틀어짐, 허리통증, 측만증, 고관절찝힘', 'DwTqs4IHwbs', 9),
	(32, '토', '스트레스 해소', '마음의 휴식을 위한 힐링음악☁스트레스 해소음악ㅣ편안한음악ㅣ명상음악ㅣ피아노음악', '43HmMdFSdWk', 9),
	(33, '일', '관절운동', '[생로병사의 비밀] - 관절염에 좋은 운동법', 'hBqfOXwcJDA', 10),
	(34, '수', '스트레칭', '강하나 스트레칭_stretching', 'null', 10),
	(35, '월', '숨쉬기 운동', '호흡 교정 운동, 하루에 10분씩만 따라해보세요‼️ (숨쉬기 답답할때, 호흡곤란)', 'da5_YLL9y7s', 10),
	(36, '목', '자세 교정', '[건강 알고리즐]그 어렵다는 라운드숄더 교정…3가지만 알면 끝! ‘편다-내린다-모은다’', 'VXMSJcqyBlA', 10),
	(37, '화', '스트레스 해소', '☯ [스트레스 호르몬 40% 감소] 참 편안하다. 듣는것만으로 마음의 평안이 찾아오는 치유명상음악 ▶ 불안했던 마음이 편안해지는 음악 [황금손명상 8시간] CH Meditation', 'TyT02nwr8Ss', 10),
	(38, '토', '스트레스 해소', '🤗스트레스해소의  뇌파소리 | 3.4 Hz 델타파 - &#39;엔케팔린 (Enkephalin) 분비 촉진', 'kJBjBMGpJOo', 10),
	(39, '금', '유산소 운동', '집에서 하는 유산소운동 다이어트 [칼소폭]', 'VNQpP6C1fJg', 10),
	(40, '수', '스트레칭', '[ENG] 왜, 스트레칭만 하고 싶은 그런 날 있잖아요..🥹ㅣ25분 심으뜸 전신 스트레칭', 'jw1gxrzRgeU', 11),
	(41, '일', '관절운동', '무릎에 제일 좋은 근력 운동', 'tOJyThLjVbI', 11),
	(42, '월', '유연성 향상', '하루 10분 유연성 늘리기 따라해보세요 | 뻣뻣한 몸이 유연해지는 스트레칭', '1lPY8TkZzsk', 11),
	(43, '화', '균형 운동', '몸의 균형을 잡는 전정 기능 자극하는 재활 운동 필요 [무엇이든 물어보세요] 20191216', 'akWVcPXGXgg', 11),
	(44, '금', '유산소 운동', '집에서 칼로리 불태우는 최고의 유산소운동 [칼소폭 매운맛]', 'lKwZ2DU4P-A', 11),
	(45, '목', '자세 교정', '지금 딱 8분만 해보세요👌🏻골반과 고관절이 놀랍도록 편해집니다 | 골반틀어짐, 허리통증, 측만증, 고관절찝힘', 'DwTqs4IHwbs', 11),
	(46, '토', '스트레스 해소', '마음의 휴식을 위한 힐링음악☁스트레스 해소음악ㅣ편안한음악ㅣ명상음악ㅣ피아노음악', '43HmMdFSdWk', 11),
	(47, '화', '균형 운동', '몸의 균형을 잡는 전정 기능 자극하는 재활 운동 필요 [무엇이든 물어보세요] 20191216', 'akWVcPXGXgg', 12),
	(48, '일', '관절운동', '무릎관절 무리없는 이 운동 무조건 하세요! 엉덩이 하체에 놀라운 변화가 생깁니다 [정라레]', 'kmayTlYu_G8', 12),
	(49, '월', '숨쉬기 운동', '숨 제대로 쉬고 있나요? 복식호흡 ‘잘’ 하는 법 공개! [내 몸 플러스] 97회 20180415', 'KKD6ZKwQAac', 12),
	(50, '목', '자세 교정', '당신의 허리는? &#39;자세 교정의자&#39;의 모든 것, MBC 210218 방송', 'av8wrDR4iCM', 12),
	(51, '수', '스트레칭', '골반, 허리, 무릎 통증을 없애는 8분 고관절 스트레칭!', 'q2jEHE7Ir3A', 12),
	(52, '금', '유산소 운동', '🔥단시간 칼로리 소모 2배🔥 20분 유산소운동 (No 스쿼트, No 런지, No 층간소음)', 'jjTjeNghWoM', 12),
	(53, '토', '스트레스 해소', '🤗스트레스해소의  뇌파소리 | 3.4 Hz 델타파 - &#39;엔케팔린 (Enkephalin) 분비 촉진', 'kJBjBMGpJOo', 12);

-- 테이블 project.medication 구조 내보내기
CREATE TABLE IF NOT EXISTS `medication` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `is_read` bit(1) DEFAULT NULL,
  `medication_time` time(6) DEFAULT NULL,
  `medicine` varchar(255) DEFAULT NULL,
  `old_user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgbfhbv1ffv63dtpptitir38bf` (`old_user_id`),
  CONSTRAINT `FKgbfhbv1ffv63dtpptitir38bf` FOREIGN KEY (`old_user_id`) REFERENCES `old_user_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.medication:~6 rows (대략적) 내보내기
INSERT INTO `medication` (`id`, `is_read`, `medication_time`, `medicine`, `old_user_id`) VALUES
	(1, b'0', '10:00:00.000000', '비타민C', 1),
	(2, b'0', '20:00:00.000000', '오메가3', 1),
	(3, b'0', '11:00:00.000000', '통풍약', 2),
	(4, b'0', '10:00:00.000000', '비타민C', 4),
	(5, b'0', '20:00:00.000000', '오메가3', 4),
	(6, b'0', '13:00:00.000000', '비타민D', 5);

-- 테이블 project.old_user_info 구조 내보내기
CREATE TABLE IF NOT EXISTS `old_user_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `birth` date DEFAULT NULL,
  `gender` enum('MALE','FEMALE') NOT NULL,
  `lunar_solar` enum('LUNAR','SOLAR') DEFAULT NULL,
  `tv_code` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `user_type` enum('FAMILY','OLD') DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_qxcuywmecge7xjk1l8ujma4kh` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.old_user_info:~12 rows (대략적) 내보내기
INSERT INTO `old_user_info` (`id`, `birth`, `gender`, `lunar_solar`, `tv_code`, `user_id`, `user_type`, `username`) VALUES
	(1, '1930-01-01', 'FEMALE', 'LUNAR', '1a2s3d4f', 'kyo5bvhw', 'OLD', '김점순'),
	(2, '1940-11-11', 'MALE', 'SOLAR', NULL, 'i5qaartp', 'OLD', '홍박사'),
	(3, '2023-08-30', 'MALE', 'SOLAR', NULL, '8pgykeco', 'OLD', '국영수'),
	(4, '1930-01-01', 'FEMALE', 'LUNAR', NULL, 'vauvtkiz', 'OLD', '김점순'),
	(5, '1936-11-21', 'FEMALE', 'LUNAR', '4d2sf4ds', 'nn55dxml', 'OLD', '김할매'),
	(6, '1945-08-15', 'MALE', 'LUNAR', '4s3d4f5w', 'huql6nzm', 'OLD', '윤봉길'),
	(7, '2014-10-08', 'FEMALE', 'LUNAR', NULL, 'plak5u5z', 'OLD', '정순자'),
	(8, '2023-05-17', 'MALE', 'SOLAR', NULL, 'y961rzaj', 'OLD', '최대성'),
	(9, '2023-11-28', 'MALE', 'SOLAR', NULL, 'de8wx6i6', 'OLD', '이상혁'),
	(10, '1981-01-10', 'FEMALE', 'SOLAR', NULL, 'w6mjvh4b', 'OLD', '이지은'),
	(11, '2023-07-05', 'FEMALE', 'LUNAR', NULL, 'a9iswjw5', 'OLD', '김복례'),
	(12, '2023-08-17', 'MALE', 'SOLAR', NULL, 'g7xmfgz2', 'OLD', '박철근');

-- 테이블 project.post 구조 내보내기
CREATE TABLE IF NOT EXISTS `post` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `is_viewed` bit(1) DEFAULT NULL,
  `posted_at` datetime(6) DEFAULT NULL,
  `video_path` varchar(255) NOT NULL,
  `family_user_id` bigint(20) DEFAULT NULL,
  `old_user_id` bigint(20) DEFAULT NULL,
  `family_user_name` bigint(20) DEFAULT NULL,
  `old_user_name` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKk1ca1ipbv86yet733fn22pb9q` (`family_user_id`),
  KEY `FKslmbbmd50nlegr86epfm59gen` (`old_user_id`),
  KEY `FKod95dnq0mdq95som904djdp8j` (`family_user_name`),
  KEY `FKpnek6t5urwmy1tgnfhw46c9x5` (`old_user_name`),
  CONSTRAINT `FKk1ca1ipbv86yet733fn22pb9q` FOREIGN KEY (`family_user_id`) REFERENCES `family_user_info` (`id`),
  CONSTRAINT `FKod95dnq0mdq95som904djdp8j` FOREIGN KEY (`family_user_name`) REFERENCES `family_user_info` (`id`),
  CONSTRAINT `FKpnek6t5urwmy1tgnfhw46c9x5` FOREIGN KEY (`old_user_name`) REFERENCES `old_user_info` (`id`),
  CONSTRAINT `FKslmbbmd50nlegr86epfm59gen` FOREIGN KEY (`old_user_id`) REFERENCES `old_user_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.post:~15 rows (대략적) 내보내기
INSERT INTO `post` (`id`, `is_viewed`, `posted_at`, `video_path`, `family_user_id`, `old_user_id`, `family_user_name`, `old_user_name`) VALUES
	(1, b'0', '2024-02-01 15:00:00.000000', '/old_1/2024-02-01_summary.mp4', NULL, 1, NULL, NULL),
	(2, b'0', '2024-02-02 15:00:00.000000', '/old_1/2024-02-02_summary.mp4', NULL, 1, NULL, NULL),
	(3, b'0', '2024-02-05 15:00:00.000000', '/old_1/2024-02-05_summary.mp4', NULL, 1, NULL, NULL),
	(7, b'0', '2024-02-07 15:47:13.925001', '/old_1/2024-02-07_summary.mp4', NULL, 1, NULL, NULL),
	(8, b'0', '2024-02-07 13:39:00.000000', '/family_1/graduation.mp4', 1, NULL, NULL, NULL),
	(9, b'0', '2024-02-07 13:40:00.000000', '/family_2/exercise.mp4', 2, NULL, NULL, NULL),
	(15, b'0', '2024-02-09 23:39:45.417845', '/old_1/2024-02-09_summary.mp4', NULL, 1, NULL, NULL),
	(16, b'0', '2024-02-10 16:21:25.423407', '/old_1/2024-02-10_summary.mp4', NULL, 1, NULL, NULL),
	(35, b'0', '2024-02-12 21:56:57.971725', '/old_1/2024-02-12_summary.mp4', NULL, 1, NULL, NULL),
	(44, b'0', '2024-02-13 02:46:26.031873', '/family_3/testvideo.mp4', 3, NULL, NULL, NULL),
	(45, b'0', '2024-02-13 17:57:22.016112', '/old_1/2024-02-13_summary.mp4', NULL, 1, NULL, NULL),
	(49, b'0', '2024-02-13 06:34:51.983229', '/family_3/test.mp4', 3, NULL, NULL, NULL),
	(51, b'0', '2024-02-13 08:15:41.449282', '/family_33/환자의 생명이 가장 우선인 의사 #슬기로운의사생활2.mp4', 11, NULL, NULL, NULL),
	(52, b'0', '2024-02-13 08:19:09.153781', '/family_33/1234.mp4', 11, NULL, NULL, NULL),
	(53, b'0', '2024-02-14 15:01:04.634090', '/old_1/2024-02-14_summary.mp4', NULL, 1, NULL, NULL);

-- 테이블 project.quiz 구조 내보내기
CREATE TABLE IF NOT EXISTS `quiz` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `answer` varchar(255) DEFAULT NULL,
  `problem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.quiz:~7 rows (대략적) 내보내기
INSERT INTO `quiz` (`id`, `answer`, `problem`) VALUES
	(1, '병아리', 'ㅂㅇㄹ는 무슨 동물일까?'),
	(2, '코끼리', 'ㅋㄲㄹ는 무슨 동물일까?'),
	(3, '까마귀', 'ㄲㅁㄱ는 무슨 동물일까?'),
	(4, '다람쥐', 'ㄷㄹㅈ는 무슨 동물일까?'),
	(5, '너구리', 'ㄴㄱㄹ는 무슨 동물일까?'),
	(6, '호랑이', 'ㅎㄹㅇ는 무슨 동물일까?'),
	(7, '기러기', 'ㄱㄹㄱ는 무슨 동물일까?');

-- 테이블 project.quiz_result 구조 내보내기
CREATE TABLE IF NOT EXISTS `quiz_result` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `is_correct` bit(1) DEFAULT NULL,
  `quiz_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKd49de4d3rwgtndq0n51w1isbx` (`quiz_id`),
  KEY `FK71vqes2e3oy50xyq89mbua61y` (`user_id`),
  CONSTRAINT `FK71vqes2e3oy50xyq89mbua61y` FOREIGN KEY (`user_id`) REFERENCES `old_user_info` (`id`),
  CONSTRAINT `FKd49de4d3rwgtndq0n51w1isbx` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.quiz_result:~10 rows (대략적) 내보내기
INSERT INTO `quiz_result` (`id`, `is_correct`, `quiz_id`, `user_id`) VALUES
	(1, b'1', 1, 1),
	(2, b'1', 1, 1),
	(3, b'0', 1, 1),
	(4, b'0', 1, 1),
	(5, b'0', 1, 1),
	(6, b'0', 1, 1),
	(7, b'0', 1, 1),
	(8, b'0', 1, 1),
	(9, b'0', 1, 1),
	(10, b'0', 1, 1);

-- 테이블 project.schedule 구조 내보내기
CREATE TABLE IF NOT EXISTS `schedule` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `is_read` bit(1) DEFAULT NULL,
  `registered_time` datetime(6) NOT NULL,
  `schedule` varchar(255) NOT NULL,
  `schedule_day` datetime(6) DEFAULT NULL,
  `schedule_time` time(6) DEFAULT NULL,
  `family_user_id` bigint(20) DEFAULT NULL,
  `old_user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrjnytv42hdhix1nb07vl96obn` (`family_user_id`),
  KEY `FKgjpqsxrl32g50c9qgykjq0q7o` (`old_user_id`),
  CONSTRAINT `FKgjpqsxrl32g50c9qgykjq0q7o` FOREIGN KEY (`old_user_id`) REFERENCES `old_user_info` (`id`),
  CONSTRAINT `FKrjnytv42hdhix1nb07vl96obn` FOREIGN KEY (`family_user_id`) REFERENCES `family_user_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.schedule:~4 rows (대략적) 내보내기
INSERT INTO `schedule` (`id`, `is_read`, `registered_time`, `schedule`, `schedule_day`, `schedule_time`, `family_user_id`, `old_user_id`) VALUES
	(1, b'0', '2024-02-06 16:00:08.035355', '막내 아들 결혼식', '2024-02-28 11:00:00.000000', NULL, 1, 1),
	(2, b'0', '2024-02-06 16:00:41.213493', '손주한테 전화하기', NULL, '20:00:00.000000', 1, 1),
	(3, b'1', '2024-02-07 02:43:53.997774', '첫째 딸이랑 밥먹기', '2024-02-07 14:00:00.000000', NULL, 1, 1),
	(4, b'0', '2024-02-07 07:15:59.337125', '막내 아들 결혼식', '2024-02-13 17:33:00.000000', NULL, 1, 1);

-- 테이블 project.tv_code 구조 내보내기
CREATE TABLE IF NOT EXISTS `tv_code` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tv_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 project.tv_code:~0 rows (대략적) 내보내기

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
