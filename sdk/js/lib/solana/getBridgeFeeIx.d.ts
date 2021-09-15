import { Connection } from "@solana/web3.js";
export declare function getBridgeFeeIx(connection: Connection, bridgeAddress: string, payerAddress: string): Promise<import("@solana/web3.js").TransactionInstruction>;
