import * as wasm from './bridge_bg.wasm';

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let WASM_VECTOR_LEN = 0;

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

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

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

let heap_next = heap.length;

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

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
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
export function post_message_ix(program_id, payer, emitter, message, nonce, msg, consistency) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(emitter, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    var ptr4 = passArray8ToWasm0(msg, wasm.__wbindgen_malloc);
    var len4 = WASM_VECTOR_LEN;
    var ptr5 = passStringToWasm0(consistency, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len5 = WASM_VECTOR_LEN;
    var ret = wasm.post_message_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, nonce, ptr4, len4, ptr5, len5);
    return takeObject(ret);
}

/**
* @param {string} program_id
* @param {string} payer
* @param {string} signature_set
* @param {Uint8Array} vaa
* @returns {any}
*/
export function post_vaa_ix(program_id, payer, signature_set, vaa) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(signature_set, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ret = wasm.post_vaa_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return takeObject(ret);
}

/**
* @param {string} program_id
* @param {string} payer
* @param {Uint8Array} vaa
* @returns {any}
*/
export function update_guardian_set_ix(program_id, payer, vaa) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len2 = WASM_VECTOR_LEN;
    var ret = wasm.update_guardian_set_ix(ptr0, len0, ptr1, len1, ptr2, len2);
    return takeObject(ret);
}

/**
* @param {string} program_id
* @param {string} payer
* @param {Uint8Array} vaa
* @returns {any}
*/
export function set_fees_ix(program_id, payer, vaa) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len2 = WASM_VECTOR_LEN;
    var ret = wasm.set_fees_ix(ptr0, len0, ptr1, len1, ptr2, len2);
    return takeObject(ret);
}

/**
* @param {string} program_id
* @param {string} payer
* @param {Uint8Array} vaa
* @returns {any}
*/
export function transfer_fees_ix(program_id, payer, vaa) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len2 = WASM_VECTOR_LEN;
    var ret = wasm.transfer_fees_ix(ptr0, len0, ptr1, len1, ptr2, len2);
    return takeObject(ret);
}

/**
* @param {string} program_id
* @param {string} payer
* @param {string} spill
* @param {Uint8Array} vaa
* @returns {any}
*/
export function upgrade_contract_ix(program_id, payer, spill, vaa) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(spill, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(vaa, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ret = wasm.upgrade_contract_ix(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return takeObject(ret);
}

/**
* @param {string} program_id
* @param {string} payer
* @param {number} guardian_set_index
* @param {any} guardian_set
* @param {string} signature_set
* @param {Uint8Array} vaa_data
* @returns {any}
*/
export function verify_signatures_ix(program_id, payer, guardian_set_index, guardian_set, signature_set, vaa_data) {
    var ptr0 = passStringToWasm0(program_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(payer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(signature_set, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(vaa_data, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ret = wasm.verify_signatures_ix(ptr0, len0, ptr1, len1, guardian_set_index, addHeapObject(guardian_set), ptr2, len2, ptr3, len3);
    return takeObject(ret);
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @param {string} bridge
* @param {number} index
* @returns {Uint8Array}
*/
export function guardian_set_address(bridge, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(bridge, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.guardian_set_address(retptr, ptr0, len0, index);
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
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_guardian_set(data) {
    var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.parse_guardian_set(ptr0, len0);
    return takeObject(ret);
}

/**
* @param {string} bridge
* @returns {Uint8Array}
*/
export function state_address(bridge) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(bridge, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.state_address(retptr, ptr0, len0);
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
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_state(data) {
    var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.parse_state(ptr0, len0);
    return takeObject(ret);
}

/**
* @param {string} bridge
* @returns {Uint8Array}
*/
export function fee_collector_address(bridge) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passStringToWasm0(bridge, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.fee_collector_address(retptr, ptr0, len0);
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
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_posted_message(data) {
    var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.parse_posted_message(ptr0, len0);
    return takeObject(ret);
}

/**
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_vaa(data) {
    var ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.parse_vaa(ptr0, len0);
    return takeObject(ret);
}

export function __wbindgen_json_serialize(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = JSON.stringify(obj === undefined ? null : obj);
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

export function __wbindgen_json_parse(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

