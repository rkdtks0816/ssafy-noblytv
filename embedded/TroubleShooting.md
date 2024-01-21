# Embedded 파트를 진행하면서 있었던 Trouble Shooting

## 적외선 수신

### 진행 방법

1. 회로 연결
   - dc - pin 1, gnd - pin 9, data - pin27
2. 라이브러리 다운로드

   `sudo apt-get install lirc`

3. ir 센서 사용을 위한 설정

   - `sudo vi /etc/modules` 에 `lirc_dev`, `lirc_rpi gpio_in_pin=27` 추가

   - `sudo vi /etc/lirc/lirc_options.conf`에서 `driver = default`, `device = /dev/lirc0`으로 변경

   - `sudo reboot`

4. 서비스 실행

   - `sudo /etc/init.d/lircd start`
   - `sudo /etc/init.d/lircd status`
   - `sudo /etc/init.d/lircd stop`
   - `mode2 -d /dev/lirc0`

### Error 내용

1. `sudo /etc/init.d/lircd status`에서 `Error: could not get file information for /dev/lirc0` 에러가 뜸
2. `mode2 -d /dev/lirc0`에서 `Cannot initiate device /dev/lirc0`이 뜸

### 해결 여부

- 미해결
- 여러 자료를 검색해본 결과, lirc는 raspberry pi를 위한 module만 제공하고 있어서 Jetson nano에서는 실행 하지 못하는 것으로 추정
- Jetson nano의 dtoverlay 설정을 찾아보는 중
