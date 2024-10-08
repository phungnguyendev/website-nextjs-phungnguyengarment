// theme/themeConfig.ts
import type { ThemeConfig } from 'antd'

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#ff6b00'
  },
  components: {
    Layout: {
      siderBg: '#ffffff',
      headerBg: 'var(--background)'
    },
    Button: {
      defaultColor: '#000000',
      textHoverBg: '#ffffff'
    },
    Menu: {
      itemActiveBg: '#fff',
      itemSelectedBg: '#ff6b00',
      itemSelectedColor: '#fff',
      itemBorderRadius: 6
    }
  }
}

export default theme
