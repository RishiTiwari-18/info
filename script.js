navigator.getBattery().then(function (battery) {
  function updateBatteryStatus() {
    document.querySelector("#batteryLevel").textContent =
      `"${battery.level*100}%"`;
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

        // Format date (e.g., "May 6, 2024")
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString(undefined, options);

        // Format time (e.g., "14:24:01")
        const formattedTime = now.toLocaleTimeString();

        // Update elements
        currentDateElement.textContent = `"${formattedDate}"`;
        currentTimeElement.textContent = `"${formattedTime}"`;
    }

    // Call the function initially
    updateDateTime();

    // Update every second (optional)
    setInterval(updateDateTime, 1000);


