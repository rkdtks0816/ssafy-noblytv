from conversation.functions_resources import sendMode, sendData
prompt="""1. mode
2. message
3. ('mode', 'diary')
4. ('mode', 'quiz')
5. ('mode', 'gymnastic')
6. ('message', 'start)
7. ('message','stop')
8. ('message','post up')
0. quit
"""

while True:
    try:
        mode = int(input(prompt))

        if mode == 1:
            text = input("text to send")
            sendMode(text)
        elif mode == 2:
            text = input("text to send")
            sendData(text)
        elif mode == 3:
            sendMode("diary")
        elif mode == 4:
            sendMode("quiz")
        elif mode == 5:
            sendMode("gymnastic")
        elif mode == 6:
            sendData("start")
        elif mode == 7:
            sendData("stop")
        elif mode == 8:
            sendData("post up")
        elif mode == 0:
            break 
        else:
            print("invalid input")
    except:
        print("invalid input")