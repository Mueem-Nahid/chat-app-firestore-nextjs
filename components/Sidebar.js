import React from 'react'
import { ArrowRightIcon } from "@chakra-ui/icons"
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react"
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth"
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../utils/firebaseConfig'
import { collection } from 'firebase/firestore'
import getOtherEmail from '../utils/getOtherEmail'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const [user] = useAuthState(auth)
  const [snapshot, loading, error] = useCollection(collection(db, 'chats'))
  const router = useRouter();
  console.log('Snap: ', snapshot)
  const chats = snapshot?.docs.map(doc => ({
    id: doc?.id,
    ...doc?.data()
  }));
  console.log('Chats: ', chats)

  const chatLists = () => {
    return (
      chats?.filter(chat => chat?.users.includes(user?.email))
        .map((chat, i) => (
          <Flex onClick={() => redirect(chat?.id)} key={i} p='3' align='center' _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
            <Avatar marginEnd='3' />
            <Text>{getOtherEmail(chat?.users, user)}</Text>
          </Flex>
        ))
    )
  }

  const redirect = (id) => {
    router.push(`/chat/${id}`)
  }

  const logOut = () => {
    signOut(auth)
    router.push('/')
  }

  const newChat = () => {
    const input = prompt("Enter email of chat recipient:")
  }

  return (
    <Flex direction='column' h='100%' w='300px' borderEnd='1px solid' borderColor='gray.200'>
      <Flex align='center' borderBottom='1px solid' borderColor='gray.200' h='80px' w='100%' justify='space-between' p='3'>
        <Flex align='center'>
          <Avatar src={user?.photoURL} marginEnd='3' />
          <Text>{user?.displayName}</Text>
        </Flex>
        <IconButton onClick={() => logOut()} size='sm' isRound icon={<ArrowRightIcon />} />
      </Flex>
      <Button onClick={() => newChat()} m='5' p='4'>New Chat</Button>

      <Flex className='scrolling-section' overflowY='auto' direction='column' flex='1'>
        {chatLists()}
      </Flex>
    </Flex>
  )
}
