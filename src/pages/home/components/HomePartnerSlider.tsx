'use client'

import Image from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Partner } from '~/typing'
import { imageValidatorDisplay } from '~/utils/helpers'
import InfiniteScroll from './InfiniteScroll'

interface HomePartnerSliderProps {
  items: Partner[]
  loading?: boolean
  className?: string
}

const HomePartnerSlider: React.FC<HomePartnerSliderProps> = ({ items, ...props }) => {
  return (
    <>
      {!props.loading ? (
        <InfiniteScroll
          className={props.className}
          items={items}
          renderItem={(item) => {
            return (
              <Image
                src={imageValidatorDisplay(item.imageUrl)}
                alt='image-partner'
                width={900}
                height={900}
                className='object-contain grayscale transition-all duration-300 hover:grayscale-0'
              />
            )
          }}
        />
      ) : (
        <InfiniteScroll
          className={props.className}
          items={Array.from({ length: 5 })}
          renderItem={() => {
            return <Skeleton width={120} height={35} circle />
          }}
        />
      )}
    </>
  )
}

export default HomePartnerSlider
