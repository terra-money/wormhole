/// <reference types="node" />
import { Connection, Transaction } from "@solana/web3.js";
export declare function postVaa(connection: Connection, signTransaction: (transaction: Transaction) => any, bridge_id: string, payer: string, vaa: Buffer): Promise<void>;
