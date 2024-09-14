'use client'

import Link from 'next/link'
import * as React from 'react'
import { RouteType } from '~/config/route.config'
import { cn } from '~/utils/helpers'

export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
  route: RouteType
}

const NavItem: React.FC<NavItemProps> = ({ route, ...props }) => {
  return (
    <>
      <Link
        {...props}
        href={route.path}
        className={cn('font-medium text-foreground hover:text-primary', props.className)}
      >
        {route.name}
      </Link>
    </>
  )
}

export default NavItem
