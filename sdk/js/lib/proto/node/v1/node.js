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
export var protobufPackage = "node.v1";
var baseInjectGovernanceVAARequest = {
    currentSetIndex: 0,
    timestamp: 0,
};
export var InjectGovernanceVAARequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.currentSetIndex !== 0) {
            writer.uint32(8).uint32(message.currentSetIndex);
        }
        if (message.timestamp !== 0) {
            writer.uint32(16).uint32(message.timestamp);
        }
        if (message.guardianSet !== undefined) {
            GuardianSetUpdate.encode(message.guardianSet, writer.uint32(26).fork()).ldelim();
        }
        if (message.contractUpgrade !== undefined) {
            ContractUpgrade.encode(message.contractUpgrade, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseInjectGovernanceVAARequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currentSetIndex = reader.uint32();
                    break;
                case 2:
                    message.timestamp = reader.uint32();
                    break;
                case 3:
                    message.guardianSet = GuardianSetUpdate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.contractUpgrade = ContractUpgrade.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseInjectGovernanceVAARequest);
        if (object.currentSetIndex !== undefined &&
            object.currentSetIndex !== null) {
            message.currentSetIndex = Number(object.currentSetIndex);
        }
        else {
            message.currentSetIndex = 0;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Number(object.timestamp);
        }
        else {
            message.timestamp = 0;
        }
        if (object.guardianSet !== undefined && object.guardianSet !== null) {
            message.guardianSet = GuardianSetUpdate.fromJSON(object.guardianSet);
        }
        else {
            message.guardianSet = undefined;
        }
        if (object.contractUpgrade !== undefined &&
            object.contractUpgrade !== null) {
            message.contractUpgrade = ContractUpgrade.fromJSON(object.contractUpgrade);
        }
        else {
            message.contractUpgrade = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.currentSetIndex !== undefined &&
            (obj.currentSetIndex = message.currentSetIndex);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.guardianSet !== undefined &&
            (obj.guardianSet = message.guardianSet
                ? GuardianSetUpdate.toJSON(message.guardianSet)
                : undefined);
        message.contractUpgrade !== undefined &&
            (obj.contractUpgrade = message.contractUpgrade
                ? ContractUpgrade.toJSON(message.contractUpgrade)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseInjectGovernanceVAARequest);
        if (object.currentSetIndex !== undefined &&
            object.currentSetIndex !== null) {
            message.currentSetIndex = object.currentSetIndex;
        }
        else {
            message.currentSetIndex = 0;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = 0;
        }
        if (object.guardianSet !== undefined && object.guardianSet !== null) {
            message.guardianSet = GuardianSetUpdate.fromPartial(object.guardianSet);
        }
        else {
            message.guardianSet = undefined;
        }
        if (object.contractUpgrade !== undefined &&
            object.contractUpgrade !== null) {
            message.contractUpgrade = ContractUpgrade.fromPartial(object.contractUpgrade);
        }
        else {
            message.contractUpgrade = undefined;
        }
        return message;
    },
};
var baseInjectGovernanceVAAResponse = {};
export var InjectGovernanceVAAResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.digest.length !== 0) {
            writer.uint32(10).bytes(message.digest);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseInjectGovernanceVAAResponse);
        message.digest = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.digest = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseInjectGovernanceVAAResponse);
        message.digest = new Uint8Array();
        if (object.digest !== undefined && object.digest !== null) {
            message.digest = bytesFromBase64(object.digest);
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.digest !== undefined &&
            (obj.digest = base64FromBytes(message.digest !== undefined ? message.digest : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseInjectGovernanceVAAResponse);
        if (object.digest !== undefined && object.digest !== null) {
            message.digest = object.digest;
        }
        else {
            message.digest = new Uint8Array();
        }
        return message;
    },
};
var baseGuardianSetUpdate = {};
export var GuardianSetUpdate = {
    encode: function (message, writer) {
        var e_1, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        try {
            for (var _b = __values(message.guardians), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                GuardianSetUpdate_Guardian.encode(v, writer.uint32(26).fork()).ldelim();
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
        var message = __assign({}, baseGuardianSetUpdate);
        message.guardians = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.guardians.push(GuardianSetUpdate_Guardian.decode(reader, reader.uint32()));
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
        var message = __assign({}, baseGuardianSetUpdate);
        message.guardians = [];
        if (object.guardians !== undefined && object.guardians !== null) {
            try {
                for (var _b = __values(object.guardians), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.guardians.push(GuardianSetUpdate_Guardian.fromJSON(e));
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
        if (message.guardians) {
            obj.guardians = message.guardians.map(function (e) {
                return e ? GuardianSetUpdate_Guardian.toJSON(e) : undefined;
            });
        }
        else {
            obj.guardians = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var e_3, _a;
        var message = __assign({}, baseGuardianSetUpdate);
        message.guardians = [];
        if (object.guardians !== undefined && object.guardians !== null) {
            try {
                for (var _b = __values(object.guardians), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    message.guardians.push(GuardianSetUpdate_Guardian.fromPartial(e));
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
var baseGuardianSetUpdate_Guardian = { pubkey: "", name: "" };
export var GuardianSetUpdate_Guardian = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pubkey !== "") {
            writer.uint32(10).string(message.pubkey);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGuardianSetUpdate_Guardian);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubkey = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseGuardianSetUpdate_Guardian);
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = String(object.pubkey);
        }
        else {
            message.pubkey = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.pubkey !== undefined && (obj.pubkey = message.pubkey);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGuardianSetUpdate_Guardian);
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = object.pubkey;
        }
        else {
            message.pubkey = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        return message;
    },
};
var baseGuardianKey = { unsafeDeterministicKey: false };
export var GuardianKey = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.unsafeDeterministicKey === true) {
            writer.uint32(16).bool(message.unsafeDeterministicKey);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseGuardianKey);
        message.data = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.unsafeDeterministicKey = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseGuardianKey);
        message.data = new Uint8Array();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.unsafeDeterministicKey !== undefined &&
            object.unsafeDeterministicKey !== null) {
            message.unsafeDeterministicKey = Boolean(object.unsafeDeterministicKey);
        }
        else {
            message.unsafeDeterministicKey = false;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.unsafeDeterministicKey !== undefined &&
            (obj.unsafeDeterministicKey = message.unsafeDeterministicKey);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseGuardianKey);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.unsafeDeterministicKey !== undefined &&
            object.unsafeDeterministicKey !== null) {
            message.unsafeDeterministicKey = object.unsafeDeterministicKey;
        }
        else {
            message.unsafeDeterministicKey = false;
        }
        return message;
    },
};
var baseContractUpgrade = { chainId: 0 };
export var ContractUpgrade = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.chainId !== 0) {
            writer.uint32(8).uint32(message.chainId);
        }
        if (message.newContract.length !== 0) {
            writer.uint32(18).bytes(message.newContract);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseContractUpgrade);
        message.newContract = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.uint32();
                    break;
                case 2:
                    message.newContract = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseContractUpgrade);
        message.newContract = new Uint8Array();
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = Number(object.chainId);
        }
        else {
            message.chainId = 0;
        }
        if (object.newContract !== undefined && object.newContract !== null) {
            message.newContract = bytesFromBase64(object.newContract);
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.newContract !== undefined &&
            (obj.newContract = base64FromBytes(message.newContract !== undefined
                ? message.newContract
                : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseContractUpgrade);
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = object.chainId;
        }
        else {
            message.chainId = 0;
        }
        if (object.newContract !== undefined && object.newContract !== null) {
            message.newContract = object.newContract;
        }
        else {
            message.newContract = new Uint8Array();
        }
        return message;
    },
};
var NodePrivilegedServiceClientImpl = /** @class */ (function () {
    function NodePrivilegedServiceClientImpl(rpc) {
        this.rpc = rpc;
        this.InjectGovernanceVAA = this.InjectGovernanceVAA.bind(this);
    }
    NodePrivilegedServiceClientImpl.prototype.InjectGovernanceVAA = function (request, metadata) {
        return this.rpc.unary(NodePrivilegedServiceInjectGovernanceVAADesc, InjectGovernanceVAARequest.fromPartial(request), metadata);
    };
    return NodePrivilegedServiceClientImpl;
}());
export { NodePrivilegedServiceClientImpl };
export var NodePrivilegedServiceDesc = {
    serviceName: "node.v1.NodePrivilegedService",
};
export var NodePrivilegedServiceInjectGovernanceVAADesc = {
    methodName: "InjectGovernanceVAA",
    service: NodePrivilegedServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary: function () {
            return InjectGovernanceVAARequest.encode(this).finish();
        },
    },
    responseType: {
        deserializeBinary: function (data) {
            return __assign(__assign({}, InjectGovernanceVAAResponse.decode(data)), { toObject: function () {
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
