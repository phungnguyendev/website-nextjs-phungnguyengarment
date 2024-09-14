import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import '~/styles/globals.css'
import theme from '~/theme/theme.config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
