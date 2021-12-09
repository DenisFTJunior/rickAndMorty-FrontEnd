import { css } from '@emotion/css'
import React from 'react'

import Panel from "../Panel"
import { PanelProps } from "./_schema/ModalPanel"

const style = css(`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:#000070;
`)


const ModalPanel = ({ width, children }: PanelProps) => {
    return (
        <div>
            <Panel width={width}>
                {children}
            </Panel>
        </div>

    )
}



export default ModalPanel