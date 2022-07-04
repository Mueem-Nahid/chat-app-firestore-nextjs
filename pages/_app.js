import { Center, ChakraProvider, Spinner, } from "@chakra-ui/react"
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from "../components/Login"
import { auth } from '../utils/firebaseConfig'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  return (
    <ChakraProvider>
      {
        loading && <Center h='100vh'>
          <Spinner size='xl' />
        </Center>
      }
      {
        user ? <Component {...pageProps} /> :
          <Login />
      }
    </ChakraProvider>
  )
}

export default MyApp
// 1:06:00