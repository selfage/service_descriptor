import { ServiceDescriptor } from "./descriptor";

export interface ServiceHandlerInterface<HandlerRequest, HandlerResponse> {
  descriptor: ServiceDescriptor;
  handle(request: HandlerRequest): Promise<HandlerResponse>;
}
