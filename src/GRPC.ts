import {ChatServiceClient}  from '../src/protos/chat_pb_service'

export const clientService = new ChatServiceClient(
    'http://192.168.10.111:6066'
  );