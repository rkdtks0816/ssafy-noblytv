import sys
 
import lirc

if len(sys.argv) >= 3:
    sys.stderr.write("Usage: irw.py [socket path]")
    sys.exit(1)

path = sys.argv[1] if len(sys.argv) == 2 else None
with lirc.RawConnection(path) as conn:
    while True:
        key = conn.readline().split()[2]
        
        if(key == "KEY_5"):
            print("FIVE")

        else:
            print("NO")
