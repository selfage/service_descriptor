import { RemoteCallDescriptor } from "./descriptor";

export interface HandlerInterface {
  descriptor: RemoteCallDescriptor;
  handle(...args: any[]): Promise<any>;
}
