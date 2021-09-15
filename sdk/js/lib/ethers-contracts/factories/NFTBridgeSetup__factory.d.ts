import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTBridgeSetup, NFTBridgeSetupInterface } from "../NFTBridgeSetup";
export declare class NFTBridgeSetup__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NFTBridgeSetup>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NFTBridgeSetup;
    connect(signer: Signer): NFTBridgeSetup__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061026b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80637e89644614610030575b600080fd5b61004361003e3660046101c9565b610045565b005b60028054600080546001600160a01b0388166001600160a01b031990911617905561ffff858116620100000263ffffffff19909216908816171790556003829055600180546001600160a01b0319166001600160a01b0383161790556100aa866100b2565b505050505050565b6100bb816100f2565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b61015a5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840160405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b03811681146101b257600080fd5b919050565b803561ffff811681146101b257600080fd5b60008060008060008060c087890312156101e1578182fd5b6101ea8761019b565b95506101f8602088016101b7565b94506102066040880161019b565b9350610214606088016101b7565b92506080870135915061022960a0880161019b565b9050929550929550929556fea26469706673582212200c9133b241490c8b0ac16800ae3d569ac8733075e66895aeb03e66f96de95bb664736f6c63430008040033";
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
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): NFTBridgeSetupInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NFTBridgeSetup;
}
