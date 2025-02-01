Module.register("MMM-PicoIndoorTemp", {
    defaults: {
      updateInterval: 5000, // check every five seconds
      filePath: "/home/pi/local_temp.json" // the file written by the python Pi script. your path may vary.
    },
  
    start: function() {
      this.sendSocketNotification("INIT", this.config);
    },
  
    // Optionally, you can show the current reading in your module (or leave this empty)
    getDom: function() {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = "Local Temp Module Running...";
      return wrapper;
    },
  
    // Receive notifications from the node helper and forward as Magic Mirror notifications.
    socketNotificationReceived: function(notification, payload) {
      if (notification === "PICO_TEMPERATURE") {
        // Forward the temperature to the weather module.
        this.sendNotification("INDOOR_TEMPERATURE", payload);
      }
    }
  });
  