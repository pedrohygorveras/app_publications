export type UserProps = {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};

export type AuthContextProps = {
  user: UserProps | null;
  login: (userData: UserProps) => void;
  logout: () => void;
  refreshAccessToken: () => Promise<void>;
  isAuthenticated: boolean;
};
