import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Heartbeat } from "../../gossip/v1/gossip";
export declare const protobufPackage = "publicrpc.v1";
export declare enum ChainID {
    CHAIN_ID_UNSPECIFIED = 0,
    CHAIN_ID_SOLANA = 1,
    CHAIN_ID_ETHEREUM = 2,
    CHAIN_ID_TERRA = 3,
    CHAIN_ID_BSC = 4,
    UNRECOGNIZED = -1
}
export declare function chainIDFromJSON(object: any): ChainID;
export declare function chainIDToJSON(object: ChainID): string;
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
export interface GetLastHeartbeatsRequest {
}
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
export interface GetCurrentGuardianSetRequest {
}
export interface GetCurrentGuardianSetResponse {
    guardianSet: GuardianSet | undefined;
}
export interface GuardianSet {
    /** Guardian set index */
    index: number;
    /** List of guardian addresses as human-readable hex-encoded (leading 0x) addresses. */
    addresses: string[];
}
export declare const MessageID: {
    encode(message: MessageID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageID;
    fromJSON(object: any): MessageID;
    toJSON(message: MessageID): unknown;
    fromPartial(object: DeepPartial<MessageID>): MessageID;
};
export declare const GetSignedVAARequest: {
    encode(message: GetSignedVAARequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSignedVAARequest;
    fromJSON(object: any): GetSignedVAARequest;
    toJSON(message: GetSignedVAARequest): unknown;
    fromPartial(object: DeepPartial<GetSignedVAARequest>): GetSignedVAARequest;
};
export declare const GetSignedVAAResponse: {
    encode(message: GetSignedVAAResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSignedVAAResponse;
    fromJSON(object: any): GetSignedVAAResponse;
    toJSON(message: GetSignedVAAResponse): unknown;
    fromPartial(object: DeepPartial<GetSignedVAAResponse>): GetSignedVAAResponse;
};
export declare const GetLastHeartbeatsRequest: {
    encode(_: GetLastHeartbeatsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastHeartbeatsRequest;
    fromJSON(_: any): GetLastHeartbeatsRequest;
    toJSON(_: GetLastHeartbeatsRequest): unknown;
    fromPartial(_: DeepPartial<GetLastHeartbeatsRequest>): GetLastHeartbeatsRequest;
};
export declare const GetLastHeartbeatsResponse: {
    encode(message: GetLastHeartbeatsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastHeartbeatsResponse;
    fromJSON(object: any): GetLastHeartbeatsResponse;
    toJSON(message: GetLastHeartbeatsResponse): unknown;
    fromPartial(object: DeepPartial<GetLastHeartbeatsResponse>): GetLastHeartbeatsResponse;
};
export declare const GetLastHeartbeatsResponse_Entry: {
    encode(message: GetLastHeartbeatsResponse_Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastHeartbeatsResponse_Entry;
    fromJSON(object: any): GetLastHeartbeatsResponse_Entry;
    toJSON(message: GetLastHeartbeatsResponse_Entry): unknown;
    fromPartial(object: DeepPartial<GetLastHeartbeatsResponse_Entry>): GetLastHeartbeatsResponse_Entry;
};
export declare const GetCurrentGuardianSetRequest: {
    encode(_: GetCurrentGuardianSetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCurrentGuardianSetRequest;
    fromJSON(_: any): GetCurrentGuardianSetRequest;
    toJSON(_: GetCurrentGuardianSetRequest): unknown;
    fromPartial(_: DeepPartial<GetCurrentGuardianSetRequest>): GetCurrentGuardianSetRequest;
};
export declare const GetCurrentGuardianSetResponse: {
    encode(message: GetCurrentGuardianSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCurrentGuardianSetResponse;
    fromJSON(object: any): GetCurrentGuardianSetResponse;
    toJSON(message: GetCurrentGuardianSetResponse): unknown;
    fromPartial(object: DeepPartial<GetCurrentGuardianSetResponse>): GetCurrentGuardianSetResponse;
};
export declare const GuardianSet: {
    encode(message: GuardianSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuardianSet;
    fromJSON(object: any): GuardianSet;
    toJSON(message: GuardianSet): unknown;
    fromPartial(object: DeepPartial<GuardianSet>): GuardianSet;
};
/** PublicRPCService service exposes endpoints to be consumed externally; GUIs, historical record keeping, etc. */
export interface PublicRPCService {
    /**
     * GetLastHeartbeats returns the last heartbeat received for each guardian node in the
     * node's active guardian set. Heartbeats received by nodes not in the guardian set are ignored.
     * The heartbeat value is null if no heartbeat has yet been received.
     */
    GetLastHeartbeats(request: DeepPartial<GetLastHeartbeatsRequest>, metadata?: grpc.Metadata): Promise<GetLastHeartbeatsResponse>;
    GetSignedVAA(request: DeepPartial<GetSignedVAARequest>, metadata?: grpc.Metadata): Promise<GetSignedVAAResponse>;
    GetCurrentGuardianSet(request: DeepPartial<GetCurrentGuardianSetRequest>, metadata?: grpc.Metadata): Promise<GetCurrentGuardianSetResponse>;
}
export declare class PublicRPCServiceClientImpl implements PublicRPCService {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetLastHeartbeats(request: DeepPartial<GetLastHeartbeatsRequest>, metadata?: grpc.Metadata): Promise<GetLastHeartbeatsResponse>;
    GetSignedVAA(request: DeepPartial<GetSignedVAARequest>, metadata?: grpc.Metadata): Promise<GetSignedVAAResponse>;
    GetCurrentGuardianSet(request: DeepPartial<GetCurrentGuardianSetRequest>, metadata?: grpc.Metadata): Promise<GetCurrentGuardianSetResponse>;
}
export declare const PublicRPCServiceDesc: {
    serviceName: string;
};
export declare const PublicRPCServiceGetLastHeartbeatsDesc: UnaryMethodDefinitionish;
export declare const PublicRPCServiceGetSignedVAADesc: UnaryMethodDefinitionish;
export declare const PublicRPCServiceGetCurrentGuardianSetDesc: UnaryMethodDefinitionish;
interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
    requestStream: any;
    responseStream: any;
}
declare type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;
interface Rpc {
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export declare class GrpcWebImpl {
    private host;
    private options;
    constructor(host: string, options: {
        transport?: grpc.TransportFactory;
        debug?: boolean;
        metadata?: grpc.Metadata;
    });
    unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
