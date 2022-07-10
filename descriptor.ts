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

export interface WebServiceDescriptorV1 {
  name: string;
  path: string;
  auth?: SearchParamDescriptor;
  side?: SearchParamDescriptor;
  body?: BodyDescriptor;
  response?: MessageDescriptor<any>;
}

export interface WebServiceHandlerV1<HandlerRequest, HandlerResponse> {
  descriptor: WebServiceDescriptorV1;
  handle(request: HandlerRequest): Promise<HandlerResponse>;
}

export interface WebServiceRequestV1<ClientRequest, ClientResponse> {
  descriptor: WebServiceDescriptorV1;
  request: ClientRequest;
}
