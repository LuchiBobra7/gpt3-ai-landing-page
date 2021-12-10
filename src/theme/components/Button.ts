import { Dict } from '@chakra-ui/utils'
const Button = {
  baseStyle: {
    fontWeight: 'medium',
    borderRadius: 'md',
    px: 12,
  },
  sizes: {
    lg: {
      fontWeight: 500,
      height: 16,
      px: 12,
    },
    xl: {
      height: 20,
      fontSize: 20,
    },
  },
  variants: {
    primary: (props: Dict) => ({
      bg: 'pomegranate.600',
      color: 'white',
      _hover: {
        bg: 'pomegranate.700',
        _disabled: {
          bg: 'pomegranate.700',
        },
      },
      _active: {
        bg: 'pomegranate.800',
      },
      _focus: {
        bg: 'pomegranate.700',
      },
      _disabled: {
        bg: 'orange.600',
      },
    }),
    dark: {
      bg: 'black.500',
      color: 'white',
      _hover: {
        bg: 'black.500',
        _disabled: {
          bg: 'black.400',
        },
      },
      _active: {
        bg: 'black.500',
      },
      _focus: {
        bg: 'black.500',
      },
      _disabled: {
        bg: 'black.500',
      },
    },
    outline: {
      bg: 'transparent',
      color: 'white',
      _hover: {
        bg: 'whiteAlpha.50',
        _disabled: {
          bg: 'whiteAlpha.50',
        },
      },
      _active: {
        bg: 'whiteAlpha.50',
      },
      _focus: {
        bg: 'whiteAlpha.50',
      },
      _disabled: {
        bg: 'whiteAlpha.50',
      },
    },
  },
}

export default Button
