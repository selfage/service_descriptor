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

export interface RemoteCallDescriptor {
  name: string;
  serviceName: string; // An arbitrary name that maps to a base URL.
  path: string;
  authKey?: string;
  metadata?: QueryParamDescriptor;
  body?: BodyDescriptor;
  response: ResponseDescriptor;
}
