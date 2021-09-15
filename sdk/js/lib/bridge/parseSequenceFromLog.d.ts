import { TransactionResponse } from "@solana/web3.js";
import { TxInfo } from "@terra-money/terra.js";
import { ContractReceipt } from "ethers";
export declare function parseSequenceFromLogEth(receipt: ContractReceipt, bridgeAddress: string): string;
export declare function parseSequenceFromLogTerra(info: TxInfo): string;
export declare function parseSequenceFromLogSolana(info: TransactionResponse): string;
