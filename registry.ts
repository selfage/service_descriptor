import { ClientType } from "./client_type";

export interface Endpoint {
  origin: string;
  path: string;
}

interface ServiceRegistry {
  nameToEndpoints: Map<string, Endpoint>;
}

export interface WebServiceRegistry extends ServiceRegistry {
  clientType: ClientType.WEB;
}

export interface NodeServiceRegistry extends ServiceRegistry {
  clientType: ClientType.NODE;
}
