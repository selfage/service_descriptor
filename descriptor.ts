import { MessageDescriptor } from "@selfage/message/descriptor";

export interface SearchParamDescriptor {
  key: string;
  type: MessageDescriptor<any>;
}

export enum PrimitveTypeForBody {
  FILE = 1,
}

export interface BodyDescriptor {
  messageType?: MessageDescriptor<any>;
  primitiveType?: PrimitveTypeForBody;
}

export interface WebServiceDescriptor {
  name: string;
  path: string;
  auth?: SearchParamDescriptor;
  side?: SearchParamDescriptor;
  body?: BodyDescriptor;
  response?: MessageDescriptor<any>;
}

export interface WebServiceHandler<HandlerRequest, HandlerResponse> {
  descriptor: WebServiceDescriptor;
  handle(request: HandlerRequest): Promise<HandlerResponse>;
}

export interface WebServiceRequest<ClientRequest, ClientResponse> {
  descriptor: WebServiceDescriptor;
  request: ClientRequest;
}
