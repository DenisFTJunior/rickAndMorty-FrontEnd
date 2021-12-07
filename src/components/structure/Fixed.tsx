import { css } from "@emotion/css";
import React from 'react'

const style = css(`position:fixed`)

const Fixed = ({ children }: { children: JSX.Element[] | JSX.Element }) => <div className={style}>{children}</div>

export default Fixed