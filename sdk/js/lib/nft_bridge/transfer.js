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
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Keypair, PublicKey, Transaction } from "@solana/web3.js";
import { NFTBridge__factory, NFTImplementation__factory, } from "../ethers-contracts";
import { getBridgeFeeIx, ixFromRust } from "../solana";
import { CHAIN_ID_SOLANA, createNonce } from "../utils";
export function transferFromEth(tokenBridgeAddress, signer, tokenAddress, tokenID, recipientChain, recipientAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var token, bridge, v, receipt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = NFTImplementation__factory.connect(tokenAddress, signer);
                    return [4 /*yield*/, token.approve(tokenBridgeAddress, tokenID)];
                case 1:
                    _a.sent();
                    bridge = NFTBridge__factory.connect(tokenBridgeAddress, signer);
                    return [4 /*yield*/, bridge.transferNFT(tokenAddress, tokenID, recipientChain, recipientAddress, createNonce())];
                case 2:
                    v = _a.sent();
                    return [4 /*yield*/, v.wait()];
                case 3:
                    receipt = _a.sent();
                    return [2 /*return*/, receipt];
            }
        });
    });
}
export function transferFromSolana(connection, bridgeAddress, tokenBridgeAddress, payerAddress, fromAddress, mintAddress, targetAddress, targetChain, originAddress, originChain, originTokenId) {
    return __awaiter(this, void 0, void 0, function () {
        var nonce, transferIx, _a, transfer_native_ix, transfer_wrapped_ix, approval_authority_address, approvalIx, messageKey, isSolanaNative, ix, transaction, blockhash;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    nonce = createNonce().readUInt32LE(0);
                    return [4 /*yield*/, getBridgeFeeIx(connection, bridgeAddress, payerAddress)];
                case 1:
                    transferIx = _b.sent();
                    return [4 /*yield*/, import("../solana/nft/nft_bridge")];
                case 2:
                    _a = _b.sent(), transfer_native_ix = _a.transfer_native_ix, transfer_wrapped_ix = _a.transfer_wrapped_ix, approval_authority_address = _a.approval_authority_address;
                    approvalIx = Token.createApproveInstruction(TOKEN_PROGRAM_ID, new PublicKey(fromAddress), new PublicKey(approval_authority_address(tokenBridgeAddress)), new PublicKey(payerAddress), [], Number(1));
                    messageKey = Keypair.generate();
                    isSolanaNative = originChain === undefined || originChain === CHAIN_ID_SOLANA;
                    if (!isSolanaNative && !originAddress && !originTokenId) {
                        throw new Error("originAddress and originTokenId are required when specifying originChain");
                    }
                    ix = ixFromRust(isSolanaNative
                        ? transfer_native_ix(tokenBridgeAddress, bridgeAddress, payerAddress, messageKey.publicKey.toString(), fromAddress, mintAddress, nonce, targetAddress, targetChain)
                        : transfer_wrapped_ix(tokenBridgeAddress, bridgeAddress, payerAddress, messageKey.publicKey.toString(), fromAddress, payerAddress, originChain, // checked by isSolanaNative
                        originAddress, // checked by throw
                        originTokenId, // checked by throw
                        nonce, targetAddress, targetChain));
                    transaction = new Transaction().add(transferIx, approvalIx, ix);
                    return [4 /*yield*/, connection.getRecentBlockhash()];
                case 3:
                    blockhash = (_b.sent()).blockhash;
                    transaction.recentBlockhash = blockhash;
                    transaction.feePayer = new PublicKey(payerAddress);
                    transaction.partialSign(messageKey);
                    return [2 /*return*/, transaction];
            }
        });
    });
}
