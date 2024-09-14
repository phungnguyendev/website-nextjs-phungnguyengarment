'use client'

import { Flex, Typography } from 'antd'
import Image from 'next/image'
import React, { HTMLAttributes } from 'react'
import useWindow from '~/components/hooks/useWindow'
import { HeroBanner } from '~/typing'
import { cn, imageValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'

export interface BannerCarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  data: HeroBanner
}

const BannerCarouselItem: React.FC<BannerCarouselItemProps> = ({ data, ...props }) => {
  const { width, height } = useWindow()
  return (
    <>
      <Flex className='relative h-[380px] sm:h-[480px] md:h-[580px] lg:h-[680px]'>
        <Image
          src={imageValidatorDisplay(data.imageUrl)}
          alt='image-banner'
          fill
          objectFit='cover'
          className='z-0 absolute'
        />
        <Flex
          gap={20}
          align='start'
          justify='end'
          className={cn(
            'absolute bottom-0 left-0 right-0 z-10 h-full w-full',
            'before:to-bg-opacity-[10%] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-gradient-to-t before:from-[var(--black-75)] before:content-[""]'
          )}
          vertical
        >
          <Flex className='p-10'>
            <Typography.Text
              className='w-full rounded-sm
                     font-roboto-condensed text-2xl font-semibold uppercase text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
            >
              {textValidatorDisplay(data.title)}
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default BannerCarouselItem
