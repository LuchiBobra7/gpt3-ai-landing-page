import Loader from 'react-loader-spinner'
import { VStack } from '@chakra-ui/react'

type Props = {
  visible?: boolean
}

const Preloader = ({ visible }: Props) => {
  return (
    <VStack
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="blue.600"
    >
      <Loader
        type="Watch"
        color="#3cefff"
        height={100}
        width={100}
        visible={visible}
      />
    </VStack>
  )
}

export default Preloader
