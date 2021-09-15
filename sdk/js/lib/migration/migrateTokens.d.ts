import { Connection, Transaction } from "@solana/web3.js";
export default function migrateTokens(connection: Connection, payerAddress: string, program_id: string, from_mint: string, to_mint: string, input_token_account: string, output_token_account: string, amount: BigInt): Promise<Transaction>;
