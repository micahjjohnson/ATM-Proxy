import Link from 'next/link';
import progressiveLogo from '../assets/images/progressiveLogo.png';

const linkStyle = {
    marginRight: 15
};

const imgStyle = {
    width: '138px'
};

const headerStyle = {
    padding: '20px',
    border: '1px solid #DDD',
    bottom: '0',
    left: '0',
    position: 'absolute',
    width: '100%',
    maxHeight: '18px'
};

const Header = () => (
    <div style={headerStyle}>
        <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
        height: 100%;
      }
      input:focus,
        select:focus,
        textarea:focus,
        button:focus {
            outline: none;
        }
      
    `}</style>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;