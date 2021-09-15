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
import { PublicKey } from "@solana/web3.js";
import { Bridge__factory } from "../ethers-contracts";
/**
 * Returns whether or not an asset address on Ethereum is a wormhole wrapped asset
 * @param tokenBridgeAddress
 * @param provider
 * @param assetAddress
 * @returns
 */
export function getIsWrappedAssetEth(tokenBridgeAddress, provider, assetAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenBridge;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!assetAddress)
                        return [2 /*return*/, false];
                    tokenBridge = Bridge__factory.connect(tokenBridgeAddress, provider);
                    return [4 /*yield*/, tokenBridge.isWrappedAsset(assetAddress)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function getIsWrappedAssetTerra(tokenBridgeAddress, wallet, assetAddress) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, false];
        });
    });
}
/**
 * Returns whether or not an asset on Solana is a wormhole wrapped asset
 * @param connection
 * @param tokenBridgeAddress
 * @param mintAddress
 * @returns
 */
export function getIsWrappedAssetSol(connection, tokenBridgeAddress, mintAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var wrapped_meta_address, wrappedMetaAddress, wrappedMetaAddressPK, wrappedMetaAccountInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!mintAddress)
                        return [2 /*return*/, false];
                    return [4 /*yield*/, import("../solana/token/token_bridge")];
                case 1:
                    wrapped_meta_address = (_a.sent()).wrapped_meta_address;
                    wrappedMetaAddress = wrapped_meta_address(tokenBridgeAddress, new PublicKey(mintAddress).toBytes());
                    wrappedMetaAddressPK = new PublicKey(wrappedMetaAddress);
                    return [4 /*yield*/, connection.getAccountInfo(wrappedMetaAddressPK)];
                case 2:
                    wrappedMetaAccountInfo = _a.sent();
                    return [2 /*return*/, !!wrappedMetaAccountInfo];
            }
        });
    });
}
