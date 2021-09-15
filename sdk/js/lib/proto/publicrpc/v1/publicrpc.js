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
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";
import { Heartbeat } from "../../gossip/v1/gossip";
export var protobufPackage = "publicrpc.v1";
export var ChainID;
(function (ChainID) {
    ChainID[ChainID["CHAIN_ID_UNSPECIFIED"] = 0] = "CHAIN_ID_UNSPECIFIED";
    ChainID[ChainID["CHAIN_ID_SOLANA"] = 1] = "CHAIN_ID_SOLANA";
    ChainID[ChainID["CHAIN_ID_ETHEREUM"] = 2] = "CHAIN_ID_ETHEREUM";
    ChainID[ChainID["CHAIN_ID_TERRA"] = 3] = "CHAIN_ID_TERRA";
    ChainID[ChainID["CHAIN_ID_BSC"] = 4] = "CHAIN_ID_BSC";
    ChainID[ChainID["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChainID || (ChainID = {}));
export function chainIDFromJSON(object) {
    switch (object) {
        case 0:
        case "CHAIN_ID_UNSPECIFIED":
            return ChainID.CHAIN_ID_UNSPECIFIED;
        case 1:
        case "CHAIN_ID_SOLANA":
            return ChainID.CHAIN_ID_SOLANA;
        case 2:
        case "CHAIN_ID_ETHEREUM":
            return ChainID.CHAIN_ID_ETHEREUM;
        case 3:
        case "CHAIN_ID_TERRA":
            return ChainID.CHAIN_ID_TERRA;
        case 4:
        case "CHAIN_ID_BSC":
            return ChainID.CHAIN_ID_BSC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChainID.UNRECOGNIZED;
    }
}
export function chainIDToJSON(object) {
    switch (object) {
        case ChainID.CHAIN_ID_UNSPECIFIED:
            return "CHAIN_ID_UNSPECIFIED";
        case ChainID.CHAIN_ID_SOLANA:
            return "CHAIN_ID_SOLANA";
        case ChainID.CHAIN_ID_ETHEREUM:
            return "CHAIN_ID_ETHEREUM";
        case ChainID.CHAIN_ID_TERRA:
            return "CHAIN_ID_TERRA";
        case ChainID.CHAIN_ID_BSC:
            return "CHAIN_ID_BSC";
        default:
            return "UNKNOWN";
    }
}
var baseMessageID = {
    emitterChain: 0,
    emitterAddress: "",
    sequence: "0",
};
export var MessageID = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.emitterChain !== 0) {
            writer.uint32(8).int32(message.emitterChain);
        }
        if (message.emitterAddress !== "") {
            writer.uint32(18).string(message.emitterAddress);
        }
        if (message.sequence !== "0") {
            writer.uint32(24).int64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMessageID);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.emitterChain = reader.int32();
                    break;
                case 2:
                    message.emitterAddress = reader.string();
                    break;
                case 3:
                    message.sequence = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMessageID);
        if (object.emitterChain !== undefined && object.emitterChain !== null) {
            message.emitterChain = chainIDFromJSON(object.emitterChain);
        }
        else {
            message.emitterChain = 0;
        }
        if (object.emitterAddress !== undefined && object.emitterAddress !== null) {
            message.emitterAddress = String(object.emitterAddress);
        }
        else {
            message.emitterAddress = "";
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = String(object.sequence);
        }
        else {
            message.sequence = "0";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.emitterChain !== undefined &&
            (obj.emitterChain = chainIDToJSON(message.emitterChain));
        message.emitterAddress !== undefined &&
            (obj.emitterAddress = message.emitterAddress);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMessageID);
        if (object.emitterChain !== undefined && object.emitterChain !== null) {
            message.emitterChain = object.emitterChain;
        }
        else {
            message.emitterChain = 0;
        }
        if (object.emitterAddress !== undefined && object.emitterAddress !== null) {
            message.emitterAddress = object.emitterAddress;
        }
        else {
            message.emitterAddress = "";
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = object.sequence;
        }
        else {
            message.sequence = "0";
        }
        return message;
    },
};
var baseGetSignedVAARequest = {};
export var GetSignedVAARequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.messageId !== undefined) {
            MessageID.encode(message.messageId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetSignedVAARequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageId = MessageID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseGetSignedVAARequest);
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = MessageID.fromJSON(object.messageId);
        }
        else {
            message.messageId = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.messageId !== undefined &&
            (obj.messageId = message.messageId
                ? MessageID.toJSON(message.messageId)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetSignedVAARequest);
        if (object.messageId !== undefined && object.messageId !== null) {
            message.messageId = MessageID.fromPartial(object.messageId);
        }
        else {
            message.messageId = undefined;
        }
        return message;
    },
};
var baseGetSignedVAAResponse = {};
export var GetSignedVAAResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vaaBytes.length !== 0) {
            writer.uint32(10).bytes(message.vaaBytes);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetSignedVAAResponse);
        message.vaaBytes = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaaBytes = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseGetSignedVAAResponse);
        message.vaaBytes = new Uint8Array();
        if (object.vaaBytes !== undefined && object.vaaBytes !== null) {
            message.vaaBytes = bytesFromBase64(object.vaaBytes);
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.vaaBytes !== undefined &&
            (obj.vaaBytes = base64FromBytes(message.vaaBytes !== undefined ? message.vaaBytes : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetSignedVAAResponse);
        if (object.vaaBytes !== undefined && object.vaaBytes !== null) {
            message.vaaBytes = object.vaaBytes;
        }
        else {
            message.vaaBytes = new Uint8Array();
        }
        return message;
    },
};
var baseGetLastHeartbeatsRequest = {};
export var GetLastHeartbeatsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetLastHeartbeatsRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseGetLastHeartbeatsRequest);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseGetLastHeartbeatsRequest);
        return message;
    },
};
var baseGetLastHeartbeatsResponse = {};
export var GetLastHeartbeatsResponse = {
    encode: function (message, writer) {
        var e_1, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        try {
            for (var _b = __values(message.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                GetLastHeartbeatsResponse_Entry.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetLastHeartbeatsResponse);
        message.entries = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(GetLastHeartbeatsResponse_Entry.decode(reader, reader.uint32()));
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
        var message = __assign({}, baseGetLastHeartbeatsResponse);
        message.entries = [];
        if (object.entries !== undefined && object.entries !== null) {
            try {
                for (var _b = __values(object.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.entries.push(GetLastHeartbeatsResponse_Entry.fromJSON(e));
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
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(function (e) {
                return e ? GetLastHeartbeatsResponse_Entry.toJSON(e) : undefined;
            });
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var e_3, _a;
        var message = __assign({}, baseGetLastHeartbeatsResponse);
        message.entries = [];
        if (object.entries !== undefined && object.entries !== null) {
            try {
                for (var _b = __values(object.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.entries.push(GetLastHeartbeatsResponse_Entry.fromPartial(e));
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
        return message;
    },
};
var baseGetLastHeartbeatsResponse_Entry = {
    verifiedGuardianAddr: "",
    p2pNodeAddr: "",
};
export var GetLastHeartbeatsResponse_Entry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.verifiedGuardianAddr !== "") {
            writer.uint32(10).string(message.verifiedGuardianAddr);
        }
        if (message.p2pNodeAddr !== "") {
            writer.uint32(18).string(message.p2pNodeAddr);
        }
        if (message.rawHeartbeat !== undefined) {
            Heartbeat.encode(message.rawHeartbeat, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetLastHeartbeatsResponse_Entry);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.verifiedGuardianAddr = reader.string();
                    break;
                case 2:
                    message.p2pNodeAddr = reader.string();
                    break;
                case 3:
                    message.rawHeartbeat = Heartbeat.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseGetLastHeartbeatsResponse_Entry);
        if (object.verifiedGuardianAddr !== undefined &&
            object.verifiedGuardianAddr !== null) {
            message.verifiedGuardianAddr = String(object.verifiedGuardianAddr);
        }
        else {
            message.verifiedGuardianAddr = "";
        }
        if (object.p2pNodeAddr !== undefined && object.p2pNodeAddr !== null) {
            message.p2pNodeAddr = String(object.p2pNodeAddr);
        }
        else {
            message.p2pNodeAddr = "";
        }
        if (object.rawHeartbeat !== undefined && object.rawHeartbeat !== null) {
            message.rawHeartbeat = Heartbeat.fromJSON(object.rawHeartbeat);
        }
        else {
            message.rawHeartbeat = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.verifiedGuardianAddr !== undefined &&
            (obj.verifiedGuardianAddr = message.verifiedGuardianAddr);
        message.p2pNodeAddr !== undefined &&
            (obj.p2pNodeAddr = message.p2pNodeAddr);
        message.rawHeartbeat !== undefined &&
            (obj.rawHeartbeat = message.rawHeartbeat
                ? Heartbeat.toJSON(message.rawHeartbeat)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetLastHeartbeatsResponse_Entry);
        if (object.verifiedGuardianAddr !== undefined &&
            object.verifiedGuardianAddr !== null) {
            message.verifiedGuardianAddr = object.verifiedGuardianAddr;
        }
        else {
            message.verifiedGuardianAddr = "";
        }
        if (object.p2pNodeAddr !== undefined && object.p2pNodeAddr !== null) {
            message.p2pNodeAddr = object.p2pNodeAddr;
        }
        else {
            message.p2pNodeAddr = "";
        }
        if (object.rawHeartbeat !== undefined && object.rawHeartbeat !== null) {
            message.rawHeartbeat = Heartbeat.fromPartial(object.rawHeartbeat);
        }
        else {
            message.rawHeartbeat = undefined;
        }
        return message;
    },
};
var baseGetCurrentGuardianSetRequest = {};
export var GetCurrentGuardianSetRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetCurrentGuardianSetRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseGetCurrentGuardianSetRequest);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseGetCurrentGuardianSetRequest);
        return message;
    },
};
var baseGetCurrentGuardianSetResponse = {};
export var GetCurrentGuardianSetResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.guardianSet !== undefined) {
            GuardianSet.encode(message.guardianSet, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGetCurrentGuardianSetResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.guardianSet = GuardianSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseGetCurrentGuardianSetResponse);
        if (object.guardianSet !== undefined && object.guardianSet !== null) {
            message.guardianSet = GuardianSet.fromJSON(object.guardianSet);
        }
        else {
            message.guardianSet = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.guardianSet !== undefined &&
            (obj.guardianSet = message.guardianSet
                ? GuardianSet.toJSON(message.guardianSet)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGetCurrentGuardianSetResponse);
        if (object.guardianSet !== undefined && object.guardianSet !== null) {
            message.guardianSet = GuardianSet.fromPartial(object.guardianSet);
        }
        else {
            message.guardianSet = undefined;
        }
        return message;
    },
};
var baseGuardianSet = { index: 0, addresses: "" };
export var GuardianSet = {
    encode: function (message, writer) {
        var e_4, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        try {
            for (var _b = __values(message.addresses), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                writer.uint32(18).string(v);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGuardianSet);
        message.addresses = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.addresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var e_5, _a;
        var message = __assign({}, baseGuardianSet);
        message.addresses = [];
        if (object.index !== undefined && object.index !== null) {
            message.index = Number(object.index);
        }
        else {
            message.index = 0;
        }
        if (object.addresses !== undefined && object.addresses !== null) {
            try {
                for (var _b = __values(object.addresses), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.addresses.push(String(e));
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        if (message.addresses) {
            obj.addresses = message.addresses.map(function (e) { return e; });
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var e_6, _a;
        var message = __assign({}, baseGuardianSet);
        message.addresses = [];
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = 0;
        }
        if (object.addresses !== undefined && object.addresses !== null) {
            try {
                for (var _b = __values(object.addresses), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.addresses.push(e);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        return message;
    },
};
var PublicRPCServiceClientImpl = /** @class */ (function () {
    function PublicRPCServiceClientImpl(rpc) {
        this.rpc = rpc;
        this.GetLastHeartbeats = this.GetLastHeartbeats.bind(this);
        this.GetSignedVAA = this.GetSignedVAA.bind(this);
        this.GetCurrentGuardianSet = this.GetCurrentGuardianSet.bind(this);
    }
    PublicRPCServiceClientImpl.prototype.GetLastHeartbeats = function (request, metadata) {
        return this.rpc.unary(PublicRPCServiceGetLastHeartbeatsDesc, GetLastHeartbeatsRequest.fromPartial(request), metadata);
    };
    PublicRPCServiceClientImpl.prototype.GetSignedVAA = function (request, metadata) {
        return this.rpc.unary(PublicRPCServiceGetSignedVAADesc, GetSignedVAARequest.fromPartial(request), metadata);
    };
    PublicRPCServiceClientImpl.prototype.GetCurrentGuardianSet = function (request, metadata) {
        return this.rpc.unary(PublicRPCServiceGetCurrentGuardianSetDesc, GetCurrentGuardianSetRequest.fromPartial(request), metadata);
    };
    return PublicRPCServiceClientImpl;
}());
export { PublicRPCServiceClientImpl };
export var PublicRPCServiceDesc = {
    serviceName: "publicrpc.v1.PublicRPCService",
};
export var PublicRPCServiceGetLastHeartbeatsDesc = {
    methodName: "GetLastHeartbeats",
    service: PublicRPCServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary: function () {
            return GetLastHeartbeatsRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary: function (data) {
            return __assign(__assign({}, GetLastHeartbeatsResponse.decode(data)), { toObject: function () {
                    return this;
                } });
        },
    },
};
export var PublicRPCServiceGetSignedVAADesc = {
    methodName: "GetSignedVAA",
    service: PublicRPCServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary: function () {
            return GetSignedVAARequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary: function (data) {
            return __assign(__assign({}, GetSignedVAAResponse.decode(data)), { toObject: function () {
                    return this;
                } });
        },
    },
};
export var PublicRPCServiceGetCurrentGuardianSetDesc = {
    methodName: "GetCurrentGuardianSet",
    service: PublicRPCServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary: function () {
            return GetCurrentGuardianSetRequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary: function (data) {
            return __assign(__assign({}, GetCurrentGuardianSetResponse.decode(data)), { toObject: function () {
                    return this;
                } });
        },
    },
};
var GrpcWebImpl = /** @class */ (function () {
    function GrpcWebImpl(host, options) {
        this.host = host;
        this.options = options;
    }
    GrpcWebImpl.prototype.unary = function (methodDesc, _request, metadata) {
        var _this = this;
        var _a;
        var request = __assign(__assign({}, _request), methodDesc.requestType);
        var maybeCombinedMetadata = metadata && this.options.metadata
            ? new BrowserHeaders(__assign(__assign({}, (_a = this.options) === null || _a === void 0 ? void 0 : _a.metadata.headersMap), metadata === null || metadata === void 0 ? void 0 : metadata.headersMap))
            : metadata || this.options.metadata;
        return new Promise(function (resolve, reject) {
            grpc.unary(methodDesc, {
                request: request,
                host: _this.host,
                metadata: maybeCombinedMetadata,
                transport: _this.options.transport,
                debug: _this.options.debug,
                onEnd: function (response) {
                    if (response.status === grpc.Code.OK) {
                        resolve(response.message);
                    }
                    else {
                        var err = new Error(response.statusMessage);
                        err.code = response.status;
                        err.metadata = response.trailers;
                        reject(err);
                    }
                },
            });
        });
    };
    return GrpcWebImpl;
}());
export { GrpcWebImpl };
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
    var e_7, _a;
    var bin = [];
    try {
        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var byte = arr_1_1.value;
            bin.push(String.fromCharCode(byte));
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
        }
        finally { if (e_7) throw e_7.error; }
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
