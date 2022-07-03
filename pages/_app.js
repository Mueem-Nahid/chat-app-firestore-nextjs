import { ChakraProvider } from "@chakra-ui/react"
import Login from "../components/Login"
import Sidebar from "../components/Sidebar"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <ChakraProvider>
      {/* <Login /> */}
      {/* <Sidebar /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
