# 2024-01-08 학습
  - 프로젝트의 back-end 개발을 위해 JAVA의 문법을 학습하였음.

## 조건문
  - if문
    - if문은 특정 조건이 참인지 확인하고, 그 조건이 참(true)일 경우 특정 코드 블록을 실행한다.
      ```java
      if (condition) {
          // 조건이 참일 때 실행되는 코드
      }

      // ex)
      public class If {
          public static void main(String[] args) {
              int age = 20;

              if (age >= 18) {
                  System.out.println("성인입니다.");
              }
              if (age < 18) {
                  System.out.println("미성년자입니다.");
              }
          }
      }
      ```

    - else 문
      - else문은 if문에서 만족하는 조건이 없을 때 실행되는 코드를 제공한다.
        ```java
        if (condition) {
          // 조건이 참일 때 실행되는 코드
        } else {
          // 만족하는 조건이 없을 때 실행되는 코드
        }

        // ex)
        public class If2 {
          public static void main(Stirng[] args) {
              int age = 20;

              if (age >= 18) {
                  System.out.println("성인입니다.");
              } else {
                  System.out.println("미성년자입니다.");
              }
          }
        }
        ```

      - else if
        - if 문의 불필요한 검사를 줄이기 위해 사용하여 코드의 효율성이 증가됨.
          ```java
          if (conditon1) {
              // 조건1이 참일 때 실행되는 코드
          } else if (conditon2) {
              // 조건1이 거짓이고,조건 2가 참일 때 실행되는 코드
          } else if (conditon3) {
              // 조건2이 거짓이고, 조건3이 참일 때 실행되는 코드
          } else {
              // 모든 조건이 거짓일 때 실행되는 코드
          }
          ```
          ```java
          // else 생략코드
          if (condition1) {
              // 조건1이 참일 때 실행되는 코드
          } else if (condition2) {
              // 조건1이 거짓이고, 조건2가 참일 때 실행되는 코드
          }
          ```
    - if문에 else if를 함께 사용하는 것은 서로 연곤된 조건일 때 사용

    - 서로 관련 없는 독립조건인 경우 else if를 사용하지 않고 if문을 각각 따로 사용
  
  - switch문
    - switch문은 if문을 조금 더 편리하게 사용할 수 있는 기능이다.

    - if문과 다르게 단순히 값이 같은지만 비교할 때 사용한다.
    ```java
    switch (조건식) {
      case value1:
        // 조건식의 결과 값이 value1일 때 실행되는  코드
        break;
      case value2:
        // 조건식의 결과 값이 value2일 때 실행되는 코드
        break;
      default:
        // 조건식의 결과 값이 위의 어떤 값에도 해당하지 않을 때 실행되는 코드
    }

    // java14 이후로 추가된 switch문법
    // ex)
    public class Switch3 {
      public static void main(String[] args) {
        int grage = 2;

        int coupon = switch (grade) {
          case 1 -> 1000;
          case 2 -> 2000;
          case 3 -> 3000;
          default -> 500;
        };
        System.out.println("발급받은 쿠폰 " + coupon);
      }
    }
    ```
    - 조건식의 결과 값이 어떤 case의 값과 일치하면 해당 case의 코드를 실행

    - break문은 현재 실행 중인 코드를 끝내고 switch문을 빠져나가게 하는 역할

    - break문이 없으면, 일치하는 case 이후의 모든 case 코드들이 순서대로 실행됨

    - default는 조건식의 결과값이 모든 case의 값과 일치하지 않을 때 실행(default구문은 필수적으로 들어가야할 필요는 없음)

    - 기존 switch문과의 차이
      - ->를 사용한다.
      - 선택된 데이터를 반환할 수 있다.
  
  - 삼항 연산자
    ```java
    (조건) ? 참_표현식 : 거짓_표현식
    ```
    - 특정 조건에 따라 결과가 나오기 대문에 조건 연산자라고도 한다.

    - 조건에 만족하면 참_표현식이 실행되고, 조건에 만족하지 않으면 거짓_표현식이 실행된다.

    - if문 처럼 코드 블록을 넣을 수 있는 것이 아니라 단순한 표현식만 넣을 수 있다.


## 반복문
  - while
    ```java
    while (조건식) {
      // 코드
    }

    // ex)
    public class While {
      public static void main(String[] args) {
        int sum = 0;
        int i = 1;
        int endNum = 3;

        while (i <= endNum) {
          sum = sum + i;
          System.out.println("i = " + i + " sum=" + sum);
          i++;
        }
      }
    }
    ```
    - 조건식을 확인하여 참이면 코드 블럭을 실행하고 거짓이면 while문을 벗어난다.

    - 조건식이 참이면 코드 블럭을 실행한 후 코드 블럭이 끝나면 다시 조건식 검사로 돌아가서 조건식을 검사(무한 반복)

    - 장점
      1. 루프의 조건이 루프 내부에서 변경되는 경우, while 루프는 이를 관리하기 쉽다
      2. for 루프보다 더 복잡한 조건과 시나리오에 적합하다
      3. 조건이 충족되는 동안 계속해서 루프를 실행하며, 종료 시점을 명확하게 알 수 없는 경우에 유용하다.

    - 단점
      1. 초기화, 조건체크, 반복 후의 작업이 분산되어 있어 코드를 이해하거나 작성하기 어려울 수 있다.
      2. 루프 변수가 while 블록 바깥에서도 접근 가능하므로, 이 변수를 실수로 변경하는 상황이 발생할 수 있다.

  - do-while
    ```java
    do{
      // 코드
    } while (조건식);

    // ex)
    public class DoWhile {
      public static void main(String[] args) {
        int i = 10;
        do {
          System.out.println("현재 숫자는: " + i);
          i++;
        } while (i < 3);
      }
    }
    ```
    - do-while문은 최초 한번은 항상 실행됨 따라서 최초 한번은 코드 블럭을 꼭 실행해야 하는 경우에 사용한다.

    - 조건식이 거짓이라면 do-while문을 빠져나온다.
    
    - break
      ```java
      while (조건식) {
        코드1;
        break // 즉시 while문 종료
        코드2;
      }
      ```
      - break를 만나면 코드2가 실행되지 않고 while문이 종료된다.

    - continue
      ```java
      while (조건식) {
        코드1;
        continue; // 즉시 조건식으로 이동한다.
        코드2;
      }
      ```
      - continue를 만나면 코드2가 실행되지 않고 다시 조건식으로 이동하고, 조건식이 참이면 while문을 실행한다.

  - for
    ```java
    for (1.초기식; 2.조건식; 4.증감식) {
      // 3. 코드
    }

    // ex)
    for (int i = 1; i < 10; i++) {
      System.out.println(i);
    }
    ```
    - for문 실행 순서
      1. 초기식 실행
          - 주로 반복 횟수와 관련된 변수를 선언하고 초기화 할 때 사용
          - 최초 1회 사용 
      2. 조건식 검증
          - 참이면 코드 실행, 거짓이면 for문 탈출
      3. 코드 실행
      4. 증감식 실행
          - 주로 초기식에 넣은 반복 횟수와 관련된 변수의 값을 증가할 때 사용
      5. 2.조건식 부터 시작(반복)
    
    - for문에서 초기식, 조건식, 증감식은 선택적이므로 생략이 가능하나 각 영역을 구분하는 세미콜론(;)은 유지 해야 한다
      ```java
      // ex)
      for (;;) {
        // 코드
      }
      ```
    
    - 장점
      1. 초기화, 조건체크, 반복 후의 작업을 한 줄에서 처리할 수 있어 편리하다
      2. 정해진 횟수만큼의 반복을 수행하는 경우에 사용하기 적합하다
      3. 루프 변수의 범위가 for 루프 블록에 제한되므로, 다른 곳에서 이 변수를 실수로 변경할 가능성이 적다
    
    - 단점
      1. 루프의 조건이 루프 내부에서 변경되는 경우, for 루프는 관리가 어렵다
      2. 복잡한 조건을 가진 반복문을 작성하기에는 while문이 더 적합할 수 있다

## 배열 
