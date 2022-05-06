import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import GlogalStyle from '../styles/global'
import { Provider } from 'react-redux'
import { useEffect } from "react";

import store from '../store'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlogalStyle />
    </Provider>
  )
}

export default MyApp
