import { RemoteCallDescriptor } from "./descriptor";

export interface RemoteCallHandlerInterface {
  descriptor: RemoteCallDescriptor;
  handle(...args: any[]): Promise<any>;
}
