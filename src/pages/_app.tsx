import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import tema from '../ui/theme/tema';
import Cabecalho from '../ui/components/Cabecalho/Cabecalho'
import CabecalhoAdmin from '../ui/components/CabecalhoAdmin/CabecalhoAdmin'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <CabecalhoAdmin />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
