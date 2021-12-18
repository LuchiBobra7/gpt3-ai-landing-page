import { HStack, AvatarGroup, Avatar, Tooltip } from '@chakra-ui/react'
import { userItems } from './users-data'

const Clients = () => {
  const TooltipAvatar: typeof Avatar = (props: any) => (
    <Tooltip label={props.name} hasArrow>
      <Avatar {...props} />
    </Tooltip>
  )
  return (
    <HStack spacing={4}>
      <AvatarGroup size="sm" max={6}>
        {userItems.map((item, i) => (
          <TooltipAvatar
            key={i}
            name={item.name}
            src={item.image}
            cursor="pointer"
          />
        ))}
      </AvatarGroup>
    </HStack>
  )
}

export default Clients
