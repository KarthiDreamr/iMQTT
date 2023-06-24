// import * as mqtt from './MQTT.js-4.3.7/mqtt.js';

// import * as mqtt from '/node_modules/mqtt/dist/mqtt.js';



import * as mqtt from './node_modules/mqtt/dist/mqtt.js'

const connectButton = document.getElementById('connect_button');

connectButton.addEventListener('click', () => {
  const host = document.querySelector('input[name="host"]').value;
  const port = document.querySelector('input[name="port"]').value;
  const clientId = document.querySelector('input[name="client_id"]').value;
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const keepAlive = document.querySelector('input[name="keep_alive"]').value;
  const ssl = document.querySelector('input[name="ssl"]').checked;
  const cleanSession = document.querySelector('input[name="clean_session"]').checked;
  const lastWillTopic = document.querySelector('input[name="last_will_topic"]').value;
  const lastWillQoS = document.querySelector('select[name="QoS_level"]').value;
  const lastWillRetain = document.querySelector('input[name="last_will_retain"]').checked;
  const lastWillMessage = document.querySelector('input[name="last_will_message"]').value;

  print(host, port, clientId, username, password, keepAlive, ssl, cleanSession, lastWillTopic, lastWillQoS, lastWillRetain, lastWillMessage);


  mqttConnect(host, port, clientId, username, password, keepAlive, ssl, cleanSession, lastWillTopic, lastWillQoS, lastWillRetain, lastWillMessage);
});

function mqttConnect (host, port, clientId, username, password, keepAlive, ssl, cleanSession, lastWillTopic, lastWillQoS, lastWillRetain, lastWillMessage) {

  var options = {
    host: host,
    port: port,
    clientId: clientId,
    username: username,
    password: password,
    keepalive: keepAlive,
    ssl: ssl,
    clean: cleanSession,
    will: {
      topic: lastWillTopic,
      qos: lastWillQoS,
      retain: lastWillRetain,
      payload: lastWillMessage
    }
  };

  var client = mqtt.connect(options);

  client.on('connect', function () {
    console.log('Connected');
  });

  client.on('error', function (err) {
    console.log(err);
  });

  client.on('close', function () {
    console.log('Disconnected');
  });

  client.on('message', function (topic, message) {
    console.log(message.toString());
  });

  client.subscribe('testtopic', function (err) {
    if (!err) {
      console.log('Subscribed');
    }
  });

  client.publish('testtopic', 'Hello mqtt');
}