// package: 
// file: chat.proto

import * as jspb from "google-protobuf";

export class healthCheckMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): healthCheckMessage.AsObject;
  static toObject(includeInstance: boolean, msg: healthCheckMessage): healthCheckMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: healthCheckMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): healthCheckMessage;
  static deserializeBinaryFromReader(message: healthCheckMessage, reader: jspb.BinaryReader): healthCheckMessage;
}

export namespace healthCheckMessage {
  export type AsObject = {
    message: string,
  }
}

export class Message extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  getSenderId(): string;
  setSenderId(value: string): void;

  getCreationTime(): number;
  setCreationTime(value: number): void;

  getChannel(): string;
  setChannel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    content: string,
    senderId: string,
    creationTime: number,
    channel: string,
  }
}

export class IsTypingRequest extends jspb.Message {
  getChannel(): string;
  setChannel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsTypingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsTypingRequest): IsTypingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsTypingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsTypingRequest;
  static deserializeBinaryFromReader(message: IsTypingRequest, reader: jspb.BinaryReader): IsTypingRequest;
}

export namespace IsTypingRequest {
  export type AsObject = {
    channel: string,
  }
}

export class IsTypingResponse extends jspb.Message {
  clearUserIdList(): void;
  getUserIdList(): Array<string>;
  setUserIdList(value: Array<string>): void;
  addUserId(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsTypingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsTypingResponse): IsTypingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsTypingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsTypingResponse;
  static deserializeBinaryFromReader(message: IsTypingResponse, reader: jspb.BinaryReader): IsTypingResponse;
}

export namespace IsTypingResponse {
  export type AsObject = {
    userIdList: Array<string>,
  }
}

export class ChangeTypingStatus extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getChannel(): string;
  setChannel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeTypingStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeTypingStatus): ChangeTypingStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeTypingStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeTypingStatus;
  static deserializeBinaryFromReader(message: ChangeTypingStatus, reader: jspb.BinaryReader): ChangeTypingStatus;
}

export namespace ChangeTypingStatus {
  export type AsObject = {
    id: string,
    channel: string,
  }
}

export class Response extends jspb.Message {
  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    status: StatusMap[keyof StatusMap],
  }
}

export interface StatusMap {
  SUCCESS: 0;
  ERROR: 1;
}

export const Status: StatusMap;

