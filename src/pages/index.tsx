import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Preloader from 'components/preloader'
import Layout from 'components/layout'
import BrandSection from 'components/sections/brand'
import AboutSection from 'components/sections/about'
import FeaturesSection from 'components/sections/features'
import PossibilitiesSection from 'components/sections/possibilities'
import BlogSection from 'components/sections/blog'
import { getPosts } from 'data/index'
import { GetPostsQuery } from 'data/queries/__generated__/getPosts'

type Props = {
  posts: GetPostsQuery['posts']
}

const HomePage = ({ posts }: Props) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return 'Loading'
  }

  if (!posts) {
    return 'Error'
  }
  const [spinnerLoading, setSpinnerLoading] = useState(true)

  useEffect(() => {
    if (spinnerLoading) {
      setTimeout(() => {
        setSpinnerLoading(false)
      }, 1500)
    }
  }, [spinnerLoading])

  return (
    <>
      {spinnerLoading ? (
        <Preloader visible={spinnerLoading} />
      ) : (
        <Layout>
          <BrandSection />
          <AboutSection />
          <FeaturesSection />
          <PossibilitiesSection />
          <BlogSection posts={posts} />
        </Layout>
      )}
    </>
  )
}

HomePage.getInitialProps = async () => {
  const posts = (await getPosts()) ?? []
  return {
    posts,
    fallback: true,
  }
}

export default HomePage
