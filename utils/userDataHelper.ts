import { TokenData } from "./types";
const userDataHelper = async (data: TokenData) => {
  const userRes = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/userinfo`, {
    headers: {
      'Authorization': data.token_type + ' ' + data.access_token,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  const user = await userRes.json()
  return user
};

export default userDataHelper;