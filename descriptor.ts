import { ClientType } from "./client_type";
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
  service: ServiceDescriptor;
  path: string;
  authKey?: string;
  metadata?: QueryParamDescriptor;
  body?: BodyDescriptor;
  response: ResponseDescriptor;
}

export interface ServiceDescriptor {
  clientType: ClientType;
  name: string;
  protocol: "http" | "https";
  port: number;
}
