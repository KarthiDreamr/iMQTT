function checkPortValue() {
    var portInput = document.getElementsByName("port");
    var portError = document.getElementById("port_error");
    if (portInput.value > 65535) {
      portInput.value = 65535;
      portError.innerHTML = "Port number must be between 1 and 65535.";
    } else {
      portError.innerHTML = "";
    }
  }