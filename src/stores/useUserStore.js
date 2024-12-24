import { defineStore } from 'pinia';
import { getCookie, setCookie } from '../config/cookie';
import { getCurrentUser, loginUser } from '../services/auth';

const LOGIN_EXPIRATION_MIN = 30;
const COOKIE_NAME = 'userToken';

export const useUserStore = defineStore('userStore', {
  state() {
    return {
      user: null,
    };
  },
  actions: {
    async loginUser(loginData) {
      const profile = await loginUser(loginData, LOGIN_EXPIRATION_MIN);
      if (!profile) {
        return false;
      }
      this.user = profile;
      setCookie(COOKIE_NAME, profile.accessToken, LOGIN_EXPIRATION_MIN);
    },
    async reAuthUser() {
      if (this.user) {
        // eslint-disable-next-line no-useless-return
        return;
      }
      const persistedUserToken = getCookie(COOKIE_NAME);
      if (!persistedUserToken) {
        // eslint-disable-next-line no-useless-return
        return;
      }
      const profile = await getCurrentUser(persistedUserToken);
      if (profile) {
        this.user = profile;
      }
    },
  },
});
