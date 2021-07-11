import React from 'react'

import './SideDrawer.css'

export const SideDrawer = (props) => {
    return (
        <aside>
            {props.children}
        </aside>
    )
}
