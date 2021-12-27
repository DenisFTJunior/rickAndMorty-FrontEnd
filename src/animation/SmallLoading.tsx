import { css, keyframes } from "@emotion/css"
import React from "react"

interface StyleProps {
    color?: string
}

interface Props extends StyleProps {

}

const animItem = keyframes(`
    0% {
        transform:translatey(0px);
    }
    50% {
        transform:translatey(-50px);
    }
    100% {
        transform:translatey(0px);
    }
`)

const generateStyle = ({ color }: StyleProps) => css(`
    position:absolute;
    top:2.5rem;
    left:0;
    display:flex;
    color:white;
    justify-content: center;
    align-items: center;
    margin:1rem;

    & .ball {
        background-color: ${color || 'white;'} 
        width: 20px;
        height: 20px;
        margin: 5px;
        animation: ${animItem} 0.5s linear infinite;
        border-radius: 100px;
    }

    & .ball:nth-child(odd){
        animation-delay: 0.25s;
    }
`)

const SmallLoading = ({ color }: Props) => {
    const style = generateStyle({ color })
    return (
        <div className={style}>
            <div className="ball" />
            <div className="ball" />
            <div className="ball" />
        </div>
    )
}

export default SmallLoading