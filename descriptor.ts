import { MessageDescriptor } from "@selfage/message/descriptor";

export interface ServiceDescriptor<ServiceRequest, ServiceResponse> {
  name: string;
  path: string;
  requestDescriptor: MessageDescriptor<ServiceRequest>;
  responseDescriptor: MessageDescriptor<ServiceResponse>;
}

export interface UnauthedServiceDescriptor<ServiceRequest, ServiceResponse>
  extends ServiceDescriptor<ServiceRequest, ServiceResponse> {}

export interface WithSession {
  signedSession?: string;
}

export interface AuthedServiceDescriptor<
  ServiceRequest extends WithSession,
  ServiceResponse
> extends ServiceDescriptor<ServiceRequest, ServiceResponse> {
}
