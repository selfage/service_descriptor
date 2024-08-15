import { MessageDescriptor } from "@selfage/message/descriptor";

export interface QueryParamDescriptor {
  key: string;
  type: MessageDescriptor<any>;
}

export interface HeaderParamDescriptor {
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

export interface RemoteCallDescriptor {
  name: string;
  path: string;
  auth?: HeaderParamDescriptor;
  metadata?: QueryParamDescriptor;
  body?: BodyDescriptor;
  response: ResponseDescriptor;
}
