export interface WebServiceClientInterface {
  send(request: any): Promise<any>;
}
