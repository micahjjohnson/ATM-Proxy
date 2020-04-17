import Link from "next/link";

const linkStyle = {
    border: '1px solid blue',
    position: 'fixed',
    width: '15rem',
    marginRight: 15,
    height: '100%',
    top: '58px',
    bottom: '0',
    left: '0'
}

const SideNav = () => (
    <div style={linkStyle}>
        <Link href="/">
            <a>Home</a>
        </Link><br/>
        <Link href="/">
            <a>Home</a>
        </Link><br/>
        <Link href="/">
            <a>Home</a>
        </Link><br/>
        <Link href="/">
            <a>Home</a>
        </Link><br/>
    </div>
);

export default SideNav;