interface IAuthService {
  /*   login: (email: string, password: string) => Promise<any>;
  register: (id: string) => Promise<any>; */
  getUserByToken: (token: string) => Promise<any>;
  login: (email: string, password: string) => Promise<string>;
}

export { IAuthService };
