import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Messages, MessagesInterface } from "../Messages";
export declare class Messages__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Messages>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Messages;
    connect(signer: Signer): Messages__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611722806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063a9e118931161008c578063d60b347f11610066578063d60b347f1461023b578063eb8d3f1214610267578063f951975a1461027d578063fbe3c2cd1461029d57600080fd5b8063a9e11893146101f1578063b172b22214610211578063c0fd8bde1461021957600080fd5b80634cf842b5116100c85780634cf842b514610158578063875be02a146101a25780639a8a0592146101c3578063a0cce1b3146101de57600080fd5b80631a90a219146100ef5780631cfe7951146101065780632c3c02a414610125575b600080fd5b6007545b6040519081526020015b60405180910390f35b60035463ffffffff165b60405163ffffffff90911681526020016100fd565b610148610133366004610fe6565b60009081526005602052604090205460ff1690565b60405190151581526020016100fd565b61018a610166366004610fc5565b6001600160a01b03166000908152600460205260409020546001600160401b031690565b6040516001600160401b0390911681526020016100fd565b6101b56101b03660046111ab565b6102af565b6040516100fd929190611482565b60005461ffff165b60405161ffff90911681526020016100fd565b6101b56101ec366004610ffe565b610443565b6102046101ff366004611171565b610625565b6040516100fd9190611508565b6001546100f3565b61022c610227366004611105565b610a03565b6040516100fd9392919061151b565b610148610249366004610fc5565b6001600160a01b031660009081526006602052604090205460ff1690565b600354640100000000900463ffffffff16610110565b61029061028b3660046112ca565b610a65565b6040516100fd919061149d565b60005462010000900461ffff166101cb565b6000606060006102c3846101000151610a65565b805151909150610306576000604051806040016040528060148152602001731a5b9d985b1a590819dd585c991a585b881cd95d60621b8152509250925050915091565b60035463ffffffff1663ffffffff1684610100015163ffffffff1614158015610338575042816020015163ffffffff16105b1561037f5760006040518060400160405280601881526020017f677561726469616e2073657420686173206578706972656400000000000000008152509250925050915091565b61012084015151815151600a90600390610399908361166f565b6103a3919061164f565b6103ae90600261166f565b6103b8919061164f565b6103c3906001611612565b11156103f7576000604051806040016040528060098152602001686e6f2071756f72756d60b81b8152509250925050915091565b60008061040f86610140015187610120015185610443565b9150915081610425576000969095509350505050565b60016040518060200160405280600081525094509450505050915091565b600060606000805b855181101561060457600086828151811061047657634e487b7160e01b600052603260045260246000fd5b60200260200101519050816000148061049857508260ff16816060015160ff16115b6104f55760405162461bcd60e51b815260206004820152602360248201527f7369676e617475726520696e6469636573206d75737420626520617363656e64604482015262696e6760e81b60648201526084015b60405180910390fd5b6060810151865180519194509060ff851690811061052357634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001898360400151846000015185602001516040516000815260200160405260405161057c949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa15801561059e573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146105f1576000604051806040016040528060148152602001731593481cda59db985d1d5c99481a5b9d985b1a5960621b8152509450945050505061061d565b50806105fc816116a5565b91505061044b565b5060016040518060200160405280600081525092509250505b935093915050565b61062d610de2565b60006106398382610b04565b60ff168252610649600182611612565b9050816000015160ff166001146106a25760405162461bcd60e51b815260206004820152601760248201527f564d2076657273696f6e20696e636f6d70617469626c6500000000000000000060448201526064016104ec565b6106ac8382610b60565b63ffffffff166101008301526106c3600482611612565b905060006106d18483610b04565b60ff1690506106e1600183611612565b9150806001600160401b0381111561070957634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561075b57816020015b6040805160808101825260008082526020808301829052928201819052606082015282526000199092019101816107275790505b5061012084015260005b818110156108ca576107778584610b04565b846101200151828151811061079c57634e487b7160e01b600052603260045260246000fd5b602090810291909101015160ff9091166060909101526107bd600184611612565b92506107c98584610bbd565b84610120015182815181106107ee57634e487b7160e01b600052603260045260246000fd5b6020026020010151600001818152505060208361080b9190611612565b92506108178584610bbd565b846101200151828151811061083c57634e487b7160e01b600052603260045260246000fd5b602002602001015160200181815250506020836108599190611612565b92506108658584610b04565b61087090601b61162a565b846101200151828151811061089557634e487b7160e01b600052603260045260246000fd5b602090810291909101015160ff9091166040909101526108b6600184611612565b9250806108c2816116a5565b915050610765565b5060006108e6838487516108de919061168e565b879190610c1b565b9050808051906020012060405160200161090291815260200190565b60408051601f19818403018152919052805160209091012061014085015261092a8584610b60565b63ffffffff166020850152610940600484611612565b925061094c8584610b60565b63ffffffff166040850152610962600484611612565b925061096e8584610d28565b61ffff166060850152610982600284611612565b925061098e8584610bbd565b608085015261099e602084611612565b92506109aa8584610d85565b6001600160401b031660a08501526109c3600884611612565b92506109cf8584610b04565b60ff1660c08501526109e2600184611612565b92506109f5838487516108de919061168e565b60e085015250919392505050565b610a0b610de2565b60006060610a4e85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061062592505050565b9250610a59836102af565b93969095509293505050565b60408051808201825260608082526000602080840182905263ffffffff86168252600281529084902084518154928302810184018652948501828152939493909284928491840182828015610ae357602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ac5575b50505091835250506001919091015463ffffffff1660209091015292915050565b6000610b11826001611612565b83511015610b575760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b60448201526064016104ec565b50016001015190565b6000610b6d826004611612565b83511015610bb45760405162461bcd60e51b8152602060048201526014602482015273746f55696e7433325f6f75744f66426f756e647360601b60448201526064016104ec565b50016004015190565b6000610bca826020611612565b83511015610c125760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b60448201526064016104ec565b50016020015190565b606081610c2981601f611612565b1015610c685760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b60448201526064016104ec565b610c728284611612565b84511015610cb65760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b60448201526064016104ec565b606082158015610cd55760405191506000825260208201604052610d1f565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610d0e578051835260209283019201610cf6565b5050858452601f01601f1916604052505b50949350505050565b6000610d35826002611612565b83511015610d7c5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b60448201526064016104ec565b50016002015190565b6000610d92826008611612565b83511015610dd95760405162461bcd60e51b8152602060048201526014602482015273746f55696e7436345f6f75744f66426f756e647360601b60448201526064016104ec565b50016008015190565b604080516101608101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e08201819052610100820183905261012082015261014081019190915290565b80356001600160a01b0381168114610e5457600080fd5b919050565b600082601f830112610e69578081fd5b81356020610e7e610e79836115ef565b6115bf565b80838252828201915082860187848660071b8901011115610e9d578586fd5b855b85811015610f0057608080838b031215610eb7578788fd5b610ebf611552565b8335815286840135878201526040610ed8818601610fb4565b908201526060610ee9858201610fb4565b908201528552938501939190910190600101610e9f565b5090979650505050505050565b600082601f830112610f1d578081fd5b81356001600160401b03811115610f3657610f366116d6565b610f49601f8201601f19166020016115bf565b818152846020838601011115610f5d578283fd5b816020850160208301379081016020019190915292915050565b803561ffff81168114610e5457600080fd5b803563ffffffff81168114610e5457600080fd5b80356001600160401b0381168114610e5457600080fd5b803560ff81168114610e5457600080fd5b600060208284031215610fd6578081fd5b610fdf82610e3d565b9392505050565b600060208284031215610ff7578081fd5b5035919050565b600080600060608486031215611012578182fd5b833592506020808501356001600160401b0380821115611030578485fd5b61103c88838901610e59565b94506040870135915080821115611051578384fd5b9086019060408289031215611064578384fd5b61106c61157a565b82358281111561107a578586fd5b83019150601f8201891361108c578485fd5b813561109a610e79826115ef565b8082825286820191508685018c888560051b88010111156110b9578889fd5b8895505b838610156110e2576110ce81610e3d565b8352600195909501949187019187016110bd565b508352506110f39050838501610f89565b84820152809450505050509250925092565b60008060208385031215611117578182fd5b82356001600160401b038082111561112d578384fd5b818501915085601f830112611140578384fd5b81358181111561114e578485fd5b86602082850101111561115f578485fd5b60209290920196919550909350505050565b600060208284031215611182578081fd5b81356001600160401b03811115611197578182fd5b6111a384828501610f0d565b949350505050565b6000602082840312156111bc578081fd5b81356001600160401b03808211156111d2578283fd5b9083019061016082860312156111e6578283fd5b6111ee61159c565b6111f783610fb4565b815261120560208401610f89565b602082015261121660408401610f89565b604082015261122760608401610f77565b60608201526080830135608082015261124260a08401610f9d565b60a082015261125360c08401610fb4565b60c082015260e083013582811115611269578485fd5b61127587828601610f0d565b60e083015250610100611289818501610f89565b9082015261012083810135838111156112a0578586fd5b6112ac88828701610e59565b91830191909152506101409283013592810192909252509392505050565b6000602082840312156112db578081fd5b610fdf82610f89565b6000815180845260208085019450808401835b8381101561133c57815180518852838101518489015260408082015160ff908116918a01919091526060918201511690880152608090960195908201906001016112f7565b509495945050505050565b60008151808452815b8181101561136c57602081850181015186830182015201611350565b8181111561137d5782602083870101525b50601f01601f19169290920160200192915050565b805160ff168252600061016060208301516113b5602086018263ffffffff169052565b5060408301516113cd604086018263ffffffff169052565b5060608301516113e3606086018261ffff169052565b506080830151608085015260a083015161140860a08601826001600160401b03169052565b5060c083015161141d60c086018260ff169052565b5060e08301518160e086015261143582860182611347565b915050610100808401516114508287018263ffffffff169052565b5050610120808401518583038287015261146a83826112e4565b61014095860151969095019590955250919392505050565b82151581526040602082015260006111a36040830184611347565b6020808252825160408383015280516060840181905260009291820190839060808601905b808310156114eb5783516001600160a01b031682529284019260019290920191908401906114c2565b5063ffffffff848801511660408701528094505050505092915050565b602081526000610fdf6020830184611392565b60608152600061152e6060830186611392565b841515602084015282810360408401526115488185611347565b9695505050505050565b604051608081016001600160401b0381118282101715611574576115746116d6565b60405290565b604080519081016001600160401b0381118282101715611574576115746116d6565b60405161016081016001600160401b0381118282101715611574576115746116d6565b604051601f8201601f191681016001600160401b03811182821017156115e7576115e76116d6565b604052919050565b60006001600160401b03821115611608576116086116d6565b5060051b60200190565b60008219821115611625576116256116c0565b500190565b600060ff821660ff84168060ff03821115611647576116476116c0565b019392505050565b60008261166a57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611689576116896116c0565b500290565b6000828210156116a0576116a06116c0565b500390565b60006000198214156116b9576116b96116c0565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212205da87cd84de1b8c33c7b4777038069bc3a07ead336dc9852da973494c18fe49964736f6c63430008040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: ({
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
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
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MessagesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Messages;
}
