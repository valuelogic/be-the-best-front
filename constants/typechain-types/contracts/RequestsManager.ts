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

export interface RequestsManagerInterface extends utils.Interface {
  functions: {
    "review(uint256,uint8)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "review"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "review",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "review", data: BytesLike): Result;

  events: {
    "RequestReviewed(address,uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RequestReviewed"): EventFragment;
}

export interface RequestReviewedEventObject {
  _reviewer: string;
  _requestId: BigNumber;
  _status: number;
}
export type RequestReviewedEvent = TypedEvent<
  [string, BigNumber, number],
  RequestReviewedEventObject
>;

export type RequestReviewedEventFilter = TypedEventFilter<RequestReviewedEvent>;

export interface RequestsManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RequestsManagerInterface;

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
    review(
      _requestId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  review(
    _requestId: BigNumberish,
    _status: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    review(
      _requestId: BigNumberish,
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RequestReviewed(address,uint256,uint8)"(
      _reviewer?: string | null,
      _requestId?: null,
      _status?: null
    ): RequestReviewedEventFilter;
    RequestReviewed(
      _reviewer?: string | null,
      _requestId?: null,
      _status?: null
    ): RequestReviewedEventFilter;
  };

  estimateGas: {
    review(
      _requestId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    review(
      _requestId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
