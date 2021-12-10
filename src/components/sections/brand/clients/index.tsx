import { FC, ComponentProps } from 'react'
import { HStack, Box } from '@chakra-ui/react'
import Image from 'components/image'
import { clientItems } from './clients-data'

type Props = ComponentProps<typeof HStack>

const Clients: FC<Props> = ({ ...props }) => {
  return (
    <HStack {...props} spacing={9} justifyContent="center" flexWrap="wrap">
      {clientItems.map((item, i) => (
        <Box key={i} maxW={{ base: 20, lg: 'full' }} my={{ base: 2, lg: 0 }}>
          <Image src={item.image} width={item.width} height={item.height} />
        </Box>
      ))}
    </HStack>
  )
}

export default Clients
