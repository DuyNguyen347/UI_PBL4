
// const brightness = document.getElementById("brightness");
// const volumeIcon = document.getElementById("volumeIcon");
// const wrapBluetooth = document.getElementsByClassName("wrap-bluetooth")[0];
// const bluetoothCheckbox = document.getElementById("bluetoothCheckbox");
// const wrapWifi = document.getElementsByClassName("wrap-wifi")[0];
const volume = document.getElementById("volume");
const wifiCheckbox = document.getElementById("wifiCheckbox");
const wifiButton = document.getElementById("wifiButton");
const bluetoothButton = document.getElementById("bluetoothButton");
const bluetoothCheckbox = document.getElementById("bluetoothCheckbox");
const airplaneButton = document.getElementById("airplaneButton");
const airplaneCheckbox = document.getElementById("airplaneCheckbox");
const nightLightButton = document.getElementById("nightLightButton");
const nightLightCheckbox = document.getElementById("nightLightCheckbox");
const webcamButton = document.getElementById("webcamButton");
const webcamCheckbox = document.getElementById("webcamCheckbox");
const microButton = document.getElementById("microButton");
const microCheckbox = document.getElementById("microCheckbox");
const touchpadButton = document.getElementById("touchpadButton");
const touchpadCheckbox = document.getElementById("touchpadCheckbox");
const keyboardButton = document.getElementById("keyboardButton");
const keyboardCheckbox = document.getElementById("keyboardCheckbox");
const doNotDisturbButton = document.getElementById("doNotDisturbButton");
const doNotDisturbCheckbox = document.getElementById("doNotDisturbCheckbox");
  volume.oninput = ()=>{  
    if(volume.value>=90){
      volumeIcon.setAttribute("src","./img/volume-high-outline.svg")
    }
    else if(volume.value>=50){
      volumeIcon.setAttribute("src","./img/volume-medium-outline.svg")
    }
    else if(volume.value>0){
      volumeIcon.setAttribute("src","./img/volume-low-outline.svg")
    }
    else {
      volumeIcon.setAttribute("src","./img/volume-mute-outline.svg")
    }
    setValueVolum(volume.value);
  }
//   brightness.oninput = ()=>{
//     document.getElementById("progressBright").setAttribute("style", "--value:" + brightness.value);
//     setValueBright(brightness.value);
//   }
//   bluetoothCheckbox.onchange = function(){
//     if (bluetoothCheckbox.checked == true) {
//       turnOnBluetooth();
//       wrapBluetooth.classList.remove("btnDisable");
//     } else {
//       turnOffBluetooth();
//       wrapBluetooth.classList.add("btnDisable");
//     }
//   }
  // wifiCheckbox.onchange = function(){
  //   console.log("nguyen duc duy");
  //   alert("checkbox");
  // }
  
  // wrapWifi.onclick = function(){
  //   wifiCheckbox.checked = !wifiCheckbox.checked;
  // }
  // wrapBluetooth.onclick = function(){
  //   bluetoothCheckbox.checked = !bluetoothCheckbox.checked;
  // }
// window.onload = function () {
//   const password = "68709502";
//   login(password);
//   volume.value = getValueVolume();
//   brightness.value = getValueBright();
//     wifiCheckbox.checked = getStateWifi();
//     bluetoothCheckbox.checked = getStateBluetooth();
//     brightness.oninput();
//     volume.oninput();
//     bluetoothCheckbox.onchange();
//     wifiCheckbox.onchange();
//   }

wifiButton.onclick = function(){
  wifiCheckbox.checked = !wifiCheckbox.checked;
  if(wifiCheckbox.checked == true){
    wifiButton.classList.remove("none-active");
    var img = wifiButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/wifi_light.png");
  }
  else{
    wifiButton.classList.add("none-active");
    var img = wifiButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/wifi-off.png");
  }
}
bluetoothButton.onclick = function(){
  bluetoothCheckbox.checked = !bluetoothCheckbox.checked;
  if(bluetoothCheckbox.checked == true){
    bluetoothButton.classList.remove("none-active");
    var img = bluetoothButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/bluetooth_white.png");
  }
  else{
    bluetoothButton.classList.add("none-active");
    var img = bluetoothButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/bluetooth-off.png");
  }
}
airplaneButton.onclick = function(){
  airplaneCheckbox.checked = !airplaneCheckbox.checked;
  if(airplaneCheckbox.checked == true){
    airplaneButton.classList.remove("none-active");
    var img = airplaneButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/airplane_white.png");
  }
  else{
    airplaneButton.classList.add("none-active");
    var img = airplaneButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/airplane-off.png");
  }
}
nightLightButton.onclick = function(){
  nightLightCheckbox.checked = !nightLightCheckbox.checked;
  if(nightLightCheckbox.checked == true){
    nightLightButton.classList.remove("none-active");
    var img = nightLightButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/night_white.png");
  }
  else{
    nightLightButton.classList.add("none-active");
    var img = nightLightButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/night-off.png");
  }
}
webcamButton.onclick = function(){
  webcamCheckbox.checked = !webcamCheckbox.checked;
  if(webcamCheckbox.checked == true){
    webcamButton.classList.remove("none-active");
    var img = webcamButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/webcam_white.png");
  }
  else{
    webcamButton.classList.add("none-active");
    var img = webcamButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/webcam-off.png");
  }
}
microButton.onclick = function(){
  microCheckbox.checked = !microCheckbox.checked;
  if(microCheckbox.checked == true){
    microButton.classList.remove("none-active");
    var img = microButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/micro_white.png");
  }
  else{
    microButton.classList.add("none-active");
    var img =  microButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/micro-off.png");
  }
}
touchpadButton.onclick = function(){
  touchpadCheckbox.checked = !touchpadCheckbox.checked;
  if(touchpadCheckbox.checked == true){
    touchpadButton.classList.remove("none-active");
    var img = touchpadButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/touchpad_white.png");
  }
  else{
    touchpadButton.classList.add("none-active");
    var img = touchpadButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/touchpad-off.png");
  }
}
keyboardButton.onclick = function(){
  keyboardCheckbox.checked = !keyboardCheckbox.checked;
  if(keyboardCheckbox.checked == true){
    keyboardButton.classList.remove("none-active");
    var img = keyboardButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/keyboard_white.png");
  }
  else{
    keyboardButton.classList.add("none-active");
    var img = keyboardButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/keyboard-off.png");
  }
}
doNotDisturbButton.onclick = function(){
  doNotDisturbCheckbox.checked = !doNotDisturbCheckbox.checked;
  if(doNotDisturbCheckbox.checked == true){
    doNotDisturbButton.classList.remove("none-active");
    var img = doNotDisturbButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/notification_white.png");
  }
  else{
    doNotDisturbButton.classList.add("none-active");
    var img = doNotDisturbButton.getElementsByClassName("img")[0];
    img.setAttribute("src","./img/notification-off.png");
  }
}

  
    
    