// import * as mqtt from 'mqtt/dist/mqtt.js'

const connectButton = document.getElementById('subscribe_button');

connectButton.addEventListener('click', () => {
  var topic = document.querySelector('input[name="subscribe_topic"]').value;
  var qos = document.querySelector('select[name="subscribe_qos_level"]').value;

  console.log(topic,qos);

  // mqttSubscibe(topic,qos);
});

// function mqttSubscibe(topic,qos) {

//   const options = {
    
    

//   }
  
//     var client = mqtt.connect(options);
  
//     client.on('connect', function () {
//       console.log('Connected');
//     });
  
//     client.on('error', function (err) {
//       console.log(err);
//     });
  
//     client.on('close', function () {
//       console.log('Disconnected');
//     });
  
//     client.on('message', function (topic, message) {
//       console.log(message.toString());
//     });
  
//     client.subscribe('testtopic', function (err) {
//       if (!err) {
//         console.log('Subscribed');
//       }
//     });
  
//     client.publish('testtopic', 'Hello mqtt');
  
//   }