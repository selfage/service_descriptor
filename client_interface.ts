export interface WebClientOptions {
  keepAlive?: boolean;
  timeout?: number; // ms
  retries?: number; // Number of retries when failure is not due to timeout.
}

export interface WebClientInterface {
  send(request: any, options?: WebClientOptions): Promise<any>;
}

export interface NodeClientInterface {
  send(request: any): Promise<any>;
}
