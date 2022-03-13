import Link from "next/link"

import { PreviewAlert } from "@/components/preview-alert"

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="max-w-screen-md px-6 mx-auto">
        <header>
          <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
            <Link href="/" passHref>
              <h1 style={{ marginTop: 20, fontSize: 60, fontFamily: 'Roboto' }}>
                Next.js for Drupal
              </h1>
            </Link>
          </div>
        </header>
        <main className="container py-10 mx-auto">{children}</main>
      </div>
    </>
  )
}
