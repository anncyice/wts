import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {

  return <>
    <Layout title="wts">
      <h1>wts 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
  
    </Layout>
  </>
}

export default IndexPage
