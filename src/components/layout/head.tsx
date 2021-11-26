import HeadComponent from 'next/head'
import { SITE_NAME } from 'constants/main'
import { HeadProps } from 'types/head'

const Head = ({ title, description }: HeadProps) => {
  return (
    <HeadComponent>
      <title>
        {title || SITE_NAME}
        {description && ` | ${description}`}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </HeadComponent>
  )
}

export default Head
