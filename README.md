# Summary

Raspberry Pi Pico 2 has an internal temperature sensor is connected to an internal ADC pin #4. We want to use that to be able to set in default Weather Module of Magic Mirror.

The pico 2 (without wifi on board) is connected to pi 4 on usb 2.0 interface. Why not use cheap off-the-shelf temperature sensors connected to pi 4 directly? you can, i just don't have them with me right now and have an idle pico 2.

```
showIndoorTemperature: If you have another module that emits the INDOOR_TEMPERATURE notification, the indoor temperature will be displayed
Default value: false
```

# Quick steps

Assuming you already have switched to micropython, you can install MicroPico by paulober for VS code.

Persist the main.py file to pico using appropriate action starting with `MicroPico` in command pallete.

Then connect it the pico to Raspberry Pi. I am using Pi4.

Now we need to run the script in background that will read from serial port

`sudo pip3 install pyserial`

Run the python file at pi 4 startup and install the module PicoIndoorTemp to your MagicMirror path.

if the setup is working you would see something similar in your current weather config for magic mirror:

![home icon with indoor temperature](indoorTemp.jpeg)
