export interface AbstractAuthorizationService {
  setToken(token: string): void;
  getToken(): string | null;
  renewAuth(): Promise<void>;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface JWTHost {
  token: string;
}
