import '../styles/scss/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { AppLayout, AuthLayout } from '../components/Layout';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Provider } from 'react-redux'
import PageWithLayoutType from '../components/Layout/pageWithLayouts';
import store from '../redux/store';
import Router, { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}
function MyApp({ Component, pageProps }: AppLayoutProps) {
  const router = useRouter();
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>)
  // let data;
  // if (typeof window !== 'undefined') {
  //   data = localStorage.getItem("user")
  //   if (data === null) {
  //     router.push('/signin')
  //   }
  // }

  return (
    <Provider store={store}>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp