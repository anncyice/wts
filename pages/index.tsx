import Link from 'next/link'
import Layout from '../components/Layout'
import React, { useEffect } from 'react'
import { init } from '../libs/t'

const IndexPage = () => {
  const kanvas = React.createRef();
  let count = 100; 
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    init(kanvas);
  });

  return <>
    <Layout title="wts">
      <h1>wts 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
  
      <div ref={kanvas} />
    </Layout>
  </>
}

export default IndexPage
