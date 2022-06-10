import "../styles/Navbar.scss"


const SideMenuIcon = ({ toggle }) => {
    // Total height = 2*edgeMargin + 3*height + 2*barGap = 2*12 + 3*12 + 2*20
    const height = 8
    const width = 100
    const edgeMargin = 12
    const barGap = 20
    const borderRadius = 4

    return (
        <svg onClick={toggle} id="menu-icon" viewBox="0 0 100 100" width="40" fill="#eee" height="40">
            <rect y={edgeMargin} width={width} height={height} rx={borderRadius} />
            <rect y={edgeMargin + height + barGap} width={width} height={height} rx={borderRadius} />
            <rect y={edgeMargin + 2*height + 2*barGap} width={width} height={height} rx={borderRadius} />
        </svg>
    )
}


export default SideMenuIcon
