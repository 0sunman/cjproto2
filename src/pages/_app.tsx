import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {RecoilRoot} from 'recoil'
import BaseLayout from "./layout/base"
import NextLayout from './layout/next'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const {pathname} = router;
return (<RecoilRoot>
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
