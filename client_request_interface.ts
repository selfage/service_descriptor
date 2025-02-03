import { RemoteCallDescriptor } from "./descriptor";

export interface ClientRequestInterface<Response> {
  descriptor: RemoteCallDescriptor;
  body?: any;
  metadata?: any;
}
