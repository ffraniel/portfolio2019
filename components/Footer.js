import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <Link 
      href={"/"} 
      as={"/"}>
      <a>Home</a>
    </Link>
    <Link 
      href={"/products"} 
      as={"/products"}>
      <a>Products</a>
    </Link>
    <Link 
      href={"/process"} 
      as={"/process"}>
      <a>Process</a>
    </Link>
    <Link 
      href={"/faq"} 
      as={"/faq"}>
      <a>FAQ</a>
    </Link>
    <style jsx>{`
      .footer {
        width: 100%;
        background-color: #bfa3bf;
        height: 80px;
        display: flex;
      }
      .footer a {
        color: white;
        padding: 10px 30px;
        text-decoration: none;
        text-align: center;

        transition: background-color 0.25s;
        margin: var(--header-footer-margin);
      }
      .footer a:hover {
        background: var(--link-hover-bck-main);
      }
    `}</style>
  </footer>
);

export default Footer;