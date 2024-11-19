import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    className?: string
    children: React.ReactNode
}

const Box1 = (props: Props) => {
    return (
        <section className={twMerge("p-4 bg-neutral-700/45 w-fit h-fit rounded-md", props.className)}>
            {props.children}
        </section>
    )
}

export default Box1
