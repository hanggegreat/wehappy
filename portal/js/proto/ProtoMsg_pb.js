// source: ProtoMsg.proto
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

goog.exportSymbol('proto.ChatMessage', null, global);
goog.exportSymbol('proto.ContentType', null, global);
goog.exportSymbol('proto.Message', null, global);
goog.exportSymbol('proto.MessageType', null, global);
goog.exportSymbol('proto.PushMessage', null, global);
goog.exportSymbol('proto.ResponseMessage', null, global);
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
proto.ChatMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChatMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ChatMessage.displayName = 'proto.ChatMessage';
}
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
proto.ResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ResponseMessage.displayName = 'proto.ResponseMessage';
}
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
proto.PushMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PushMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PushMessage.displayName = 'proto.PushMessage';
}
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
proto.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Message.displayName = 'proto.Message';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChatMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ChatMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChatMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: jspb.Message.getFieldWithDefault(msg, 1, ""),
    to: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contenttype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    content: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.ChatMessage}
 */
proto.ChatMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChatMessage;
  return proto.ChatMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChatMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChatMessage}
 */
proto.ChatMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {!proto.ContentType} */ (reader.readEnum());
      msg.setContenttype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.ChatMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChatMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChatMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContenttype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string from = 1;
 * @return {string}
 */
proto.ChatMessage.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ChatMessage} returns this
 */
proto.ChatMessage.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string to = 2;
 * @return {string}
 */
proto.ChatMessage.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ChatMessage} returns this
 */
proto.ChatMessage.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ContentType contentType = 3;
 * @return {!proto.ContentType}
 */
proto.ChatMessage.prototype.getContenttype = function() {
  return /** @type {!proto.ContentType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ContentType} value
 * @return {!proto.ChatMessage} returns this
 */
proto.ChatMessage.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.ChatMessage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ChatMessage} returns this
 */
proto.ChatMessage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    code: jspb.Message.getFieldWithDefault(msg, 2, 0),
    info: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expose: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.ResponseMessage}
 */
proto.ResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ResponseMessage;
  return proto.ResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ResponseMessage}
 */
proto.ResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpose(value);
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
proto.ResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpose();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool result = 1;
 * @return {boolean}
 */
proto.ResponseMessage.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ResponseMessage} returns this
 */
proto.ResponseMessage.prototype.setResult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 code = 2;
 * @return {number}
 */
proto.ResponseMessage.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ResponseMessage} returns this
 */
proto.ResponseMessage.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string info = 3;
 * @return {string}
 */
proto.ResponseMessage.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ResponseMessage} returns this
 */
proto.ResponseMessage.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool expose = 4;
 * @return {boolean}
 */
proto.ResponseMessage.prototype.getExpose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ResponseMessage} returns this
 */
proto.ResponseMessage.prototype.setExpose = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PushMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.PushMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PushMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PushMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    contenttype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    content: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.PushMessage}
 */
proto.PushMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PushMessage;
  return proto.PushMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PushMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PushMessage}
 */
proto.PushMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.ContentType} */ (reader.readEnum());
      msg.setContenttype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.PushMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PushMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PushMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PushMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContenttype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ContentType contentType = 2;
 * @return {!proto.ContentType}
 */
proto.PushMessage.prototype.getContenttype = function() {
  return /** @type {!proto.ContentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ContentType} value
 * @return {!proto.PushMessage} returns this
 */
proto.PushMessage.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.PushMessage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.PushMessage} returns this
 */
proto.PushMessage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    sequence: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: jspb.Message.getFieldWithDefault(msg, 3, ""),
    messagetype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    to: jspb.Message.getFieldWithDefault(msg, 5, ""),
    chatmessage: (f = msg.getChatmessage()) && proto.ChatMessage.toObject(includeInstance, f),
    responsemessage: (f = msg.getResponsemessage()) && proto.ResponseMessage.toObject(includeInstance, f),
    pushmessage: (f = msg.getPushmessage()) && proto.PushMessage.toObject(includeInstance, f)
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
 * @return {!proto.Message}
 */
proto.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Message;
  return proto.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Message}
 */
proto.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSequence(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTime(value);
      break;
    case 4:
      var value = /** @type {!proto.MessageType} */ (reader.readEnum());
      msg.setMessagetype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 6:
      var value = new proto.ChatMessage;
      reader.readMessage(value,proto.ChatMessage.deserializeBinaryFromReader);
      msg.setChatmessage(value);
      break;
    case 7:
      var value = new proto.ResponseMessage;
      reader.readMessage(value,proto.ResponseMessage.deserializeBinaryFromReader);
      msg.setResponsemessage(value);
      break;
    case 8:
      var value = new proto.PushMessage;
      reader.readMessage(value,proto.PushMessage.deserializeBinaryFromReader);
      msg.setPushmessage(value);
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
proto.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequence();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessagetype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getChatmessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ChatMessage.serializeBinaryToWriter
    );
  }
  f = message.getResponsemessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getPushmessage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.PushMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sequence = 1;
 * @return {string}
 */
proto.Message.prototype.getSequence = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setSequence = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.Message.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string time = 3;
 * @return {string}
 */
proto.Message.prototype.getTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setTime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional MessageType messageType = 4;
 * @return {!proto.MessageType}
 */
proto.Message.prototype.getMessagetype = function() {
  return /** @type {!proto.MessageType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.MessageType} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setMessagetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string to = 5;
 * @return {string}
 */
proto.Message.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional ChatMessage chatMessage = 6;
 * @return {?proto.ChatMessage}
 */
proto.Message.prototype.getChatmessage = function() {
  return /** @type{?proto.ChatMessage} */ (
    jspb.Message.getWrapperField(this, proto.ChatMessage, 6));
};


/**
 * @param {?proto.ChatMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setChatmessage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearChatmessage = function() {
  return this.setChatmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasChatmessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ResponseMessage responseMessage = 7;
 * @return {?proto.ResponseMessage}
 */
proto.Message.prototype.getResponsemessage = function() {
  return /** @type{?proto.ResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.ResponseMessage, 7));
};


/**
 * @param {?proto.ResponseMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setResponsemessage = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearResponsemessage = function() {
  return this.setResponsemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasResponsemessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PushMessage pushMessage = 8;
 * @return {?proto.PushMessage}
 */
proto.Message.prototype.getPushmessage = function() {
  return /** @type{?proto.PushMessage} */ (
    jspb.Message.getWrapperField(this, proto.PushMessage, 8));
};


/**
 * @param {?proto.PushMessage|undefined} value
 * @return {!proto.Message} returns this
*/
proto.Message.prototype.setPushmessage = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Message} returns this
 */
proto.Message.prototype.clearPushmessage = function() {
  return this.setPushmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Message.prototype.hasPushmessage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * @enum {number}
 */
proto.MessageType = {
  SINGLE_MESSAGE: 0,
  GROUP_MESSAGE: 1,
  RESPONSE_MESSAGE: 2,
  PUSH_MESSAGE: 3
};

/**
 * @enum {number}
 */
proto.ContentType = {
  TEXT: 0,
  SYSTEM_MSG: 1,
  IMAGE: 2,
  VOICE: 3,
  VIDEO: 4,
  VOICE_CALL: 5,
  VIDEO_CALL: 6,
  SINGLE_RED_ENVELOPE: 7,
  FAIR_RED_ENVELOPE: 8,
  UNFAIR_RED_ENVELOPE: 9
};

goog.object.extend(exports, proto);
