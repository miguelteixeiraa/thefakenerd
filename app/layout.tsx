'use client'

import { ReactNode } from 'react'
import { StyledComponentsRegistry } from '@/lib/StyledComponentRegistry'
import { GlobalStyles } from '@/styles/GlobalStyles.css'
import { defaultTheme } from '@/styles/themes'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <GlobalStyles theme={defaultTheme} />
            <html>
                <head>
                    <title>The Fake Nerd</title>
                </head>
                <body>
                    <StyledComponentsRegistry>
                        {children}
                    </StyledComponentsRegistry>
                </body>
            </html>
        </>
    )
}
