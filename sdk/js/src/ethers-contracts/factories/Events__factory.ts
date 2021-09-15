/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Events, EventsInterface } from "../Events";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "oldGuardianIndex",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "newGuardianIndex",
        type: "uint32",
      },
    ],
    name: "LogGuardianSetChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "emitter_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "LogMessagePublished",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220c7929226ffebc8fd4278f8d2d5d2e77fa1e9d6934019cc055a1b8afcf98181bc64736f6c63430008040033";

export class Events__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Events> {
    return super.deploy(overrides || {}) as Promise<Events>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Events {
    return super.attach(address) as Events;
  }
  connect(signer: Signer): Events__factory {
    return super.connect(signer) as Events__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EventsInterface {
    return new utils.Interface(_abi) as EventsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Events {
    return new Contract(address, _abi, signerOrProvider) as Events;
  }
}
