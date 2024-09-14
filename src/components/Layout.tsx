import { Layout as AntLayout, Flex } from 'antd'
import React, { HTMLAttributes, useEffect } from 'react'
import { cn } from '~/utils/helpers'
import Footer from './footer/Footer'
import useWindow from './hooks/useWindow'
import Navbar from './Navbar'

const { Content } = AntLayout

interface Props extends HTMLAttributes<HTMLElement> {
  header?: React.ReactNode
}

const Layout: React.FC<Props> = ({ header, children, className }) => {
  const { hidden, offsetY } = useWindow()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <AntLayout className='w-full bg-background'>
        <Navbar
          className={cn('sticky left-0 right-0 top-0 z-[999] transition-transform duration-200', {
            '-translate-y-full': hidden && offsetY > 70
          })}
        />
        <Content className={'m-0 min-h-[900px] p-0 transition-all duration-200'}>
          <Flex vertical className={cn('w-full gap-[20px] sm:gap-[40px]', className)}>
            {header}
            <Flex vertical className='w-full gap-[160px]'>
              {children}
            </Flex>
          </Flex>
        </Content>
        <Footer />
      </AntLayout>
    </>
  )
}

export default Layout
