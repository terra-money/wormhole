/* tslint:disable */
/* eslint-disable */
/**
* @param {string} program_id
* @param {string} from_mint
* @param {string} to_mint
* @param {string} liquidity_token_account
* @param {string} lp_share_token_account
* @param {BigInt} amount
* @returns {any}
*/
export function add_liquidity(program_id: string, from_mint: string, to_mint: string, liquidity_token_account: string, lp_share_token_account: string, amount: BigInt): any;
/**
* @param {string} program_id
* @param {string} from_mint
* @param {string} to_mint
* @param {string} liquidity_token_account
* @param {string} lp_share_token_account
* @param {BigInt} amount
* @returns {any}
*/
export function remove_liquidity(program_id: string, from_mint: string, to_mint: string, liquidity_token_account: string, lp_share_token_account: string, amount: BigInt): any;
/**
* @param {string} program_id
* @param {string} from_mint
* @param {string} to_mint
* @param {string} output_token_account
* @param {string} lp_share_token_account
* @param {BigInt} amount
* @returns {any}
*/
export function claim_shares(program_id: string, from_mint: string, to_mint: string, output_token_account: string, lp_share_token_account: string, amount: BigInt): any;
/**
* @param {string} program_id
* @param {string} payer
* @param {string} from_mint
* @param {string} to_mint
* @returns {any}
*/
export function create_pool(program_id: string, payer: string, from_mint: string, to_mint: string): any;
/**
* @param {string} program_id
* @param {string} from_mint
* @param {string} to_mint
* @param {string} input_token_account
* @param {string} output_token_account
* @param {BigInt} amount
* @returns {any}
*/
export function migrate_tokens(program_id: string, from_mint: string, to_mint: string, input_token_account: string, output_token_account: string, amount: BigInt): any;
/**
* @param {string} program_id
* @param {string} from_mint
* @param {string} to_mint
* @returns {Uint8Array}
*/
export function pool_address(program_id: string, from_mint: string, to_mint: string): Uint8Array;
/**
* @param {string} program_id
* @returns {Uint8Array}
*/
export function authority_address(program_id: string): Uint8Array;
/**
* @param {string} program_id
* @param {string} pool
* @returns {Uint8Array}
*/
export function share_mint_address(program_id: string, pool: string): Uint8Array;
/**
* @param {string} program_id
* @param {string} pool
* @returns {Uint8Array}
*/
export function from_custody_address(program_id: string, pool: string): Uint8Array;
/**
* @param {string} program_id
* @param {string} pool
* @returns {Uint8Array}
*/
export function to_custody_address(program_id: string, pool: string): Uint8Array;
/**
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_pool(data: Uint8Array): any;
