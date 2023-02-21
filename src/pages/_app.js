import { QuioscoProvider } from '../context/QuioscoProvider'
import '@/styles/globals.css'




function App({ Component, pageProps }) {
  // import { QuioscoProvider } from '@/context/QuioscoProvider'

// import { QuioscoProvider } from '@/context/QuioscoProvider'
// import { QuioscoProvider } from '@/context/QuioscoProvider'
  // return <Component {...pageProps} />
  return (
    <QuioscoProvider>
       <Component {...pageProps} />
    </QuioscoProvider>
  )
}
export default App