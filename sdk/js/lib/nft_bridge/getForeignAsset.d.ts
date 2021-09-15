import { ethers } from "ethers";
import { ChainId } from "../utils";
/**
 * Returns a foreign asset address on Ethereum for a provided native chain and asset address, AddressZero if it does not exist
 * @param tokenBridgeAddress
 * @param provider
 * @param originChain
 * @param originAsset zero pad to 32 bytes
 * @returns
 */
export declare function getForeignAssetEth(tokenBridgeAddress: string, provider: ethers.providers.Web3Provider, originChain: ChainId, originAsset: Uint8Array): Promise<string | null>;
/**
 * Returns a foreign asset address on Solana for a provided native chain and asset address
 * @param tokenBridgeAddress
 * @param originChain
 * @param originAsset zero pad to 32 bytes
 * @returns
 */
export declare function getForeignAssetSol(tokenBridgeAddress: string, originChain: ChainId, originAsset: Uint8Array, tokenId: Uint8Array): Promise<string>;
