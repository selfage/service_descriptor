export interface WebClientOptions {
  keepAlive?: boolean;
  timeout?: number; // ms
  retries?: number; // Number of retries when failure is not due to timeout.
}

export interface WebClientInterface {
  send(request: any, options?: WebClientOptions): Promise<any>;
}

export interface NodeClientOptions {
  timeout?: number; // ms
  retries?: number; // Number of retries when failure is not due to timeout.
}

export interface NodeClientInterface {
  send(request: any, options?: NodeClientOptions): Promise<any>;
}
