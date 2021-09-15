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
import { Keypair, PublicKey, Transaction } from "@solana/web3.js";
import { Bridge__factory } from "../ethers-contracts";
import { getBridgeFeeIx, ixFromRust } from "../solana";
import { createNonce } from "../utils/createNonce";
import { MsgExecuteContract } from "@terra-money/terra.js";
export function attestFromEth(tokenBridgeAddress, signer, tokenAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var bridge, v, receipt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bridge = Bridge__factory.connect(tokenBridgeAddress, signer);
                    return [4 /*yield*/, bridge.attestToken(tokenAddress, createNonce())];
                case 1:
                    v = _a.sent();
                    return [4 /*yield*/, v.wait()];
                case 2:
                    receipt = _a.sent();
                    return [2 /*return*/, receipt];
            }
        });
    });
}
export function attestFromTerra(tokenBridgeAddress, wallet, asset) {
    return __awaiter(this, void 0, void 0, function () {
        var nonce;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nonce = Math.round(Math.random() * 100000);
                    return [4 /*yield*/, wallet.post({
                            msgs: [
                                new MsgExecuteContract(wallet.terraAddress, tokenBridgeAddress, {
                                    create_asset_meta: {
                                        asset_address: asset,
                                        nonce: nonce,
                                    },
                                }, { uluna: 10000 }),
                            ],
                            memo: "Create Wrapped",
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function attestFromSolana(connection, bridgeAddress, tokenBridgeAddress, payerAddress, mintAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var nonce, transferIx, attest_ix, messageKey, ix, transaction, blockhash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nonce = createNonce().readUInt32LE(0);
                    return [4 /*yield*/, getBridgeFeeIx(connection, bridgeAddress, payerAddress)];
                case 1:
                    transferIx = _a.sent();
                    return [4 /*yield*/, import("../solana/token/token_bridge")];
                case 2:
                    attest_ix = (_a.sent()).attest_ix;
                    messageKey = Keypair.generate();
                    ix = ixFromRust(attest_ix(tokenBridgeAddress, bridgeAddress, payerAddress, messageKey.publicKey.toString(), mintAddress, nonce));
                    transaction = new Transaction().add(transferIx, ix);
                    return [4 /*yield*/, connection.getRecentBlockhash()];
                case 3:
                    blockhash = (_a.sent()).blockhash;
                    transaction.recentBlockhash = blockhash;
                    transaction.feePayer = new PublicKey(payerAddress);
                    transaction.partialSign(messageKey);
                    return [2 /*return*/, transaction];
            }
        });
    });
}
