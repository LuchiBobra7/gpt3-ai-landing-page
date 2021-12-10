import { ComponentProps } from 'react'
import Link from 'components/link'

type Props = ComponentProps<typeof Link> & {
  title?: string
  href?: string
}

const CTALink = ({
  title = 'Explore The Library',
  href = '/',
  ...props
}: Props) => {
  return (
    <Link
      href={href}
      fontWeight="500"
      color="pomegranate.400"
      fontSize={{ base: 'sm', lg: 'md' }}
      whiteSpace="nowrap"
      {...props}
    >
      {title}
    </Link>
  )
}

export default CTALink
