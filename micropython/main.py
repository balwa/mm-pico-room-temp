import machine
import utime

# Set up ADC channel for the onboard temperature sensor (ADC(4))
sensor_temp = machine.ADC(4)

while True:
    # Read the raw ADC value (0-65535)
    reading = sensor_temp.read_u16()
    
    # Convert the raw reading to voltage
    # (Assuming 3.3V reference and 16-bit reading)
    voltage = reading * 3.3 / 65535
    
    # Convert voltage to temperature in Celsius.
    # The datasheet formula is:
    #   Temperature (°C) = 27 - (voltage - 0.706) / 0.001721
    temperature = 27 - ((voltage - 0.706) / 0.001721)
    
    # Print the temperature. This goes out over the USB serial connection.
    print("{:.2f}".format(temperature))
    
    # Wait 1 second between readings.
    utime.sleep(5)
