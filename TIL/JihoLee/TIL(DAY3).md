# <center>TIL<center>
## 2024/01/10(3일차)

# 오늘 학습 내용 :memo:
1. **객체 사용**
    - 클래스를 통해 생성한 객체를 사용하려면 먼저 메모리에 존재하는 객체에 접근해야 한다. 객체에 접근하려면 .(dot)을 사용하면 된다.(예 : student1.name)
    - 객체에 값 대입
        - 객체가 가지고 있는 멤버 변수(name, age, grade)에 값을 대입하려면 먼저 객체에 접근해야 한다. 객체에 접근하려면 .(dot) 키워드를 사용하면 된다.
    - 객체 값 읽기
        - 마찬가지로 .(dot) 키워드를 통해 참조값을 사용해서 객체에 접근한 다음 원하는 작업을 하면 된다.

2. **클래스, 객체, 인스턴스 정리**
    - Class
        - 클래스는 객체를 생성하기 위한 설계도이다. 클래스는 객체가 가져야 할 속성(변수)과 기능(메서드)를 정의한다. 예를 들어 학생이라는 클래스는 속성으로 name, age, grade를 가진다.
    - Object
        - 객체는 클래스에서 정의한 속성과 기능을 가진 실체이다. 객체는 서로 독립적인 상태를 가진다. 예를 들어 student1, student2는 같은 클래스에서 만들어졌지만 서로 다른 객체이다.
    - Instance
        - 인스턴스는 특정 클래스로부터 생성된 객체를 의미한다. 인스턴스는 주로 객체가 어떤 클래스에 속해 있는 지 강조할 때 사용한다. 예를 들어 student1 객체는 Student 클래스의 인스턴스라고 표현한다.
        - 인스턴스와 객체는 둘 다 클래스에서 나온 실체라는 의미에서 비슷하게 사용되지만, 용어 상 인스턴스는 객체보다 좀 더 관계에 초점을 맞춘 단어이다. 보통 student1은 Student의 객체이다라고 말하는 대신 student1은 Student의 인스턴스이다라고 특정 클래스와의 관계를 명확히 할 때 인스턴스라는 용어를 주로 사용한다.
        - 즉, 모든 인스턴스는 객체이지만 우리가 인스턴스라고 부르는 순간은 특정 클래스로부터 그 객체가 생성되었음을 강조하고 싶을 때이다. 예를 들어 student1 객체가 Student 클래스로부터 생성된다는 점을 명확히 하기 위해 student1을 Student의 인스턴스라고 부른다.

3. **배열 도입**
    - 배열을 사용하면 특정 타입을 연속한 데이터 구조로 묶어서 편리하게 관리할 수 있다. Student 클래스를 사용한 변수들도 Student 타입이기 때문에 배열을 사용해서 하나의 데이터 구조로 묶어서 관리할 수 있다.
    - 예시
        ```java
        public class ClassStart4 {

            public static void main(String[] args) {
                Student student1 = new Student();
                student1.name = "학생1";
                student1.age = 15;
                student1.grade = 90;

                Student student2 = new Student();
                student2.name = "학생2";
                student2.age = 16;
                student2.grade = 80;

                Student[] students = new Student[2];
                students[0] = student1;
                students[1] = student2;
                
                System.out.println("이름 : " + students[0].name + " 나이 : " + students[0].age + " 성적 : " + students[0].grade);
                System.out.println("이름 : " + students[1].name + " 나이 : " + students[1].age + " 성적 : " + students[1].grade);
            }
        }
        ```
        - 배열에 참조값 대입
            - Student 변수를 2개 보관할 수 있는 사이즈 2의 배열을 만든다.
            - Student 타입의 변수는 Student 인스턴스의 참조값을 보관한다. Student 배열의 각각의 항목도 Student 타입의 변수이다.
        - 배열에 들어있는 객체 사용
            - 배열에 들어있는 객체를 사용하려면 먼저 배열에 접근하고, 그 다음에 객체에 접근하면 된다.

4. **배열을 이용한 리팩토링**
    - 배열을 이용하여 for문을 사용해 코드를 효율적으로 관리할 수 있다.
    ```java
    public class ClassStart5 {

        public static void main(String[] args) {
            Student student1 = new Student();
            student1.name = "학생1";
            student1.age = 15;
            student1.grade = 90;

            Student student2 = new Student();
            student2.name = "학생2";
            student2.age = 16;
            student2.grade = 80;

            Student[] students = {student1, student2};

            for (Student s : students) {
                System.out.println("이름 : " + s.name + " 나이 : " + s.age + " 성적 : " + s.grade);
            }
        }
    }
    ```
    - 배열 선언 최적화
        - Student 타입도 일반적인 변수와 동일하게 배열을 생성할 때 포함할 수 있다.
            - Student[] students = new Student[]{student1, student2};
        - 생성과 선언을 동시에 하는 경우 다음과 같이 더 최적화할 수 있다.
            - Student[] students = {student1, student2};
    - for문 최적화
        ```java
        for (int i = 0; i < students.length; i++) {
            Student s = students[i];
            System.out.println("이름:" + s.name + " 나이:" + s.age + ...);
        }
        ```
        ```java
        for (Student s : students) {
            System.out.println("이름 : " + s.name + " 나이 : " + s.age + " 성적 : " + s.grade);
        }
        ```
        - 향상된 for문을 이용하는 것이 깔끔하다.

5. **기본형 vs 참조형**
    - 변수의 데이터 타입을 가장 크게 보면 기본형과 참조형으로 분류할 수 있다. 사용하는 값을 변수에 직접 넣을 수 있는 기본형, 객체가 저장된 메모리의 위치를 가르키는 참조값을 넣을 수 있는 참조형으로 분류할 수 있다.
    - 기본형(Primitive Type) : int, long, double, boolean처럼 변수에 사용할 값을 직접 넣을 수 있는 데이터 타입을 기본형이라 한다.
    - 참조형(Reference Type) : Student student1, int[] students와 같이 데이터에 접근하기 위한 참조(주소)를 저장하는 데이터 타입을 참조형이라 한다. 참조형은 객체 또는 배열에 사용된다.
    - 즉, 기본형 변수에는 직접 사용할 수 있는 값이 들어있지만 참조형 변수에는 위치(참조값)가 들어가 있다. 참조형 변수를 통해 뭔가 하려면 결국 참조값을 통해 해당 위치로 이동해야 한다.
        - 객체는 .(dot)을 통해서 메모리 상에 생성된 객체를 찾아가야 사용할 수 있다.
        - 배열은 []를 통해서 메모리 상에 생성된 배열을 찾아가야 사용할 수 있다.
    - 기본형은 소문자로 시작한다. 또한 기본형을 제외한 나머지는 모두 참조형이다.
    - 기본형은 자바가 기본으로 제공하는 데이터 타입이다. 개발자가 새로 정의할 수 없고, 개발자는 참조형인 클래스만 직접 정의할 수 있다.
    - 자바에서 String은 특별하다. String은 사실 클래스라 참조형이다. 하지만 기본형처럼 문자 값을 바로 대입할 수 있다. 문자는 매우 자주 다루기 때문에 자바에서 특별하게 편의 기능을 제공한다.

6. **기본형 vs 참조형 - 변수 대입**
    - 대원칙 : 자바는 항상 변수의 값을 복사해서 대입한다.
    - 기본형, 참조형 모두 항상 변수에 있는 값을 복사해서 대입한다. 기본형이면 변수에 들어있는 실제 사용하는 값을 복사해서 대입하고, 참조형이면 변수에 들어있는 참조값을 복사해서 대입한다.
    - 즉, 참조형을 복사할 경우 원본 참조형의 변수가 변경될 경우, 복사한 참조형은 원본 참조형의 주소를 참조하기 때문에 복사한 참조형의 변수도 변경된다.
    - 하지만, 기본형은 원본 변수가 변경되어도 복사한 변수는 변경되지 않는다.

7. **기본형 vs 참조형 - 메서드 호출**
    - 메서드 호출도 변수 대입과 마찬가지이다. 메서드를 호출할 때 사용하는 매개변수도 결국 변수일 뿐이다. 따라서 메서드를 호출할 때 매개변수에 값을 전달하는 것도 앞서 설명한 내용과 같이 값을 복사해서 전달한다.
    - 기본형 예시
        ```java
        public class MethodChange1 {
            public static void main(String[] args) {
                int a = 10;
                System.out.println("메서드 호출 전 : a = " + a);  // a = 10
                changePrimitive(a);
                System.out.println("메서드 호출 후 : a = " + a);  // a = 10
            }

            static void changePrimitive(int x) {
                x = 20;
            }
        }
        ```
        - 메서드 안에서 x = 20으로 새로운 값을 대입한다. 결과적으로 x의 값만 20으로 변경되고, a의 값은 10으로 유지된다.
        - 메서드가 종료되면 매개변수 x는 제거된다.
    - 참조형 예시
        ```java
        public class MethodChange2 {

            public static void main(String[] args) {
                Data dataA = new Data();
                dataA.value = 10;
                System.out.println("메서드 호출 전 : " + dataA.value);  // 10
                changeReference(dataA);
                System.out.println("메서드 호출 후 : " + dataA.value);  // 20
            }

            static void changeReference(Data dataX) {
                dataX.value = 20;
            }
        }
        ```
        - dataA, dataX 둘 다 같은 참조값을 가지게 되므로, dataX를 통해서도 Data 인스턴스에 접근할 수 있다.
        - dataX.value를 변경하면 dataA, dataX 모두 같은 인스턴스를 참조하기 때문에 dataA.value도 변경된다.
    - 기본형과 참조형의 메서드 호출
        - 기본형 : 메서드로 기본형 데이터를 전달하면 해당 값이 복사되어 전달된다. 이 경우, 메서드 내부에서 매개변수의 값을 변경해도 호출자의 변수 값에는 영향이 없다.
        - 참조형 : 메서드로 참조형 데이터를 전달하면 참조값이 복사되어 전달된다. 이 경우, 메서드 내부에서 매개변수로 전달된 객체의 멤버 변수를 변경하면, 호출자의 객체도 변경된다.

8. **참조형과 메서드 호출**
    ```java
    public class Method1 {
        public static void main(String[] args) {
            Student student1 = createStudent("학생1", 15, 90);
            Student student2 = createStudent("학생2", 16, 80);
            printStudent(student1);
            printStudent(student2);
        }

        static void createStudent(String name, int age, int grade) {
            Student student = new Student();
            student.name = name;
            student.age = age;
            student.grade = grade;
            return student;
        }

        static void printStudent(Student student) {
            System.out.println("이름 : " + student.name + "나이 : " + student.age + "등급 : " + student.grade);
        }
    }
    ```
    - createStudent()라는 메서드를 만들고 객체를 생성하는 부분도 이 메서드 안에 함께 포함하여 객체의 생성과 초기값 설정을 모두 처리할 수 있다.
    - 메서드 안에서 객체를 생성했기 때문에 만들어진 객체를 메서드 밖에서 사용할 수 있게 반환해야 하므로 return을 통해서 호출 결과를 반환한다. 메서드의 반환 기능을 사용해서 만들어진 객체의 참조값을 메서드 밖으로 반환하면 된다.

9. **변수와 초기화**
    - 변수의 종류
        - 멤버 변수(필드) : 클래스에 선언
        - 지역 변수 : 메서드에 선언, 매개변수도 지역 변수의 한 종류이다.
    - 변수의 값 초기화
        - 멤버 변수 : 자동 초기화
            - 인스턴스의 멤버 변수는 인스턴스를 생성할 때 자동으로 초기화된다.
            - int = 0, boolean = false, 참조형 = null
            - 개발자가 직접 초기값을 지정할 수 있다.
        - 지역 변수 : 수동 초기화
            - 지역 변수는 항상 직접 초기화해야 한다.

10. **null**
    - 참조형 변수에서 아직 가리키는 대상이 없다면 null이라는 특별한 값을 넣어둘 수 있다. null은 값이 존재하지 않는, 없다는 뜻이다.

11. **NullPointerException**
    - NullPointerException은 이름 그대로 주소가 없는 곳을 찾아갈 때 발생하는 예외이다.
    - 객체를 참조할 때는 .(dot)을 사용한다. 이렇게 하면 참조값을 사용해서 해당 객체를 찾아갈 수 있다. 그런데 참조값이 null이라면 값이 없다는 뜻이므로 찾아갈 수 있는 객체(인스턴스)가 없다.
    - 예시
        ```java
        public class NullMain {
            public static void main(String[] args) {
                Data data = null;
                data.value = 10;  // NullPointerException 예외 발생
                System.out.println(data.value);
            }
        }
        ```
        - 예외가 발생한 다음 로직은 수행되지 않는다.
    - 예시 2
        ```java
        public class NullMain2 {
            public static void main(String[] args) {
                BigData bigData = new BigData();
                System.out.println(bigData.count);  // 0
                System.out.println(bigData.data);   // null
                System.out.println(bigData.data.value); // nullPointerException
            }
        }
        ```
        - BigData를 생성하면 BigData의 인스턴스가 생성된다. 이 때 BigData 인스턴스의 멤버 변수에 초기화가 일어나는데, BigData의 data 멤버 변수는 참조형이므로 null로 초기화된다. count 멤버 변수는 숫자이므로 0으로 초기화된다.
        - 이 문제를 해결하려면 Data 인스턴스를 만들고 BigData.data 멤버 변수에 참조값을 할당하면 된다.

12. **절차 지향 프로그래밍**
    - 프로그래밍 방식은 크게 절차 지향 프로그래밍과 객체 지향 프로그래밍으로 나눌 수 있다.
    - 절차 지향 프로그래밍
        - 절차 지향 프로그래밍은 이름 그대로 절차를 지향한다. 즉, 실행 순서를 중요하게 생각하는 방식이다.
        - 절차 지향 프로그래밍은 프로그램의 흐름을 순차적으로 따르며 처리하는 방식이다. 즉, 어떻게를 중심으로 프로그래밍한다.
    - 객체 지향 프로그래밍
        - 객체 지향 프로그래밍은 이름 그대로 객체를 지향한다. 즉, 객체를 중요하게 생각하는 방식이다.
        - 객체 지향 프로그래밍은 실제 세계의 사물이나 사건을 객체로 보고, 객체들 간의 상호작용을 중심으로 프로그래밍하는 방식이다. 즉, 무엇을 중심으로 프로그래밍한다.
    - 차이점
        - 절차 지향은 데이터와 해당 데이터에 대한 처리 방식이 분리되어 있다. 반면 객체 지향에서는 데이터와 해당 데이터에 대한 행동이 하나의 객체 안에 포함되어 있다.
    - 예시
        ```java
        public class MusicPlayerMain1 {

            public static void main(String[] args) {
                int volume = 0;
                boolean isOn = false;

                // 음악 플레이어 켜기
                isOn = true;
                System.out.println("음악 플레이어를 시작합니다.");
                // 볼륨 증가
                volume++;
                System.out.println(volume);
                // 볼륨 감소
                volume--;
                System.out.println(volume);
                // 음악 플레이어 상태
                System.out.println("음악 플레이어 상태 확인");
                if (isOn) {
                    System.out.println("음악 플레이어 ON, 볼륨 : " + volume);
                } else {
                    System.out.println("음악 플레이어 OFF");
                }
                // 음악 플레이어 끄기
                isOn = false;
                System.out.println("음악 플레이어를 종료합니다.");
            }
        }
        ```
    - 데이터 묶음
        - MusicPlayerData라는 클래스를 만들고, 음악 플레이어에 사용되는 데이터들을 묶어서 멤버 변수로 사용하기
        ```java
        public class MusicPlayerMain2 {

            public static void main(String[] args) {
                MusicPlayerData data = new MusicPlayerData();
                // 음악 플레이어 켜기
                data.isOn = true;
                System.out.println("음악 플레이어를 시작합니다.");
                // 볼륨 증가
                data.volume++;
                System.out.println(data.volume);
                // 볼륨 감소
                data.volume--;
                System.out.println(data.volume);
                // 음악 플레이어 상태
                System.out.println("음악 플레이어 상태 확인");
                if (data.isOn) {
                    System.out.println("음악 플레이어 ON, 볼륨 : " + data.volume);
                } else {
                    System.out.println("음악 플레이어 OFF");
                }
                // 음악 플레이어 끄기
                data.isOn = false;
                System.out.println("음악 플레이어를 종료합니다.");
            }
        }
        ```
        - 음악 플레이어와 관련된 데이터는 MusicPlayerData 클래스에 존재한다. 이제 이 클래스를 사용하도록 기존 로직을 변경했기에 프로그램 로직이 더 복잡해져서 다양한 변수들이 추가되더라도 음악 플레이어와 관련된 변수들은 MusicPlayerData data 객체에 속해있으므로 쉽게 구분할 수 있다.
    - 메서드 추출
        - 메서드를 사용해서 각각의 기능을 구분할 수 있다.
        ```java
        public class MusicPlayerMain2 {

            public static void main(String[] args) {
                MusicPlayerData data = new MusicPlayerData();
                // 음악 플레이어 켜기
                on(data);
                // 볼륨 증가
                volumeUp(data);
                // 볼륨 감소
                volumeDown(data);
                // 음악 플레이어 상태
                showStatus(data);
                // 음악 플레이어 끄기
                off(data);
            }

            static void on(MusicPlayerData data) {
                data.isOn = true;
                System.out.println("음악 플레이어를 시작합니다.");
            }

            static void off(MusicPlayerData data) {
                data.isOn = false;
                System.out.println("음악 플레이어를 종료합니다.");
            }

            static void volumeUp(MusicPlayerData data) {
                data.volume++;
                System.out.println(data.volume);
            }

            static void volumeDown(MusicPlayerData data) {
                data.volume--;
                System.out.println(data.volume);
            }

            static void showStatus(MusicPlayerData data) {
                System.out.println("음악 플레이어 상태 확인");
                if (data.isOn) {
                    System.out.println("음악 플레이어 ON, 볼륨 : " + data.volume);
                } else {
                    System.out.println("음악 플레이어 OFF");
                }
            }
        }
        ```
        - 각각의 기능을 메서드로 만든 덕분에 각각의 기능이 모듈화되었다.
            - 중복 제거 : 로직 중복이 제거되었다. 같은 로직이 필요하면 해당 메서드를 여러 번 호출하면 된다.
            - 변경 영향 범위 : 기능을 수정할 때 해당 메서드 내부만 변경하면 된다.
            - 메서드 이름 추가 : 메서드 이름을 통해 코드를 더 쉽게 이해할 수 있다.
        - 모듈화 : 레고 블럭과 같은 느낌이다. 필요한 블럭을 가져가서 사용할 수 있다. 음악 플레이어의 기능이 필요하면 해당 기능을 메서드 호출만으로 손쉽게 사용할 수 있다.
    - 절차 지향 프로그래밍의 한계
        - 지금까지 작성한 코드의 한계는 바로 데이터와 기능이 분리되어 있다는 점이다. 음악 플레이어의 데이터는 MusicPlayerData에 있는데, 그 데이터를 사용하는 기능은 각각 메서드에 분리되어있다.
        - 데이터와 그 데이터를 사용하는 기능은 매우 밀접하게 연관되어있다. 각각의 메서드를 보면 대부분 MusicPlayerData의 데이터를 사용한다. 따라서 이후에 관련 데이터가 변경되면 메서드들도 함께 변경해야한다. 그리고 데이터와 기능이 분리되어 있으면 유지보수 관점에서도 관리 포인트가 2곳으로 늘어난다.
        - 객체 지향 프로그래밍이 나오기 전까지는 지금과 같이 데이터와 기능이 분리되어 있었다. 하지만 객체 지향 프로그래밍이 나오면서 데이터와 기능을 하나로 묶어서 사용할 수 있게 되었다.

13. **클래스와 메서드**
    ```java
    public class ValueDataMain {

        public static void main(String[] args) {
            ValueData valueData = new ValueData();
            add(valueData);
            add(valueData);
            add(valueData);
            System.out.println("최종 숫자 = " + valueData.value);
        }

        static void add(ValueData valueData) {
            valueData.value++;
            System.out.println(valueData.value);
        }
    }
    ```
    - ValueData라는 인스턴스를 생성하고 외부에서 ValueData.value에 접근해 숫자를 하나씩 증가시키는 단순한 코드이다. 코드를 보면 데이터인 value와 value의 값을 증가시키는 기능인 add() 메서드가 서로 분리되어 있다.
    - 자바 같은 객체 지향 언어는 클래스 내부에 속성(데이터)과 기능(메서드)을 함께 포함할 수 있다. 클래스 내부에 멤버 변수 뿐만 아니라 메서드도 함께 포함할 수 있다는 뜻이다.
    ```java
    public class ValueData {
        int value;
        
        void add() {
            value++;
            System.out.println(value);
        }
    }
    ```
    - 이 클래스에는 데이터인 value와 해당 데이터를 사용하는 기능인 add() 메서드를 함께 정의했다.
    - 여기서 만드는 add() 메서드에는 static 키워드를 사용하지 않는다.
        - 메서드는 객체를 생성해야 호출할 수 있다. 그런데 static이 붙으면 객체를 생성하지 않고도 메서드를 호출할 수 있다.
    - 예시
        ```java
        public class ValueObjectMain {
            public static void main(String[] args) {
                ValueData valueData = new ValueData();
                valueData.add();
                valueData.add();
                valueData.add();
                System.out.println("최종 숫자 = " + valueData.value);
            }
        }
        ```
        - 인스턴스의 메서드를 호출하는 방법은 멤버 변수를 사용하는 방법과 동일하다. .(dot)을 통해 객체 접근한 다음에 원하는 메서드를 호출하면 된다.
        - add() 메서드를 호출하면 메서드 내부에서 value++을 호출하게 된다. 이 때 value에 접근해야 하는데, 기본으로 본인 인스턴스에 있는 멤버 변수에 접근한다.
    - 클래스는 속성(데이터, 멤버 변수)과 기능(메서드)을 정의할 수 있다.
    - 객체는 자신의 메서드를 통해 자신의 멤버 변수에 접근할 수 있다.
        - 객체의 메서드 내부에서 접근하는 멤버 변수는 객체 자신의 멤버 변수이다.

14. **객체 지향 프로그래밍**
    ```java
    public class MusicPlayer {

        int volume = 0;
        boolean isOn = false;

        void on() {
            isOn = true;
            System.out.println("음악 플레이어를 시작합니다.");
        }

        void off() {
            isOn = false;
            System.out.println("음악 플레이어를 종료합니다.");
        }

        void volumeUp() {
            volume++;
            System.out.println(volume);
        }

        void volumeDown() {
            volume--;
            System.out.println(volume);
        }

        void showStatus() {
            System.out.println("음악 플레이어 상태 확인");
            if (isOn) {
                System.out.println("음악 플레이어 ON, 볼륨 : " + volume);
            } else {
                System.out.println("음악 플레이어 OFF");
            }
        }
    }
    ```
    ```java
    public class MusicPlayerMain4 {
        public static void main(String[] args) {
            MusicPlayer player = new MusicPlayer();
            // 음악 플레이어 켜기
            player.on();
            // 볼륨 증가
            player.volumeUp();
            // 볼륨 감소
            player.volumeDown();
            // 음악 플레이어 상태
            player.showStatus();
            // 음악 플레이어 끄기
            player.off();
        }
    }
    ```
    - MusicPlayer를 사용하는 입장에서는 MusicPlayer의 데이터인 volume, isOn 같은 데이터는 전혀 사용하지 않는다.
    - MusicPlayer를 사용하는 입장에서는 이제 MusicPlayer 내부에 어떤 속성(데이터)이 있는지 전혀 몰라도 된다. 단순하게 MusicPlayer가 제공하는 기능 중에 필요한 기능을 호출해서 사용하기만 하면 된다.
    - 캡슐화
        - MusicPlayer를 보면 음악 플레이어를 구성하기 위한 속성과 기능이 마치 하나의 캡슐에 쌓여있는 것 같다. 이렇게 속성과 기능을 하나로 묶어서 필요한 기능을 메서드를 통해 외부에 제공하는 것을 캡슐화라 한다.
    - 객체 지향 프로그래밍 덕분에 음악 플레이어 객체를 사용하는 입장에서 진짜 음악 플레이어를 만들고 사용하는 것처럼 친숙하게 느껴진다. 그래서 코드가 더 읽기 쉬운 것은 물론이고, 속성과 기능이 한 곳에 있기 때문에 변경도 더 쉬워진다. 예를 들어서 MusicPlayer 내부 코드가 변하는 경우에 다른 코드는 변경하지 않아도 된다. MusicPlayer의 필드 이름이 다른 이름으로 변한다고 할 때 MusicPlayer 내부만 변경하면 된다.
    - 또 음악 플레이어가 내부에서 출력하는 메세지를 변경할 때도 MusicPlayer 내부만 변경하면 된다. 이 경우 MusicPlayer를 사용하는 개발자는 코드를 전혀 변경하지 않아도 된다. 물론 외부에서 호출하는 MusicPlayer의 메서드 이름을 변경한다면 MusicPlayer를 사용하는 곳의 코드도 변경해야 한다. 