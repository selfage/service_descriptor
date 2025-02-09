import { ClientType } from "./client_type";

interface ServiceRegistry {
  nameToHostnames: Map<string, string>;
}

export interface WebServiceRegistry extends ServiceRegistry {
  clientType: ClientType.WEB;
}

export interface NodeServiceRegistry extends ServiceRegistry {
  clientType: ClientType.NODE;
}
