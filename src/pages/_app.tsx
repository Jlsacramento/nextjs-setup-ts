import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import GlogalStyle from '../styles/global'
import { Provider } from 'react-redux'
import { useEffect } from "react";

import store from '../store'
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
        <GlogalStyle />
      </AuthProvider>
    </Provider>
  )
}

export default MyApp
