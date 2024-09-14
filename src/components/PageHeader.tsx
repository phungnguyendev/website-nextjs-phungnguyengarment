'use client'

import { Flex, Typography } from 'antd'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { HTMLAttributes } from 'react'
import { cn } from '~/utils/helpers'

interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  imageURL: string | StaticImport
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ imageURL, title, ...props }) => {
  const { pathname } = useRouter()

  return (
    <>
      <Flex {...props} className={cn('relative h-[180px] w-full md:h-[320px]', props.className)}>
        <Flex className='z-0 h-full w-full before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-black before:bg-opacity-[65%] before:content-[""]'>
          <Image src={imageURL} alt='image-head' width={900} height={900} className='h-full w-full object-cover ' />
        </Flex>
        <Flex gap={20} vertical className='absolute z-10 h-full p-5 md:p-10' justify='center' align='center'>
          <Typography.Text className='font-roboto-condensed text-3xl font-semibold text-white'>{title}</Typography.Text>
          {/* <Breadcrumb
            className='flex w-full justify-start'
            separator={<span className='text-white'>/</span>}
            items={breadcrumbs.map((breadcrumb) => {
              return {
                title:
                  pathname === breadcrumb.match.pathname ? (
                    <Typography.Text className='text-white'>{breadcrumb.breadcrumb}</Typography.Text>
                  ) : (
                    <Link href={breadcrumb.match.pathname}>
                      <Typography.Text className='text-white'>{breadcrumb.breadcrumb}</Typography.Text>
                    </Link>
                  )
              }
            })}
          /> */}
        </Flex>
      </Flex>
    </>
  )
}

export default PageHeader
