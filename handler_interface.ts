import {
  NodeRemoteCallDescriptor,
  WebRemoteCallDescriptor,
} from "./descriptor";

export interface WebHandlerInterface {
  descriptor: WebRemoteCallDescriptor;
  handle(...args: any[]): Promise<any>;
}

export interface NodeHandlerInterface {
  descriptor: NodeRemoteCallDescriptor;
  handle(...args: any[]): Promise<any>;
}
