/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";
import { Heartbeat } from "../../gossip/v1/gossip";

export const protobufPackage = "publicrpc.v1";

export enum ChainID {
  CHAIN_ID_UNSPECIFIED = 0,
  CHAIN_ID_SOLANA = 1,
  CHAIN_ID_ETHEREUM = 2,
  CHAIN_ID_TERRA = 3,
  CHAIN_ID_BSC = 4,
  UNRECOGNIZED = -1,
}

export function chainIDFromJSON(object: any): ChainID {
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

export function chainIDToJSON(object: ChainID): string {
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

/** MessageID is a VAA's globally unique identifier (see data availability design document). */
export interface MessageID {
  /** Emitter chain ID. */
  emitterChain: ChainID;
  /** Hex-encoded (without leading 0x) emitter address. */
  emitterAddress: string;
  /** Sequence number for (emitter_chain, emitter_address). */
  sequence: string;
}

export interface GetSignedVAARequest {
  messageId: MessageID | undefined;
}

export interface GetSignedVAAResponse {
  vaaBytes: Uint8Array;
}

export interface GetLastHeartbeatsRequest {}

export interface GetLastHeartbeatsResponse {
  entries: GetLastHeartbeatsResponse_Entry[];
}

export interface GetLastHeartbeatsResponse_Entry {
  /**
   * Verified, hex-encoded (with leading 0x) guardian address. This is the guardian address
   * which signed this heartbeat. The GuardianAddr field inside the heartbeat
   * is NOT verified - remote nodes can put arbitrary data in it.
   */
  verifiedGuardianAddr: string;
  /**
   * Base58-encoded libp2p node address that sent this heartbeat, used to
   * distinguish between multiple nodes running for the same guardian.
   */
  p2pNodeAddr: string;
  /**
   * Raw heartbeat received from the network. Data is only as trusted
   * as the guardian node that sent it - none of the fields are verified.
   */
  rawHeartbeat: Heartbeat | undefined;
}

export interface GetCurrentGuardianSetRequest {}

export interface GetCurrentGuardianSetResponse {
  guardianSet: GuardianSet | undefined;
}

export interface GuardianSet {
  /** Guardian set index */
  index: number;
  /** List of guardian addresses as human-readable hex-encoded (leading 0x) addresses. */
  addresses: string[];
}

const baseMessageID: object = {
  emitterChain: 0,
  emitterAddress: "",
  sequence: "0",
};

export const MessageID = {
  encode(
    message: MessageID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessageID } as MessageID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emitterChain = reader.int32() as any;
          break;
        case 2:
          message.emitterAddress = reader.string();
          break;
        case 3:
          message.sequence = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageID {
    const message = { ...baseMessageID } as MessageID;
    if (object.emitterChain !== undefined && object.emitterChain !== null) {
      message.emitterChain = chainIDFromJSON(object.emitterChain);
    } else {
      message.emitterChain = 0;
    }
    if (object.emitterAddress !== undefined && object.emitterAddress !== null) {
      message.emitterAddress = String(object.emitterAddress);
    } else {
      message.emitterAddress = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = String(object.sequence);
    } else {
      message.sequence = "0";
    }
    return message;
  },

  toJSON(message: MessageID): unknown {
    const obj: any = {};
    message.emitterChain !== undefined &&
      (obj.emitterChain = chainIDToJSON(message.emitterChain));
    message.emitterAddress !== undefined &&
      (obj.emitterAddress = message.emitterAddress);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    return obj;
  },

  fromPartial(object: DeepPartial<MessageID>): MessageID {
    const message = { ...baseMessageID } as MessageID;
    if (object.emitterChain !== undefined && object.emitterChain !== null) {
      message.emitterChain = object.emitterChain;
    } else {
      message.emitterChain = 0;
    }
    if (object.emitterAddress !== undefined && object.emitterAddress !== null) {
      message.emitterAddress = object.emitterAddress;
    } else {
      message.emitterAddress = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence;
    } else {
      message.sequence = "0";
    }
    return message;
  },
};

const baseGetSignedVAARequest: object = {};

export const GetSignedVAARequest = {
  encode(
    message: GetSignedVAARequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageId !== undefined) {
      MessageID.encode(message.messageId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSignedVAARequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSignedVAARequest } as GetSignedVAARequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): GetSignedVAARequest {
    const message = { ...baseGetSignedVAARequest } as GetSignedVAARequest;
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = MessageID.fromJSON(object.messageId);
    } else {
      message.messageId = undefined;
    }
    return message;
  },

  toJSON(message: GetSignedVAARequest): unknown {
    const obj: any = {};
    message.messageId !== undefined &&
      (obj.messageId = message.messageId
        ? MessageID.toJSON(message.messageId)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetSignedVAARequest>): GetSignedVAARequest {
    const message = { ...baseGetSignedVAARequest } as GetSignedVAARequest;
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = MessageID.fromPartial(object.messageId);
    } else {
      message.messageId = undefined;
    }
    return message;
  },
};

const baseGetSignedVAAResponse: object = {};

export const GetSignedVAAResponse = {
  encode(
    message: GetSignedVAAResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vaaBytes.length !== 0) {
      writer.uint32(10).bytes(message.vaaBytes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetSignedVAAResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetSignedVAAResponse } as GetSignedVAAResponse;
    message.vaaBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): GetSignedVAAResponse {
    const message = { ...baseGetSignedVAAResponse } as GetSignedVAAResponse;
    message.vaaBytes = new Uint8Array();
    if (object.vaaBytes !== undefined && object.vaaBytes !== null) {
      message.vaaBytes = bytesFromBase64(object.vaaBytes);
    }
    return message;
  },

  toJSON(message: GetSignedVAAResponse): unknown {
    const obj: any = {};
    message.vaaBytes !== undefined &&
      (obj.vaaBytes = base64FromBytes(
        message.vaaBytes !== undefined ? message.vaaBytes : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<GetSignedVAAResponse>): GetSignedVAAResponse {
    const message = { ...baseGetSignedVAAResponse } as GetSignedVAAResponse;
    if (object.vaaBytes !== undefined && object.vaaBytes !== null) {
      message.vaaBytes = object.vaaBytes;
    } else {
      message.vaaBytes = new Uint8Array();
    }
    return message;
  },
};

const baseGetLastHeartbeatsRequest: object = {};

export const GetLastHeartbeatsRequest = {
  encode(
    _: GetLastHeartbeatsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLastHeartbeatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetLastHeartbeatsRequest,
    } as GetLastHeartbeatsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetLastHeartbeatsRequest {
    const message = {
      ...baseGetLastHeartbeatsRequest,
    } as GetLastHeartbeatsRequest;
    return message;
  },

  toJSON(_: GetLastHeartbeatsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<GetLastHeartbeatsRequest>
  ): GetLastHeartbeatsRequest {
    const message = {
      ...baseGetLastHeartbeatsRequest,
    } as GetLastHeartbeatsRequest;
    return message;
  },
};

const baseGetLastHeartbeatsResponse: object = {};

export const GetLastHeartbeatsResponse = {
  encode(
    message: GetLastHeartbeatsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.entries) {
      GetLastHeartbeatsResponse_Entry.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLastHeartbeatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetLastHeartbeatsResponse,
    } as GetLastHeartbeatsResponse;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(
            GetLastHeartbeatsResponse_Entry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLastHeartbeatsResponse {
    const message = {
      ...baseGetLastHeartbeatsResponse,
    } as GetLastHeartbeatsResponse;
    message.entries = [];
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(GetLastHeartbeatsResponse_Entry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetLastHeartbeatsResponse): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? GetLastHeartbeatsResponse_Entry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetLastHeartbeatsResponse>
  ): GetLastHeartbeatsResponse {
    const message = {
      ...baseGetLastHeartbeatsResponse,
    } as GetLastHeartbeatsResponse;
    message.entries = [];
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(GetLastHeartbeatsResponse_Entry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetLastHeartbeatsResponse_Entry: object = {
  verifiedGuardianAddr: "",
  p2pNodeAddr: "",
};

export const GetLastHeartbeatsResponse_Entry = {
  encode(
    message: GetLastHeartbeatsResponse_Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLastHeartbeatsResponse_Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetLastHeartbeatsResponse_Entry,
    } as GetLastHeartbeatsResponse_Entry;
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): GetLastHeartbeatsResponse_Entry {
    const message = {
      ...baseGetLastHeartbeatsResponse_Entry,
    } as GetLastHeartbeatsResponse_Entry;
    if (
      object.verifiedGuardianAddr !== undefined &&
      object.verifiedGuardianAddr !== null
    ) {
      message.verifiedGuardianAddr = String(object.verifiedGuardianAddr);
    } else {
      message.verifiedGuardianAddr = "";
    }
    if (object.p2pNodeAddr !== undefined && object.p2pNodeAddr !== null) {
      message.p2pNodeAddr = String(object.p2pNodeAddr);
    } else {
      message.p2pNodeAddr = "";
    }
    if (object.rawHeartbeat !== undefined && object.rawHeartbeat !== null) {
      message.rawHeartbeat = Heartbeat.fromJSON(object.rawHeartbeat);
    } else {
      message.rawHeartbeat = undefined;
    }
    return message;
  },

  toJSON(message: GetLastHeartbeatsResponse_Entry): unknown {
    const obj: any = {};
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

  fromPartial(
    object: DeepPartial<GetLastHeartbeatsResponse_Entry>
  ): GetLastHeartbeatsResponse_Entry {
    const message = {
      ...baseGetLastHeartbeatsResponse_Entry,
    } as GetLastHeartbeatsResponse_Entry;
    if (
      object.verifiedGuardianAddr !== undefined &&
      object.verifiedGuardianAddr !== null
    ) {
      message.verifiedGuardianAddr = object.verifiedGuardianAddr;
    } else {
      message.verifiedGuardianAddr = "";
    }
    if (object.p2pNodeAddr !== undefined && object.p2pNodeAddr !== null) {
      message.p2pNodeAddr = object.p2pNodeAddr;
    } else {
      message.p2pNodeAddr = "";
    }
    if (object.rawHeartbeat !== undefined && object.rawHeartbeat !== null) {
      message.rawHeartbeat = Heartbeat.fromPartial(object.rawHeartbeat);
    } else {
      message.rawHeartbeat = undefined;
    }
    return message;
  },
};

const baseGetCurrentGuardianSetRequest: object = {};

export const GetCurrentGuardianSetRequest = {
  encode(
    _: GetCurrentGuardianSetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCurrentGuardianSetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetCurrentGuardianSetRequest,
    } as GetCurrentGuardianSetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetCurrentGuardianSetRequest {
    const message = {
      ...baseGetCurrentGuardianSetRequest,
    } as GetCurrentGuardianSetRequest;
    return message;
  },

  toJSON(_: GetCurrentGuardianSetRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<GetCurrentGuardianSetRequest>
  ): GetCurrentGuardianSetRequest {
    const message = {
      ...baseGetCurrentGuardianSetRequest,
    } as GetCurrentGuardianSetRequest;
    return message;
  },
};

const baseGetCurrentGuardianSetResponse: object = {};

export const GetCurrentGuardianSetResponse = {
  encode(
    message: GetCurrentGuardianSetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.guardianSet !== undefined) {
      GuardianSet.encode(
        message.guardianSet,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCurrentGuardianSetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetCurrentGuardianSetResponse,
    } as GetCurrentGuardianSetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): GetCurrentGuardianSetResponse {
    const message = {
      ...baseGetCurrentGuardianSetResponse,
    } as GetCurrentGuardianSetResponse;
    if (object.guardianSet !== undefined && object.guardianSet !== null) {
      message.guardianSet = GuardianSet.fromJSON(object.guardianSet);
    } else {
      message.guardianSet = undefined;
    }
    return message;
  },

  toJSON(message: GetCurrentGuardianSetResponse): unknown {
    const obj: any = {};
    message.guardianSet !== undefined &&
      (obj.guardianSet = message.guardianSet
        ? GuardianSet.toJSON(message.guardianSet)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetCurrentGuardianSetResponse>
  ): GetCurrentGuardianSetResponse {
    const message = {
      ...baseGetCurrentGuardianSetResponse,
    } as GetCurrentGuardianSetResponse;
    if (object.guardianSet !== undefined && object.guardianSet !== null) {
      message.guardianSet = GuardianSet.fromPartial(object.guardianSet);
    } else {
      message.guardianSet = undefined;
    }
    return message;
  },
};

const baseGuardianSet: object = { index: 0, addresses: "" };

export const GuardianSet = {
  encode(
    message: GuardianSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuardianSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGuardianSet } as GuardianSet;
    message.addresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): GuardianSet {
    const message = { ...baseGuardianSet } as GuardianSet;
    message.addresses = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: GuardianSet): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GuardianSet>): GuardianSet {
    const message = { ...baseGuardianSet } as GuardianSet;
    message.addresses = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(e);
      }
    }
    return message;
  },
};

/** PublicRPCService service exposes endpoints to be consumed externally; GUIs, historical record keeping, etc. */
export interface PublicRPCService {
  /**
   * GetLastHeartbeats returns the last heartbeat received for each guardian node in the
   * node's active guardian set. Heartbeats received by nodes not in the guardian set are ignored.
   * The heartbeat value is null if no heartbeat has yet been received.
   */
  GetLastHeartbeats(
    request: DeepPartial<GetLastHeartbeatsRequest>,
    metadata?: grpc.Metadata
  ): Promise<GetLastHeartbeatsResponse>;
  GetSignedVAA(
    request: DeepPartial<GetSignedVAARequest>,
    metadata?: grpc.Metadata
  ): Promise<GetSignedVAAResponse>;
  GetCurrentGuardianSet(
    request: DeepPartial<GetCurrentGuardianSetRequest>,
    metadata?: grpc.Metadata
  ): Promise<GetCurrentGuardianSetResponse>;
}

export class PublicRPCServiceClientImpl implements PublicRPCService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetLastHeartbeats = this.GetLastHeartbeats.bind(this);
    this.GetSignedVAA = this.GetSignedVAA.bind(this);
    this.GetCurrentGuardianSet = this.GetCurrentGuardianSet.bind(this);
  }

  GetLastHeartbeats(
    request: DeepPartial<GetLastHeartbeatsRequest>,
    metadata?: grpc.Metadata
  ): Promise<GetLastHeartbeatsResponse> {
    return this.rpc.unary(
      PublicRPCServiceGetLastHeartbeatsDesc,
      GetLastHeartbeatsRequest.fromPartial(request),
      metadata
    );
  }

  GetSignedVAA(
    request: DeepPartial<GetSignedVAARequest>,
    metadata?: grpc.Metadata
  ): Promise<GetSignedVAAResponse> {
    return this.rpc.unary(
      PublicRPCServiceGetSignedVAADesc,
      GetSignedVAARequest.fromPartial(request),
      metadata
    );
  }

  GetCurrentGuardianSet(
    request: DeepPartial<GetCurrentGuardianSetRequest>,
    metadata?: grpc.Metadata
  ): Promise<GetCurrentGuardianSetResponse> {
    return this.rpc.unary(
      PublicRPCServiceGetCurrentGuardianSetDesc,
      GetCurrentGuardianSetRequest.fromPartial(request),
      metadata
    );
  }
}

export const PublicRPCServiceDesc = {
  serviceName: "publicrpc.v1.PublicRPCService",
};

export const PublicRPCServiceGetLastHeartbeatsDesc: UnaryMethodDefinitionish = {
  methodName: "GetLastHeartbeats",
  service: PublicRPCServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetLastHeartbeatsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetLastHeartbeatsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const PublicRPCServiceGetSignedVAADesc: UnaryMethodDefinitionish = {
  methodName: "GetSignedVAA",
  service: PublicRPCServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetSignedVAARequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetSignedVAAResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const PublicRPCServiceGetCurrentGuardianSetDesc: UnaryMethodDefinitionish =
  {
    methodName: "GetCurrentGuardianSet",
    service: PublicRPCServiceDesc,
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary() {
        return GetCurrentGuardianSetRequest.encode(this).finish();
      },
    } as any,
    responseType: {
      deserializeBinary(data: Uint8Array) {
        return {
          ...GetCurrentGuardianSetResponse.decode(data),
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

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
