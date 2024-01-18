# <center>TIL<center>
## 2024/01/12(5일차)

# 오늘 학습 내용 :memo:
1. **기본 생성자**
    - 매개변수가 없는 생성자를 기본 생성자라 한다.
    - 클래스에 생성자가 하나도 없으면 자바 컴파일러는 매개변수가 없고, 작동하는 코드가 없는 기본 생성자를 자동으로 만들어준다.
    - 생성자가 하나라도 있으면 자바는 기본 생성자를 만들지 않는다.
    ```java
    public class MemberDefault {
        String name;
        //기본 생성자
        public MemberDefault() {
        }
    }
    ```
    - 자바가 자동으로 생성해주는 기본 생성자는 클래스와 같은 접근 제어자를 가진다.
    - 만약 자바에서 기본 생성자를 만들어주지 않는다면 생성자 기능이 필요하지 않은 경우에도 모든 클래스에 개발자가 직접 기본 생성자를 정의해야 한다. 생성자 기능을 사용하지 않는 경우도 많기 때문에 이런 편의 기능을 제공한다.

2. **생성자 - 오버로딩과 this()**
    - 생성자도 메서드 오버로딩처럼 매개변수만 다르게 해서 여러 생성자를 제공할 수 있다.
    ```java
    public class MemberConstruct {
        String name;
        int age;
        int grade;
        
        // 추가
        MemberConstruct(String name, int age) {
            this.name = name;
            this.age = age;
            this.grade = 50;
        }

        MemberConstruct(String name, int age, int grade) {
            this.name = name;
            this.age = age;
            this.grade = grade;
        }
    }
    ```
    - 기존 MemberConstruct에 생성자를 하나 추가하여 생성자가 2개가 되었다.
    - 새로 추가한 생성자는 grade를 받지 않는 대신 50점이 된다.
    - 생성자를 오버로딩한 덕분에 성적 입력이 꼭 필요한 경우에는 grade가 있는 생성자를 호출하면 되고, 그렇지 않는 경우에는 grade가 없는 생성자를 호출하면 된다.

3. **this()**
    - 위 두 생성자를 비교할 때 코드가 중복되는 부분이 존재한다.
    - 이 때 this()라는 기능을 사용하면 생성자 내부에서 자신의 생성자를 호출할 수 있다. 참고로 this는 인스턴스 자신의 참조값을 가리킨다.
    ```java
    public class MemberConstruct {
        String name;
        int age;
        int grade;
        
        // 추가
        MemberConstruct(String name, int age) {
            this(name, age, 50);  // 변경
        }

        MemberConstruct(String name, int age, int grade) {
            this.name = name;
            this.age = age;
            this.grade = grade;
        }
    }
    ```
    - 이 코드는 첫 번째 생성자 내부에서 두 번째 생성자를 호출한다.
    - this()를 사용하면 생성자 내부에서 다른 생성자를 호출할 수 있다. 이 부분을 잘 활용하면 지금과 같이 중복을 제거할 수 있다.
    - this() 규칙
        - this()는 생성자 코드의 첫 줄에만 작성할 수 있다.
        - 그렇지 않을 경우 컴파일 오류가 발생한다.

4. **패키지**
    - 컴퓨터는 보통 파일을 분류하기 위해 폴더, 디렉토리라는 개념을 제공한다. 자바도 이런 개념을 제공하는데, 이것이 바로 패키지이다.
    - 패키지 안에 관련된 자바 클래스들을 넣는다.
    - 패키지 사용
        ```java
        package pack;

        public class Data {
            public Data() {
                System.out.println("패키지 pack Data 생성");
            }
        }
        ```
        - 패키지를 사용하는 경우 코드 첫 줄에 패키지 이름을 적어주어야 한다.
        - 패키지를 먼저 만들고, 그 이후에 클래스를 만든다.
        - 이후 Data 인스턴스가 생성되면 생성자를 통해 정보를 출력한다.
        - 생성자에 public을 사용했다. 다른 패키지에서 이 클래스의 생성자를 호출하려면 public을 사용해야 한다.
        ```java
        package pack;

        public class PackageMain1 {

            public static void main(String[] args) {
                Data data = new Data();
                pack.a.User user = new pack.a.User();
            }
        }
        ```
        - 사용자와 같은 위치 : PackageMain1과 같은 Data는 같은 pack이라는 패키지에 소속되어 있다. 이렇게 같은 패키지에 있는 경우에는 패키지 경로를 생략해도 된다.
        - 사용자와 다른 위치 : PackageMain1과 User는 서로 다른 패키지다. 이렇게 패키지가 다르면 pack.a.User와 같이 패키지 전체 경로를 포함해서 클래스를 적어주어야 한다.

5. **import**
    - 서로 다른 패키지일 경우 패키지 전체 경로를 적어주는 것이 불편하기에 import를 사용한다.
    ```java
    package pack;

    import pack.a.User;

    public class PackageMain2 {

        public static void main(String[] args) {
            Data data = new Data();
            User user = new User();  // import 사용으로 패키지 명 생략 가능
        }
    }
    ```
    - 코드 첫 줄에는 package를 사용하고, 다음 줄에는 import를 사용할 수 있다.
    - import를 사용하면 다른 패키지에 있는 클래스를 가져와서 사용할 수 있다.
    - import를 사용한 덕분에 코드에서는 패키지명을 생략하고 클래스 이름만 적을수 있다.
    - 특정 패키지에 포함된 모든 클래스를 포함해서 사용하고 싶으면 import 시점에 *을 사용하면 된다.(예 : import pack.a.*)
    - 클래스 이름 중복
        - 패키지 덕분에 클래스 이름이 같아도 패키지 이름으로 구분해서 같은 이름의 클래스를 사용할 수 있다.
        ```java
        package pack;

        import pack.a.User;

        public class PackageMain3 {

            public static void main(String[] args) {
                User userA = new User();
                pack.b.User userB = new pack.b.User();
            }
        }
        ```
        - 같은 이름의 클래스가 있다면 import는 둘 중 하나만 선택할 수 있다. 이 때는 자주 사용하는 클래스를 import하고 나머지를 패키지를 포함한 전체 경로를 적어주면 된다.

6. **패키지 규칙**
    - 패키지의 이름과 위치는 폴더(디렉토리) 위치와 같아야한다.
    - 패키지 이름은 모두 소문자를 사용한다. (관례)
    - 패키지 이름의 앞 부분에는 일반적으로 회사의 도메인 이름을 거꾸로 사용한다. 예를 들어, com.company.myapp과 같이 사용한다. (관례)
        - 이 부분은 필수는 아니다. 하지만 수 많은 외부 라이브러리가 함께 사용되면 같은 패키지에 같은 클래스 이름이 존재할 수도 있다. 이렇게 도메인 이름을 거꾸로 사용하면 이런 문제를 방지할 수 있다.
        - 오픈소스나 라이브러리를 만들어서 외부에 제공한다면 꼭 지키는 것이 좋다.
    - 계층 구조
        - a 패키지 하위에 b, c 패키지가 존재하여 총 a, a.b, a.c 3개의 패키지가 존재할 때 우리 눈에 보기에 계층 구조를 이루지만 사실, a 패키지와 a.b, a.c 패키지는 서로 완전히 다른 패키지이다.
        - 따라서 a 패키지의 클래스에서 a, b 패키지의 클래스가 필요하면 import해서 사용해야한다. 반대의 경우도 마찬가지이다.
        - 패키지가 계층 구조를 이루더라도 모든 패키지는 서로 다른 패키지이다.

7. **접근 제어자**
    - 자바는 public, private 같은 접근 제어자(access modifier)를 제공한다. 접근 제어자를 사용하면 해당 클래스 외부에서 특정 필드나 메서드에 접근하는 것을 허용하거나 제한할 수 있다.
    ```java
    package access;

    public class Speaker {
        int volume;
        
        Speaker(int volume) {
            this.volume = volume;
        }
        
        void volumeUp() {
            if (volume >= 100) {
                System.out.println("음량을 증가할 수 없습니다. 최대 음량입니다.");
            } else {
                volume += 10;
                System.out.println("음량을 10 증가합니다.");
            }
        }
        
        void volumeDown() {
            volume -= 10;
            System.out.println("음량을 10 감소합니다.");
        }
        
        void showVolume() {
            System.out.println(volume);
        }
    }
    ```
    ```java
    package access;

    public class SpeakerMain {
        public static void main(String[] args) {
            Speaker speaker = new Speaker(90);
            speaker.showVolume();

            speaker.volumeUp();
            speaker.showVolume();
            
            speaker.volumeDown();
            speaker.showVolume();
        }
    }
    ```
    - Speaker 객체를 사용하는 사용자는 Speaker의 volume 필드와 메서드에 모두 접근할 수 있다.
    - volume 필드를 Speaker 클래스 외부에서는 접근하지 못하게 막기 위해서는 private 접근 제어자를 사용한다.
    ```java
    package access;

    public class Speaker {
        private int volume; // private 사용
    }
    ```
    - private 접근 제어자는 모든 외부 호출을 막는다. 따라서 private이 붙은 경우 해당 클래스 내부에서만 호출할 수 있다.
    - volume 필드는 이제 Speaker 내부에서만 접근할 수 있다.
    - 이제 Speaker 외부에서 volume 필드에 접근하면 컴파일 오류가 발생한다.

8. **접근 제어자 종류**
    - private : 모든 외부 호출을 막는다.
    - default(package-private) : 같은 패키지 안에서만 호출을 허용한다.
    - protected : 같은 패키지 안에서 호출을 허용한다 + 패키지가 달라도 상속 관계의 호출을 허용한다.
    - public : 모든 외부 호출을 허용한다.
    - 위에서 순서대로 private이 가장 많이 차단하고, public이 가장 많이 허용한다.
    - package-privatte
        - 접근 제어자를 명시하지 않으면 같은 패키지 안에서만 호출을 허용하는 default 접근 제어자가 적용된다.
        - default라는 용어는 해당 접근 제어자가 기본값으로 사용되기 때문에 붙여진 이름이지만, 실제로는 package-private이 더 정확한 표현이다. 해당 접근 제어자를 사용하는 멤버는 동일한 패키지 내의 다른 클래스에서만 접근이 가능하기 때문이다.
    - 접근 제어자 사용 위치
        - 접근 제어자는 필드, 메서드, 생성자에 사용된다.
        - 클래스 레벨에도 일부 접근 제어자를 사용할 수 있다.
    - 접근 제어자의 핵심은 속성과 기능을 외부로부터 숨기는 것이다.
        - private는 나의 클래스 안으로 속성과 기능을 숨길 때 사용, 외부 클래스에서 해당 기능을 호출할 수 없다.
        - default는 나의 패키지 안으로 속성과 기능을 숨길 때 사용, 외부 패키지에서 해당 기능을 호출할 수 없다.
        - protected는 상속 관계로 속성과 기능을 숨길 때 사용, 상속 관계가 아닌 곳에서 해당 기능을 호출할 수 없다.
        - public은 기능을 숨기지 않고 어디서든 호출할 수 있게 공개한다.

9. **접근 제어자 사용(필드, 메서드)**
    ```java
    package access.a;

    public class AccessData {

        public int publicField;
        int defaultField;
        private int privateField;

        public void publicMethod() {
            System.out.println(publicField);
        }

        void defaultMethod() {
            System.out.println(defaultField);
        }

        private void privateMethod() {
            System.out.println(privateField);
        }

        public void innerAccess() {
            publicField = 100;
            defaultField = 200;
            privateField = 300;
            publicMethod();
            defaultMethod();
            privateMethod();
        }
    }
    ```
    - 패키지 위치는 package access.a이다.
    - 순서대로 public, default, private을 필드와 메서드에 사용한다.
    - 마지막에 innerAccess()가 있는데, 이 메서드는 내부 호출을 보여준다. 내부 호출은 자기 자신에게 접근하는 것이다. 따라서 private을 포함한 모든 곳에 접근할 수 있다.
    ```java
    package access.a;

    public class AccessInnerMain {
        public static void main(String[] args) {
            AccessData data = new AccessData();
            // public 호출 가능
            data.publicField = 1;
            data.publicMethod();
            
            // default 호출 가능
            data.defaultField = 2;
            data.defaultMethod();
            
            // private 호출 불가
        }
    }
    ```
    - 패키지 위치는 package access.a이다.
    - public은 모든 접근을 허용하기 때문에 필드, 메서드 모두 접근 가능하다.
    - default는 같은 패키지에서 접근할 수 있다.
    - private는 호출이 불가하다.
    ```java
    package access.b;

    import access.a.AccessData;

    public class AccessOuterMain {
        public static void main(String[] args) {
            AccessData data = new AccessData();
            // public 호출 가능
            data.publicField = 1;
            data.publicMethod();

            // default 호출 불가

            // private 호출 불가
        }
    }
    ```
    - 패키지 위치는 package access.b이다.
    - public은 모든 접근을 허용하기 때문에 필드, 메서드 모두 접근할 수 있다.
    - 서로 다른 패키지이므로, default 접근 제어자에 접근할 수 없다.
    - private도 호출이 불가하다.

