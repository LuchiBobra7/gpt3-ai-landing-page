const Card = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
  },

  variants: {
    lighten: {
      bg: 'blue.500',
    },
    outline: {
      padding: 6,
      borderRadius: 'base',
      border: '1px solid blackAlpha.100',
    },
  },

  defaultProps: {
    variant: 'lighten',
  },
}

export default Card
