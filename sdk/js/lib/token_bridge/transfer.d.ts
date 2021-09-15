import { Connection, Transaction } from "@solana/web3.js";
import { MsgExecuteContract } from "@terra-money/terra.js";
import { ethers } from "ethers";
import { ChainId } from "../utils";
export declare function transferFromEth(tokenBridgeAddress: string, signer: ethers.Signer, tokenAddress: string, amount: ethers.BigNumberish, recipientChain: ChainId, recipientAddress: Uint8Array): Promise<ethers.ContractReceipt>;
export declare function transferFromTerra(walletAddress: string, tokenBridgeAddress: string, tokenAddress: string, amount: string, recipientChain: ChainId, recipientAddress: Uint8Array): Promise<MsgExecuteContract[]>;
export declare function transferFromSolana(connection: Connection, bridgeAddress: string, tokenBridgeAddress: string, payerAddress: string, fromAddress: string, mintAddress: string, amount: BigInt, targetAddress: Uint8Array, targetChain: ChainId, originAddress?: Uint8Array, originChain?: ChainId): Promise<Transaction>;
