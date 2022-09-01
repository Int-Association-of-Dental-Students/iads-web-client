import { createContext } from "react";

export const AuthContext = createContext({
  isLogged: false,
  userId: null,
  username: null,
  name: null,
  email: null,
  validation: null,
  editor: null,
  admin: null,
  token: null,

  login: () => {},
  logout: () => {},
});
