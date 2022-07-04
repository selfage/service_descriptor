import { MessageDescriptor } from "@selfage/message/descriptor";

export interface SearchParamDescriptor {
  key: string;
  type: MessageDescriptor<any>;
}

export enum BytesEncoding {
  BYTES = 1,
}

export interface BodyDescriptor {
  messageType?: MessageDescriptor<any>;
  bytesType?: BytesEncoding;
}

export interface ServiceDescriptor {
  name: string;
  path: string;
  signedUserSession?: SearchParamDescriptor;
  side?: SearchParamDescriptor;
  body?: BodyDescriptor;
  response?: BodyDescriptor;
}

export interface ServiceHandler<HandlerRequest, HandlerResponse> {
  descriptor: ServiceDescriptor;
  handle(request: HandlerRequest): Promise<HandlerResponse>;
}

export interface ServiceRequest<ClientRequest, ClientResponse> {
  descriptor: ServiceDescriptor;
  request: ClientRequest;
}
