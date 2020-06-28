export default class ValueStorage {
  static setItem(key, value) {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }

  static getItem(key) {
    return JSON.parse(localStorage.getItem(key) || null);
  }
}
