export interface TokenData {
  token_type: string,
  expires_in?: number,
  access_token: string,
  refresh_token?: string,
}

export interface User {
  name: string,
  preferred_username: string,
  email: string,
  email_verified: boolean,
  profile: string,
  locale: string,
  zoneinfo: string,
  updated_at: string
}

export interface UserSession {
  user: User;
  token: TokenData;
}