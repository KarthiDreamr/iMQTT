var portInput = document.getElementsByName("port")[0];
var portError = document.getElementById("port_error");

portInput.addEventListener("input", checkPortValue);

function checkPortValue() {
    if (portInput.value > 65535) {
      portInput.value = 65535;
      portError.innerHTML = "Port number must be between 1 and 65535.";
    } else {
      portError.innerHTML = "";
    }
}
