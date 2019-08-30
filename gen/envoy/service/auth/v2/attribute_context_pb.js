/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var envoy_api_v2_core_address_pb = require('../../../../envoy/api/v2/core/address_pb.js');
goog.object.extend(proto, envoy_api_v2_core_address_pb);
var envoy_api_v2_core_base_pb = require('../../../../envoy/api/v2/core/base_pb.js');
goog.object.extend(proto, envoy_api_v2_core_base_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.envoy.service.auth.v2.AttributeContext', null, global);
goog.exportSymbol('proto.envoy.service.auth.v2.AttributeContext.HttpRequest', null, global);
goog.exportSymbol('proto.envoy.service.auth.v2.AttributeContext.Peer', null, global);
goog.exportSymbol('proto.envoy.service.auth.v2.AttributeContext.Request', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.envoy.service.auth.v2.AttributeContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.service.auth.v2.AttributeContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.service.auth.v2.AttributeContext.displayName = 'proto.envoy.service.auth.v2.AttributeContext';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.service.auth.v2.AttributeContext.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.service.auth.v2.AttributeContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.service.auth.v2.AttributeContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.auth.v2.AttributeContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: (f = msg.getSource()) && proto.envoy.service.auth.v2.AttributeContext.Peer.toObject(includeInstance, f),
    destination: (f = msg.getDestination()) && proto.envoy.service.auth.v2.AttributeContext.Peer.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.envoy.service.auth.v2.AttributeContext.Request.toObject(includeInstance, f),
    contextExtensionsMap: (f = msg.getContextExtensionsMap()) ? f.toObject(includeInstance, undefined) : [],
    metadataContext: (f = msg.getMetadataContext()) && envoy_api_v2_core_base_pb.Metadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.envoy.service.auth.v2.AttributeContext}
 */
proto.envoy.service.auth.v2.AttributeContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.service.auth.v2.AttributeContext;
  return proto.envoy.service.auth.v2.AttributeContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.service.auth.v2.AttributeContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.service.auth.v2.AttributeContext}
 */
proto.envoy.service.auth.v2.AttributeContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.service.auth.v2.AttributeContext.Peer;
      reader.readMessage(value,proto.envoy.service.auth.v2.AttributeContext.Peer.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 2:
      var value = new proto.envoy.service.auth.v2.AttributeContext.Peer;
      reader.readMessage(value,proto.envoy.service.auth.v2.AttributeContext.Peer.deserializeBinaryFromReader);
      msg.setDestination(value);
      break;
    case 4:
      var value = new proto.envoy.service.auth.v2.AttributeContext.Request;
      reader.readMessage(value,proto.envoy.service.auth.v2.AttributeContext.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 10:
      var value = msg.getContextExtensionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 11:
      var value = new envoy_api_v2_core_base_pb.Metadata;
      reader.readMessage(value,envoy_api_v2_core_base_pb.Metadata.deserializeBinaryFromReader);
      msg.setMetadataContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.envoy.service.auth.v2.AttributeContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.service.auth.v2.AttributeContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.service.auth.v2.AttributeContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.auth.v2.AttributeContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.service.auth.v2.AttributeContext.Peer.serializeBinaryToWriter
    );
  }
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.service.auth.v2.AttributeContext.Peer.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.envoy.service.auth.v2.AttributeContext.Request.serializeBinaryToWriter
    );
  }
  f = message.getContextExtensionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMetadataContext();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      envoy_api_v2_core_base_pb.Metadata.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.envoy.service.auth.v2.AttributeContext.Peer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.service.auth.v2.AttributeContext.Peer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.service.auth.v2.AttributeContext.Peer.displayName = 'proto.envoy.service.auth.v2.AttributeContext.Peer';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.service.auth.v2.AttributeContext.Peer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.service.auth.v2.AttributeContext.Peer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.auth.v2.AttributeContext.Peer.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && envoy_api_v2_core_address_pb.Address.toObject(includeInstance, f),
    service: jspb.Message.getFieldWithDefault(msg, 2, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    principal: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.envoy.service.auth.v2.AttributeContext.Peer}
 */
proto.envoy.service.auth.v2.AttributeContext.Peer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.service.auth.v2.AttributeContext.Peer;
  return proto.envoy.service.auth.v2.AttributeContext.Peer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.service.auth.v2.AttributeContext.Peer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.service.auth.v2.AttributeContext.Peer}
 */
proto.envoy.service.auth.v2.AttributeContext.Peer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_core_address_pb.Address;
      reader.readMessage(value,envoy_api_v2_core_address_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 3:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrincipal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.service.auth.v2.AttributeContext.Peer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.service.auth.v2.AttributeContext.Peer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.auth.v2.AttributeContext.Peer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_api_v2_core_address_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getPrincipal();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional envoy.api.v2.core.Address address = 1;
 * @return {?proto.envoy.api.v2.core.Address}
 */
proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.getAddress = function() {
  return /** @type{?proto.envoy.api.v2.core.Address} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_address_pb.Address, 1));
};


/** @param {?proto.envoy.api.v2.core.Address|undefined} value */
proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string service = 2;
 * @return {string}
 */
proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.setService = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> labels = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};


/**
 * optional string principal = 4;
 * @return {string}
 */
proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.getPrincipal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.envoy.service.auth.v2.AttributeContext.Peer.prototype.setPrincipal = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.envoy.service.auth.v2.AttributeContext.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.service.auth.v2.AttributeContext.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.service.auth.v2.AttributeContext.Request.displayName = 'proto.envoy.service.auth.v2.AttributeContext.Request';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.service.auth.v2.AttributeContext.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.service.auth.v2.AttributeContext.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.service.auth.v2.AttributeContext.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.auth.v2.AttributeContext.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    http: (f = msg.getHttp()) && proto.envoy.service.auth.v2.AttributeContext.HttpRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.envoy.service.auth.v2.AttributeContext.Request}
 */
proto.envoy.service.auth.v2.AttributeContext.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.service.auth.v2.AttributeContext.Request;
  return proto.envoy.service.auth.v2.AttributeContext.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.service.auth.v2.AttributeContext.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.service.auth.v2.AttributeContext.Request}
 */
proto.envoy.service.auth.v2.AttributeContext.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = new proto.envoy.service.auth.v2.AttributeContext.HttpRequest;
      reader.readMessage(value,proto.envoy.service.auth.v2.AttributeContext.HttpRequest.deserializeBinaryFromReader);
      msg.setHttp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.envoy.service.auth.v2.AttributeContext.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.service.auth.v2.AttributeContext.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.service.auth.v2.AttributeContext.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.auth.v2.AttributeContext.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getHttp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.service.auth.v2.AttributeContext.HttpRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.envoy.service.auth.v2.AttributeContext.Request.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.envoy.service.auth.v2.AttributeContext.Request.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.service.auth.v2.AttributeContext.Request.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.service.auth.v2.AttributeContext.Request.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HttpRequest http = 2;
 * @return {?proto.envoy.service.auth.v2.AttributeContext.HttpRequest}
 */
proto.envoy.service.auth.v2.AttributeContext.Request.prototype.getHttp = function() {
  return /** @type{?proto.envoy.service.auth.v2.AttributeContext.HttpRequest} */ (
    jspb.Message.getWrapperField(this, proto.envoy.service.auth.v2.AttributeContext.HttpRequest, 2));
};


/** @param {?proto.envoy.service.auth.v2.AttributeContext.HttpRequest|undefined} value */
proto.envoy.service.auth.v2.AttributeContext.Request.prototype.setHttp = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.envoy.service.auth.v2.AttributeContext.Request.prototype.clearHttp = function() {
  this.setHttp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.service.auth.v2.AttributeContext.Request.prototype.hasHttp = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.service.auth.v2.AttributeContext.HttpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.service.auth.v2.AttributeContext.HttpRequest.displayName = 'proto.envoy.service.auth.v2.AttributeContext.HttpRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.service.auth.v2.AttributeContext.HttpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.service.auth.v2.AttributeContext.HttpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    method: jspb.Message.getFieldWithDefault(msg, 2, ""),
    headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, undefined) : [],
    path: jspb.Message.getFieldWithDefault(msg, 4, ""),
    host: jspb.Message.getFieldWithDefault(msg, 5, ""),
    scheme: jspb.Message.getFieldWithDefault(msg, 6, ""),
    query: jspb.Message.getFieldWithDefault(msg, 7, ""),
    fragment: jspb.Message.getFieldWithDefault(msg, 8, ""),
    size: jspb.Message.getFieldWithDefault(msg, 9, 0),
    protocol: jspb.Message.getFieldWithDefault(msg, 10, ""),
    body: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.envoy.service.auth.v2.AttributeContext.HttpRequest}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.service.auth.v2.AttributeContext.HttpRequest;
  return proto.envoy.service.auth.v2.AttributeContext.HttpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.service.auth.v2.AttributeContext.HttpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.service.auth.v2.AttributeContext.HttpRequest}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 3:
      var value = msg.getHeadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setScheme(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFragment(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.service.auth.v2.AttributeContext.HttpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.service.auth.v2.AttributeContext.HttpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHeadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getScheme();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFragment();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string method = 2;
 * @return {string}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.setMethod = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> headers = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.getHeadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.clearHeadersMap = function() {
  this.getHeadersMap().clear();
};


/**
 * optional string path = 4;
 * @return {string}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.setPath = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string host = 5;
 * @return {string}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.setHost = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string scheme = 6;
 * @return {string}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.getScheme = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.setScheme = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string query = 7;
 * @return {string}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.setQuery = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string fragment = 8;
 * @return {string}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.getFragment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.setFragment = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 size = 9;
 * @return {number}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.setSize = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string protocol = 10;
 * @return {string}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.setProtocol = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string body = 11;
 * @return {string}
 */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.envoy.service.auth.v2.AttributeContext.HttpRequest.prototype.setBody = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional Peer source = 1;
 * @return {?proto.envoy.service.auth.v2.AttributeContext.Peer}
 */
proto.envoy.service.auth.v2.AttributeContext.prototype.getSource = function() {
  return /** @type{?proto.envoy.service.auth.v2.AttributeContext.Peer} */ (
    jspb.Message.getWrapperField(this, proto.envoy.service.auth.v2.AttributeContext.Peer, 1));
};


/** @param {?proto.envoy.service.auth.v2.AttributeContext.Peer|undefined} value */
proto.envoy.service.auth.v2.AttributeContext.prototype.setSource = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.envoy.service.auth.v2.AttributeContext.prototype.clearSource = function() {
  this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.service.auth.v2.AttributeContext.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Peer destination = 2;
 * @return {?proto.envoy.service.auth.v2.AttributeContext.Peer}
 */
proto.envoy.service.auth.v2.AttributeContext.prototype.getDestination = function() {
  return /** @type{?proto.envoy.service.auth.v2.AttributeContext.Peer} */ (
    jspb.Message.getWrapperField(this, proto.envoy.service.auth.v2.AttributeContext.Peer, 2));
};


/** @param {?proto.envoy.service.auth.v2.AttributeContext.Peer|undefined} value */
proto.envoy.service.auth.v2.AttributeContext.prototype.setDestination = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.envoy.service.auth.v2.AttributeContext.prototype.clearDestination = function() {
  this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.service.auth.v2.AttributeContext.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Request request = 4;
 * @return {?proto.envoy.service.auth.v2.AttributeContext.Request}
 */
proto.envoy.service.auth.v2.AttributeContext.prototype.getRequest = function() {
  return /** @type{?proto.envoy.service.auth.v2.AttributeContext.Request} */ (
    jspb.Message.getWrapperField(this, proto.envoy.service.auth.v2.AttributeContext.Request, 4));
};


/** @param {?proto.envoy.service.auth.v2.AttributeContext.Request|undefined} value */
proto.envoy.service.auth.v2.AttributeContext.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.envoy.service.auth.v2.AttributeContext.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.service.auth.v2.AttributeContext.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, string> context_extensions = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.envoy.service.auth.v2.AttributeContext.prototype.getContextExtensionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


proto.envoy.service.auth.v2.AttributeContext.prototype.clearContextExtensionsMap = function() {
  this.getContextExtensionsMap().clear();
};


/**
 * optional envoy.api.v2.core.Metadata metadata_context = 11;
 * @return {?proto.envoy.api.v2.core.Metadata}
 */
proto.envoy.service.auth.v2.AttributeContext.prototype.getMetadataContext = function() {
  return /** @type{?proto.envoy.api.v2.core.Metadata} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.Metadata, 11));
};


/** @param {?proto.envoy.api.v2.core.Metadata|undefined} value */
proto.envoy.service.auth.v2.AttributeContext.prototype.setMetadataContext = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.envoy.service.auth.v2.AttributeContext.prototype.clearMetadataContext = function() {
  this.setMetadataContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.service.auth.v2.AttributeContext.prototype.hasMetadataContext = function() {
  return jspb.Message.getField(this, 11) != null;
};


goog.object.extend(exports, proto.envoy.service.auth.v2);
