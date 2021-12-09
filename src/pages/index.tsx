import Layout from 'components/layout'
import BrandSection from 'components/sections/brand'
import AboutSection from 'components/sections/about'
import FeaturesSection from 'components/sections/features'
import PossibilitiesSection from 'components/sections/possibilities'
import BlogSection from 'components/sections/blog'

const HomePage = () => {
  return (
    <Layout>
      <BrandSection />
      <AboutSection />
      <FeaturesSection />
      <PossibilitiesSection />
      <BlogSection />
    </Layout>
  )
}

export default HomePage
