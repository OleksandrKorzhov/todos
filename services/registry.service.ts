export class RegistryService {
  private static entities = new Map();

  static set(key, entity): void {
    this.entities.set(key, entity);
  }

  static get(key) {
    return this.entities.get(key);
  }
}
