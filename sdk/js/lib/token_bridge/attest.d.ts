import { Connection, Transaction } from "@solana/web3.js";
import { ethers } from "ethers";
import { ConnectedWallet as TerraConnectedWallet } from "@terra-money/wallet-provider";
export declare function attestFromEth(tokenBridgeAddress: string, signer: ethers.Signer, tokenAddress: string): Promise<ethers.ContractReceipt>;
export declare function attestFromTerra(tokenBridgeAddress: string, wallet: TerraConnectedWallet, asset: string): Promise<import("@terra-money/wallet-provider").TxResult>;
export declare function attestFromSolana(connection: Connection, bridgeAddress: string, tokenBridgeAddress: string, payerAddress: string, mintAddress: string): Promise<Transaction>;
