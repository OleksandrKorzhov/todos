import {AbstractStorageService} from "../types/storage.types";

export class InMemoryStorageAdapter implements AbstractStorageService {
  private storage = new Map();

  getItem<T>(key: string): T | null {
    return this.storage.get(key);
  }

  setItem(key: string, value: any) {
    this.storage.set(key, value);
  }
}
