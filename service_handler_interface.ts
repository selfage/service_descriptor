import { ServiceDescriptor } from "./descriptor";

export interface ServiceHandlerInterface {
  descriptor: ServiceDescriptor;
  handle(...args: any[]): Promise<any>;
}
