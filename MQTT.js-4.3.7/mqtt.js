/*
 * Copyright (c) 2015-2015 MQTT.js contributors.
 * Copyright (c) 2011-2014 Adam Rudd.
 *
 * See LICENSE for more information
 */

import MqttClient from './lib/client'
import connect from './lib/connect'
import Store from './lib/store'
import DefaultMessageIdProvider from './lib/default-message-id-provider'
import UniqueMessageIdProvider from './lib/unique-message-id-provider'

const _connect = connect
export { _connect as connect }

// Expose MqttClient
const _MqttClient = MqttClient
export { _MqttClient as MqttClient }
export const Client = MqttClient
const _Store = Store
export { _Store as Store }
const _DefaultMessageIdProvider = DefaultMessageIdProvider
export { _DefaultMessageIdProvider as DefaultMessageIdProvider }
const _UniqueMessageIdProvider = UniqueMessageIdProvider
export { _UniqueMessageIdProvider as UniqueMessageIdProvider }
