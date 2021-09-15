import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "gossip.v1";
export interface GossipMessage {
    /** Deprecated: use SignedHeartbeat. */
    heartbeat: Heartbeat | undefined;
    signedObservation: SignedObservation | undefined;
    signedHeartbeat: SignedHeartbeat | undefined;
    signedVaaWithQuorum: SignedVAAWithQuorum | undefined;
}
export interface SignedHeartbeat {
    /** Serialized Heartbeat message. */
    heartbeat: Uint8Array;
    /** ECDSA signature using the node's guardian public key. */
    signature: Uint8Array;
    /**
     * Guardian address that signed this payload (truncated Eth address).
     * This is already contained in Heartbeat, however, we want to verify
     * the payload before we deserialize it.
     */
    guardianAddr: Uint8Array;
}
/** P2P gossip heartbeats for network introspection purposes. */
export interface Heartbeat {
    /** The node's arbitrarily chosen, untrusted nodeName. */
    nodeName: string;
    /** A monotonic counter that resets to zero on startup. */
    counter: string;
    /** UNIX wall time. */
    timestamp: string;
    networks: Heartbeat_Network[];
    /** Human-readable representation of the current bridge node release. */
    version: string;
    /** Human-readable representation of the guardian key's address. */
    guardianAddr: string;
    /** UNIX boot timestamp. */
    bootTimestamp: string;
}
export interface Heartbeat_Network {
    /** Canonical chain ID. */
    id: number;
    /** Consensus height of the node. */
    height: string;
    /** Chain-specific human-readable representation of the bridge contract address. */
    contractAddress: string;
    /** Connection error count */
    errorCount: string;
}
/**
 * A SignedObservation is a signed statement by a given guardian node
 * that they observed a given event.
 *
 * Observations always result from an external, final event being observed.
 * Examples are emitted messages in finalized blocks on a block or guardian set changes
 * injected by node operators after reaching off-chain consensus.
 *
 * The event is uniquely identified by its hashed (tx_hash, nonce, values...) tuple.
 *
 * Other nodes will verify the signature. Once any node has observed a quorum of
 * guardians submitting valid signatures for a given hash, they can be assembled into a VAA.
 *
 * Messages without valid signature are dropped unceremoniously.
 */
export interface SignedObservation {
    /** Guardian pubkey as truncated eth address. */
    addr: Uint8Array;
    /** The observation's deterministic, unique hash. */
    hash: Uint8Array;
    /** ECSDA signature of the hash using the node's guardian key. */
    signature: Uint8Array;
}
/**
 * A SignedVAAWithQuorum message is sent by nodes whenever one of the VAAs they observed
 * reached a 2/3+ quorum to be considered valid. Signed VAAs are broadcasted to the gossip
 * network to allow nodes to persist them even if they failed to observe the signature.
 */
export interface SignedVAAWithQuorum {
    vaa: Uint8Array;
}
export declare const GossipMessage: {
    encode(message: GossipMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GossipMessage;
    fromJSON(object: any): GossipMessage;
    toJSON(message: GossipMessage): unknown;
    fromPartial(object: DeepPartial<GossipMessage>): GossipMessage;
};
export declare const SignedHeartbeat: {
    encode(message: SignedHeartbeat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedHeartbeat;
    fromJSON(object: any): SignedHeartbeat;
    toJSON(message: SignedHeartbeat): unknown;
    fromPartial(object: DeepPartial<SignedHeartbeat>): SignedHeartbeat;
};
export declare const Heartbeat: {
    encode(message: Heartbeat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Heartbeat;
    fromJSON(object: any): Heartbeat;
    toJSON(message: Heartbeat): unknown;
    fromPartial(object: DeepPartial<Heartbeat>): Heartbeat;
};
export declare const Heartbeat_Network: {
    encode(message: Heartbeat_Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Heartbeat_Network;
    fromJSON(object: any): Heartbeat_Network;
    toJSON(message: Heartbeat_Network): unknown;
    fromPartial(object: DeepPartial<Heartbeat_Network>): Heartbeat_Network;
};
export declare const SignedObservation: {
    encode(message: SignedObservation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedObservation;
    fromJSON(object: any): SignedObservation;
    toJSON(message: SignedObservation): unknown;
    fromPartial(object: DeepPartial<SignedObservation>): SignedObservation;
};
export declare const SignedVAAWithQuorum: {
    encode(message: SignedVAAWithQuorum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedVAAWithQuorum;
    fromJSON(object: any): SignedVAAWithQuorum;
    toJSON(message: SignedVAAWithQuorum): unknown;
    fromPartial(object: DeepPartial<SignedVAAWithQuorum>): SignedVAAWithQuorum;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
