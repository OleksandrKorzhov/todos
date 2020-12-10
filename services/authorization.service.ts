import {AbstractStorageService} from "../types/storage.types";
import {StorageKeys} from "../constants/storage-keys";
import {AbstractAuthorizationService} from "../types/authorization.types";

export class AuthorizationService implements AbstractAuthorizationService {
  constructor(
    private storageService: AbstractStorageService
  ) {}

  setToken(token: string): void {
    this.storageService.setItem(StorageKeys.ACCESS_TOKEN, token);
  }

  getToken(): string | null {
    const token: string | null = this.storageService.getItem(StorageKeys.ACCESS_TOKEN);
    if (!token)
      return null;

    const isTokenValid: boolean = this.verifyToken(token);
    if (!isTokenValid)
      return null;

    return token;
  }

  async renewAuth(): Promise<void> {}

  private verifyToken(token: string): boolean {
    return true;
  }
}
