import serial
import time
import json

# Adjust this to the correct port.
# On many systems the Pico appears as /dev/ttyACM0
SERIAL_PORT = '/dev/ttyACM0'
BAUD_RATE = 115200  # MicroPython default baud rate

# Open the serial connection.
ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
print("Listening on", SERIAL_PORT)

while True:
    try:
        line = ser.readline().decode('utf-8').strip()
        if line:
            try:
                # Convert the string to a float.
                temp = float(line)
                print("Temperature:", temp)

                # Save the reading to a JSON file. Your path may vary.
                data = {"local_temp": temp}
                with open('/home/pi/local_temp.json', 'w') as f:
                    json.dump(data, f)

            except ValueError:
                # If conversion fails, ignore this line.
                print("Invalid reading:", line)
        time.sleep(2)
    except KeyboardInterrupt:
        print("Exiting.")
        break
