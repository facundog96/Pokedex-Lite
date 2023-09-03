export interface UserLogin {
  username: string;
  password: string;
}

export interface User {
  id: number;
  name?: string;
  lastname?: string;
  email?: string;
  message?: string;
}
