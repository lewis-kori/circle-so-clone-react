import { action, computed, makeObservable, observable } from 'mobx';

class AuthStore {
  loggedInUser = {};
  userExists = false;
  users = [
    {
      email: 'korikihiu@gmail.com',
      password: '123qwerty',
      fullName: 'lewis kori',
    },
    {
      email: 'vanessa@circle.so',
      password: 'heyyou123',
      fullName: 'Vanessa Mdee',
    },
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
  toggleUserExists(){
    this.userExists = !this.userExists
  }
  registerNewUser(payload) {
    const authUser = this.findUser(payload.email);
    if (authUser === null) {
      this.users.push(payload);
      this.setLoggedInUser(payload);
    } else {
      this.toggleUserExists()
    }
  }
  setLoggedInUser(payload) {
    this.loggedInUser = payload;
  }

  async login(payload) {
    const authUser = await this.findUser(payload.email);
    if (authUser !== null) {
      const authenticate = this.checkPasswordsMatched(
        authUser.password,
        payload.password
      );
      if (authenticate) {
        this.setLoggedInUser(authUser);
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
      userExists: observable,
      login: action,
      setLoggedInUser: action,
      isAuthenticated: computed,
      storeDetails: computed,
    });
    // autorun(() => {
    //   this.logStoreDetails();
    // });
  }
}

const store = new AuthStore();
export default store;
