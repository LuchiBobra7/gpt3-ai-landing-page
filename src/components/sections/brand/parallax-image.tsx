import { Box } from '@chakra-ui/react'
import Image from 'components/image'
import Tilt from 'react-parallax-tilt'

const ParallaxImage = () => {
  return (
    <Tilt
      className="parallax-effect-img"
      tiltMaxAngleX={20}
      tiltMaxAngleY={10}
      perspective={600}
      transitionSpeed={1500}
      scale={1.02}
      trackOnWindow={true}
    >
      <Image
        src="/assets/images/brand_bg.png"
        objectFit="contain"
        quality={100}
        width={669}
        height={702}
        transform="perspective(1000px)"
      />
      <Box
        top="15%"
        position="absolute"
        left="25%"
        transform="translateZ(70px) scale(0.9)"
      >
        <Image
          src="/assets/images/brand.png"
          objectFit="contain"
          width={344}
          height={490}
        />
      </Box>
      <Box
        top="15%"
        position="absolute"
        left="25%"
        transform="translateZ(90px) scale(1.03)"
      >
        <Image
          src="/assets/images/brand_selection.png"
          objectFit="contain"
          width={344}
          height={490}
        />
      </Box>
    </Tilt>
  )
}

export default ParallaxImage
