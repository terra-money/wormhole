/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
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
var ERC165__factory = /** @class */ (function () {
    function ERC165__factory() {
    }
    ERC165__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    ERC165__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    ERC165__factory.abi = _abi;
    return ERC165__factory;
}());
export { ERC165__factory };
