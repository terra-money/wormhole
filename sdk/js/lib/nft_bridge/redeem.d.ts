import { Connection, Transaction } from "@solana/web3.js";
import { ethers } from "ethers";
export declare function redeemOnEth(tokenBridgeAddress: string, signer: ethers.Signer, signedVAA: Uint8Array): Promise<ethers.ContractReceipt>;
export declare function redeemOnSolana(connection: Connection, bridgeAddress: string, tokenBridgeAddress: string, payerAddress: string, signedVAA: Uint8Array): Promise<Transaction>;
