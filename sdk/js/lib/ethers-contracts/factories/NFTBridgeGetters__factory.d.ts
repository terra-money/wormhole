import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTBridgeGetters, NFTBridgeGettersInterface } from "../NFTBridgeGetters";
export declare class NFTBridgeGetters__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NFTBridgeGetters>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NFTBridgeGetters;
    connect(signer: Signer): NFTBridgeGetters__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610312806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80639a8a0592116100715780639a8a059214610186578063aa4efa5b146101a1578063ad66a5f1146101c4578063b172b222146101f6578063d60b347f146101fe578063fbe3c2cd1461022a57600080fd5b80631a2be4da146100ae5780631ff1e286146100ef5780632c3c02a4146101415780632f3a3d5d1461016457806384acd1bb14610175575b600080fd5b6100da6100bc366004610253565b6001600160a01b031660009081526008602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6101296100fd3660046102b3565b61ffff91909116600090815260076020908152604080832093835292905220546001600160a01b031690565b6040516001600160a01b0390911681526020016100e6565b6100da61014f366004610281565b60009081526004602052604090205460ff1690565b6001546001600160a01b0316610129565b6000546001600160a01b0316610129565b60025461ffff165b60405161ffff90911681526020016100e6565b6100da6101af366004610281565b60009081526005602052604090205460ff1690565b6101e86101d2366004610299565b61ffff1660009081526009602052604090205490565b6040519081526020016100e6565b6003546101e8565b6100da61020c366004610253565b6001600160a01b031660009081526006602052604090205460ff1690565b60025462010000900461ffff1661018e565b803561ffff8116811461024e57600080fd5b919050565b600060208284031215610264578081fd5b81356001600160a01b038116811461027a578182fd5b9392505050565b600060208284031215610292578081fd5b5035919050565b6000602082840312156102aa578081fd5b61027a8261023c565b600080604083850312156102c5578081fd5b6102ce8361023c565b94602093909301359350505056fea2646970667358221220dd04e6fc1f61c9dfbc57be314b3aaaa43d1e5f0cf9f5467973bdbfc277a4feca64736f6c63430008040033";
    static readonly abi: {
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
    }[];
    static createInterface(): NFTBridgeGettersInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NFTBridgeGetters;
}
