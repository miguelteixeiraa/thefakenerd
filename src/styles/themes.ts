import 'styled-components'

export const defaultTheme = {
    colors: {
        regular: '#babaca'
    }
}

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
