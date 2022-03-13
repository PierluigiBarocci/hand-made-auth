import cookie from 'cookie';
import { GetServerSideProps } from 'next';
import Iron from 'iron'
import { UserSession } from 'utils/types';
import HomePage from './home';

export const getSessionCookie = async (
  cookies: Record<string, string>,
): Promise<UserSession> => {
  const cookie = cookies['auth.session'];

  if (!cookie) {
    throw new Error('Auth session not found');
  }

  // Decrypt the auth cookie
  const decoded: any = await Iron.unseal(
    cookie,
    process.env.NEXTAUTH_SECRET,
    Iron.defaults,
  );

  return decoded;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const cookies = cookie.parse(req.headers.cookie || '');

    const session: UserSession = await getSessionCookie(cookies);

    return {
      props: {
        user: session.user,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default function IndexPage(props) {
  return <HomePage user={props.user} />;
}