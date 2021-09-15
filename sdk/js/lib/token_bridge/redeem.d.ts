import { Connection, Transaction } from "@solana/web3.js";
import { MsgExecuteContract } from "@terra-money/terra.js";
import { ethers } from "ethers";
export declare function redeemOnEth(tokenBridgeAddress: string, signer: ethers.Signer, signedVAA: Uint8Array): Promise<ethers.ContractReceipt>;
export declare function redeemOnTerra(tokenBridgeAddress: string, walletAddress: string, signedVAA: Uint8Array): Promise<MsgExecuteContract>;
export declare function redeemOnSolana(connection: Connection, bridgeAddress: string, tokenBridgeAddress: string, payerAddress: string, signedVAA: Uint8Array): Promise<Transaction>;
