export type NavItem = {
  title: string
  href: string
  isExternal?: boolean
}

export type MenuItem = {
  title?: string
  navigation: NavItem[]
}
