/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "node.v1";

export interface InjectGovernanceVAARequest {
  /** Index of the current guardian set. */
  currentSetIndex: number;
  /**
   * For governance VAAs, guardians inject the VAA manually. Best practice is to pick a timestamp which roughly matches
   * the timing of the off-chain ceremony used to achieve consensus. For guardian set updates, the actual on-chain
   * guardian set creation timestamp will be set when the VAA is accepted on each chain.
   *
   * This is a uint32 to match the on-chain timestamp representation. This becomes a problem in 2106 (sorry).
   */
  timestamp: number;
  guardianSet: GuardianSetUpdate | undefined;
  contractUpgrade: ContractUpgrade | undefined;
}

export interface InjectGovernanceVAAResponse {
  /** Canonical digest of the submitted VAA. */
  digest: Uint8Array;
}

/**
 * GuardianSet represents a new guardian set to be submitted to and signed by the node.
 * During the genesis procedure, this data structure will be assembled using off-chain collaborative tooling
 * like GitHub using a human-readable encoding, so readability is a concern.
 */
export interface GuardianSetUpdate {
  guardians: GuardianSetUpdate_Guardian[];
}

/** List of guardian set members. */
export interface GuardianSetUpdate_Guardian {
  /**
   * Guardian key pubkey. Stored as hex string with 0x prefix for human readability -
   * this is the canonical Ethereum representation.
   */
  pubkey: string;
  /** Optional descriptive name. Not stored on any chain, purely informational. */
  name: string;
}

/** GuardianKey specifies the on-disk format for a node's guardian key. */
export interface GuardianKey {
  /** data is the binary representation of the secp256k1 private key. */
  data: Uint8Array;
  /** Whether this key is deterministically generated and unsuitable for production mode. */
  unsafeDeterministicKey: boolean;
}

/** ContractUpgrade represents a Wormhole contract update to be submitted to and signed by the node. */
export interface ContractUpgrade {
  /** ID of the chain where the Wormhole contract should be updated (uint8). */
  chainId: number;
  /** Address of the new program/contract. */
  newContract: Uint8Array;
}

const baseInjectGovernanceVAARequest: object = {
  currentSetIndex: 0,
  timestamp: 0,
};

export const InjectGovernanceVAARequest = {
  encode(
    message: InjectGovernanceVAARequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.currentSetIndex !== 0) {
      writer.uint32(8).uint32(message.currentSetIndex);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.guardianSet !== undefined) {
      GuardianSetUpdate.encode(
        message.guardianSet,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.contractUpgrade !== undefined) {
      ContractUpgrade.encode(
        message.contractUpgrade,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InjectGovernanceVAARequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInjectGovernanceVAARequest,
    } as InjectGovernanceVAARequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentSetIndex = reader.uint32();
          break;
        case 2:
          message.timestamp = reader.uint32();
          break;
        case 3:
          message.guardianSet = GuardianSetUpdate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.contractUpgrade = ContractUpgrade.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InjectGovernanceVAARequest {
    const message = {
      ...baseInjectGovernanceVAARequest,
    } as InjectGovernanceVAARequest;
    if (
      object.currentSetIndex !== undefined &&
      object.currentSetIndex !== null
    ) {
      message.currentSetIndex = Number(object.currentSetIndex);
    } else {
      message.currentSetIndex = 0;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.guardianSet !== undefined && object.guardianSet !== null) {
      message.guardianSet = GuardianSetUpdate.fromJSON(object.guardianSet);
    } else {
      message.guardianSet = undefined;
    }
    if (
      object.contractUpgrade !== undefined &&
      object.contractUpgrade !== null
    ) {
      message.contractUpgrade = ContractUpgrade.fromJSON(
        object.contractUpgrade
      );
    } else {
      message.contractUpgrade = undefined;
    }
    return message;
  },

  toJSON(message: InjectGovernanceVAARequest): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<InjectGovernanceVAARequest>
  ): InjectGovernanceVAARequest {
    const message = {
      ...baseInjectGovernanceVAARequest,
    } as InjectGovernanceVAARequest;
    if (
      object.currentSetIndex !== undefined &&
      object.currentSetIndex !== null
    ) {
      message.currentSetIndex = object.currentSetIndex;
    } else {
      message.currentSetIndex = 0;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.guardianSet !== undefined && object.guardianSet !== null) {
      message.guardianSet = GuardianSetUpdate.fromPartial(object.guardianSet);
    } else {
      message.guardianSet = undefined;
    }
    if (
      object.contractUpgrade !== undefined &&
      object.contractUpgrade !== null
    ) {
      message.contractUpgrade = ContractUpgrade.fromPartial(
        object.contractUpgrade
      );
    } else {
      message.contractUpgrade = undefined;
    }
    return message;
  },
};

const baseInjectGovernanceVAAResponse: object = {};

export const InjectGovernanceVAAResponse = {
  encode(
    message: InjectGovernanceVAAResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.digest.length !== 0) {
      writer.uint32(10).bytes(message.digest);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InjectGovernanceVAAResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseInjectGovernanceVAAResponse,
    } as InjectGovernanceVAAResponse;
    message.digest = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): InjectGovernanceVAAResponse {
    const message = {
      ...baseInjectGovernanceVAAResponse,
    } as InjectGovernanceVAAResponse;
    message.digest = new Uint8Array();
    if (object.digest !== undefined && object.digest !== null) {
      message.digest = bytesFromBase64(object.digest);
    }
    return message;
  },

  toJSON(message: InjectGovernanceVAAResponse): unknown {
    const obj: any = {};
    message.digest !== undefined &&
      (obj.digest = base64FromBytes(
        message.digest !== undefined ? message.digest : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<InjectGovernanceVAAResponse>
  ): InjectGovernanceVAAResponse {
    const message = {
      ...baseInjectGovernanceVAAResponse,
    } as InjectGovernanceVAAResponse;
    if (object.digest !== undefined && object.digest !== null) {
      message.digest = object.digest;
    } else {
      message.digest = new Uint8Array();
    }
    return message;
  },
};

const baseGuardianSetUpdate: object = {};

export const GuardianSetUpdate = {
  encode(
    message: GuardianSetUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.guardians) {
      GuardianSetUpdate_Guardian.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuardianSetUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuardianSetUpdate } as GuardianSetUpdate;
    message.guardians = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.guardians.push(
            GuardianSetUpdate_Guardian.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuardianSetUpdate {
    const message = { ...baseGuardianSetUpdate } as GuardianSetUpdate;
    message.guardians = [];
    if (object.guardians !== undefined && object.guardians !== null) {
      for (const e of object.guardians) {
        message.guardians.push(GuardianSetUpdate_Guardian.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GuardianSetUpdate): unknown {
    const obj: any = {};
    if (message.guardians) {
      obj.guardians = message.guardians.map((e) =>
        e ? GuardianSetUpdate_Guardian.toJSON(e) : undefined
      );
    } else {
      obj.guardians = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GuardianSetUpdate>): GuardianSetUpdate {
    const message = { ...baseGuardianSetUpdate } as GuardianSetUpdate;
    message.guardians = [];
    if (object.guardians !== undefined && object.guardians !== null) {
      for (const e of object.guardians) {
        message.guardians.push(GuardianSetUpdate_Guardian.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGuardianSetUpdate_Guardian: object = { pubkey: "", name: "" };

export const GuardianSetUpdate_Guardian = {
  encode(
    message: GuardianSetUpdate_Guardian,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pubkey !== "") {
      writer.uint32(10).string(message.pubkey);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GuardianSetUpdate_Guardian {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGuardianSetUpdate_Guardian,
    } as GuardianSetUpdate_Guardian;
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): GuardianSetUpdate_Guardian {
    const message = {
      ...baseGuardianSetUpdate_Guardian,
    } as GuardianSetUpdate_Guardian;
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = String(object.pubkey);
    } else {
      message.pubkey = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: GuardianSetUpdate_Guardian): unknown {
    const obj: any = {};
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GuardianSetUpdate_Guardian>
  ): GuardianSetUpdate_Guardian {
    const message = {
      ...baseGuardianSetUpdate_Guardian,
    } as GuardianSetUpdate_Guardian;
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = object.pubkey;
    } else {
      message.pubkey = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseGuardianKey: object = { unsafeDeterministicKey: false };

export const GuardianKey = {
  encode(
    message: GuardianKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.unsafeDeterministicKey === true) {
      writer.uint32(16).bool(message.unsafeDeterministicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuardianKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuardianKey } as GuardianKey;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): GuardianKey {
    const message = { ...baseGuardianKey } as GuardianKey;
    message.data = new Uint8Array();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (
      object.unsafeDeterministicKey !== undefined &&
      object.unsafeDeterministicKey !== null
    ) {
      message.unsafeDeterministicKey = Boolean(object.unsafeDeterministicKey);
    } else {
      message.unsafeDeterministicKey = false;
    }
    return message;
  },

  toJSON(message: GuardianKey): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.unsafeDeterministicKey !== undefined &&
      (obj.unsafeDeterministicKey = message.unsafeDeterministicKey);
    return obj;
  },

  fromPartial(object: DeepPartial<GuardianKey>): GuardianKey {
    const message = { ...baseGuardianKey } as GuardianKey;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    if (
      object.unsafeDeterministicKey !== undefined &&
      object.unsafeDeterministicKey !== null
    ) {
      message.unsafeDeterministicKey = object.unsafeDeterministicKey;
    } else {
      message.unsafeDeterministicKey = false;
    }
    return message;
  },
};

const baseContractUpgrade: object = { chainId: 0 };

export const ContractUpgrade = {
  encode(
    message: ContractUpgrade,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).uint32(message.chainId);
    }
    if (message.newContract.length !== 0) {
      writer.uint32(18).bytes(message.newContract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractUpgrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContractUpgrade } as ContractUpgrade;
    message.newContract = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ContractUpgrade {
    const message = { ...baseContractUpgrade } as ContractUpgrade;
    message.newContract = new Uint8Array();
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = Number(object.chainId);
    } else {
      message.chainId = 0;
    }
    if (object.newContract !== undefined && object.newContract !== null) {
      message.newContract = bytesFromBase64(object.newContract);
    }
    return message;
  },

  toJSON(message: ContractUpgrade): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.newContract !== undefined &&
      (obj.newContract = base64FromBytes(
        message.newContract !== undefined
          ? message.newContract
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ContractUpgrade>): ContractUpgrade {
    const message = { ...baseContractUpgrade } as ContractUpgrade;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = 0;
    }
    if (object.newContract !== undefined && object.newContract !== null) {
      message.newContract = object.newContract;
    } else {
      message.newContract = new Uint8Array();
    }
    return message;
  },
};

/**
 * NodePrivilegedService exposes an administrative API. It runs on a UNIX socket and is authenticated
 * using Linux filesystem permissions.
 */
export interface NodePrivilegedService {
  /**
   * InjectGovernanceVAA injects a governance VAA into the guardian node.
   * The node will inject the VAA into the aggregator and sign/broadcast the VAA signature.
   *
   * A consensus majority of nodes on the network will have to inject the VAA within the
   * VAA timeout window for it to reach consensus.
   */
  InjectGovernanceVAA(
    request: DeepPartial<InjectGovernanceVAARequest>,
    metadata?: grpc.Metadata
  ): Promise<InjectGovernanceVAAResponse>;
}

export class NodePrivilegedServiceClientImpl implements NodePrivilegedService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InjectGovernanceVAA = this.InjectGovernanceVAA.bind(this);
  }

  InjectGovernanceVAA(
    request: DeepPartial<InjectGovernanceVAARequest>,
    metadata?: grpc.Metadata
  ): Promise<InjectGovernanceVAAResponse> {
    return this.rpc.unary(
      NodePrivilegedServiceInjectGovernanceVAADesc,
      InjectGovernanceVAARequest.fromPartial(request),
      metadata
    );
  }
}

export const NodePrivilegedServiceDesc = {
  serviceName: "node.v1.NodePrivilegedService",
};

export const NodePrivilegedServiceInjectGovernanceVAADesc: UnaryMethodDefinitionish =
  {
    methodName: "InjectGovernanceVAA",
    service: NodePrivilegedServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return InjectGovernanceVAARequest.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...InjectGovernanceVAAResponse.decode(data),
          toObject() {
            return this;
          },
        };
      },
    } as any,
  };

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
