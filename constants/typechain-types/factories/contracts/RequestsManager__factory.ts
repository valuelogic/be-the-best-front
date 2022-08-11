/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RequestsManager,
  RequestsManagerInterface,
} from "../../contracts/RequestsManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Authorization",
        name: "_authorization",
        type: "address",
      },
      {
        internalType: "contract Requests",
        name: "_requests",
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
        name: "_adminAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "RequestsManager__SelfReviewAttempt",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_adminAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "enum SharedModel.RequestStatus",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "RequestsManager__StatusOutOfRange",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_reviewer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum SharedModel.RequestStatus",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "RequestReviewed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "enum SharedModel.RequestStatus",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "review",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000c8e38038062000c8e83398181016040528101906200003791906200020c565b82806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000268565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001368262000109565b9050919050565b60006200014a8262000129565b9050919050565b6200015c816200013d565b81146200016857600080fd5b50565b6000815190506200017c8162000151565b92915050565b60006200018f8262000129565b9050919050565b620001a18162000182565b8114620001ad57600080fd5b50565b600081519050620001c18162000196565b92915050565b6000620001d48262000129565b9050919050565b620001e681620001c7565b8114620001f257600080fd5b50565b6000815190506200020681620001db565b92915050565b60008060006060848603121562000228576200022762000104565b5b600062000238868287016200016b565b93505060206200024b86828701620001b0565b92505060406200025e86828701620001f5565b9150509250925092565b610a1680620002786000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631be3554814610030575b600080fd5b61004a600480360381019061004591906105a3565b61004c565b005b7fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec4260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166391d1485482336040518363ffffffff1660e01b81526004016100c892919061063d565b60206040518083038186803b1580156100e057600080fd5b505afa1580156100f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610118919061069e565b61015b5780336040517f8b95d91100000000000000000000000000000000000000000000000000000000815260040161015292919061063d565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c58343ef856040518263ffffffff1660e01b81526004016101b891906106da565b60806040518083038186803b1580156101d057600080fd5b505afa1580156101e4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610208919061087b565b90503373ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614156102815733846040517f213f23b10000000000000000000000000000000000000000000000000000000081526004016102789291906108a8565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631be3554885856040518363ffffffff1660e01b81526004016102de929190610948565b600060405180830381600087803b1580156102f857600080fd5b505af115801561030c573d6000803e3d6000fd5b5050505060016002811115610324576103236108d1565b5b836002811115610337576103366108d1565b5b14156103d957600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b3f2a386826000015183604001516040518363ffffffff1660e01b81526004016103a2929190610980565b600060405180830381600087803b1580156103bc57600080fd5b505af11580156103d0573d6000803e3d6000fd5b505050506104e3565b6002808111156103ec576103eb6108d1565b5b8360028111156103ff576103fe6108d1565b5b14156104a157600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ee84e67826000015183604001516040518363ffffffff1660e01b815260040161046a929190610980565b600060405180830381600087803b15801561048457600080fd5b505af1158015610498573d6000803e3d6000fd5b505050506104e2565b3384846040517f7166ea540000000000000000000000000000000000000000000000000000000081526004016104d9939291906109a9565b60405180910390fd5b5b3373ffffffffffffffffffffffffffffffffffffffff167fadc1621c9eef728d7d88bb6c30d5063096a4072aed64921663751a9951414d8a858560405161052b929190610948565b60405180910390a250505050565b6000604051905090565b600080fd5b6000819050919050565b61055b81610548565b811461056657600080fd5b50565b60008135905061057881610552565b92915050565b6003811061058b57600080fd5b50565b60008135905061059d8161057e565b92915050565b600080604083850312156105ba576105b9610543565b5b60006105c885828601610569565b92505060206105d98582860161058e565b9150509250929050565b6000819050919050565b6105f6816105e3565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610627826105fc565b9050919050565b6106378161061c565b82525050565b600060408201905061065260008301856105ed565b61065f602083018461062e565b9392505050565b60008115159050919050565b61067b81610666565b811461068657600080fd5b50565b60008151905061069881610672565b92915050565b6000602082840312156106b4576106b3610543565b5b60006106c284828501610689565b91505092915050565b6106d481610548565b82525050565b60006020820190506106ef60008301846106cb565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610743826106fa565b810181811067ffffffffffffffff821117156107625761076161070b565b5b80604052505050565b6000610775610539565b9050610781828261073a565b919050565b61078f8161061c565b811461079a57600080fd5b50565b6000815190506107ac81610786565b92915050565b600063ffffffff82169050919050565b6107cb816107b2565b81146107d657600080fd5b50565b6000815190506107e8816107c2565b92915050565b6000815190506107fd8161057e565b92915050565b600060808284031215610819576108186106f5565b5b610823608061076b565b905060006108338482850161079d565b60008301525060206108478482850161079d565b602083015250604061085b848285016107d9565b604083015250606061086f848285016107ee565b60608301525092915050565b60006080828403121561089157610890610543565b5b600061089f84828501610803565b91505092915050565b60006040820190506108bd600083018561062e565b6108ca60208301846106cb565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610911576109106108d1565b5b50565b600081905061092282610900565b919050565b600061093282610914565b9050919050565b61094281610927565b82525050565b600060408201905061095d60008301856106cb565b61096a6020830184610939565b9392505050565b61097a816107b2565b82525050565b6000604082019050610995600083018561062e565b6109a26020830184610971565b9392505050565b60006060820190506109be600083018661062e565b6109cb60208301856106cb565b6109d86040830184610939565b94935050505056fea26469706673582212204bd113184d39674f648107db9488284a25d830ebd368537eb49338e52b81f3d764736f6c63430008080033";

type RequestsManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RequestsManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RequestsManager__factory extends ContractFactory {
  constructor(...args: RequestsManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _authorization: string,
    _requests: string,
    _players: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequestsManager> {
    return super.deploy(
      _authorization,
      _requests,
      _players,
      overrides || {}
    ) as Promise<RequestsManager>;
  }
  override getDeployTransaction(
    _authorization: string,
    _requests: string,
    _players: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _authorization,
      _requests,
      _players,
      overrides || {}
    );
  }
  override attach(address: string): RequestsManager {
    return super.attach(address) as RequestsManager;
  }
  override connect(signer: Signer): RequestsManager__factory {
    return super.connect(signer) as RequestsManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequestsManagerInterface {
    return new utils.Interface(_abi) as RequestsManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequestsManager {
    return new Contract(address, _abi, signerOrProvider) as RequestsManager;
  }
}
