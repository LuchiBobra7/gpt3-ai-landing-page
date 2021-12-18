import { Box } from '@chakra-ui/react'
import Image from 'components/image'
import Tilt from 'react-parallax-tilt'

const IMAGES_PATH = '/assets/images/feature'

const images = [
  {
    src: `ellipsis.png`,
    wrapperStyles: {
      top: '2%',
      left: '2%',
      w: 327,
      h: 326,
      transform: 'translateZ(12px) scale(1.01) perspective(1600px)',
    },
  },
  {
    src: `bg.png`,
    wrapperStyles: {
      bottom: '0',
      left: 0,
      w: 368,
      h: 403,
      transform: 'translateZ(24px) scale(1.01) perspective(600px)',
    },
  },
  {
    src: `message.png`,
    wrapperStyles: {
      top: '5%',
      left: '3%',
      w: 75,
      h: 75,
      transform: 'translateZ(26px) perspective(900px)',
    },
  },
  {
    src: `category.png`,
    wrapperStyles: {
      top: '17%',
      right: '17%',
      w: 174,
      h: 75,
      transform: 'translateZ(40px) perspective(1900px)',
    },
  },
  {
    src: `woman.png`,
    wrapperStyles: {
      bottom: '0',
      left: 0,
      w: 475,
      h: 544,
      transform: 'translateZ(80px) perspective(500px)',
    },
  },
]

const ParallaxImage = () => {
  return (
    <Tilt
      className="parallax-feature-img"
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      transitionSpeed={1500}
      scale={1.0}
      //trackOnWindow={true}
      style={{
        transformStyle: 'preserve-3d',
        width: '546px',
        height: '607px',
      }}
    >
      {images.map((item, i) => (
        <Box key={i} position="absolute" __css={item.wrapperStyles}>
          <Image
            layout="fill"
            objectFit="contain"
            src={`${IMAGES_PATH}/${item.src}`}
            alt="feature-image"
            quality={100}
          />
        </Box>
      ))}
    </Tilt>
  )
}

export default ParallaxImage
