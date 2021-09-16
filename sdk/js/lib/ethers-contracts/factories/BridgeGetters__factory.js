/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { utils, Contract, ContractFactory } from "ethers";
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "governanceActionIsConsumed",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "impl",
                type: "address",
            },
        ],
        name: "isInitialized",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "isTransferCompleted",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "wormhole",
        outputs: [
            {
                internalType: "contract IWormhole",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "chainId",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "governanceChainId",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "governanceContract",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "tokenChainId",
                type: "uint16",
            },
            {
                internalType: "bytes32",
                name: "tokenAddress",
                type: "bytes32",
            },
        ],
        name: "wrappedAsset",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "chainId_",
                type: "uint16",
            },
        ],
        name: "bridgeContracts",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tokenImplementation",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "WETH",
        outputs: [
            {
                internalType: "contract IWETH",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "outstandingBridged",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "isWrappedAsset",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610372806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063aa4efa5b1161008c578063b172b22211610066578063b172b2221461022d578063b96c7e4d14610235578063d60b347f1461025e578063fbe3c2cd1461028a57600080fd5b8063aa4efa5b146101c7578063ad5c4648146101ea578063ad66a5f1146101fb57600080fd5b80631a2be4da146100d45780631ff1e286146101155780632c3c02a4146101675780632f3a3d5d1461018a57806384acd1bb1461019b5780639a8a0592146101ac575b600080fd5b6101006100e23660046102b3565b6001600160a01b031660009081526009602052604090205460ff1690565b60405190151581526020015b60405180910390f35b61014f610123366004610313565b61ffff91909116600090815260086020908152604080832093835292905220546001600160a01b031690565b6040516001600160a01b03909116815260200161010c565b6101006101753660046102e1565b60009081526005602052604090205460ff1690565b6001546001600160a01b031661014f565b6000546001600160a01b031661014f565b60025461ffff165b60405161ffff909116815260200161010c565b6101006101d53660046102e1565b60009081526006602052604090205460ff1690565b6004546001600160a01b031661014f565b61021f6102093660046102f9565b61ffff166000908152600b602052604090205490565b60405190815260200161010c565b60035461021f565b61021f6102433660046102b3565b6001600160a01b03166000908152600a602052604090205490565b61010061026c3660046102b3565b6001600160a01b031660009081526007602052604090205460ff1690565b60025462010000900461ffff166101b4565b803561ffff811681146102ae57600080fd5b919050565b6000602082840312156102c4578081fd5b81356001600160a01b03811681146102da578182fd5b9392505050565b6000602082840312156102f2578081fd5b5035919050565b60006020828403121561030a578081fd5b6102da8261029c565b60008060408385031215610325578081fd5b61032e8361029c565b94602093909301359350505056fea2646970667358221220f70160317986b17925d50e6fa4197ce64e62ee336deecafaf6681acc38cec2fb64736f6c63430008040033";
var BridgeGetters__factory = /** @class */ (function (_super) {
    __extends(BridgeGetters__factory, _super);
    function BridgeGetters__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    BridgeGetters__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    BridgeGetters__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    BridgeGetters__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    BridgeGetters__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    BridgeGetters__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    BridgeGetters__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    BridgeGetters__factory.bytecode = _bytecode;
    BridgeGetters__factory.abi = _abi;
    return BridgeGetters__factory;
}(ContractFactory));
export { BridgeGetters__factory };
