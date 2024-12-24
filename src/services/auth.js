import axiosDJ from '../config/axiosDJ';

const ENDPOINT = 'auth';

export async function loginUser({ username, password }, expiresInMin = 30) {
  try {
    const res = await axiosDJ.post(`/${ENDPOINT}/login`, {
      username,
      password,
      expiresInMin,
    });
    return res.data;
  }

  catch (e) {
    console.error('Error', e);
    return null;
  }
}

export async function getCurrentUser(accessToken) {
  try {
    const res = await axiosDJ.get(`/${ENDPOINT}/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  }
  catch (e) {
    console.error('Ops something went wrong', e);
    return null;
  }
}
