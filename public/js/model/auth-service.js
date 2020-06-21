export default class AuthService {
  #httpService;

  constructor(httpService) {
    this.#httpService = httpService;
  }

  async login(email, pwd) {
    const token = await this.#httpService.ajax('POST', '/login', {
      email,
      pwd,
    });
    await this.#httpService.setAuthToken(token);
  }

  async logout() {
    this.#httpService.removeAuthToken();
  }

  isLoggedIn() {
    return this.#httpService.hasAuthToken();
  }
}
