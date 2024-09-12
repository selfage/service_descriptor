import { MessageDescriptor } from "@selfage/message/descriptor";

export interface QueryParamDescriptor {
  key: string;
  type: MessageDescriptor<any>;
}

export enum PrimitveTypeForBody {
  BYTES = 1,
}

export interface BodyDescriptor {
  messageType?: MessageDescriptor<any>;
  primitiveType?: PrimitveTypeForBody;
  streamMessageType?: MessageDescriptor<any>;
}

export interface ResponseDescriptor {
  messageType?: MessageDescriptor<any>;
}

export interface WebRemoteCallDescriptor {
  name: string;
  path: string;
  sessionKey?: string;
  metadata?: QueryParamDescriptor;
  body?: BodyDescriptor;
  response: ResponseDescriptor;
}

export interface NodeRemoteCallDescriptor {
  name: string;
  path: string;
  metadata?: QueryParamDescriptor;
  body?: BodyDescriptor;
  response: ResponseDescriptor;
}
