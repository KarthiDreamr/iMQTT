// import * as mqtt from './MQTT.js-4.3.7/mqtt.js';
// import * as mqtt from '/node_modules/mqtt/dist/mqtt.js';

// import * as mqtt from 'mqtt/dist/mqtt.js'

// const mqtt = require('mqtt')

const connectButton = document.getElementById('connect_button');

connectButton.addEventListener('click', () => {
  var connectionName = document.querySelector('input[name="connection_name"]').value;
  var protocol = document.querySelector('select[name="protocol"]').value;
  var host = document.querySelector('input[name="host"]').value;
  var port = document.querySelector('input[name="port"]').value;
  var clientId = document.querySelector('input[name="client_id"]').value;
  var username = document.querySelector('input[name="username"]').value;
  var password = document.querySelector('input[name="password"]').value;
  var keepAlive = document.querySelector('input[name="keep_alive"]').value;
  // var ssl = document.querySelector('input[name="ssl"]').checked;
  var automaticReconnect = document.querySelector('input[name="automatic_reconnect"]').checked;
  var cleanSession = document.querySelector('input[name="clean_session"]').checked;
  var lastWillTopic = document.querySelector('input[name="last_will_topic"]').value;
  var lastWillQoS = document.querySelector('select[name="QoS_level"]').value;
  var lastWillRetain = document.querySelector('input[name="last_will_retain"]').checked;
  var lastWillMessage = document.querySelector('textarea[name="last_will_message"]').value;

  console.log(connectionName,protocol,host, port, clientId, username, password, keepAlive, automaticReconnect, cleanSession, lastWillTopic, lastWillQoS, lastWillRetain, lastWillMessage);

  // mqttConnect(connectionName,protocol,host, port, clientId, username, password, keepAlive, automaticReconnect, cleanSession, lastWillTopic, lastWillQoS, lastWillRetain, lastWillMessage);
});

// function mqttConnect(connectionName,protocol,host, port, clientId, username, password, keepAlive, automaticReconnect, cleanSession, lastWillTopic, lastWillQoS, lastWillRetain, lastWillMessage) {

//   const options = {
    
//     // connectionName: connectionName,
//     host: protocol+host, // check
//     port: port,
//     clientId: clientId,
//     username: username,
//     password: password,
//     keepAlive: keepAlive,
//     // ssl: ssl,
//     reconnectPeriod: automaticReconnect,
//     clean: cleanSession,
//     lastWillTopic: lastWillTopic,
//     lastWillQoS: lastWillQoS,
//     lastWillRetain: lastWillRetain,
//     lastWillMessage: lastWillMessage

//   }

//   var client = mqtt.connect(options);

//   client.on('connect', function () {
//     console.log('Connected');
//   });

//   client.on('error', function (err) {
//     console.log(err);
//   });

//   client.on('close', function () {
//     console.log('Disconnected');
//   });

// }



