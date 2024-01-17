# <center>TIL<center>
## 2024/01/08(1일차)

# 오늘 학습 내용 :memo:
1. **Spring**
    - [스프링 부트 스타터 사이트](https://start.spring.io)를 통해 스프링 프로젝트를 생성할 수 있다.
        - 프로젝트 선택
            - Project : Gradle - Groovy Project
            - Spring Boot : 3.x.x
            - Language : Java
            - Packaging : Jar
            - Java : 21
        - Project Metadata
            - Artifact : 프로젝트 명(빌드될 때 나오는 결과물)
        - Dependencies
            - Spring Web, Thymeleaf
    - 동작 확인
        - 스프링 부트 메인에서 실행 후 http://localhost:8000 에서 동작을 확인할 수 있다.
    - IntelliJ Gradle 대신 자바를 직접 실행
        - 최근 IntelliJ 버전은 Gradle을 통해서 실행하는 것이 기본 설정이지만 실행 속도가 느리다.
        - File - Setting - Build, Execution, Deployment - Build Tools - Gradle에서 Build and run using, Run tests using을 IntelliJ IDEA로 변경하면 자바로 바로 실행해서 실행 속도가 더 빠르다.

2. **Spring Boot 동작 환경**
    - localhost:8080/hello -> helloController(return : hello, model(data : hello!!)) -> viewResolver(templates/hello.html(Thymeleaf 템플릿 엔진 처리)) -> hello.html
    - 컨트롤러에서 리턴 값으로 문자를 반환하면 viewResolver가 화면을 찾아서 처리한다.
        - 스프링 부트 템플릿 엔진 기본 viewName 매핑
        - resources:templates/ + {viewName} + .html
        - 참고로 spring-boot-devtools 라이브러리를 이용하면 html 파일을 컴파일만 해주면 서버 재시작 없이 View 파일 변경이 가능하다.
    
3. **Console에서 빌드하고 실행하기**
    1. ./gradlew build
    2. cd build/libs
    3. java -jar hello-spring-0.0.1-SNAPSHOT.jar
    4. 실행 확인

4. **정적 컨텐츠**
    - static 폴더 내에서 html 파일을 통해 정적 컨텐츠 기능을 구현할 수 있다.
    - localhost:8080/hello-static.html -> 스프링 컨테이너 내에서 hello-static 관련 컨트롤러가 있는 지 확인 -> 없다면 static 내에서 hello-static.html이 있는 지 확인 -> 있으면 html 파일을 그대로 반환

5. **MVC와 Template 엔진**
    - MVC : Model, View, Controller
    - localhost:8080/hello-mvc -> helloController(return : hello-template, model(name : spring)) -> viewResolver(templates/hello-template.html(Thymeleaf 템플릿 엔진 처리)) -> HTML 변환 후 웹 브라우저에 반환

6. **API**
    - @ResponseBody 문자 반환
        - @ResponseBody를 사용하면 viewResolver를 사용하지 않음
        - 대신 HTTP의 BODY에 문자 내용을 직접 반환
    - @ResponseBody 객체 반환
        - @ResponseBody를 사용하고, 객체를 반환하면 객체가 JSON으로 반환됨.
    - @ResponseBody 사용 원리
        - @ResponseBody를 사용 -> HTTP의 BODY에 문자 내용을 직접 반환 -> viewResolver 대신에 HttpMessageConverter가 동작 -> 기본 문자 처리 : StringHttpMessageConverter, 기본 객체 처리 : MappingJackson2HttpMessageConverter

7. **일반적인 웹 애플리케이션 계층 구조**
    - 컨트롤러 : 웹 MVC의 컨트롤러 역할
    - 서비스 : 핵심 비즈니스 로직 구현
    - 리포지토리 : 데이터베이스에 접근, 도메인 객체를 DB에 저장하고 관리
    - 도메인 : 비즈니스 도메인 객체(예 : 회원, 주문, 쿠폰 등 주로 데이터베이스에 저장하고 관리됨)

8. **Repository Interface**
    - Optional : Null 값을 반환하는 방법

9. **테스트 케이스 작성**
    - 개발한 기능을 실행해서 테스트할 때 자바의 main 메서드를 통해서 실행하거나, 웹 애플리케이션의 컨트롤러를 통해서 해당 기능을 실행한다. 이런 방법은 준비하고 실행하는 데 오래 걸리고, 반복 실행하기 어렵고 여러 테스트를 한 번에 실행하기 어렵다는 단점이 있다. 자바는 JUnit이라는 프레임워크로 테스트를 실행해서 이러한 문제를 해결한다.