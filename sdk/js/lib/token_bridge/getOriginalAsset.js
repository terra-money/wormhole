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
import { arrayify, zeroPad } from "ethers/lib/utils";
import { TokenImplementation__factory } from "../ethers-contracts";
import { CHAIN_ID_ETH, CHAIN_ID_SOLANA, CHAIN_ID_TERRA, } from "../utils";
import { getIsWrappedAssetEth } from "./getIsWrappedAsset";
import { canonicalAddress } from "../terra";
/**
 * Returns a origin chain and asset address on {originChain} for a provided Wormhole wrapped address
 * @param tokenBridgeAddress
 * @param provider
 * @param wrappedAddress
 * @returns
 */
export function getOriginalAssetEth(tokenBridgeAddress, provider, wrappedAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var isWrapped, token, chainId, assetAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getIsWrappedAssetEth(tokenBridgeAddress, provider, wrappedAddress)];
                case 1:
                    isWrapped = _a.sent();
                    if (!isWrapped) return [3 /*break*/, 4];
                    token = TokenImplementation__factory.connect(wrappedAddress, provider);
                    return [4 /*yield*/, token.chainId()];
                case 2:
                    chainId = (_a.sent());
                    return [4 /*yield*/, token.nativeContract()];
                case 3:
                    assetAddress = _a.sent();
                    return [2 /*return*/, {
                            isWrapped: true,
                            chainId: chainId,
                            assetAddress: arrayify(assetAddress),
                        }];
                case 4: return [2 /*return*/, {
                        isWrapped: false,
                        chainId: CHAIN_ID_ETH,
                        assetAddress: zeroPad(arrayify(wrappedAddress), 32),
                    }];
            }
        });
    });
}
export function getOriginalAssetTerra(client, wrappedAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, client.wasm.contractQuery(wrappedAddress, {
                            wrapped_asset_info: {},
                        })];
                case 1:
                    result = _a.sent();
                    if (result) {
                        return [2 /*return*/, {
                                isWrapped: true,
                                chainId: result.asset_chain,
                                assetAddress: new Uint8Array(Buffer.from(result.asset_address, "base64")),
                            }];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/, {
                        isWrapped: false,
                        chainId: CHAIN_ID_TERRA,
                        assetAddress: zeroPad(canonicalAddress(wrappedAddress), 32),
                    }];
            }
        });
    });
}
/**
 * Returns a origin chain and asset address on {originChain} for a provided Wormhole wrapped address
 * @param connection
 * @param tokenBridgeAddress
 * @param mintAddress
 * @returns
 */
export function getOriginalAssetSol(connection, tokenBridgeAddress, mintAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, parse_wrapped_meta, wrapped_meta_address, wrappedMetaAddress, wrappedMetaAddressPK, wrappedMetaAccountInfo, parsed;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!mintAddress) return [3 /*break*/, 3];
                    return [4 /*yield*/, import("../solana/token/token_bridge")];
                case 1:
                    _a = _b.sent(), parse_wrapped_meta = _a.parse_wrapped_meta, wrapped_meta_address = _a.wrapped_meta_address;
                    wrappedMetaAddress = wrapped_meta_address(tokenBridgeAddress, new PublicKey(mintAddress).toBytes());
                    wrappedMetaAddressPK = new PublicKey(wrappedMetaAddress);
                    return [4 /*yield*/, connection.getAccountInfo(wrappedMetaAddressPK)];
                case 2:
                    wrappedMetaAccountInfo = _b.sent();
                    if (wrappedMetaAccountInfo) {
                        parsed = parse_wrapped_meta(wrappedMetaAccountInfo.data);
                        return [2 /*return*/, {
                                isWrapped: true,
                                chainId: parsed.chain,
                                assetAddress: parsed.token_address,
                            }];
                    }
                    _b.label = 3;
                case 3:
                    try {
                        return [2 /*return*/, {
                                isWrapped: false,
                                chainId: CHAIN_ID_SOLANA,
                                assetAddress: new PublicKey(mintAddress).toBytes(),
                            }];
                    }
                    catch (e) { }
                    return [2 /*return*/, {
                            isWrapped: false,
                            chainId: CHAIN_ID_SOLANA,
                            assetAddress: new Uint8Array(32),
                        }];
            }
        });
    });
}
