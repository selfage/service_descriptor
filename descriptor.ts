import { MessageDescriptor } from "@selfage/message/descriptor";

export interface SearchParamDescriptor {
  key: string;
  type: MessageDescriptor<any>;
}

export enum PrimitveTypeForBody {
  BLOB = 1,
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
  signedUserSession?: SearchParamDescriptor;
  side?: SearchParamDescriptor;
  body?: BodyDescriptor;
  response?: ResponseDescriptor;
}

export interface ServiceHandler<HandlerRequest, HandlerResponse> {
  descriptor: ServiceDescriptor;
  handle(request: HandlerRequest): Promise<HandlerResponse>;
}

export interface WebServiceRequest<ClientRequest, ClientResponse> {
  descriptor: ServiceDescriptor;
  request: ClientRequest;
}
