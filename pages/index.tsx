import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from './Homepage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jhainelle’s Beauty Palace</title>
        <link rel='icon' href='/logo.jpeg' />
      </Head>
      <Homepage />
    </div>
  )
}

export default Home
