import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default App;
