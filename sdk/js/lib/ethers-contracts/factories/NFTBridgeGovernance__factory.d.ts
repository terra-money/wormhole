import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTBridgeGovernance, NFTBridgeGovernanceInterface } from "../NFTBridgeGovernance";
export declare class NFTBridgeGovernance__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NFTBridgeGovernance>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NFTBridgeGovernance;
    connect(signer: Signer): NFTBridgeGovernance__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506113cc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80639a8a059211610097578063b172b22211610066578063b172b222146102d0578063d60b347f146102d8578063fbe3c2cd14610304578063fbeeacd91461031657600080fd5b80639a8a05921461024d578063a5799f9314610268578063aa4efa5b1461027b578063ad66a5f11461029e57600080fd5b806325394645116100d357806325394645146101f35780632c3c02a4146102085780632f3a3d5d1461022b57806384acd1bb1461023c57600080fd5b806301f53255146100fa5780631a2be4da146101655780631ff1e286146101a1575b600080fd5b61010d610108366004610fe9565b610363565b60405161015c9190600060a0820190508251825260ff6020840151166020830152604083015161ffff808216604085015280606086015116606085015250506080830151608083015292915050565b60405180910390f35b610191610173366004610fa3565b6001600160a01b031660009081526008602052604090205460ff1690565b604051901515815260200161015c565b6101db6101af3660046111cb565b61ffff91909116600090815260076020908152604080832093835292905220546001600160a01b031690565b6040516001600160a01b03909116815260200161015c565b610206610201366004610fe9565b610552565b005b610191610216366004610fd1565b60009081526004602052604090205460ff1690565b6001546001600160a01b03166101db565b6000546001600160a01b03166101db565b60025461ffff165b60405161ffff909116815260200161015c565b610206610276366004610fe9565b610629565b610191610289366004610fd1565b60009081526005602052604090205460ff1690565b6102c26102ac3660046111af565b61ffff1660009081526009602052604090205490565b60405190815260200161015c565b6003546102c2565b6101916102e6366004610fa3565b6001600160a01b031660009081526006602052604090205460ff1690565b60025462010000900461ffff16610255565b610329610324366004610fe9565b610722565b60405161015c91908151815260208083015160ff169082015260408083015161ffff16908201526060918201519181019190915260800190565b6040805160a08101825260008082526020820181905291810182905260608101829052608081018290529061039883826108e5565b82526103a56020826112f7565b8251909150684e4654427269646765146104125760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e67206d6f64604482015262756c6560e81b60648201526084015b60405180910390fd5b61041c8382610943565b60ff16602083015261042f6001826112f7565b9050816020015160ff166001146104945760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e672061637460448201526234b7b760e91b6064820152608401610409565b61049e838261099f565b61ffff1660408301526104b26002826112f7565b90506104be838261099f565b61ffff1660608301526104d26002826112f7565b90506104de83826108e5565b60808301526104ee6020826112f7565b90508083511461054c5760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e67206c656e6044820152620cee8d60eb1b6064820152608401610409565b50919050565b6000806000610560846109fc565b9250925092508181906105865760405162461bcd60e51b8152600401610409919061123e565b506105ab8361014001516000908152600460205260409020805460ff19166001179055565b60006105ba8460e00151610722565b90506105c960025461ffff1690565b61ffff16816040015161ffff16146106145760405162461bcd60e51b815260206004820152600e60248201526d1ddc9bdb99c818da185a5b881a5960921b6044820152606401610409565b606081015161062290610c1b565b5050505050565b6000806000610637846109fc565b92509250925081819061065d5760405162461bcd60e51b8152600401610409919061123e565b506106828361014001516000908152600460205260409020805460ff19166001179055565b60006106918460e00151610363565b90506106a060025461ffff1690565b61ffff16816040015161ffff1614806106bf5750604081015161ffff16155b6106fe5760405162461bcd60e51b815260206004820152601060248201526f1a5b9d985b1a590818da185a5b881a5960821b6044820152606401610409565b6106228160600151826080015161ffff909116600090815260096020526040902055565b60408051608081018252600080825260208201819052918101829052606081018290529061075083826108e5565b825261075d6020826112f7565b8251909150684e4654427269646765146107c75760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206d6044820152646f64756c6560d81b6064820152608401610409565b6107d18382610943565b60ff1660208301526107e46001826112f7565b9050816020015160ff1660021461084b5760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206160448201526431ba34b7b760d91b6064820152608401610409565b610855838261099f565b61ffff1660408301526108696002826112f7565b905061087583826108e5565b60608301526108856020826112f7565b90508083511461054c5760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206c6044820152640cadccee8d60db1b6064820152608401610409565b60006108f28260206112f7565b8351101561093a5760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606401610409565b50016020015190565b60006109508260016112f7565b835110156109965760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606401610409565b50016001015190565b60006109ac8260026112f7565b835110156109f35760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b6044820152606401610409565b50016002015190565b604080516101608101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e082018190526101008201839052610120820152610140810191909152600060606000806000610a6f6000546001600160a01b031690565b6001600160a01b031663c0fd8bde886040518263ffffffff1660e01b8152600401610a9a919061123e565b60006040518083038186803b158015610ab257600080fd5b505afa158015610ac6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610aee919081019061105d565b92509250925081610b055791945092509050610c14565b60025462010000900461ffff1661ffff16836060015161ffff1614610b615750506040805180820190915260168152753bb937b7339033b7bb32b93730b731b29031b430b4b760511b6020820152909350600092509050610c14565b600354836080015114610bb257505060408051808201909152601981527f77726f6e6720676f7665726e616e636520636f6e7472616374000000000000006020820152909350600092509050610c14565b61014083015160009081526004602052604090205460ff1615610bf95782600060405180606001604052806022815260200161137560229139955095509550505050610c14565b50506040805160208101909152600081529093506001925090505b9193909250565b6000610c4e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b9050610c5982610d48565b60408051600481526024810182526020810180516001600160e01b031663204a7f0760e21b179052905160009182916001600160a01b03861691610c9c91611222565b600060405180830381855af49150503d8060008114610cd7576040519150601f19603f3d011682016040523d82523d6000602084013e610cdc565b606091505b5091509150818190610d015760405162461bcd60e51b8152600401610409919061123e565b50836001600160a01b0316836001600160a01b03167f2e4cc16c100f0b55e2df82ab0b1a7e294aa9cbd01b48fbaf622683fbc0507a4960405160405180910390a350505050565b610d5181610d88565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b610dec5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610409565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b600082601f830112610e3d578081fd5b8151602067ffffffffffffffff821115610e5957610e5961134b565b610e67818360051b0161129e565b80838252828201915082860187848660071b8901011115610e86578586fd5b855b85811015610ee957608080838b031215610ea0578788fd5b610ea8611251565b8351815286840151878201526040610ec1818601610f92565b908201526060610ed2858201610f92565b908201528552938501939190910190600101610e88565b5090979650505050505050565b80518015158114610f0657600080fd5b919050565b600082601f830112610f1b578081fd5b8151610f2e610f29826112cf565b61129e565b818152846020838601011115610f42578283fd5b610f5382602083016020870161131b565b949350505050565b8051610f0681611361565b805163ffffffff81168114610f0657600080fd5b805167ffffffffffffffff81168114610f0657600080fd5b805160ff81168114610f0657600080fd5b600060208284031215610fb4578081fd5b81356001600160a01b0381168114610fca578182fd5b9392505050565b600060208284031215610fe2578081fd5b5035919050565b600060208284031215610ffa578081fd5b813567ffffffffffffffff811115611010578182fd5b8201601f81018413611020578182fd5b803561102e610f29826112cf565b818152856020838501011115611042578384fd5b81602084016020830137908101602001929092525092915050565b600080600060608486031215611071578182fd5b835167ffffffffffffffff80821115611088578384fd5b90850190610160828803121561109c578384fd5b6110a461127a565b6110ad83610f92565b81526110bb60208401610f66565b60208201526110cc60408401610f66565b60408201526110dd60608401610f5b565b6060820152608083015160808201526110f860a08401610f7a565b60a082015261110960c08401610f92565b60c082015260e08301518281111561111f578586fd5b61112b89828601610f0b565b60e08301525061010061113f818501610f66565b908201526101208381015183811115611156578687fd5b6111628a828701610e2d565b91830191909152506101408381015190820152945061118360208701610ef6565b93506040860151915080821115611198578283fd5b506111a586828701610f0b565b9150509250925092565b6000602082840312156111c0578081fd5b8135610fca81611361565b600080604083850312156111dd578182fd5b82356111e881611361565b946020939093013593505050565b6000815180845261120e81602086016020860161131b565b601f01601f19169290920160200192915050565b6000825161123481846020870161131b565b9190910192915050565b602081526000610fca60208301846111f6565b6040516080810167ffffffffffffffff811182821017156112745761127461134b565b60405290565b604051610160810167ffffffffffffffff811182821017156112745761127461134b565b604051601f8201601f1916810167ffffffffffffffff811182821017156112c7576112c761134b565b604052919050565b600067ffffffffffffffff8211156112e9576112e961134b565b50601f01601f191660200190565b6000821982111561131657634e487b7160e01b81526011600452602481fd5b500190565b60005b8381101561133657818101518382015260200161131e565b83811115611345576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b61ffff8116811461137157600080fd5b5056fe676f7665726e616e636520616374696f6e20616c726561647920636f6e73756d6564a264697066735822122097e959506f0e2ec885cf3a399a2f44928a38084ed2799bf0d4cf3991af65667564736f6c63430008040033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): NFTBridgeGovernanceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NFTBridgeGovernance;
}
