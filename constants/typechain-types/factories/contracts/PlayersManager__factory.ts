/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PlayersManager,
  PlayersManagerInterface,
} from "../../contracts/PlayersManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Authorization",
        name: "_authorization",
        type: "address",
      },
      {
        internalType: "contract Players",
        name: "_players",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Protected__MissingRole",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "string",
        name: "_nick",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_isAdmin",
        type: "bool",
      },
    ],
    name: "addPlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516108ef3803806108ef8339818101604052810190610032919061016f565b81806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506101af565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100ec826100c1565b9050919050565b60006100fe826100e1565b9050919050565b61010e816100f3565b811461011957600080fd5b50565b60008151905061012b81610105565b92915050565b600061013c826100e1565b9050919050565b61014c81610131565b811461015757600080fd5b50565b60008151905061016981610143565b92915050565b60008060408385031215610186576101856100bc565b5b60006101948582860161011c565b92505060206101a58582860161015a565b9150509250929050565b610731806101be6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063835b9e5614610030575b600080fd5b61004a60048036038101906100459190610541565b61004c565b005b7fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec4260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166391d1485482336040518363ffffffff1660e01b81526004016100c89291906105d8565b60206040518083038186803b1580156100e057600080fd5b505afa1580156100f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101189190610616565b61015b5780336040517f8b95d9110000000000000000000000000000000000000000000000000000000081526004016101529291906105d8565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632c48a73d85856040518363ffffffff1660e01b81526004016101b89291906106cb565b600060405180830381600087803b1580156101d257600080fd5b505af11580156101e6573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f2ff15d7f0f98b3a5774fbfdf19646dba94a6c08f13f4c341502334a57724de46497192c3866040518363ffffffff1660e01b81526004016102659291906105d8565b600060405180830381600087803b15801561027f57600080fd5b505af1158015610293573d6000803e3d6000fd5b50505050811561034b5760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632f2ff15d7fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42866040518363ffffffff1660e01b81526004016103189291906105d8565b600060405180830381600087803b15801561033257600080fd5b505af1158015610346573d6000803e3d6000fd5b505050505b50505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061039082610365565b9050919050565b6103a081610385565b81146103ab57600080fd5b50565b6000813590506103bd81610397565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610416826103cd565b810181811067ffffffffffffffff82111715610435576104346103de565b5b80604052505050565b6000610448610351565b9050610454828261040d565b919050565b600067ffffffffffffffff821115610474576104736103de565b5b61047d826103cd565b9050602081019050919050565b82818337600083830152505050565b60006104ac6104a784610459565b61043e565b9050828152602081018484840111156104c8576104c76103c8565b5b6104d384828561048a565b509392505050565b600082601f8301126104f0576104ef6103c3565b5b8135610500848260208601610499565b91505092915050565b60008115159050919050565b61051e81610509565b811461052957600080fd5b50565b60008135905061053b81610515565b92915050565b60008060006060848603121561055a5761055961035b565b5b6000610568868287016103ae565b935050602084013567ffffffffffffffff81111561058957610588610360565b5b610595868287016104db565b92505060406105a68682870161052c565b9150509250925092565b6000819050919050565b6105c3816105b0565b82525050565b6105d281610385565b82525050565b60006040820190506105ed60008301856105ba565b6105fa60208301846105c9565b9392505050565b60008151905061061081610515565b92915050565b60006020828403121561062c5761062b61035b565b5b600061063a84828501610601565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561067d578082015181840152602081019050610662565b8381111561068c576000848401525b50505050565b600061069d82610643565b6106a7818561064e565b93506106b781856020860161065f565b6106c0816103cd565b840191505092915050565b60006040820190506106e060008301856105c9565b81810360208301526106f28184610692565b9050939250505056fea2646970667358221220557bd78473364a12a2bbcf942e9a82821a67420cf6c1c8f443ae83f5ee1326be64736f6c63430008080033";

type PlayersManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PlayersManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PlayersManager__factory extends ContractFactory {
  constructor(...args: PlayersManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _authorization: string,
    _players: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PlayersManager> {
    return super.deploy(
      _authorization,
      _players,
      overrides || {}
    ) as Promise<PlayersManager>;
  }
  override getDeployTransaction(
    _authorization: string,
    _players: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _authorization,
      _players,
      overrides || {}
    );
  }
  override attach(address: string): PlayersManager {
    return super.attach(address) as PlayersManager;
  }
  override connect(signer: Signer): PlayersManager__factory {
    return super.connect(signer) as PlayersManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PlayersManagerInterface {
    return new utils.Interface(_abi) as PlayersManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PlayersManager {
    return new Contract(address, _abi, signerOrProvider) as PlayersManager;
  }
}