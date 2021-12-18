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
    primary: {
      bg: 'pomegranate.600',
      color: 'white',
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
      _after: {
        content: '""',
        zIndex: -1,
        backgroundColor: `whiteAlpha.300`,
        position: 'absolute',
        top: '-50%',
        bottom: '-50%',
        width: '4em',
        transform: 'translate3d(-400%, 0, 0) rotate(35deg)',
        filter: 'blur(9px)',
      },
      _hover: {
        bg: 'pomegranate.500',
        _disabled: {
          bg: 'pomegranate.500',
        },
        _after: {
          transition: 'transform 0.5s ease-in-out',
          transform: 'translate3d(300%, 0, 0) rotate(35deg)',
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
    },
    dark: {
      bg: 'black.2',
      color: 'white',
      _hover: {
        bg: 'black.1',
        _disabled: {
          bg: 'black.1',
        },
      },
      _active: {
        bg: 'black.2',
      },
      _focus: {
        bg: 'black.2',
      },
    },
    outline: {
      bg: 'transparent',
      color: 'white',
      borderWidth: 2,
      borderColor: 'white',
      position: 'relative',
      zIndex: 1,
      _before: {
        content: '""',
        zIndex: -1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        bgColor: 'whiteAlpha.50',
        transformOrigin: 'center top',
        transform: 'scaleY(0)',
        transition: 'transform 0.25s ease-in-out',
      },
      _hover: {
        bg: 'transparent',
        _before: {
          transformOrigin: 'center bottom',
          transform: 'scaleY(1)',
        },
        _disabled: {
          bg: 'transparent',
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
