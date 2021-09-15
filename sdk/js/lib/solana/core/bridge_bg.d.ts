/**
* @param {string} program_id
* @param {string} payer
* @param {string} emitter
* @param {string} message
* @param {number} nonce
* @param {Uint8Array} msg
* @param {string} consistency
* @returns {any}
*/
export function post_message_ix(program_id: string, payer: string, emitter: string, message: string, nonce: number, msg: Uint8Array, consistency: string): any;
/**
* @param {string} program_id
* @param {string} payer
* @param {string} signature_set
* @param {Uint8Array} vaa
* @returns {any}
*/
export function post_vaa_ix(program_id: string, payer: string, signature_set: string, vaa: Uint8Array): any;
/**
* @param {string} program_id
* @param {string} payer
* @param {Uint8Array} vaa
* @returns {any}
*/
export function update_guardian_set_ix(program_id: string, payer: string, vaa: Uint8Array): any;
/**
* @param {string} program_id
* @param {string} payer
* @param {Uint8Array} vaa
* @returns {any}
*/
export function set_fees_ix(program_id: string, payer: string, vaa: Uint8Array): any;
/**
* @param {string} program_id
* @param {string} payer
* @param {Uint8Array} vaa
* @returns {any}
*/
export function transfer_fees_ix(program_id: string, payer: string, vaa: Uint8Array): any;
/**
* @param {string} program_id
* @param {string} payer
* @param {string} spill
* @param {Uint8Array} vaa
* @returns {any}
*/
export function upgrade_contract_ix(program_id: string, payer: string, spill: string, vaa: Uint8Array): any;
/**
* @param {string} program_id
* @param {string} payer
* @param {number} guardian_set_index
* @param {any} guardian_set
* @param {string} signature_set
* @param {Uint8Array} vaa_data
* @returns {any}
*/
export function verify_signatures_ix(program_id: string, payer: string, guardian_set_index: number, guardian_set: any, signature_set: string, vaa_data: Uint8Array): any;
/**
* @param {string} bridge
* @param {number} index
* @returns {Uint8Array}
*/
export function guardian_set_address(bridge: string, index: number): Uint8Array;
/**
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_guardian_set(data: Uint8Array): any;
/**
* @param {string} bridge
* @returns {Uint8Array}
*/
export function state_address(bridge: string): Uint8Array;
/**
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_state(data: Uint8Array): any;
/**
* @param {string} bridge
* @returns {Uint8Array}
*/
export function fee_collector_address(bridge: string): Uint8Array;
/**
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_posted_message(data: Uint8Array): any;
/**
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_vaa(data: Uint8Array): any;
export function __wbindgen_json_serialize(arg0: any, arg1: any): void;
export function __wbindgen_object_drop_ref(arg0: any): void;
export function __wbindgen_json_parse(arg0: any, arg1: any): number;
