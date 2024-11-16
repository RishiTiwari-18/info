navigator.getBattery().then(function (battery) {
  function updateBatteryStatus() {
    document.querySelector("#batteryLevel").textContent =
      `"${Math.floor(battery.level*100)}%"`;
    document.querySelector("#chargingStatus").textContent = battery.charging
      ? `"Charging"`
      : `"Not Charging"`;
  }

  updateBatteryStatus();

  battery.addEventListener("chargingchange", function () {
    updateBatteryStatus();
  });
  battery.addEventListener("levelchange", function () {
    updateBatteryStatus();
  });
});



    function updateDateTime() {
        const currentDateElement = document.getElementById('current-date');
        const currentTimeElement = document.getElementById('current-time');

        const now = new Date();

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString(undefined, options);

        const formattedTime = now.toLocaleTimeString();

        currentDateElement.textContent = `"${formattedDate}"`;
        currentTimeElement.textContent = `"${formattedTime}"`;
    }

    updateDateTime();

    setInterval(updateDateTime, 1000);


