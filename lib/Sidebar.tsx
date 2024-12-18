import { css } from "@/styled-system/css"
import { ReactNode } from "react"

export default function Sidebar({ children }: { children: ReactNode }) {
    return (
        <div className={container}>
            <div className={sidebarContainer}>

            </div>
            <div className={childrenContainer}>
                {children}
            </div>
        </div>
    )
}

const sidebarContainer = css({
    height: '100%',
    width: '300px',
    display: 'flex',
    backgroundColor: '#000000'
})

const container = css({
    height: '100%',
    width: '100vw',
    display: 'flex'
})

const childrenContainer = css({
    flex: 1
}) 