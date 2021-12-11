import Link from 'next/link'
import Script from 'next/script'
import Layout from '../components/Layout'

const IndexPage = () => {
  return <>
    <Script id="t-js" src="/t.js" />
    <Layout title="wts">
      <h1>wts 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
  
      <div id="kanvas" />
    </Layout>
  </>
}

export default IndexPage
