import Link from 'next/link';
import { useState } from 'react';

const Header = () => {

  const [menuStatus, setMenuStatus] = useState(false);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  const handleScroll = () => {
    console.log("we scrolling")
  }

  return (
  <>
    <nav className="header" onScroll={()=> {handleScroll()}}>
      <button className={menuStatus ? 'active' : ''} onClick={()=>{toggleMenu()}}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </button>
      <section role="navigation" className={menuStatus ? 'mob-nav menu-open navigation': 'mob-nav menu-closed navigation'} >
        <Link href={"/"} as={"/"}>
          <a onClick={()=>{toggleMenu()}}>Home</a>
        </Link>
        <Link href={"/products"} as={"/products"}>
          <a onClick={()=>{toggleMenu()}}>Products</a>
        </Link>
        {/* <Link href={"/process"} as={"/process"}>
          <a onClick={()=>{toggleMenu()}}>Process</a>
        </Link>
        <Link href={"/faq"} as={"/faq"}>
          <a onClick={()=>{toggleMenu()}}>FAQ</a>
        </Link> */}
        <a onClick={()=>{toggleMenu()}} className="close-mob-nav">x</a>
      </section>
    </nav>
    <style jsx>{`
      .header {
        background-color: var(--header-background-colour);
        color: var(--header-background-colour);
        min-height: 80px;
        font-family: var(--main-font);
        position: fixed;
        width: 100%;
      }
      .header a {
        font-size: 1.5rem;
        text-decoration: none;
        color: var(--link-colour-main);
        color: #ebf5ec;
        color: var(--text-highlight);
        background-color: #f5efef00;
        transition: background-color 0.25s;
        margin: var(--header-footer-margin);
        border-radius: var(--very-soft-radius);
        padding: 2.5px 5px;
        font-family: var(--main-font);
      }
      .header a:hover {
        background-color: var(--link-hover-bck-main);
      }
      button {
        display: none;
      }
      .mobile-nav {
        display: none;
      }
      .close-mob-nav {
        display: none;   
      }
      .navigation {
        padding: 30px 10px;
      }

      @media screen and (max-width: 650px) {
        .header {
          height: 80px;
          width: 100%;
          border: none;
          display: inline-block;
          margin: 0;
          padding: 0;
          position: fixed;
          background-color: rgba(255, 251, 251, 0.00);
        }
        button {
          display: block;
          margin: 20px 10px;
          border: none;
          border-radius: 5px;
          background-color: rgba(255, 251, 251, 0.00);
          width: 40px;
          height: 40px;
          transition: background-color 0.25s;
        }
        button:hover {
           background-color: pink;
         }
        button.active .menu-line {
          border: solid 2px #ce9393;
        }
        .menu-line {
          border: solid 2px var(--text-highlight);
          border-radius: 10px;
          width: 90%;
          margin: 5px auto;
        }
        .header a {
          display: block;
          width: 100%;
          background: pink;
        }
        .mob-nav {
          display: block;
          position: absolute;
          width: 100%;
          border: solid green 2px;
          text-align: center;
          top: 0;
          margin: 0 auto;
          transition: transform 0.5s, opacity 0.25s;
          background: pink;
          height: 200px;
          padding-top: 80px;
        } 
        .menu-open {
          transform: translate(0, 000px);
          opacity: 1;
        }
        .menu-closed {
          transform: translate(0, -300px);
          opacity: 0;
        }
        .close-mob-nav {
          display: block;
        }
      }
    `}</style>
  </>
);
    }

export default Header;