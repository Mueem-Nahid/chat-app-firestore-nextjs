import React from 'react'
import Head from "next/head"
import { Box, Button, Center, Stack } from "@chakra-ui/react"
import { ChatIcon } from "@chakra-ui/icons"

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Center h='100vh'>
        <Stack align='center' bgColor='gray.600' p='16' rounded='3xl' spacing='12' boxShadow='lg'>
          <Box boxShadow='md' bgColor='blue.500' w='fit-content' p='5' rounded='3xl'>
            <ChatIcon w='100px' h='100px' color='white' />
          </Box>
          <Button boxShadow='md'>Sign In with Google</Button>
        </Stack>
      </Center>
    </>
  )
}
