import Datastore from 'nedb-promise';
import CryptoUtil from '../utils/cryptoUtil';
import User from '../model/user';

export class UserStore {
  constructor(db) {
    this.db = db || new Datastore({ filename: './data/user.db', autoload: true });
  }

  async register(email, passwort) {
    if (!(email && passwort)) {
      throw new Error('no user');
    }
    const user = new User(email, passwort);
    return this.db.insert(user);
  }

  async authenticate(email, passwort) {
    if (!(email && passwort)) {
      return false;
    }
    const user = await this.db.findOne({ email });
    if (user == null) {
      await this.register(email, passwort);
      return true;
    }
    return user.passwortHash === CryptoUtil.hashPwd(passwort);
  }
}

export const userStore = new UserStore();
