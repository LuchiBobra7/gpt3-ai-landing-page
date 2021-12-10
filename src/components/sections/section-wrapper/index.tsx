import { FC, ComponentProps } from 'react'
import { Box } from '@chakra-ui/react'

type Props = ComponentProps<typeof Box>

const SectionWrapper: FC<Props> = ({ children, ...props }) => {
  return (
    <Box as="section" py={{ base: 6, lg: 16 }} {...props}>
      {children}
    </Box>
  )
}

export default SectionWrapper
