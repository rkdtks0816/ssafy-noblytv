# 웹/모바일(웹 IoT) 프로젝트

<!-- 필수 항목 -->

## 카테고리

| Application                       | Domain                                | Language                      | Framework                            |
| --------------------------------- | ------------------------------------- | ----------------------------- | ------------------------------------ |
| :black_square_button: Desktop Web | :white_check_mark: AI                 | :white_check_mark: JavaScript | :black_square_button: Vue.js         |
| :white_check_mark: Mobile Web     | :black_square_button: Big Data        | :white_check_mark: TypeScript | :white_check_mark: React             |
| :white_check_mark: Responsive Web | :black_square_button: Blockchain      | :black_square_button: C/C++   | :black_square_button: Angular        |
| :black_square_button: Android App | :white_check_mark: IoT                | :black_square_button: C#      | :white_check_mark: Node.js           |
| :black_square_button: iOS App     | :black_square_button: AR/VR/Metaverse | :white_check_mark: ​Python    | :white_check_mark: Flask/Django      |
| :black_square_button: Desktop App | :black_square_button: Game            | :white_check_mark: Java       | :white_check_mark: Spring/Springboot |
| :white_check_mark: Television App |                                       | :black_square_button: Kotlin  |                                      |

<!-- 필수 항목 -->

## 프로젝트 소개

#### 1. 프로젝트명

노블리TV

#### 2. 프로젝트 기간

2023.12.28 ~ 2024.02.16 (6주)

#### 3. 서비스 특징

홀로 어르신의 삶에 정서적 연결고리를 제공하여 외로움을 해소할 수 있는 AI 셋톱박스

#### 4. 주요 기능

- TV 셋톱박스
- 오늘의 일기 음성으로 작성 후, 텍스트로 변환하여 보호자에게 전달.
  - 노인의 우울증 및 치매 척도 측정의 자료가 될 수도 있음.
- 어르신들이나 건망증이 심한 분들의 중요한 일정의 자녀들이 대신 일정 등록해주고 알림을 보낼 수 있도록 하기.
- 치매 예방
  - 치매 예방 체조 하기
  - 치매 예방 미니 퀴즈
- 가족들과의 커뮤니티
  - 체조 영상 촬영 후 커뮤니티에 올리는 기능
  - 가족들이 영상을 올리면 TV에서 시청 가능
- 초음파센서와 TV에 달린 카메라로 독거노인 상태 체크
  - 주의 : 8시간동안 움직임이 없는 경우
  - 경보: 12시간동안 움직임이 없는 경우
  - 위험: 24시간동안 움직임이 없는 경우
  - 점검: 기계 통신이 안되는 경우, 데이터 송수신이 안될 때
  - 낙상: 낙상 감지 모델을 사용하여 위험 감지

<!-- 자유 양식 -->

## 팀 소개

![팀 소개](./exec/About%20the%20team.png)

<!-- 자유 양식 -->

## 사용 기술 스택

#### 1. FE

- node.js 20.10.0
- Vite 5.0.11
- React 18.2.0
- Zustand 4.4.7
- Styled-component 6.1.8
- Eslint 8.56.0
- Prettier 3.2.2
- Typescript 5.3.3
- Socket io 4.7.4

#### 2. BE

- OpenJDK 21.0.1
- Spring Boot 3.2.1
  - Project : Gradle - Groovy
- JUnit 5.10.1

#### 3. EM

- NVIDIA Jetson Nano Developer Kit
  - OS: Ubuntu 20.04.6 LTS
  - Kernal: Linux 4.9.253-tegra
  - Architecture: arm64
  - Jetpack: 4.6
  - L4T: 32.6.1
- Python 3.8.10
- Socket io 4.7.4
- node.js 20.10.0
- Flask 3.0.2

#### 4. DB

- Docker 25.0.1
- Docker-Compose 1.29.2
- Jenkins 2.443
- nginx

#### 5. INFRA

- Docker 25.0.1
- Docker-Compose 1.29.2

#### 6. AI

- PoseNet
- Visual Transformer (ViT)
- Chat GPT 3.5 terbo
- Chat GPT 4
- NAVER Clova

## 서비스 화면

### 1. App

- 가족들이 이용하는 application 입니다.

#### 메인화면

- 메인화면에서 가족, 어르신이 올린 영상을 확인 할 수 있습니다.

![app_main](./exec/app/app_main.png)

#### 일기 및 일정

- 일기 및 일정에서 어르신이 음성일기가 텍스트로 요약정리되어 화면에 보여줍니다.
- 일정을 등록하면 어르신께서 사용중인 노블리TV로 전달되어 해당 시간에 TV에서 알림을 띄웁니다.

![app_diary and schedule](./exec/app/app_diary%20and%20schedule.png)

#### 체조 관리

- 체조 영상을 선택하여 등록하면 어르신께서 사용중인 노블리TV로 전달되어 체조 영상을 띄웁니다.

![app_gymnastic manage](./exec/app/app_gymnastic%20manage.png)

<hr />

### 2. TVA

#### TV에서 체조

- 가족들이 App에서 등록한 체조 영상이 노블리TV로 전달되고, TV에서 체조영상이 출력됩니다.
- 카메라를 통해 실시간으로 촬영되는 화면은 TVA 화면 좌측 상단에 위치하여 보여주며, 촬영된 영상은 하이라이트만 추출되어 App으로 전달합니다.
  ![TVA_gymnastic](./exec/TVA/TVA_gymnastic.png)

#### 노블리TV와 상호 커뮤니케이션

- 사전에 등록한 손주 사진과 함께 TV 화면의 좌측에 텍스트와 함께 사전에 등록한 손주 사진을 띄웁니다. 이때 텍스트와 동일한 음성이 출력됩니다.
  ![TVA_modal_communication](./exec/TVA/TVA_modal_communication.png)

## [기능 명세서](https://www.notion.so/minju98/8e23409ab41f460da94377b842fe4316?v=bf049a1dff9b4514b016a50d506d2f5a)

## [요구 사항 명세서](https://www.notion.so/minju98/1598af230a404e8c8f51531f8d981cdb)

## [REST API 연동 규격서](https://www.notion.so/minju98/Rest-API-590a12f831eb43c8882928b6f9f6b144)

## [빌드 및 배포 관련 문서](https://www.notion.so/minju98/2e467d7e0c1a4ef382c09f934c436b20)

#### Swagger를 통해서도 API 명세서 정리

![Swagger](./exec/Swagger.PNG)

#### ERD![ERD](./exec/ERD.png)

#### 시스템 아키텍처

![System_Architecture](./exec/System%20Architecture.png)

  <!-- ## ⚠️ commit 컨벤션

**commmit, push 전에 pull 하는 습관을 들입시다!**

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
| 🚚     | rename   | 파일, 폴더명 수정 혹은 이동           | -->

<hr />

<!-- ## ⚠️ coding 컨벤션

### frontend coding 컨벤션

#### 소개

본 항목은 프로젝트에 적용된 코딩 컨벤션과 관련 도구에 대한 안내를 제공합니다. 우리는 ESLint와 Prettier를 사용하여 코드 품질을 유지하고 일관된 코드 스타일을 보장합니다.

#### ESLint

- eslint-config-airbnb-typescript 를 통해 Airbnb의 TypeScript 스타일 가이드를 따릅니다

#### Prettier

- prettier를 통해 일관된 코드 스타일을 유지합니다.

## ⚠️ nameing 컨벤션

### frontend nameing 컨벤션

- 모든 이름은 조금 길어지더라도 역할이 분명하게 명명해야합니다.

#### 1. 폴더명

- camel**C**ase로 작성합니다.

#### 2. 컴포넌트(styled component 포함) 명

- **P**ascal**C**ase

#### 3. 변수명

- camel**C**ase로 작성합니다.

#### 4. 함수명

- camel**C**ase로 작성합니다.

#### 5. 상수

- 대문자와 밑줄을 사용한 **SNAKE_CASE**로 작성합니다.

#### 1. asset 파일명

- 소문자로 작성합니다.

### BackEnd Naming Convention

1. Java

- Naming
  - 상수 : 대문자와 \_(언더바)로 구성한다.
    ```java
    public int POSTAL_CODE_EXPRESSION = 1;
    ```
  - 변수명, 클래스명, 메서드명 : 영어, 숫자만을 사용한다.
  - 패키지명 : 소문자를 사용하여 작성한다. 단어별 구분을 위해 대문자, \_(언더바)를 섞지 않는다.
    ```java
    package com.navercorp.apigateway;
    ```
  - 클래스명, 인터페이스명에는 첫 번째 단어가 대문자인 CamelCase를 적용한다.
    ```java
    public class AccessToken {
    ```
  - 변수명, 메서드명은 첫 번째 단어 소문자 camelCase를 사용한다.
    ```java
    private int accessToken;
    ```
  - 테스트를 위한 클래스명은 Test를 마지막에 붙인다.
    ```java
    public class WeatherTest {
    ```
  - 어떤 역할을 하는 지 파악할 수 있도록 Naming을 정의한다.
- Declarations
  - 한 줄에 한 문장
    ```java
    int base = 0;
    int weight = 2;
    ```
  - 하나의 선언문에는 하나의 변수만
    ```java
    int base;
    int weight;
    ```
  - 배열에서 대괄호는 타입 뒤에 선언한다.
    ```java
    String[] names;
    ```
  - long 타입의 숫자에는 마지막에 대문자 L을 붙인다.
    ```java
    long base = 54423234211L;
    ```
- 들여쓰기
  - 스페이스를 사용하지 않고 Tab을 이용하여 들여쓴다.
  - IDE 내에서 1개의 탭은 4개의 스페이스와 같도록 설정한다.
  - 클래스, 메서드, 제어문 등 코드 블럭이 생길 때마다 1단계를 더 들여쓴다.
- 중괄호

  - 중괄호 사용 시 스페이스 1번 사용 후 시작 중괄호를 삽입하고, 종괄호를 마칠 때는 새 줄 삽입 후 중괄호를 닫는다.

    ```java
    public boolean isValidExpression(String exp) {

        if (exp == null) {
            return false;
        }
    }
    ```

  - 닫는 중괄호와 같은 줄에 else, catch, finally, while을 선언한다.
    ```java
    if (line.startWith(WARNING_PREFIX)) {
        return LogPattern.WARN;
    } else if (line.startWith(DANGER_PREFIX)) {
        return LogPattern.NORMAL;
    } else {
        return LogPattern.NORMAL;
    }
    ```
  - 내용이 없는 블럭을 선언할 때는 같은 줄에서 중괄호를 열고 닫는다.
    ```java
    public void close() {}
    ```
  - 조건, 반복문이 한 줄로 끝나도 중괄호는 필수로 사용한다.
    ```java
    if (exp == null) {
        return false;
    }
    ```

- 줄바꿈
  - package, import 선언문은 한 줄로 쓴다.
- 빈 줄

  - package 선언 후에는 빈 줄을 한 줄 삽입한다.

    ```java
    package com.naver.lucy.util;

    import java.util.Date;
    ```

  - 메서드 사이에는 빈 줄을 한 줄 삽입한다.

    ```java
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
    ```

- 공백

  - 닫는 대괄호 뒤에 다른 선언이 올 경우에는 공백을 삽입한다.
    ```java
    int[] masks = new int[] {0, 1, 1};
    ```
  - 제어문 키워드와 여는 소괄호 사이에는 공백을 삽입한다.
    ```java
    if (maxLine > LIMITED) {
        return false;
    }
    ```
  - 식별자와 여는 소괄호 사이에는 공백을 삽입하지 않는다.

    ```java
    public StringProcessor() {} // 생성자

    @Cached("local")
    public String removeEndingDot(String original) {
        assertNotNull(original);
        ...
    }
    ```

  - 반복문 내에서 구분을 위해 쓰는 세미콜론(;)에는 뒤에만 공백을 삽입한다.
    ```java
    for (int i = 0; i < length; i++) {
        display(level, message, i)
    }
    ```
  - 반복문과 삼항연산자 내에서 쓰는 콜론(:)의 앞 뒤에는 공백을 삽입한다.

    ```java
    for (Customer customer : visitedCustomers) {
        AccessPattern pattern = isAbnormal(accessLog) ? AccessPattern.ABUSE : AccessPattern.NORMAL;
        int grade = evaluate(customer, pattern);

        switch (grade) {
            case GOLD :
                sendSms(customer);
            case SILVER :
                sendEmail(customer);
            default :
                inreasePoint(customer)
        }
    }
    ```

  - 연산자를 사용할 시 앞 뒤에 공백을 삽입한다.

- 주석
  - 코드 줄 바로 뒤에 주석을 붙일 때는 //을 사용하여 주석을 작성한다.
  - 코드와 별개로 주석을 작성할 때는 예시와 같이 주석을 작성한다.
    - 예시
      ```java
      /*
      * 공백 후 주석 내용 시작
      */
      ``` -->
