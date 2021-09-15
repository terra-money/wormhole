var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export var protobufPackage = "gossip.v1";
var baseGossipMessage = {};
export var GossipMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.heartbeat !== undefined) {
            Heartbeat.encode(message.heartbeat, writer.uint32(10).fork()).ldelim();
        }
        if (message.signedObservation !== undefined) {
            SignedObservation.encode(message.signedObservation, writer.uint32(18).fork()).ldelim();
        }
        if (message.signedHeartbeat !== undefined) {
            SignedHeartbeat.encode(message.signedHeartbeat, writer.uint32(26).fork()).ldelim();
        }
        if (message.signedVaaWithQuorum !== undefined) {
            SignedVAAWithQuorum.encode(message.signedVaaWithQuorum, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGossipMessage);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.heartbeat = Heartbeat.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signedObservation = SignedObservation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signedHeartbeat = SignedHeartbeat.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signedVaaWithQuorum = SignedVAAWithQuorum.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseGossipMessage);
        if (object.heartbeat !== undefined && object.heartbeat !== null) {
            message.heartbeat = Heartbeat.fromJSON(object.heartbeat);
        }
        else {
            message.heartbeat = undefined;
        }
        if (object.signedObservation !== undefined &&
            object.signedObservation !== null) {
            message.signedObservation = SignedObservation.fromJSON(object.signedObservation);
        }
        else {
            message.signedObservation = undefined;
        }
        if (object.signedHeartbeat !== undefined &&
            object.signedHeartbeat !== null) {
            message.signedHeartbeat = SignedHeartbeat.fromJSON(object.signedHeartbeat);
        }
        else {
            message.signedHeartbeat = undefined;
        }
        if (object.signedVaaWithQuorum !== undefined &&
            object.signedVaaWithQuorum !== null) {
            message.signedVaaWithQuorum = SignedVAAWithQuorum.fromJSON(object.signedVaaWithQuorum);
        }
        else {
            message.signedVaaWithQuorum = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.heartbeat !== undefined &&
            (obj.heartbeat = message.heartbeat
                ? Heartbeat.toJSON(message.heartbeat)
                : undefined);
        message.signedObservation !== undefined &&
            (obj.signedObservation = message.signedObservation
                ? SignedObservation.toJSON(message.signedObservation)
                : undefined);
        message.signedHeartbeat !== undefined &&
            (obj.signedHeartbeat = message.signedHeartbeat
                ? SignedHeartbeat.toJSON(message.signedHeartbeat)
                : undefined);
        message.signedVaaWithQuorum !== undefined &&
            (obj.signedVaaWithQuorum = message.signedVaaWithQuorum
                ? SignedVAAWithQuorum.toJSON(message.signedVaaWithQuorum)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGossipMessage);
        if (object.heartbeat !== undefined && object.heartbeat !== null) {
            message.heartbeat = Heartbeat.fromPartial(object.heartbeat);
        }
        else {
            message.heartbeat = undefined;
        }
        if (object.signedObservation !== undefined &&
            object.signedObservation !== null) {
            message.signedObservation = SignedObservation.fromPartial(object.signedObservation);
        }
        else {
            message.signedObservation = undefined;
        }
        if (object.signedHeartbeat !== undefined &&
            object.signedHeartbeat !== null) {
            message.signedHeartbeat = SignedHeartbeat.fromPartial(object.signedHeartbeat);
        }
        else {
            message.signedHeartbeat = undefined;
        }
        if (object.signedVaaWithQuorum !== undefined &&
            object.signedVaaWithQuorum !== null) {
            message.signedVaaWithQuorum = SignedVAAWithQuorum.fromPartial(object.signedVaaWithQuorum);
        }
        else {
            message.signedVaaWithQuorum = undefined;
        }
        return message;
    },
};
var baseSignedHeartbeat = {};
export var SignedHeartbeat = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.heartbeat.length !== 0) {
            writer.uint32(10).bytes(message.heartbeat);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        if (message.guardianAddr.length !== 0) {
            writer.uint32(26).bytes(message.guardianAddr);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSignedHeartbeat);
        message.heartbeat = new Uint8Array();
        message.signature = new Uint8Array();
        message.guardianAddr = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.heartbeat = reader.bytes();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                case 3:
                    message.guardianAddr = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSignedHeartbeat);
        message.heartbeat = new Uint8Array();
        message.signature = new Uint8Array();
        message.guardianAddr = new Uint8Array();
        if (object.heartbeat !== undefined && object.heartbeat !== null) {
            message.heartbeat = bytesFromBase64(object.heartbeat);
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        if (object.guardianAddr !== undefined && object.guardianAddr !== null) {
            message.guardianAddr = bytesFromBase64(object.guardianAddr);
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.heartbeat !== undefined &&
            (obj.heartbeat = base64FromBytes(message.heartbeat !== undefined ? message.heartbeat : new Uint8Array()));
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.guardianAddr !== undefined &&
            (obj.guardianAddr = base64FromBytes(message.guardianAddr !== undefined
                ? message.guardianAddr
                : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSignedHeartbeat);
        if (object.heartbeat !== undefined && object.heartbeat !== null) {
            message.heartbeat = object.heartbeat;
        }
        else {
            message.heartbeat = new Uint8Array();
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = new Uint8Array();
        }
        if (object.guardianAddr !== undefined && object.guardianAddr !== null) {
            message.guardianAddr = object.guardianAddr;
        }
        else {
            message.guardianAddr = new Uint8Array();
        }
        return message;
    },
};
var baseHeartbeat = {
    nodeName: "",
    counter: "0",
    timestamp: "0",
    version: "",
    guardianAddr: "",
    bootTimestamp: "0",
};
export var Heartbeat = {
    encode: function (message, writer) {
        var e_1, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.nodeName !== "") {
            writer.uint32(10).string(message.nodeName);
        }
        if (message.counter !== "0") {
            writer.uint32(16).int64(message.counter);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).int64(message.timestamp);
        }
        try {
            for (var _b = __values(message.networks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                Heartbeat_Network.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.guardianAddr !== "") {
            writer.uint32(50).string(message.guardianAddr);
        }
        if (message.bootTimestamp !== "0") {
            writer.uint32(56).int64(message.bootTimestamp);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseHeartbeat);
        message.networks = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeName = reader.string();
                    break;
                case 2:
                    message.counter = longToString(reader.int64());
                    break;
                case 3:
                    message.timestamp = longToString(reader.int64());
                    break;
                case 4:
                    message.networks.push(Heartbeat_Network.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.guardianAddr = reader.string();
                    break;
                case 7:
                    message.bootTimestamp = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var e_2, _a;
        var message = __assign({}, baseHeartbeat);
        message.networks = [];
        if (object.nodeName !== undefined && object.nodeName !== null) {
            message.nodeName = String(object.nodeName);
        }
        else {
            message.nodeName = "";
        }
        if (object.counter !== undefined && object.counter !== null) {
            message.counter = String(object.counter);
        }
        else {
            message.counter = "0";
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = String(object.timestamp);
        }
        else {
            message.timestamp = "0";
        }
        if (object.networks !== undefined && object.networks !== null) {
            try {
                for (var _b = __values(object.networks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.networks.push(Heartbeat_Network.fromJSON(e));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        if (object.guardianAddr !== undefined && object.guardianAddr !== null) {
            message.guardianAddr = String(object.guardianAddr);
        }
        else {
            message.guardianAddr = "";
        }
        if (object.bootTimestamp !== undefined && object.bootTimestamp !== null) {
            message.bootTimestamp = String(object.bootTimestamp);
        }
        else {
            message.bootTimestamp = "0";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.nodeName !== undefined && (obj.nodeName = message.nodeName);
        message.counter !== undefined && (obj.counter = message.counter);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        if (message.networks) {
            obj.networks = message.networks.map(function (e) {
                return e ? Heartbeat_Network.toJSON(e) : undefined;
            });
        }
        else {
            obj.networks = [];
        }
        message.version !== undefined && (obj.version = message.version);
        message.guardianAddr !== undefined &&
            (obj.guardianAddr = message.guardianAddr);
        message.bootTimestamp !== undefined &&
            (obj.bootTimestamp = message.bootTimestamp);
        return obj;
    },
    fromPartial: function (object) {
        var e_3, _a;
        var message = __assign({}, baseHeartbeat);
        message.networks = [];
        if (object.nodeName !== undefined && object.nodeName !== null) {
            message.nodeName = object.nodeName;
        }
        else {
            message.nodeName = "";
        }
        if (object.counter !== undefined && object.counter !== null) {
            message.counter = object.counter;
        }
        else {
            message.counter = "0";
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = "0";
        }
        if (object.networks !== undefined && object.networks !== null) {
            try {
                for (var _b = __values(object.networks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.networks.push(Heartbeat_Network.fromPartial(e));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        if (object.guardianAddr !== undefined && object.guardianAddr !== null) {
            message.guardianAddr = object.guardianAddr;
        }
        else {
            message.guardianAddr = "";
        }
        if (object.bootTimestamp !== undefined && object.bootTimestamp !== null) {
            message.bootTimestamp = object.bootTimestamp;
        }
        else {
            message.bootTimestamp = "0";
        }
        return message;
    },
};
var baseHeartbeat_Network = {
    id: 0,
    height: "0",
    contractAddress: "",
    errorCount: "0",
};
export var Heartbeat_Network = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.height !== "0") {
            writer.uint32(16).int64(message.height);
        }
        if (message.contractAddress !== "") {
            writer.uint32(26).string(message.contractAddress);
        }
        if (message.errorCount !== "0") {
            writer.uint32(32).uint64(message.errorCount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseHeartbeat_Network);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.height = longToString(reader.int64());
                    break;
                case 3:
                    message.contractAddress = reader.string();
                    break;
                case 4:
                    message.errorCount = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseHeartbeat_Network);
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = String(object.height);
        }
        else {
            message.height = "0";
        }
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = String(object.contractAddress);
        }
        else {
            message.contractAddress = "";
        }
        if (object.errorCount !== undefined && object.errorCount !== null) {
            message.errorCount = String(object.errorCount);
        }
        else {
            message.errorCount = "0";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.height !== undefined && (obj.height = message.height);
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        message.errorCount !== undefined && (obj.errorCount = message.errorCount);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseHeartbeat_Network);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = "0";
        }
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = object.contractAddress;
        }
        else {
            message.contractAddress = "";
        }
        if (object.errorCount !== undefined && object.errorCount !== null) {
            message.errorCount = object.errorCount;
        }
        else {
            message.errorCount = "0";
        }
        return message;
    },
};
var baseSignedObservation = {};
export var SignedObservation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.addr.length !== 0) {
            writer.uint32(10).bytes(message.addr);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        if (message.signature.length !== 0) {
            writer.uint32(26).bytes(message.signature);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSignedObservation);
        message.addr = new Uint8Array();
        message.hash = new Uint8Array();
        message.signature = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addr = reader.bytes();
                    break;
                case 2:
                    message.hash = reader.bytes();
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSignedObservation);
        message.addr = new Uint8Array();
        message.hash = new Uint8Array();
        message.signature = new Uint8Array();
        if (object.addr !== undefined && object.addr !== null) {
            message.addr = bytesFromBase64(object.addr);
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.addr !== undefined &&
            (obj.addr = base64FromBytes(message.addr !== undefined ? message.addr : new Uint8Array()));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSignedObservation);
        if (object.addr !== undefined && object.addr !== null) {
            message.addr = object.addr;
        }
        else {
            message.addr = new Uint8Array();
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = new Uint8Array();
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = new Uint8Array();
        }
        return message;
    },
};
var baseSignedVAAWithQuorum = {};
export var SignedVAAWithQuorum = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vaa.length !== 0) {
            writer.uint32(10).bytes(message.vaa);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseSignedVAAWithQuorum);
        message.vaa = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaa = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseSignedVAAWithQuorum);
        message.vaa = new Uint8Array();
        if (object.vaa !== undefined && object.vaa !== null) {
            message.vaa = bytesFromBase64(object.vaa);
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.vaa !== undefined &&
            (obj.vaa = base64FromBytes(message.vaa !== undefined ? message.vaa : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseSignedVAAWithQuorum);
        if (object.vaa !== undefined && object.vaa !== null) {
            message.vaa = object.vaa;
        }
        else {
            message.vaa = new Uint8Array();
        }
        return message;
    },
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
var atob = globalThis.atob ||
    (function (b64) { return globalThis.Buffer.from(b64, "base64").toString("binary"); });
function bytesFromBase64(b64) {
    var bin = atob(b64);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
var btoa = globalThis.btoa ||
    (function (bin) { return globalThis.Buffer.from(bin, "binary").toString("base64"); });
function base64FromBytes(arr) {
    var e_4, _a;
    var bin = [];
    try {
        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var byte = arr_1_1.value;
            bin.push(String.fromCharCode(byte));
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return btoa(bin.join(""));
}
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
