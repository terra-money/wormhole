import { Connection, Transaction } from "@solana/web3.js";
import { ethers } from "ethers";
import { MsgExecuteContract } from "@terra-money/terra.js";
export declare function createWrappedOnEth(tokenBridgeAddress: string, signer: ethers.Signer, signedVAA: Uint8Array): Promise<ethers.ContractReceipt>;
export declare function createWrappedOnTerra(tokenBridgeAddress: string, walletAddress: string, signedVAA: Uint8Array): Promise<MsgExecuteContract>;
export declare function createWrappedOnSolana(connection: Connection, bridgeAddress: string, tokenBridgeAddress: string, payerAddress: string, signedVAA: Uint8Array): Promise<Transaction>;
