import { TimeoutError } from '../errors';

export const setTimeoutAsync = async (callback, timeout = 10000) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new TimeoutError('Timed Out')), timeout);
    resolve(callback());
  });
