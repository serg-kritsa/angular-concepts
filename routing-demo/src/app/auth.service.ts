export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return this.loggedIn;
  }
}
