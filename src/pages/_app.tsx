import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {RecoilRoot, useRecoilTransactionObserver_UNSTABLE} from 'recoil'
import BaseLayout from "./layout/base"
import NextLayout from './layout/next'
import { useRouter } from 'next/router'
import { userState } from '@/state/user'
import { minicartState } from '@/state/minicart'

function DebugObserver() {
  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {
    console.log(snapshot.getLoadable(userState))
    console.log(snapshot.getLoadable(minicartState))
    // window.myDebugState = {
    //   a: snapshot.getLoadable(atomA).contents,
    //   b: snapshot.getLoadable(atomB).contents,
    // };
  });
  return null;
}


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const {pathname} = router;
return (<RecoilRoot>
   <DebugObserver />
  {(pathname === "/") ? 
  
  <BaseLayout>
    <Component {...pageProps} />
  </BaseLayout>
  : 
  <NextLayout>
    <Component {...pageProps} />
  </NextLayout>
  }
  </RecoilRoot>)
}
