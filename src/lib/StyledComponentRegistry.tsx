'use client'

import { useState, ReactElement, ReactNode } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

interface PatchServerStyleSheet extends ServerStyleSheet {
    clearTag: () => void
}

export function StyledComponentsRegistry({
    children
}: {
    children: ReactNode
}) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        const styleSheetInstance =
            styledComponentsStyleSheet.instance as PatchServerStyleSheet
        styleSheetInstance.clearTag()
        return <>{styles}</>
    })

    if (typeof window !== 'undefined') return <>{children}</>

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children as ReactElement}
        </StyleSheetManager>
    )
}
