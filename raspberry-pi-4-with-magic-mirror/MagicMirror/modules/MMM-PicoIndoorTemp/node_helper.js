const NodeHelper = require("node_helper");
const fs = require("fs");

module.exports = NodeHelper.create({
  start: function() {
    this.config = {};
    this.startTimer();
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification === "INIT") {
      this.config = payload;
    }
  },

  startTimer: function() {
    setInterval(() => {
      this.readTemperature();
    }, 5000); // every five seconds
  },

  readTemperature: function() {
    fs.readFile("/home/pi/local_temp.json", "utf8", (err, data) => {
      if (err) {
        console.error("MMM-PicoIndoorTemp: Error reading file", err);
        return;
      }
      try {
        const jsonData = JSON.parse(data);
        // Send the temperature value (assuming the file format is { "local_temp": value }).
        this.sendSocketNotification("PICO_TEMPERATURE", jsonData.local_temp);
      } catch (e) {
        console.error("MMM-PicoIndoorTemp: Error parsing JSON", e);
      }
    });
  }
});
