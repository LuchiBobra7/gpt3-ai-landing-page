import { theme as baseTheme } from '@chakra-ui/react'

export const CustomHeading = {
  baseStyle: {
    ...baseTheme.components.Heading.baseStyle,
    fontWeight: 800,
    lineHeight: 1.2,
  },
  defaultProps: {
    variant: 'title',
  },
  variants: {
    title: {
      bgImage: 'linear-gradient(to right, #AE67FA, #F49867)',
      bgClip: 'text',
      fontSize: {
        sm: '3xl',
        md: '4xl',
        lg: '6xl',
      },
    },
    subtitle: {
      fontSize: 'xl',
      _before: {
        content: '""',
        display: 'block',
        height: '3px',
        width: '38px',

        mb: '0.25rem',
        backgroundImage:
          'linear-gradient(103.22deg,#ae67fa -13.86%,#f49867 99.55%)',
      },
    },
  },
}

export const Heading = {
  baseStyle: {
    fontWeight: '800',
  },
}
