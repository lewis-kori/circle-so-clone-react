import { action, computed, makeObservable, observable } from 'mobx';

class AuthStore {
  loggedInUser = {};
  users = [
    { email: 'korikihiu@gmail.com', password: '123qwerty' },
    { email: 'vanessa@circle.so', password: 'heyyou123' },
  ];

  findUser(email) {
    let authUser = null;
    this.users.forEach((user) => {
      if (user.email === email) {
        authUser = user;
      }
    });
    return authUser;
  }

  checkPasswordsMatched(userPassword, inputPassword) {
    return userPassword === inputPassword;
  }

  login(payload) {
    const authUser = this.findUser(payload.email);
    if (authUser !== null) {
      const authenticate = this.checkPasswordsMatched(
        authUser.password,
        payload.password
      );
      if (authenticate) {
        this.loggedInUser = authUser;
      }
    }
  }

  get isAuthenticated() {
    return Object.keys(this.loggedInUser).length > 0;
  }
  get storeDetails() {
    return this.isAuthenticated;
  }

  logStoreDetails() {
    console.log(this.storeDetails);
  }

  constructor() {
    makeObservable(this, {
      loggedInUser: observable,
      login: action,
      isAuthenticated: computed,
      storeDetails: computed,
    });
    // autorun(() => {
    //   this.logStoreDetails();
    // });
  }
}

export default AuthStore;
