import { VFC, ComponentProps } from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

type Props = ComponentProps<typeof Box> & {
  variant?: 'lighten' | 'outline'
}

const Card: VFC<Props> = (props) => {
  const { variant, children, ...rest } = props
  const styles = useStyleConfig('Card', { variant })
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  )
}

export default Card
