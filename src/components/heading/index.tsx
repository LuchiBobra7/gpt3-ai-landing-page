import { VFC, ComponentProps } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

type Props = ComponentProps<typeof Box> & {
  variant?: 'title' | 'subtitle'
}

const CustomHeading: VFC<Props> = (props) => {
  const { variant, children, ...rest } = props
  const styles = useStyleConfig('CustomHeading', { variant })
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}

export default CustomHeading
