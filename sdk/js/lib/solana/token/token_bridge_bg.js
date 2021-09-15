import * as wasm from './token_bridge_bg.wasm';
var lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
var heap = new Array(32).fill(undefined);
heap.push(undefined, null, true, false);
var heap_next = heap.length;
function addHeapObject(obj) {
    if (heap_next === heap.length)
        heap.push(heap.length + 1);
    var idx = heap_next;
    heap_next = heap[idx];
    heap[idx] = obj;
    return idx;
}
var WASM_VECTOR_LEN = 0;
var lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;
var cachedTextEncoder = new lTextEncoder('utf-8');
var encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
    }
    : function (arg, view) {
        var buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    });
function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        var buf = cachedTextEncoder.encode(arg);
        var ptr_1 = malloc(buf.length);
        getUint8Memory0().subarray(ptr_1, ptr_1 + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr_1;
    }
    var len = arg.length;
    var ptr = malloc(len);
    var mem = getUint8Memory0();
    var offset = 0;
    for (; offset < len; offset++) {
        var code = arg.charCodeAt(offset);
        if (code > 0x7F)
            break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        var view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        var ret = encodeString(arg, view);
        offset += ret.written;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
}
function getObject(idx) { return heap[idx]; }
function dropObject(idx) {
    if (idx < 36)
        return;
    heap[idx] = heap_next;
    heap_next = idx;
}
function takeObject(idx) {
    var ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} message
* @param {string} mint
* @param {number} nonce
* @returns {any}
*/
export function attest_ix(program_id, bridge_id, payer, message, mint, nonce) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ret = wasm.attest_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, nonce);
    return takeObject(ret);
}
var u32CvtShim = new Uint32Array(2);
var uint64CvtShim = new BigUint64Array(u32CvtShim.buffer);
function passArray8ToWasm0(arg, malloc) {
    var ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} message
* @param {string} from
* @param {string} mint
* @param {number} nonce
* @param {BigInt} amount
* @param {BigInt} fee
* @param {Uint8Array} target_address
* @param {number} target_chain
* @returns {any}
*/
export function transfer_native_ix(program_id, bridge_id, payer, message, from, mint, nonce, amount, fee, target_address, target_chain) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(from, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ptr5 = passStringToWasm0(mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len5 = WASM_VECTOR_LEN;
    uint64CvtShim[0] = amount;
    var low6 = u32CvtShim[0];
    var high6 = u32CvtShim[1];
    uint64CvtShim[0] = fee;
    var low7 = u32CvtShim[0];
    var high7 = u32CvtShim[1];
    var ptr8 = passArray8ToWasm0(target_address, wasm.__wbindgen_malloc);
    var len8 = WASM_VECTOR_LEN;
    var ret = wasm.transfer_native_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5, nonce, low6, high6, low7, high7, ptr8, len8, target_chain);
    return takeObject(ret);
}
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} message
* @param {string} from
* @param {string} from_owner
* @param {number} token_chain
* @param {Uint8Array} token_address
* @param {number} nonce
* @param {BigInt} amount
* @param {BigInt} fee
* @param {Uint8Array} target_address
* @param {number} target_chain
* @returns {any}
*/
export function transfer_wrapped_ix(program_id, bridge_id, payer, message, from, from_owner, token_chain, token_address, nonce, amount, fee, target_address, target_chain) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(from, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ptr5 = passStringToWasm0(from_owner, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len5 = WASM_VECTOR_LEN;
    var ptr6 = passArray8ToWasm0(token_address, wasm.__wbindgen_malloc);
    var len6 = WASM_VECTOR_LEN;
    uint64CvtShim[0] = amount;
    var low7 = u32CvtShim[0];
    var high7 = u32CvtShim[1];
    uint64CvtShim[0] = fee;
    var low8 = u32CvtShim[0];
    var high8 = u32CvtShim[1];
    var ptr9 = passArray8ToWasm0(target_address, wasm.__wbindgen_malloc);
    var len9 = WASM_VECTOR_LEN;
    var ret = wasm.transfer_wrapped_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5, token_chain, ptr6, len6, nonce, low7, high7, low8, high8, ptr9, len9, target_chain);
    return takeObject(ret);
}
function isLikeNone(x) {
    return x === undefined || x === null;
}
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {Uint8Array} vaa
* @param {string | undefined} fee_recipient
* @returns {any}
*/
export function complete_transfer_native_ix(program_id, bridge_id, payer, vaa, fee_recipient) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = isLikeNone(fee_recipient) ? 0 : passStringToWasm0(fee_recipient, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ret = wasm.complete_transfer_native_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4);
    return takeObject(ret);
}
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {Uint8Array} vaa
* @param {string | undefined} fee_recipient
* @returns {any}
*/
export function complete_transfer_wrapped_ix(program_id, bridge_id, payer, vaa, fee_recipient) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = isLikeNone(fee_recipient) ? 0 : passStringToWasm0(fee_recipient, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    var ret = wasm.complete_transfer_wrapped_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4);
    return takeObject(ret);
}
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {Uint8Array} vaa
* @returns {any}
*/
export function create_wrapped_ix(program_id, bridge_id, payer, vaa) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ret = wasm.create_wrapped_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return takeObject(ret);
}
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} spill
* @param {Uint8Array} vaa
* @returns {any}
*/
export function upgrade_contract_ix(program_id, bridge_id, payer, spill, vaa) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(spill, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len4 = WASM_VECTOR_LEN;
    var ret = wasm.upgrade_contract_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4);
    return takeObject(ret);
}
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {Uint8Array} vaa
* @returns {any}
*/
export function register_chain_ix(program_id, bridge_id, payer, vaa) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(bridge_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ret = wasm.register_chain_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return takeObject(ret);
}
var cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}
function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @param {string} program_id
* @returns {Uint8Array}
*/
export function emitter_address(program_id) {
    try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.emitter_address(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    }
    finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
/**
* @param {string} program_id
* @returns {Uint8Array}
*/
export function approval_authority_address(program_id) {
    try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.approval_authority_address(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    }
    finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
/**
* @param {string} program_id
* @param {Uint8Array} token_address
* @param {number} token_chain
* @returns {Uint8Array}
*/
export function wrapped_address(program_id, token_address, token_chain) {
    try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(token_address, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.wrapped_address(retptr, ptr0, len0, ptr1, len1, token_chain);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    }
    finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
/**
* @param {string} program_id
* @param {Uint8Array} mint_address
* @returns {Uint8Array}
*/
export function wrapped_meta_address(program_id, mint_address) {
    try {
        var retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(mint_address, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.wrapped_meta_address(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    }
    finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
/**
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_wrapped_meta(data) {
    var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.parse_wrapped_meta(ptr0, len0);
    return takeObject(ret);
}
/**
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_endpoint_registration(data) {
    var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.parse_endpoint_registration(ptr0, len0);
    return takeObject(ret);
}
export function __wbindgen_json_parse(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}
;
