import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface Props {
    to?: string
    onClick?: (e:any) => void
    className?: string

    children: React.ReactNode
}

const Button = (props: Props) => {
    if(props.to){
        return <>Hello</>
    }
    return <button className={twMerge("px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded-md cursor-pointer", props.className)} onClick={props.onClick}>{props.children}</button>
}

export default Button
