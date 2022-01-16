import { useBreakpointValue } from '@chakra-ui/react'

const useBreakpoint = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true })
  const isXLargeScreen = useBreakpointValue({ base: false, xl: true })
  return { isLargeScreen, isXLargeScreen }
}

export default useBreakpoint
