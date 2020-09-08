import Head from 'next/head';
import { Page } from './styles';

const Home = (): JSX.Element => {
  return (
    <Page>
      <Head>
        <title>Synxty App</title>
      </Head>
      <main>
        <h1>Let&apos;s get to work</h1>
        <p>We have a lot to do.</p>
        <p>
          Start by editing <code>src/pages/Home/index.tsx</code>
        </p>
      </main>
    </Page>
  );
};

export default Home;
