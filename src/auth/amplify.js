import { Auth } from "@aws-amplify/auth"
import pkce from "./pkce"

export default class Amplify {
  constructor(data) {
    this.authzCode = data.authzCode
    this.codeVerifier = sessionStorage.getItem('code_verifier') || new pkce().verifier
    this.baasId = data.baasId
    Auth.configure({
      userPoolId: process.env.REACT_APP_AWS_USER_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_AWS_CLIENT_ID,
      authenticationFlowType: 'CUSTOM_AUTH'
    })
  }

  login = async () => {
    const answer = JSON.stringify({
      authz_code: this.authzCode,
      code_verifier: this.codeVerifier,
    })
    const cognitoUser = (await Auth.signIn(this.baasId))
    return Auth.sendCustomChallengeAnswer(cognitoUser, answer);
  }

  static getPocLink = (type, options = {}) => {
    const code_verifier = new pkce().verifier
    const prompt = options.prompt || false
    const viewObj = Amplify.viewTypeMap[type]
    if (!viewObj) return null

    const baseUrl = process.env.REACT_APP_POC_URL
    const clientID = process.env.REACT_APP_AWS_CLIENT_ID
    const redirectUri = `${process.env.PUBLIC_URL || 'http://localhost:8080'}/${viewObj.callback}`
    const view = viewObj.view || ''
    const codeChallenge = new pkce(code_verifier).challenge()
    sessionStorage.setItem('code_verifier', code_verifier)

    const searchParams = new URLSearchParams({
      code_challenge_method: 'S256',
      redirect_uri: redirectUri,
      client_id: clientID,
      code_challenge: codeChallenge,
      view,
      ...(options.email ? {email: options.email} : {}),
      ...(prompt ? {} : {prompt: 'login'}),
    });

    return `${baseUrl}/?${searchParams}`
  }

  static viewTypeMap = {
    bcpLogin: {
      view: 'bcplogin',
      callback: 'account/login/callback/'
    },
    nayose: {
      view: 'nayose',
      callback: 'updateEmail'
    }
  }
}