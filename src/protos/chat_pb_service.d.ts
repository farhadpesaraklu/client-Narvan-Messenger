// package: 
// file: chat.proto

import * as chat_pb from "./chat_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ChatServicetransferMessage = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof chat_pb.Message;
  readonly responseType: typeof chat_pb.Message;
};

type ChatServicehealthCheck = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof chat_pb.healthCheckMessage;
  readonly responseType: typeof chat_pb.healthCheckMessage;
};

type ChatServicegetIsTyping = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof chat_pb.IsTypingRequest;
  readonly responseType: typeof chat_pb.IsTypingResponse;
};

type ChatServicestartTyping = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.ChangeTypingStatus;
  readonly responseType: typeof chat_pb.Response;
};

type ChatServicefinishTyping = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.ChangeTypingStatus;
  readonly responseType: typeof chat_pb.Response;
};

export class ChatService {
  static readonly serviceName: string;
  static readonly transferMessage: ChatServicetransferMessage;
  static readonly healthCheck: ChatServicehealthCheck;
  static readonly getIsTyping: ChatServicegetIsTyping;
  static readonly startTyping: ChatServicestartTyping;
  static readonly finishTyping: ChatServicefinishTyping;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ChatServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  transferMessage(requestMessage: chat_pb.Message, metadata?: grpc.Metadata): ResponseStream<chat_pb.Message>;
  healthCheck(requestMessage: chat_pb.healthCheckMessage, metadata?: grpc.Metadata): ResponseStream<chat_pb.healthCheckMessage>;
  getIsTyping(requestMessage: chat_pb.IsTypingRequest, metadata?: grpc.Metadata): ResponseStream<chat_pb.IsTypingResponse>;
  startTyping(
    requestMessage: chat_pb.ChangeTypingStatus,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.Response|null) => void
  ): UnaryResponse;
  startTyping(
    requestMessage: chat_pb.ChangeTypingStatus,
    callback: (error: ServiceError|null, responseMessage: chat_pb.Response|null) => void
  ): UnaryResponse;
  finishTyping(
    requestMessage: chat_pb.ChangeTypingStatus,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.Response|null) => void
  ): UnaryResponse;
  finishTyping(
    requestMessage: chat_pb.ChangeTypingStatus,
    callback: (error: ServiceError|null, responseMessage: chat_pb.Response|null) => void
  ): UnaryResponse;
}

