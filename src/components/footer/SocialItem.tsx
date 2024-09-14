'use client'

import { Flex } from 'antd'
import Link, { LinkProps } from 'next/link'
import React from 'react'

export interface SocialItemProps extends LinkProps {
  icon: React.ReactNode
}

const SocialItem: React.FC<SocialItemProps> = ({ icon, ...props }) => {
  return (
    <>
      <Link {...props} href={props.href}>
        <Flex className='h-fit rounded-full bg-white bg-opacity-10 p-2 text-muted-foreground transition-colors duration-300 hover:bg-opacity-25'>
          {icon}
        </Flex>
      </Link>
    </>
  )
}

export default SocialItem
