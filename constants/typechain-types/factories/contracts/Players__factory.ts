/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Players, PlayersInterface } from "../../contracts/Players";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Authorization",
        name: "_authorization",
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
        name: "_player",
        type: "address",
      },
    ],
    name: "Players__AccountAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_player",
        type: "address",
      },
    ],
    name: "Players__AccountNotRegistered",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_modifier",
        type: "address",
      },
      {
        internalType: "address",
        name: "_player",
        type: "address",
      },
    ],
    name: "Players__UnauthorizedChangeAttempt",
    type: "error",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "nick",
        type: "string",
      },
    ],
    name: "AddedNewPlayer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_newNick",
        type: "string",
      },
    ],
    name: "UpdatedPlayersNick",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "currentPoints",
        type: "uint32",
      },
    ],
    name: "UpdatedPlayersPoints",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_nick",
        type: "string",
      },
    ],
    name: "addPlayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_player",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_points",
        type: "uint32",
      },
    ],
    name: "addPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
    ],
    name: "ensureWalletExists",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
    ],
    name: "getPlayer",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "nick",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "points",
            type: "uint32",
          },
        ],
        internalType: "struct SharedModel.Player",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "nick",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "points",
            type: "uint32",
          },
        ],
        internalType: "struct SharedModel.Player[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_nick",
        type: "string",
      },
    ],
    name: "setNick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_player",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_points",
        type: "uint32",
      },
    ],
    name: "substractPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001bfe38038062001bfe8339818101604052810190620000379190620000fe565b80806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000130565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b28262000085565b9050919050565b6000620000c682620000a5565b9050919050565b620000d881620000b9565b8114620000e457600080fd5b50565b600081519050620000f881620000cd565b92915050565b60006020828403121562000117576200011662000080565b5b60006200012784828501620000e7565b91505092915050565b611abe80620001406000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635c12cd4b1161005b5780635c12cd4b146100d65780637d0f84d2146101065780638b5b9ccc14610122578063b3f2a386146101405761007d565b80631cb223e2146100825780632c48a73d1461009e5780634ee84e67146100ba575b600080fd5b61009c60048036038101906100979190611427565b61015c565b005b6100b860048036038101906100b39190611427565b61042e565b005b6100d460048036038101906100cf91906114bf565b6107cb565b005b6100f060048036038101906100eb91906114ff565b610ad7565b6040516100fd9190611622565b60405180910390f35b610120600480360381019061011b91906114ff565b610c3e565b005b61012a610d13565b6040516101379190611756565b60405180910390f35b61015a600480360381019061015591906114bf565b610f51565b005b8160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166391d148547fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42336040518363ffffffff1660e01b81526004016101d89291906117a0565b60206040518083038186803b1580156101f057600080fd5b505afa158015610204573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102289190611801565b1580156102fd575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166391d148547f0f98b3a5774fbfdf19646dba94a6c08f13f4c341502334a57724de46497192c3336040518363ffffffff1660e01b81526004016102ab9291906117a0565b60206040518083038186803b1580156102c357600080fd5b505afa1580156102d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fb9190611801565b155b801561033557508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b156103795733816040517f7b85e75d00000000000000000000000000000000000000000000000000000000815260040161037092919061182e565b60405180910390fd5b8261038381610c3e565b82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010190805190602001906103d992919061118f565b508373ffffffffffffffffffffffffffffffffffffffff167f961d74c147d1ef36672dd9c46aa66f4e203ff63d1ebeec5041c8a677f0c8281a8460405161042091906118a1565b60405180910390a250505050565b7fbea3dc2cfb254f821d5674bb49272a241e44cf76c754fddc24aa28318f0800a060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166391d1485482336040518363ffffffff1660e01b81526004016104aa9291906117a0565b60206040518083038186803b1580156104c257600080fd5b505afa1580156104d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fa9190611801565b61053d5780336040517f8b95d9110000000000000000000000000000000000000000000000000000000081526004016105349291906117a0565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff16600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561061057826040517ffe1bb77c00000000000000000000000000000000000000000000000000000000815260040161060791906118c3565b60405180910390fd5b6002839080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060405180606001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001600063ffffffff16815250600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061074d92919061118f565b5060408201518160020160006101000a81548163ffffffff021916908363ffffffff1602179055509050508273ffffffffffffffffffffffffffffffffffffffff167fa17c0ca472af83e47fae666b123892e719452a197cf98932cd8fbcd2acd1ff2f836040516107be91906118a1565b60405180910390a2505050565b7f81c6eab285df84a26c7d88759e031ce87349ba320f85d38d269fb50b0fc4632360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166391d1485482336040518363ffffffff1660e01b81526004016108479291906117a0565b60206040518083038186803b15801561085f57600080fd5b505afa158015610873573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108979190611801565b6108da5780336040517f8b95d9110000000000000000000000000000000000000000000000000000000081526004016108d19291906117a0565b60405180910390fd5b826108e481610c3e565b8263ffffffff16600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900463ffffffff1663ffffffff1610156109b1576000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548163ffffffff021916908363ffffffff160217905550610a31565b82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282829054906101000a900463ffffffff16610a12919061190d565b92506101000a81548163ffffffff021916908363ffffffff1602179055505b8373ffffffffffffffffffffffffffffffffffffffff167fff0f0120b5e65a3eafcf5746e105971f16f193f22f60ac24ce104c011454a4af600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900463ffffffff16604051610ac99190611950565b60405180910390a250505050565b610adf611215565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054610b8f9061199a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bbb9061199a565b8015610c085780601f10610bdd57610100808354040283529160200191610c08565b820191906000526020600020905b815481529060010190602001808311610beb57829003601f168201915b505050505081526020016002820160009054906101000a900463ffffffff1663ffffffff1663ffffffff16815250509050919050565b8073ffffffffffffffffffffffffffffffffffffffff16600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d1057806040517ffe1aa2f5000000000000000000000000000000000000000000000000000000008152600401610d0791906118c3565b60405180910390fd5b50565b6060600060028054905067ffffffffffffffff811115610d3657610d356112fc565b5b604051908082528060200260200182016040528015610d6f57816020015b610d5c611215565b815260200190600190039081610d545790505b50905060005b600280549050811015610f49576001600060028381548110610d9a57610d996119cc565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054610e709061199a565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9c9061199a565b8015610ee95780601f10610ebe57610100808354040283529160200191610ee9565b820191906000526020600020905b815481529060010190602001808311610ecc57829003601f168201915b505050505081526020016002820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681525050828281518110610f2b57610f2a6119cc565b5b60200260200101819052508080610f4190611a05565b915050610d75565b508091505090565b7f81c6eab285df84a26c7d88759e031ce87349ba320f85d38d269fb50b0fc4632360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166391d1485482336040518363ffffffff1660e01b8152600401610fcd9291906117a0565b60206040518083038186803b158015610fe557600080fd5b505afa158015610ff9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101d9190611801565b6110605780336040517f8b95d9110000000000000000000000000000000000000000000000000000000081526004016110579291906117a0565b60405180910390fd5b8261106a81610c3e565b82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008282829054906101000a900463ffffffff166110cb9190611a4e565b92506101000a81548163ffffffff021916908363ffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff167fff0f0120b5e65a3eafcf5746e105971f16f193f22f60ac24ce104c011454a4af600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900463ffffffff166040516111819190611950565b60405180910390a250505050565b82805461119b9061199a565b90600052602060002090601f0160209004810192826111bd5760008555611204565b82601f106111d657805160ff1916838001178555611204565b82800160010185558215611204579182015b828111156112035782518255916020019190600101906111e8565b5b5090506112119190611252565b5090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600063ffffffff1681525090565b5b8082111561126b576000816000905550600101611253565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112ae82611283565b9050919050565b6112be816112a3565b81146112c957600080fd5b50565b6000813590506112db816112b5565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611334826112eb565b810181811067ffffffffffffffff82111715611353576113526112fc565b5b80604052505050565b600061136661126f565b9050611372828261132b565b919050565b600067ffffffffffffffff821115611392576113916112fc565b5b61139b826112eb565b9050602081019050919050565b82818337600083830152505050565b60006113ca6113c584611377565b61135c565b9050828152602081018484840111156113e6576113e56112e6565b5b6113f18482856113a8565b509392505050565b600082601f83011261140e5761140d6112e1565b5b813561141e8482602086016113b7565b91505092915050565b6000806040838503121561143e5761143d611279565b5b600061144c858286016112cc565b925050602083013567ffffffffffffffff81111561146d5761146c61127e565b5b611479858286016113f9565b9150509250929050565b600063ffffffff82169050919050565b61149c81611483565b81146114a757600080fd5b50565b6000813590506114b981611493565b92915050565b600080604083850312156114d6576114d5611279565b5b60006114e4858286016112cc565b92505060206114f5858286016114aa565b9150509250929050565b60006020828403121561151557611514611279565b5b6000611523848285016112cc565b91505092915050565b611535816112a3565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561157557808201518184015260208101905061155a565b83811115611584576000848401525b50505050565b60006115958261153b565b61159f8185611546565b93506115af818560208601611557565b6115b8816112eb565b840191505092915050565b6115cc81611483565b82525050565b60006060830160008301516115ea600086018261152c565b5060208301518482036020860152611602828261158a565b915050604083015161161760408601826115c3565b508091505092915050565b6000602082019050818103600083015261163c81846115d2565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000606083016000830151611688600086018261152c565b50602083015184820360208601526116a0828261158a565b91505060408301516116b560408601826115c3565b508091505092915050565b60006116cc8383611670565b905092915050565b6000602082019050919050565b60006116ec82611644565b6116f6818561164f565b93508360208202850161170885611660565b8060005b85811015611744578484038952815161172585826116c0565b9450611730836116d4565b925060208a0199505060018101905061170c565b50829750879550505050505092915050565b6000602082019050818103600083015261177081846116e1565b905092915050565b6000819050919050565b61178b81611778565b82525050565b61179a816112a3565b82525050565b60006040820190506117b56000830185611782565b6117c26020830184611791565b9392505050565b60008115159050919050565b6117de816117c9565b81146117e957600080fd5b50565b6000815190506117fb816117d5565b92915050565b60006020828403121561181757611816611279565b5b6000611825848285016117ec565b91505092915050565b60006040820190506118436000830185611791565b6118506020830184611791565b9392505050565b600082825260208201905092915050565b60006118738261153b565b61187d8185611857565b935061188d818560208601611557565b611896816112eb565b840191505092915050565b600060208201905081810360008301526118bb8184611868565b905092915050565b60006020820190506118d86000830184611791565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061191882611483565b915061192383611483565b925082821015611936576119356118de565b5b828203905092915050565b61194a81611483565b82525050565b60006020820190506119656000830184611941565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806119b257607f821691505b602082108114156119c6576119c561196b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b6000611a10826119fb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611a4357611a426118de565b5b600182019050919050565b6000611a5982611483565b9150611a6483611483565b92508263ffffffff03821115611a7d57611a7c6118de565b5b82820190509291505056fea2646970667358221220688bf90c0ccccfb2a9e13da27fa19cca2c78346aaac47afe965bd50c8963abbb64736f6c63430008080033";

type PlayersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PlayersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Players__factory extends ContractFactory {
  constructor(...args: PlayersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _authorization: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Players> {
    return super.deploy(_authorization, overrides || {}) as Promise<Players>;
  }
  override getDeployTransaction(
    _authorization: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_authorization, overrides || {});
  }
  override attach(address: string): Players {
    return super.attach(address) as Players;
  }
  override connect(signer: Signer): Players__factory {
    return super.connect(signer) as Players__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PlayersInterface {
    return new utils.Interface(_abi) as PlayersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Players {
    return new Contract(address, _abi, signerOrProvider) as Players;
  }
}