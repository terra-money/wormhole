import { Connection, Transaction } from "@solana/web3.js";
export default function createPool(connection: Connection, payerAddress: string, program_id: string, payer: string, from_mint: string, to_mint: string): Promise<Transaction>;
