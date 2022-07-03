import React from 'react'
import { ArrowRightIcon } from "@chakra-ui/icons"
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react"

const Chat = () => {
  return (
    <Flex p='3' align='center' _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
      <Avatar marginEnd='3' />
      <Text>Akash</Text>
    </Flex>
  )
}

export default function Sidebar() {
  return (
    <Flex direction='column' w='300px' borderEnd='1px solid' borderColor='gray.200'>
      <Flex align='center' borderBottom='1px solid' borderColor='gray.200' h='80px' w='100%' justify='space-between' p='3'>
        <Flex align='center'>
          <Avatar marginEnd='3' />
          <Text>Mueem Nahid</Text>
        </Flex>
        <IconButton size='sm' isRound icon={<ArrowRightIcon />} />
      </Flex>
      <Button m='5' p='4'>New Chat</Button>
    
      <Flex className='scrolling-section' overflowY='auto' direction='column' flex='1'>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </Flex>
    </Flex>
  )
}
