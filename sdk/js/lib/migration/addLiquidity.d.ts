import { Connection, Transaction } from "@solana/web3.js";
export default function addLiquidity(connection: Connection, payerAddress: string, program_id: string, from_mint: string, to_mint: string, liquidity_token_account: string, lp_share_token_account: string, amount: BigInt): Promise<Transaction>;
