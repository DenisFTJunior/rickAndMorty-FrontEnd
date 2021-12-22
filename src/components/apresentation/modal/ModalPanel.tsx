import { css } from '@emotion/css'
import React from 'react'

import Panel from "../Panel"
import { PanelProps } from "./_schema/ModalPanel"

const style = css(`
    position: relative;
    z-index:1001;
`)


const ModalPanel = ({ width, children }: PanelProps) => {
    return (
        <div className={style}>
            <Panel width={width}>
                {children}
            </Panel>
        </div>

    )
}



export default ModalPanel