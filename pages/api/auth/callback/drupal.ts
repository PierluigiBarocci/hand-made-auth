import querystring from 'querystring';
import { NextApiRequest, NextApiResponse } from 'next';

import userDataHelper from 'utils/userDataHelper';
import { TokenData, User, UserSession } from 'utils/types';
import { setAuthCookie } from 'utils/cookies';


const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, REDIRECT_URI } = process.env;

const sendRefreshRedirect = (res: NextApiResponse, path = '/') => {
  res.status(200);
  // Send a 200 response and refresh the page
  return res.send(
    `<html><head><meta http-equiv="refresh" content=1;url="${path}"></head></html>`,
  );
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;

  try {
    const tokenRes = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:
        querystring.stringify({
          grant_type: 'authorization_code',
          code,
          client_id: OAUTH_CLIENT_ID,
          client_secret: OAUTH_CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
        }),
    })
    const tokenData: TokenData = await tokenRes.json()

    const user: User = await userDataHelper({ token_type: tokenData.token_type, access_token: tokenData.access_token });

    const session: UserSession = {
      user: user,
      token: tokenData,
    };

    // Send the session information to our user in the form of a cookie header.
    await setAuthCookie(res, session, {
      maxAge: tokenData.expires_in * 1000,
    });

    // Send 200 response to set cookies and refresh the page
    return sendRefreshRedirect(res);
  } catch (error) {
    // You might want to log the error here
    res.status(500).json({
      statusCode: 500,
      message: 'Something went wrong',
    });
  }
};