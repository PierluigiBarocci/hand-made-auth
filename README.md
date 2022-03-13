# Basic Authorization Code Grant flow

A simple starter for building your site with Next.js and Drupal with Auth code grant.

## How to use

Prepare your Drupal environment [setting up Drupal Authentication Using OAuth2 and OpenID Connect](https://www.droptica.com/blog/how-set-drupal-authentication-using-oauth2-and-openid-connect/).

(Remember: when your are in 'The Server setup part two' chapter, in the Redirect URIs section of the OAuth2 Server/Add Client, add also 'https//:localhost:3000/api/auth/callback/drupal').

`npm install`
or
`yarn install`

Change the name of the .env.example in .env.local and set you variables

`yarn dev`

## Usefull Links

* https://www.droptica.com/blog/how-set-drupal-authentication-using-oauth2-and-openid-connect/
* https://next-auth.js.org/configuration/options#secret

