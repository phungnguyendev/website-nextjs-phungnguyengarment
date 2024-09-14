import { CaretDownOutlined } from '@ant-design/icons'
import { Flex, Select } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { Metadata } from 'next'
import { a22 } from '~/assets'
import Layout from '~/components/Layout'
import PageHeader from '~/components/PageHeader'
import Section from '~/components/sky-ui/Section/Section'
import SkyTable from '~/components/sky-ui/SkyTable/SkyTable'
import SkyTableTypography from '~/components/sky-ui/SkyTable/SkyTableTypography'
import { numberValidatorDisplay, textValidatorDisplay } from '~/utils/helpers'
import { useCareerViewModel } from './hooks/useCareerViewModel'
import { RecruitmentPostTableDataType } from './type'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tuyển Dụng - Phụng Nguyên Garment | Gia Nhập Đội Ngũ Chúng Tôi',
  description:
    'Khám phá cơ hội nghề nghiệp tại Phụng Nguyên Garment. Xem các vị trí tuyển dụng hiện có và gia nhập đội ngũ làm việc chuyên nghiệp trong ngành may mặc.',
  keywords: 'tuyển dụng, cơ hội nghề nghiệp, Phụng Nguyên Garment, việc làm may mặc, công việc thời trang'
}

const CareerPage = () => {
  const viewModel = useCareerViewModel()

  const columns: ColumnsType<RecruitmentPostTableDataType> = [
    {
      title: 'Vị trí tuyển dụng',
      dataIndex: 'title',
      width: '20%',
      render: (_value: any, record: RecruitmentPostTableDataType) => {
        return <SkyTableTypography>{textValidatorDisplay(record.jobSector?.title)}</SkyTableTypography>
      }
    },
    {
      title: 'Số lượng',
      dataIndex: 'imageUrl',
      width: '10%',
      responsive: ['sm'],
      render: (_value: any, record: RecruitmentPostTableDataType) => {
        return <SkyTableTypography>{numberValidatorDisplay(record.quantity)}</SkyTableTypography>
      }
    },
    {
      title: 'Nơi làm việc',
      dataIndex: 'workingPlace',
      width: '20%',
      responsive: ['sm'],
      render: (_value: any, record: RecruitmentPostTableDataType) => {
        return <SkyTableTypography>{textValidatorDisplay(record.workingPlace)}</SkyTableTypography>
      }
    },
    {
      title: '',
      dataIndex: '',
      width: '10%',
      align: 'center',
      render: (_value: any, record: RecruitmentPostTableDataType) => {
        return <Link href={`${record.routeTitle}`}>Xem chi tiết</Link>
      }
    }
  ]

  return (
    <>
      <Layout header={<PageHeader imageURL={a22} title='About PHUNG NGUYEN RECRUITMENT' />}>
        <Section
          titleProps={{
            title: 'Tuyển dụng',
            position: 'center'
          }}
          subTitleProps={{
            title: 'Cơ Hội Nghề Nghiệp',
            position: 'center'
          }}
        >
          <Flex vertical gap={20} className='bg-white p-5'>
            <Flex gap={20}>
              <Select
                defaultValue={-1}
                className='w-full sm:w-[350px]'
                onChange={viewModel.handleJobSectorChange}
                suffixIcon={<CaretDownOutlined />}
                options={viewModel.jobSectors.map((item) => {
                  return {
                    value: item.id,
                    label: textValidatorDisplay(item.title)
                  }
                })}
              />
            </Flex>
            <SkyTable
              dataSource={viewModel.table.dataSource}
              setDataSource={viewModel.table.setDataSource}
              tableColumns={{
                columns: columns,
                actionColumn: undefined,
                showAction: undefined
              }}
            />
          </Flex>
        </Section>
      </Layout>
    </>
  )
}

export default CareerPage
