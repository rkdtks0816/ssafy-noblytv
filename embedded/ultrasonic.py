import Jetson.GPIO as GPIO
import time

echo_pin = 16
trig_pin = 18

GPIO.setmode(GPIO.BOARD)

print("초음파 거리 측정기")

GPIO.setup(trig_pin, GPIO.OUT)
GPIO.setup(echo_pin, GPIO.IN)

GPIO.output(trig_pin, False)
print("초음파 출력 초기화")
time.sleep(2)

try:
    while True:
        GPIO.output(trig_pin, True)
        time.sleep(0.00001)
        GPIO.output(trig_pin, False)
        start = time.time()
        stop = time.time()

        while GPIO.input(echo_pin) == 0:
            start = time.time()
            # print("echo start")

        while GPIO.input(echo_pin) == 1:
            stop = time.time()
            # print("echo end")

        check_time = stop - start
        distance = check_time * 34300 / 2
        print("Distance : %.1f cm" % distance)
        time.sleep(0.4)

except KeyboardInterrupt:
    GPIO.cleanup()
    print("초음파 측정 종료")

