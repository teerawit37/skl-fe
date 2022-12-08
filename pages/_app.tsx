import '../styles/scss/main.scss';
import "react-datepicker/dist/react-datepicker.css";
import type { AppProps } from 'next/app';
import { AppLayout, AuthLayout } from '../components/Layout';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Provider } from 'react-redux'
import PageWithLayoutType from '../components/Layout/pageWithLayouts';
import store from '../redux/store';
import Router, { useRouter } from 'next/router';

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp