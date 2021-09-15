import { Connection, Transaction } from "@solana/web3.js";
import { ethers } from "ethers";
import { ChainId } from "../utils";
export declare function transferFromEth(tokenBridgeAddress: string, signer: ethers.Signer, tokenAddress: string, tokenID: ethers.BigNumberish, recipientChain: ChainId, recipientAddress: Uint8Array): Promise<ethers.ContractReceipt>;
export declare function transferFromSolana(connection: Connection, bridgeAddress: string, tokenBridgeAddress: string, payerAddress: string, fromAddress: string, mintAddress: string, targetAddress: Uint8Array, targetChain: ChainId, originAddress?: Uint8Array, originChain?: ChainId, originTokenId?: Uint8Array): Promise<Transaction>;
