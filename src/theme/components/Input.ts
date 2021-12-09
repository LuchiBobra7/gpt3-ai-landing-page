const Input = {
  sizes: {
    xl: {
      field: {
        borderRadius: 'md',
        fontWeight: 400,
        height: 20,
        px: 7,
        fontSize: 20,
      },
    },
  },
  variants: {
    filled: {
      field: {
        backgroundColor: 'blue.500',
        borderColor: 'blue.500',
        _hover: {
          backgroundColor: 'blue.600',
          borderColor: 'blue.600',
        },
        _focus: {
          backgroundColor: 'blue.700',
          borderColor: 'blue.700',
        },
      },
    },
  },
}

export default Input
