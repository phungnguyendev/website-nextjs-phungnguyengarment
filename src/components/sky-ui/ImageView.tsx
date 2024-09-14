import { Skeleton } from 'antd'
import Image, { ImageProps } from 'next/image'
import React from 'react'
import { cn } from '~/utils/helpers'

export interface ImageViewProps extends ImageProps {}

const ImageView: React.FC<ImageViewProps> = ({ ...props }) => {
  return (
    <>
      {props.src ? (
        <Image
          {...props}
          alt={props.alt ?? 'image-view'}
          width={900}
          height={900}
          className={cn('h-full w-full', props.className)}
        />
      ) : (
        <Skeleton.Image active />
      )}
    </>
  )
}

export default ImageView
