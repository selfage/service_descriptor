export interface WebServiceClientOptions {
  keepAlive?: boolean;
  timeout?: number; // ms
  retries?: number; // Number of retries when failure is not due to timeout.
}

export interface WebServiceClientInterface {
  send(request: any, options?: WebServiceClientOptions): Promise<any>;
}
