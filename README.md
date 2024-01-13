# 웹/모바일(웹 IoT) 프로젝트

<!-- 필수 항목 -->

## 카테고리

| Application                       | Domain                                | Language                         | Framework                            |
| --------------------------------- | ------------------------------------- | -------------------------------- | ------------------------------------ |
| :white_check_mark: Desktop Web    | :black_square_button: AI              | :white_check_mark: JavaScript    | :black_square_button: Vue.js         |
| :black_square_button: Mobile Web  | :black_square_button: Big Data        | :black_square_button: TypeScript | :white_check_mark: React             |
| :white_check_mark: Responsive Web | :black_square_button: Blockchain      | :black_square_button: C/C++      | :black_square_button: Angular        |
| :black_square_button: Android App | :white_check_mark: IoT                | :black_square_button: C#         | :black_square_button: Node.js        |
| :black_square_button: iOS App     | :black_square_button: AR/VR/Metaverse | :white_check_mark: ​Python       | :black_square_button: Flask/Django   |
| :black_square_button: Desktop App | :black_square_button: Game            | :black_square_button: Java       | :white_check_mark: Spring/Springboot |
|                                   |                                       | :black_square_button: Kotlin     |                                      |

<!-- 필수 항목 -->

## 프로젝트 소개

- 프로젝트명: 노블리
- 서비스 특징: 독거노인의 삶에 정서적 연결고리를 제공하여 외로움을 해소할 수 있는 커뮤니티 플랫폼
- 주요 기능
    - TV 셋톱박스처럼 연결하는 작은 서비스
    - 오늘의 일기 음성으로 작성 후, 텍스트로 변환하여 카톡 등 방식으로 보호자에게 전달. 노인의 우울증 척도 측정의 자료가 될 수도 있음.
    - 어르신들이나 건망증이 심한 분들의 중요한 일정의 자녀들이나 친구들이 대신 일정 등록해주고 알림을 보낼 수 있도록 하기.
    - 치매 예방 체조
        - 영상 촬영 후 커뮤니티에 올리는 기능
        - 체조 시 동작이 부정확하면 알려주는 기능
        - 유튜브 쇼츠처럼 좋아요 눌러주기 (자식들과 양방향으로) ⇒ 가족단위/경로당 단위
    - 움직임 감지 센서 or TV에 달린 카메라로 독거노인 상태 체크
        - 주의 : 8시간동안 움직임이 없는 경우
        - 경보: 12시간동안 움직임이 없는 경우
        - 위험: 24시간동안 움직임이 없는 경우
        - 점검: 기계 통신이 안되는 경우, 데이터 송수신이 안될 때
        - 낙상: 낙상 감지 모델을 사용하여 위험 감지
- 주요 기술
  - Single Page Application
  - Jetson Nano
  - Raspberry Pico H
  - REST API
- 참조 리소스
  - .
- 배포 환경
  - URL: 
  - 테스트 계정: 

<!-- 자유 양식 -->

## 팀 소개

- 김민주: 팀장, 임베디드 개발
- 강대수: 백앤드 개발
- 송강산: 프론트 개발
- 오민상: 발표자, 프론트 개발
- 이지호: 백앤드 개발
- 현상균: 서기, 임베디드 개발

<!-- 자유 양식 -->

## 프로젝트 상세 설명

// 개발 환경, 기술 스택, 시스템 구성도, ERD, 기능 상세 설명 등

## ⚠️ commit 컨벤션

** commmit, push 전에 pull 하는 습관을 들입시다! **

> commit 컨벤션은 [gitmoji](https://gitmoji.dev/)
> 와 [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 참고했습니다.

- "태그: {커밋 메시지}" 형태로 작성

### 💡 예시

`✨feat: 로그인 기능 구현`

#### 이모지 및 태그

- 이모지는 선택에 따라 활용한다.

| 이모지 | 태그     | 설명                                  |
| :----- | :------- | :------------------------------------ |
| ✨     | feat     | 새로운 기능 추가                      |
| 🐛     | fix      | 버그 수정                             |
| ♻️     | refactor | 코드 리팩토링                         |
| ✏️     | comment  | 주석 추가(코드 변경 X) 혹은 오타 수정 |
| 📝     | docs     | README와 같은 문서 수정               |
| 🔀     | merge    | merge                                 |
| 🚚     | rename   | 파일, 폴더명 수정 혹은 이동           |

## ⚠️ coding 컨벤션
