import { Connection } from "@solana/web3.js";
import { ethers } from "ethers";
import { ChainId } from "../utils";
import { LCDClient } from "@terra-money/terra.js";
export interface WormholeWrappedInfo {
    isWrapped: boolean;
    chainId: ChainId;
    assetAddress: Uint8Array;
}
/**
 * Returns a origin chain and asset address on {originChain} for a provided Wormhole wrapped address
 * @param tokenBridgeAddress
 * @param provider
 * @param wrappedAddress
 * @returns
 */
export declare function getOriginalAssetEth(tokenBridgeAddress: string, provider: ethers.providers.Web3Provider, wrappedAddress: string): Promise<WormholeWrappedInfo>;
export declare function getOriginalAssetTerra(client: LCDClient, wrappedAddress: string): Promise<WormholeWrappedInfo>;
/**
 * Returns a origin chain and asset address on {originChain} for a provided Wormhole wrapped address
 * @param connection
 * @param tokenBridgeAddress
 * @param mintAddress
 * @returns
 */
export declare function getOriginalAssetSol(connection: Connection, tokenBridgeAddress: string, mintAddress: string): Promise<WormholeWrappedInfo>;
