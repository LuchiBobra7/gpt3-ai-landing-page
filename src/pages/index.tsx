import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { VStack } from '@chakra-ui/react'
import Layout from 'components/layout'
import BrandSection from 'components/sections/brand'
import AboutSection from 'components/sections/about'
import FeaturesSection from 'components/sections/features'
import PossibilitiesSection from 'components/sections/possibilities'
import BlogSection from 'components/sections/blog'

const HomePage = () => {
  const [spinnerLoading, setSpinnerLoading] = useState(true)

  useEffect(() => {
    if (spinnerLoading) {
      setTimeout(() => {
        setSpinnerLoading(false)
      }, 1500)
    }
  }, [spinnerLoading])

  return (
    <React.Fragment>
      {spinnerLoading ? (
        <VStack
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgImage="radial-gradient(circle at 25% 10%, rgb(0, 40, 83) 0px, #040c18 50%)"
        >
          <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            visible={spinnerLoading} //3 secs
          />
        </VStack>
      ) : (
        <Layout>
          <BrandSection />
          <AboutSection />
          <FeaturesSection />
          <PossibilitiesSection />
          <BlogSection />
        </Layout>
      )}
    </React.Fragment>
  )
}

export default HomePage
