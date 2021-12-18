import { Box } from '@chakra-ui/react'
import Image from 'components/image'
import Tilt from 'react-parallax-tilt'

const IMAGES_PATH = '/assets/images/brand'

const images = [
  {
    src: `bg_dots.png`,
    wrapperStyles: {
      top: 0,
      left: '10%',
      w: 535,
      h: 561,
      transform: 'perspective(600px)',
      opacity: 0.7,
    },
  },
  {
    src: `bg_geometry.png`,
    wrapperStyles: {
      top: 0,
      left: 0,
      w: 669,
      h: 502,
      opacity: 0.4,
    },
  },
  {
    src: `bg_lines.png`,
    wrapperStyles: {
      top: 0,
      left: 0,
      w: 669,
      h: 702,
      transform: 'translateZ(40px) perspective(500px)',
      opacity: 0.6,
    },
  },
  {
    src: `face.png`,
    wrapperStyles: {
      top: '15%',
      left: '25%',
      w: 344,
      h: 490,
      transform: 'translateZ(80px) perspective(900px)',
    },
  },
  {
    src: `selection.png`,
    wrapperStyles: {
      top: '13%',
      left: '21%',
      w: 399,
      h: 505,
      transform: 'translateZ(85px)  perspective(400px)',
    },
  },
]

const ParallaxImage = () => {
  return (
    <Tilt
      className="parallax-effect-img"
      tiltMaxAngleX={20}
      tiltMaxAngleY={10}
      transitionSpeed={1500}
      scale={1.02}
      trackOnWindow={true}
      style={{
        transformStyle: 'preserve-3d',
        width: '669px',
        height: '702px',
      }}
    >
      {images.map((item, i) => (
        <Box key={i} position="absolute" __css={item.wrapperStyles}>
          <Image
            layout="fill"
            src={`${IMAGES_PATH}/${item.src}`}
            alt="brand-image"
          />
        </Box>
      ))}
    </Tilt>
  )
}

export default ParallaxImage
