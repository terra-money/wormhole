import { ChainId } from "../utils/consts";
export declare function getSignedVAA(host: string, emitterChain: ChainId, emitterAddress: string, sequence: string): Promise<import("../proto/publicrpc/v1/publicrpc").GetSignedVAAResponse>;
