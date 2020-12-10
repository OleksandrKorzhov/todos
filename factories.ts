import {RegistryService} from "./services/registry.service";
import {RegistryKeys} from "./constants/registry-keys";
import {StorageService} from "./services/storage.service";
import {InMemoryStorageAdapter} from "./services/in-memory-storage.adapter";
import {AuthorizationService} from "./services/authorization.service";
import {AbstractStorageService} from "./types/storage.types";
import {AbstractAuthorizationService} from "./types/authorization.types";

const baseFactory = <I>({ storageKey, instanceFactory }): () => I => () => {
  if (RegistryService.get(storageKey))
    return RegistryService.get(storageKey);

  const instance = instanceFactory();
  RegistryService.set(storageKey, instance);

  return instance;
};

/**
 * Instantiates a storage service as a singleton
 */
export const getStorageService = baseFactory<AbstractStorageService>({
  storageKey: RegistryKeys.STORAGE,
  instanceFactory: () => new StorageService(new InMemoryStorageAdapter()),
});

export const getAuthorizationService = baseFactory<AbstractAuthorizationService>({
  storageKey: RegistryKeys.AUTHORIZATION,
  instanceFactory: () => new AuthorizationService(getStorageService()),
});
