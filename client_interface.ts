export interface ClientOptions {
  keepAlive?: boolean;
  timeout?: number; // ms
  retries?: number; // Number of retries when failure is not due to timeout.
}

export interface ClientInterface {
  send(request: any, options?: ClientOptions): Promise<any>;
}
