import { Avatar, Button, Flex, FormControl, Heading, Input, Text } from "@chakra-ui/react"
import Sidebar from "../../components/Sidebar"

const Topbar = () => {
  return (
    <Flex bgColor='gray.100' p='5' align='center' h='80px' w='100%'>
      <Avatar marginEnd='3' />
      <Heading size='md'>Akash</Heading>
    </Flex>
  )
}

const BottomBar = () => {
  return (
    <FormControl p='3'>
      <Input size='lg' autoComplete="off" placeholder="Type a message..." />
      <Button type="submit" hidden>Submit</Button>
    </FormControl>
  )
}

export default function Chat() {
  return (
    <Flex h='100vh'>
      <Sidebar />
      <Flex flex='1' direction='column'>
        <Topbar />
        {/* Chat bubbles */}
        <Flex pt='4' mx='4' flex='1' direction='column' overflowY='auto' className='scrolling-section'>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex alignSelf='flex-end' bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>a messgae from me</Text>
          </Flex>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex alignSelf='flex-end' bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>a messgae from me</Text>
          </Flex>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex alignSelf='flex-end' bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>a messgae from me</Text>
          </Flex>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex bg='blue.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>This is a messgae</Text>
          </Flex>
          <Flex alignSelf='flex-end' bg='green.100' w='fit-content' minWidth='100px' borderRadius='lg' px='4' py='2' m='1'>
            <Text>a messgae from me</Text>
          </Flex>
        </Flex>
        <BottomBar />
      </Flex>
    </Flex>
  )
}
