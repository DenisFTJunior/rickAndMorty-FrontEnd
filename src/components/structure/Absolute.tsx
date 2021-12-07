import { css } from "@emotion/css";
import React from 'react'

const style = css(`position:absolute`)

const Absolute = ({ children }: { children: JSX.Element[] | JSX.Element }) => <div className={style}>{children}</div>

export default Absolute