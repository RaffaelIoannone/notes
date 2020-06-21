import ValueStorage from './value-storage.js';

export default class HttpService {
  #tokenKey = 'jwt-token';

  async ajax(method, url, data) {
    const headers = new Headers({
      'content-type': 'application/json',
    });

    if (this.hasAuthToken) {
      headers.append(
        'authorization',
        `Bearer ${ValueStorage.getItem(this.#tokenKey)}`
      );
    }

    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  setAuthToken(token) {
    ValueStorage.setItem(this.#tokenKey, token);
  }

  hasAuthToken() {
    return Boolean(ValueStorage.getItem(this.#tokenKey));
  }

  removeAuthToken() {
    ValueStorage.setItem(this.#tokenKey, undefined);
  }
}
