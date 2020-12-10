import {RegistryService} from "./services/registry.service";
import {RegistryKeys} from "./constants/registry-keys";
import {StorageService} from "./services/storage.service";
import {InMemoryStorageAdapter} from "./services/in-memory-storage.adapter";

/**
 * Instantiates a storage service as a singleton
 */
export const getStorageService = () => {
  if (RegistryService.get(RegistryKeys.STORAGE))
    return RegistryService.get(RegistryKeys.STORAGE);

  const storage = new StorageService(new InMemoryStorageAdapter());
  RegistryService.set(RegistryKeys.STORAGE, storage);

  return storage;
};
