/// <reference types="react-scripts" />

declare module '*.bmp' {
    const src: string
    export default src
}

declare module '*.gif' {
    const src: string
    export default src
}

declare module '*.jpg' {
    const src: string
    export default src
}

declare module '*.jpeg' {
    const src: string
    export default src
}

declare module '*.png' {
    const src: string
    export default src
}

declare module '*.webp' {
    const src: string
    export default src
}

declare module '*.svg' {
    import * as React from 'react'

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >

    const src: string
    export default src
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module '*.module.scss'

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module 'react-draggable-tags' {
    export class DraggableAreasGroup {
        addArea: Function
    }
}

declare interface Window {
    __POWERED_BY_QIANKUN__: any
}
