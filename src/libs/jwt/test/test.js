import { expect } from 'chai';

import jwt from '..';

const { generateToken, generateRefreshToken, verifyRefreshToken } = jwt;

describe('jwt.generator', () => {
  const user = { id: 999 };

  describe('generateToken', () => {
    it('should generated a string instance and not an object instance when `user` is valid', () => {
      expect(generateToken(user)).to.be.a('string').but.not.an('object');
    });
  });

  describe('generateRefreshToken', () => {
    it('should generated a string instance and not an object instance', () => {
      const refreshToken = generateRefreshToken(user);
      user.refreshToken = refreshToken;

      expect(generateRefreshToken(user)).to.be.a('string').but.not.an('object');
    });
  });

  describe('verifyRefreshToken', () => {
    it('should return an object with `id`, `iat`, and `exp` property when verified', () => {
      const verifiedToken = verifyRefreshToken(user.refreshToken);

      expect(verifiedToken).to.be.a('object').to.have.all.keys('id', 'iat', 'exp');
    });
    it('should have the same value with the issuer', () => {
      const verifiedToken = verifyRefreshToken(user.refreshToken);

      expect(verifiedToken).to.have.property('id', user.id);
    });
  });
});
