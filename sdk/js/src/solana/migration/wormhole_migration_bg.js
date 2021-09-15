import * as wasm from './wormhole_migration_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

const u32CvtShim = new Uint32Array(2);

const uint64CvtShim = new BigUint64Array(u32CvtShim.buffer);

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
* @param {string} program_id
* @param {string} from_mint
* @param {string} to_mint
* @param {string} liquidity_token_account
* @param {string} lp_share_token_account
* @param {BigInt} amount
* @returns {any}
*/
export function add_liquidity(program_id, from_mint, to_mint, liquidity_token_account, lp_share_token_account, amount) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(from_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(to_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(liquidity_token_account, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(lp_share_token_account, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    uint64CvtShim[0] = amount;
    const low5 = u32CvtShim[0];
    const high5 = u32CvtShim[1];
    var ret = wasm.add_liquidity(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, low5, high5);
    return takeObject(ret);
}

/**
* @param {string} program_id
* @param {string} from_mint
* @param {string} to_mint
* @param {string} liquidity_token_account
* @param {string} lp_share_token_account
* @param {BigInt} amount
* @returns {any}
*/
export function remove_liquidity(program_id, from_mint, to_mint, liquidity_token_account, lp_share_token_account, amount) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(from_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(to_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(liquidity_token_account, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(lp_share_token_account, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    uint64CvtShim[0] = amount;
    const low5 = u32CvtShim[0];
    const high5 = u32CvtShim[1];
    var ret = wasm.remove_liquidity(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, low5, high5);
    return takeObject(ret);
}

/**
* @param {string} program_id
* @param {string} from_mint
* @param {string} to_mint
* @param {string} output_token_account
* @param {string} lp_share_token_account
* @param {BigInt} amount
* @returns {any}
*/
export function claim_shares(program_id, from_mint, to_mint, output_token_account, lp_share_token_account, amount) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(from_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(to_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(output_token_account, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(lp_share_token_account, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    uint64CvtShim[0] = amount;
    const low5 = u32CvtShim[0];
    const high5 = u32CvtShim[1];
    var ret = wasm.claim_shares(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, low5, high5);
    return takeObject(ret);
}

/**
* @param {string} program_id
* @param {string} payer
* @param {string} from_mint
* @param {string} to_mint
* @returns {any}
*/
export function create_pool(program_id, payer, from_mint, to_mint) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(from_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(to_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ret = wasm.create_pool(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return takeObject(ret);
}

/**
* @param {string} program_id
* @param {string} from_mint
* @param {string} to_mint
* @param {string} input_token_account
* @param {string} output_token_account
* @param {BigInt} amount
* @returns {any}
*/
export function migrate_tokens(program_id, from_mint, to_mint, input_token_account, output_token_account, amount) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(from_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(to_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(input_token_account, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passStringToWasm0(output_token_account, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len4 = WASM_VECTOR_LEN;
    uint64CvtShim[0] = amount;
    const low5 = u32CvtShim[0];
    const high5 = u32CvtShim[1];
    var ret = wasm.migrate_tokens(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, low5, high5);
    return takeObject(ret);
}

let cachegetInt32Memory0 = null;
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
* @param {string} from_mint
* @param {string} to_mint
* @returns {Uint8Array}
*/
export function pool_address(program_id, from_mint, to_mint) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(from_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = passStringToWasm0(to_mint, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        wasm.pool_address(retptr, ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v3 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v3;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {string} program_id
* @returns {Uint8Array}
*/
export function authority_address(program_id) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.authority_address(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {string} program_id
* @param {string} pool
* @returns {Uint8Array}
*/
export function share_mint_address(program_id, pool) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(pool, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.share_mint_address(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {string} program_id
* @param {string} pool
* @returns {Uint8Array}
*/
export function from_custody_address(program_id, pool) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(pool, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.from_custody_address(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {string} program_id
* @param {string} pool
* @returns {Uint8Array}
*/
export function to_custody_address(program_id, pool) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(pool, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.to_custody_address(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_pool(data) {
    var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.parse_pool(ptr0, len0);
    return takeObject(ret);
}

export function __wbindgen_json_parse(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

