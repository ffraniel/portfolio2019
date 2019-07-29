import Link from 'next/link';
import { useState } from 'react';

const Header = (props) => {
  const { headerSolid } = props;

  const [menuStatus, setMenuStatus] = useState(false);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
  <>
    <nav className="header" >
      <button className={menuStatus ? 'active' : ''} onClick={() => toggleMenu()} >
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
      <h1 className="header-title">Fran the Web Dev</h1>
    </nav>
    <style jsx>{`
      .header {
        transition: background-color 0.5s;
        // background: ${headerSolid ? 'rgb(185, 222, 155, 1)': 'rgba(0, 0, 0, 0)'};
        // background: ${headerSolid ? '#a6b8e4': 'rgba(0, 0, 0, 0)'};
        background: ${headerSolid ? 'white': 'rgba(0, 0, 0, 0)'};
        height: 50px;
        font-family: var(--main-font);
        position: fixed;
        width: 100%;
        display: flex;
        z-index: 2;
      }
      .header a {
        font-size: 1.5rem;
        text-decoration: none;
        // color: var(--link-colour-main);
        // color: ${headerSolid ? '#fde1e6': '#fde1e6'};
        color: ${headerSolid ? 'blue': '#fde1e6'};
        background-color: #f5efef00;
        transition: background-color 0.25s;
        margin: var(--header-margin);
        position: relative;
        line-height: 50px;
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
        width: 100%;
        display: grid;
        grid-template-columns: 0.25fr 0.25fr 1.5fr ;
        border: solid red 1px;
      }

      .navigation > * {
        border: solid green 2px;
      }

      .navigation a {
        text-align: center;
      }

      .header-title {
        display: block;
        line-height: 50px;
        margin: var(--header-margin);
        position: relative;
        padding: 2.5px 5px;
        font-size: 1.5rem;
        text-align: right;
      }

      @media screen and (max-width: 650px) {
        .header {
          height: 50px;
          width: 100%;
          border: none;
          display: inline-block;
          border:solid green 2px;
          margin: 0;
          padding: 0;
          position: fixed;
          background: ${headerSolid ? 'rgb(185, 222, 155, 0.98)': 'rgba(0, 0, 0, 0)'};
        }



        button {
          display: block;
          line-height: 50px;
          border: none;
          border-radius: 5px;
          background-color: rgba(255, 251, 251, 0.00);
          width: 50px;
          height: 50px;
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
          width: 60%;
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