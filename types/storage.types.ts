export interface AbstractStorageService {
  getItem<T>(key: string): T | null;
  setItem(key: string, value: any);
}
