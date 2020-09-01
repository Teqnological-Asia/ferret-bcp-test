import crypto from "crypto";
const codeChallengeMethod = 'S256';

function base64URLEncode(str) {
  return str
    .toString("base64")
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

function sha256(buffer) {
  return crypto
    .createHash('sha256')
    .update(buffer)
    .digest()
}

export default class PKCE {
  verifier;
  method = codeChallengeMethod;

  constructor(verifier) {
    this.verifier = verifier || base64URLEncode(crypto.randomBytes(32))
  }

  challenge() {
    return base64URLEncode(sha256(this.verifier))
  }
}