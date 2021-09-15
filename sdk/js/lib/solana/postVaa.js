var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import { Keypair, PublicKey, Transaction, } from "@solana/web3.js";
import { ixFromRust } from "./rust";
// is there a better pattern for this?
export function postVaa(connection, signTransaction, bridge_id, payer, vaa) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, guardian_set_address, parse_guardian_set, verify_signatures_ix, post_vaa_ix, bridge_state, guardian_addr, acc, guardian_data, signature_set, txs, txs_1, txs_1_1, tx, ixs, transaction_1, blockhash_1, signed_1, txid_1, e_1_1, ix, transaction, blockhash, signed, txid;
        var e_1, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, import("./core/bridge")];
                case 1:
                    _a = _c.sent(), guardian_set_address = _a.guardian_set_address, parse_guardian_set = _a.parse_guardian_set, verify_signatures_ix = _a.verify_signatures_ix, post_vaa_ix = _a.post_vaa_ix;
                    return [4 /*yield*/, getBridgeState(connection, bridge_id)];
                case 2:
                    bridge_state = _c.sent();
                    guardian_addr = new PublicKey(guardian_set_address(bridge_id, bridge_state.guardian_set_index));
                    return [4 /*yield*/, connection.getAccountInfo(guardian_addr)];
                case 3:
                    acc = _c.sent();
                    if ((acc === null || acc === void 0 ? void 0 : acc.data) === undefined) {
                        return [2 /*return*/];
                    }
                    guardian_data = parse_guardian_set(new Uint8Array(acc === null || acc === void 0 ? void 0 : acc.data));
                    signature_set = Keypair.generate();
                    txs = verify_signatures_ix(bridge_id, payer, bridge_state.guardian_set_index, guardian_data, signature_set.publicKey.toString(), vaa);
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 12, 13, 14]);
                    txs_1 = __values(txs), txs_1_1 = txs_1.next();
                    _c.label = 5;
                case 5:
                    if (!!txs_1_1.done) return [3 /*break*/, 11];
                    tx = txs_1_1.value;
                    ixs = tx.map(function (v) {
                        return ixFromRust(v);
                    });
                    transaction_1 = new Transaction().add(ixs[0], ixs[1]);
                    return [4 /*yield*/, connection.getRecentBlockhash()];
                case 6:
                    blockhash_1 = (_c.sent()).blockhash;
                    transaction_1.recentBlockhash = blockhash_1;
                    transaction_1.feePayer = new PublicKey(payer);
                    transaction_1.partialSign(signature_set);
                    return [4 /*yield*/, signTransaction(transaction_1)];
                case 7:
                    signed_1 = _c.sent();
                    return [4 /*yield*/, connection.sendRawTransaction(signed_1.serialize())];
                case 8:
                    txid_1 = _c.sent();
                    return [4 /*yield*/, connection.confirmTransaction(txid_1)];
                case 9:
                    _c.sent();
                    _c.label = 10;
                case 10:
                    txs_1_1 = txs_1.next();
                    return [3 /*break*/, 5];
                case 11: return [3 /*break*/, 14];
                case 12:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 14];
                case 13:
                    try {
                        if (txs_1_1 && !txs_1_1.done && (_b = txs_1.return)) _b.call(txs_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 14:
                    ix = ixFromRust(post_vaa_ix(bridge_id, payer, signature_set.publicKey.toString(), vaa));
                    transaction = new Transaction().add(ix);
                    return [4 /*yield*/, connection.getRecentBlockhash()];
                case 15:
                    blockhash = (_c.sent()).blockhash;
                    transaction.recentBlockhash = blockhash;
                    transaction.feePayer = new PublicKey(payer);
                    return [4 /*yield*/, signTransaction(transaction)];
                case 16:
                    signed = _c.sent();
                    return [4 /*yield*/, connection.sendRawTransaction(signed.serialize())];
                case 17:
                    txid = _c.sent();
                    return [4 /*yield*/, connection.confirmTransaction(txid)];
                case 18:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getBridgeState(connection, bridge_id) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, parse_state, state_address, bridge_state, acc;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, import("./core/bridge")];
                case 1:
                    _a = _b.sent(), parse_state = _a.parse_state, state_address = _a.state_address;
                    bridge_state = new PublicKey(state_address(bridge_id));
                    return [4 /*yield*/, connection.getAccountInfo(bridge_state)];
                case 2:
                    acc = _b.sent();
                    if ((acc === null || acc === void 0 ? void 0 : acc.data) === undefined) {
                        throw new Error("bridge state not found");
                    }
                    return [2 /*return*/, parse_state(new Uint8Array(acc === null || acc === void 0 ? void 0 : acc.data))];
            }
        });
    });
}
