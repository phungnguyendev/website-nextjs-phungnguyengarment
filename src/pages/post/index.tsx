import { Flex } from 'antd'
import { Metadata } from 'next'
import { newsBg } from '~/assets'
import Layout from '~/components/Layout'
import PageHeader from '~/components/PageHeader'
import CarouselSlider from '~/components/sky-ui/CarouselSlider'
import NoPostContentFound from '~/components/sky-ui/NoPostContentFound'
import Section from '~/components/sky-ui/Section/Section'
import SwiperSlider from '~/components/sky-ui/SwiperSlider'
import { isValidArray } from '~/utils/helpers'
import PostHeroItem from './components/PostHeroItem'
import PostItem from './components/PostItem'
import usePostViewModel from './hooks/usePostViewModel'

export const metadata: Metadata = {
  title: 'Tin Tức & Sự Kiện - Phụng Nguyên Garment | Cập Nhật Mới Nhất',
  description:
    'Xem những tin tức và sự kiện mới nhất từ Phụng Nguyên Garment. Cập nhật thông tin về các sự kiện, chương trình khuyến mãi và tin tức nổi bật trong ngành may mặc.',
  keywords: 'tin tức, sự kiện, Phụng Nguyên Garment, tin tức thời trang, sự kiện may mặc'
}

const PostPage = () => {
  const viewModel = usePostViewModel()

  const latestPosts = viewModel.latestPosts(viewModel.posts)
  const recentPosts = viewModel.recentPosts(viewModel.posts)
  const olderPosts = viewModel.olderPosts(viewModel.posts)

  return (
    <>
      <Layout header={<PageHeader imageURL={newsBg} title='About PHUNG NGUYEN NEWS & EVENT' />}>
        <Flex vertical gap={40}>
          <Section
            titleProps={{
              title: 'Tin tức và Sự kiện',
              position: 'center'
            }}
            subTitleProps={{
              title: 'Tin tức & Sự kiện về Phụng Nguyên',
              position: 'center',
              size: 'middle'
            }}
            descriptionProps={{
              title: 'Các tin tức và sự kiện mới nhất của Phụng Nguyên trong thời gian vừa qua',
              position: 'center'
            }}
          />
          <Section
            titleProps={{
              title: 'Tin nổi bậc'
            }}
          >
            {isValidArray(latestPosts) ? (
              <CarouselSlider
                dataSource={latestPosts}
                render={(record) => {
                  return <PostHeroItem item={record} />
                }}
              />
            ) : (
              <NoPostContentFound />
            )}
          </Section>
          <Section
            titleProps={{
              title: 'Tin tức & Sự kiện gần đây'
            }}
          >
            {isValidArray(recentPosts) ? (
              <SwiperSlider
                dataSource={recentPosts}
                render={(record) => {
                  return <PostItem item={record} />
                }}
              />
            ) : (
              <NoPostContentFound />
            )}
          </Section>
          <Section
            titleProps={{
              title: 'Tin cũ hơn'
            }}
          >
            {isValidArray(olderPosts) ? (
              <SwiperSlider
                dataSource={olderPosts}
                render={(record) => {
                  return <PostItem item={record} />
                }}
              />
            ) : (
              <NoPostContentFound />
            )}
          </Section>
        </Flex>
      </Layout>
    </>
  )
}

export default PostPage
