// import * as mqtt from 'mqtt/dist/mqtt.js'

const connectButton = document.getElementById('publish_button');

connectButton.addEventListener('click', () => {
  var topic = document.querySelector('input[name="publish_topic"]').value;
  var qos = document.querySelector('select[name="publish_qos_level"]').value;
  var message = document.querySelector('textarea[name="publish_message"]').value;

  console.log(topic,qos,message);

  // mqttPublish(topic,qos,message);
});

// function mqttPublish(topic,qos,message) {

//   const options = {
    
//   }

//     var client = mqtt.connect(options);
  
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