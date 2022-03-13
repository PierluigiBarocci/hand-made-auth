import Head from "next/head"

import { Layout } from "@/components/layout"
import Link from "next/link"
import Button from '@mui/material/Button';
import { User } from "utils/types";

interface IndexPageProps {
  user?: User
}

export default function HomePage({ user }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>

      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
        {user ? (
          <h1 style={{ fontSize: 40, fontFamily: 'Roboto' }}><span style={{ color: 'purple' }}> {user.email}</span> is currently logged in 🎉</h1>
        ) : (
          <Link href="/api/auth/login"><Button variant="contained" color="secondary">Login with Drupal</Button></Link>
        )}
      </div>

    </Layout>
  )
}


