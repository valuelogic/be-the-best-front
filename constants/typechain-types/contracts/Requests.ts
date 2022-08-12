/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export declare namespace SharedModel {
  export type RequestStruct = {
    player: string;
    activity: string;
    points: BigNumberish;
    status: BigNumberish;
  };

  export type RequestStructOutput = [string, string, number, number] & {
    player: string;
    activity: string;
    points: number;
    status: number;
  };
}

export interface RequestsInterface extends utils.Interface {
  functions: {
    "getRequest(uint256)": FunctionFragment;
    "getRequests(uint8)": FunctionFragment;
    "request(address)": FunctionFragment;
    "review(uint256,uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getRequest" | "getRequests" | "request" | "review"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getRequest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequests",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "request", values: [string]): string;
  encodeFunctionData(
    functionFragment: "review",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getRequest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "request", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "review", data: BytesLike): Result;

  events: {
    "RequestAdded(address,address)": EventFragment;
    "RequestReviewed(address,address,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RequestAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestReviewed"): EventFragment;
}

export interface RequestAddedEventObject {
  player: string;
  activity: string;
}
export type RequestAddedEvent = TypedEvent<
  [string, string],
  RequestAddedEventObject
>;

export type RequestAddedEventFilter = TypedEventFilter<RequestAddedEvent>;

export interface RequestReviewedEventObject {
  player: string;
  activity: string;
  status: number;
}
export type RequestReviewedEvent = TypedEvent<
  [string, string, number],
  RequestReviewedEventObject
>;

export type RequestReviewedEventFilter = TypedEventFilter<RequestReviewedEvent>;

export interface Requests extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RequestsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getRequest(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[SharedModel.RequestStructOutput]>;

    getRequests(
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[SharedModel.RequestStructOutput[]]>;

    request(
      _activity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    review(
      _requestId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getRequest(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<SharedModel.RequestStructOutput>;

  getRequests(
    _status: BigNumberish,
    overrides?: CallOverrides
  ): Promise<SharedModel.RequestStructOutput[]>;

  request(
    _activity: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  review(
    _requestId: BigNumberish,
    _status: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getRequest(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<SharedModel.RequestStructOutput>;

    getRequests(
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<SharedModel.RequestStructOutput[]>;

    request(_activity: string, overrides?: CallOverrides): Promise<void>;

    review(
      _requestId: BigNumberish,
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RequestAdded(address,address)"(
      player?: string | null,
      activity?: string | null
    ): RequestAddedEventFilter;
    RequestAdded(
      player?: string | null,
      activity?: string | null
    ): RequestAddedEventFilter;

    "RequestReviewed(address,address,uint8)"(
      player?: string | null,
      activity?: string | null,
      status?: null
    ): RequestReviewedEventFilter;
    RequestReviewed(
      player?: string | null,
      activity?: string | null,
      status?: null
    ): RequestReviewedEventFilter;
  };

  estimateGas: {
    getRequest(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequests(
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    request(
      _activity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    review(
      _requestId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRequest(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequests(
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    request(
      _activity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    review(
      _requestId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}