import { Connection } from "@solana/web3.js";
import { ethers } from "ethers";
/**
 * Returns whether or not an asset address on Ethereum is a wormhole wrapped asset
 * @param tokenBridgeAddress
 * @param provider
 * @param assetAddress
 * @returns
 */
export declare function getIsWrappedAssetEth(tokenBridgeAddress: string, provider: ethers.providers.Web3Provider, assetAddress: string): Promise<boolean>;
/**
 * Returns whether or not an asset on Solana is a wormhole wrapped asset
 * @param connection
 * @param tokenBridgeAddress
 * @param mintAddress
 * @returns
 */
export declare function getIsWrappedAssetSol(connection: Connection, tokenBridgeAddress: string, mintAddress: string): Promise<boolean>;
