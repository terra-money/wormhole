import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "node.v1";
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
export declare const InjectGovernanceVAARequest: {
    encode(message: InjectGovernanceVAARequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InjectGovernanceVAARequest;
    fromJSON(object: any): InjectGovernanceVAARequest;
    toJSON(message: InjectGovernanceVAARequest): unknown;
    fromPartial(object: DeepPartial<InjectGovernanceVAARequest>): InjectGovernanceVAARequest;
};
export declare const InjectGovernanceVAAResponse: {
    encode(message: InjectGovernanceVAAResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InjectGovernanceVAAResponse;
    fromJSON(object: any): InjectGovernanceVAAResponse;
    toJSON(message: InjectGovernanceVAAResponse): unknown;
    fromPartial(object: DeepPartial<InjectGovernanceVAAResponse>): InjectGovernanceVAAResponse;
};
export declare const GuardianSetUpdate: {
    encode(message: GuardianSetUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuardianSetUpdate;
    fromJSON(object: any): GuardianSetUpdate;
    toJSON(message: GuardianSetUpdate): unknown;
    fromPartial(object: DeepPartial<GuardianSetUpdate>): GuardianSetUpdate;
};
export declare const GuardianSetUpdate_Guardian: {
    encode(message: GuardianSetUpdate_Guardian, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuardianSetUpdate_Guardian;
    fromJSON(object: any): GuardianSetUpdate_Guardian;
    toJSON(message: GuardianSetUpdate_Guardian): unknown;
    fromPartial(object: DeepPartial<GuardianSetUpdate_Guardian>): GuardianSetUpdate_Guardian;
};
export declare const GuardianKey: {
    encode(message: GuardianKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuardianKey;
    fromJSON(object: any): GuardianKey;
    toJSON(message: GuardianKey): unknown;
    fromPartial(object: DeepPartial<GuardianKey>): GuardianKey;
};
export declare const ContractUpgrade: {
    encode(message: ContractUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContractUpgrade;
    fromJSON(object: any): ContractUpgrade;
    toJSON(message: ContractUpgrade): unknown;
    fromPartial(object: DeepPartial<ContractUpgrade>): ContractUpgrade;
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
    InjectGovernanceVAA(request: DeepPartial<InjectGovernanceVAARequest>, metadata?: grpc.Metadata): Promise<InjectGovernanceVAAResponse>;
}
export declare class NodePrivilegedServiceClientImpl implements NodePrivilegedService {
    private readonly rpc;
    constructor(rpc: Rpc);
    InjectGovernanceVAA(request: DeepPartial<InjectGovernanceVAARequest>, metadata?: grpc.Metadata): Promise<InjectGovernanceVAAResponse>;
}
export declare const NodePrivilegedServiceDesc: {
    serviceName: string;
};
export declare const NodePrivilegedServiceInjectGovernanceVAADesc: UnaryMethodDefinitionish;
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
