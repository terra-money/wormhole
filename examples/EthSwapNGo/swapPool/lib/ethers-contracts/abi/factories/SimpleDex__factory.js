"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDex__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "liquidity",
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
        inputs: [],
        name: "purpose",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalLiquidity",
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
                internalType: "uint256",
                name: "tokens",
                type: "uint256",
            },
        ],
        name: "init",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "input_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "input_reserve",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "output_reserve",
                type: "uint256",
            },
        ],
        name: "price",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "ethToToken",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokens",
                type: "uint256",
            },
        ],
        name: "tokenToEth",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "deposit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "targetChain",
                type: "uint16",
            },
            {
                internalType: "bytes32",
                name: "targetAddress",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
            {
                internalType: "uint32",
                name: "nonce",
                type: "uint32",
            },
        ],
        name: "swapNGo",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x60806040526040518060400160405280601081526020017f5377617070696e672052616262697473000000000000000000000000000000008152506000908051906020019062000051929190620000de565b503480156200005f57600080fd5b50604051620018a1380380620018a1833981810160405260208110156200008557600080fd5b810190808051906020019092919050505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200018d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200012157805160ff191683800117855562000152565b8280016001018555821562000152579182015b828111156200015157825182559160200191906001019062000134565b5b50905062000161919062000165565b5090565b6200018a91905b80821115620001865760008160009055506001016200016c565b5090565b90565b611704806200019d6000396000f3fe6080604052600436106100915760003560e01c806370b2a30f1161005957806370b2a30f146102a8578063789770f4146102f7578063b7b0422d14610315578063b8c876b114610357578063d0e30db0146103bc57610091565b806315770f92146100965780632071a9f4146100c15780632e1a7d4d1461012457806363f12a931461017a57806370740aab14610218575b600080fd5b3480156100a257600080fd5b506100ab6103da565b6040518082815260200191505060405180910390f35b3480156100cd57600080fd5b5061010e600480360360608110156100e457600080fd5b810190808035906020019092919080359060200190929190803590602001909291905050506103e0565b6040518082815260200191505060405180910390f35b34801561013057600080fd5b5061015d6004803603602081101561014757600080fd5b8101908080359060200190929190505050610452565b604051808381526020018281526020019250505060405180910390f35b6101ee600480360360a081101561019057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803561ffff1690602001909291908035906020019092919080359060200190929190803563ffffffff169060200190929190505050610769565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b34801561022457600080fd5b5061022d610a73565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561026d578082015181840152602081019050610252565b50505050905090810190601f16801561029a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102b457600080fd5b506102e1600480360360208110156102cb57600080fd5b8101908080359060200190929190505050610b11565b6040518082815260200191505060405180910390f35b6102ff610d71565b6040518082815260200191505060405180910390f35b6103416004803603602081101561032b57600080fd5b8101908080359060200190929190505050610f66565b6040518082815260200191505060405180910390f35b34801561036357600080fd5b506103a66004803603602081101561037a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611157565b6040518082815260200191505060405180910390f35b6103c461116f565b6040518082815260200191505060405180910390f35b60025481565b6000806103f86103e58661149590919063ffffffff16565b9050600061040f848361149590919063ffffffff16565b9050600061043a8361042c6103e88961149590919063ffffffff16565b61151b90919063ffffffff16565b905080828161044557fe5b0493505050509392505050565b6000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156104f657600080fd5b505afa15801561050a573d6000803e3d6000fd5b505050506040513d602081101561052057600080fd5b81019080805190602001909291905050509050600060025461054b478761149590919063ffffffff16565b8161055257fe5b049050600060025461056d848861149590919063ffffffff16565b8161057457fe5b0490506105c982600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115a390919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610621826002546115a390919063ffffffff16565b6002819055503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561066d573d6000803e3d6000fd5b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561071757600080fd5b505af115801561072b573d6000803e3d6000fd5b505050506040513d602081101561074157600080fd5b810190808051906020019092919050505061075b57600080fd5b818194509450505050915091565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561080b57600080fd5b505afa15801561081f573d6000803e3d6000fd5b505050506040513d602081101561083557600080fd5b8101908080519060200190929190505050905060006108673461086134476115a390919063ffffffff16565b846103e0565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b389836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561091257600080fd5b505af1158015610926573d6000803e3d6000fd5b505050506040513d602081101561093c57600080fd5b8101908080519060200190929190505050508773ffffffffffffffffffffffffffffffffffffffff16630f5287b0600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838a8a8a8a6040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018561ffff1661ffff1681526020018481526020018381526020018263ffffffff1663ffffffff1681526020019650505050505050602060405180830381600087803b158015610a2b57600080fd5b505af1158015610a3f573d6000803e3d6000fd5b505050506040513d6020811015610a5557600080fd5b81019080805190602001909291905050509250505095945050505050565b60008054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b095780601f10610ade57610100808354040283529160200191610b09565b820191906000526020600020905b815481529060010190602001808311610aec57829003601f168201915b505050505081565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610bb357600080fd5b505afa158015610bc7573d6000803e3d6000fd5b505050506040513d6020811015610bdd57600080fd5b810190808051906020019092919050505090506000610bfd8483476103e0565b90503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610c45573d6000803e3d6000fd5b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610d2357600080fd5b505af1158015610d37573d6000803e3d6000fd5b505050506040513d6020811015610d4d57600080fd5b8101908080519060200190929190505050610d6757600080fd5b8092505050919050565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610e1357600080fd5b505afa158015610e27573d6000803e3d6000fd5b505050506040513d6020811015610e3d57600080fd5b810190808051906020019092919050505090506000610e6f34610e6934476115a390919063ffffffff16565b846103e0565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610f1a57600080fd5b505af1158015610f2e573d6000803e3d6000fd5b505050506040513d6020811015610f4457600080fd5b8101908080519060200190929190505050610f5e57600080fd5b809250505090565b60008060025414610fdf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4445583a696e6974202d20616c726561647920686173206c697175696469747981525060200191505060405180910390fd5b47600281905550600254600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561110957600080fd5b505af115801561111d573d6000803e3d6000fd5b505050506040513d602081101561113357600080fd5b810190808051906020019092919050505061114d57600080fd5b6002549050919050565b60036020528060005260406000206000915090505481565b60008061118534476115a390919063ffffffff16565b90506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561122857600080fd5b505afa15801561123c573d6000803e3d6000fd5b505050506040513d602081101561125257600080fd5b810190808051906020019092919050505090506000611296600184611280853461149590919063ffffffff16565b8161128757fe5b0461151b90919063ffffffff16565b90506000836112b06002543461149590919063ffffffff16565b816112b757fe5b04905061130c81600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151b90919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113648160025461151b90919063ffffffff16565b600281905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561144757600080fd5b505af115801561145b573d6000803e3d6000fd5b505050506040513d602081101561147157600080fd5b810190808051906020019092919050505061148b57600080fd5b8094505050505090565b6000808314156114a85760009050611515565b60008284029050828482816114b957fe5b0414611510576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806116ae6021913960400191505060405180910390fd5b809150505b92915050565b600080828401905083811015611599576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60006115e583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506115ed565b905092915050565b600083831115829061169a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561165f578082015181840152602081019050611644565b50505050905090810190601f16801561168c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220b0e41635bf0893054469f5704167ff19bd27d795c387148f1738dfdf920282be64736f6c63430006070033";
var SimpleDex__factory = /** @class */ (function (_super) {
    __extends(SimpleDex__factory, _super);
    function SimpleDex__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    SimpleDex__factory.prototype.deploy = function (tokenAddress, overrides) {
        return _super.prototype.deploy.call(this, tokenAddress, overrides || {});
    };
    SimpleDex__factory.prototype.getDeployTransaction = function (tokenAddress, overrides) {
        return _super.prototype.getDeployTransaction.call(this, tokenAddress, overrides || {});
    };
    SimpleDex__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SimpleDex__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SimpleDex__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    SimpleDex__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    SimpleDex__factory.bytecode = _bytecode;
    SimpleDex__factory.abi = _abi;
    return SimpleDex__factory;
}(ethers_1.ContractFactory));
exports.SimpleDex__factory = SimpleDex__factory;
