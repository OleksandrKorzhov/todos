import {AbstractStorageService} from "../types/storage.types";

export class StorageService implements AbstractStorageService {
  constructor(
    private storageAdapter: AbstractStorageService
  ) {}

  getItem<T>(key: string): T | null {
    let value: string = this.storageAdapter.getItem(key);

    try {
      value = JSON.parse(value);
    } catch (e) {
      return null;
    }

    return value as unknown as T;
  }

  setItem(key: string, value: any) {
    this.storageAdapter.setItem(key, JSON.stringify(value));
  }
}
