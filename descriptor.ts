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
}

export interface ResponseDescriptor {
  messageType?: MessageDescriptor<any>;
}

export interface ServiceDescriptor {
  name: string;
  path: string;
  auth?: HeaderParamDescriptor;
  metadata?: QueryParamDescriptor;
  body: BodyDescriptor;
  response: ResponseDescriptor;
}
