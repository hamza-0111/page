import React from "react";

function Header() {
  return (
    <header className="new-site-header">
      <div className="header-top">
        <div className="container">
          <div className="ht-inner">
            <div className="ht-left">
              <ul>
                <li>
                  <label>T </label> $601.25
                  <span className="down">&#9662; 24.43%</span>
                </li>
                <li>
                  <label>24hr Volume</label>$27.97m
                </li>
                <li>
                  <label>Market Cap.</label>$3.85b
                </li>
              </ul>
            </div>
            <div className="ht-right">
              <div className="ht-search">
                <form action="#" method="get">
                  <input type="text" name="query" id="query" placeholder="Search by Address / Validator /Txn Hash" />
                  <input type="submit" value="" />
                </form>
              </div>
              <div className="ht-btns">
              <a href="#" target="_blank" className="btn"><img src="images/corcel-logo.png" alt="Corcel Logo" /></a>
              <a href="#" className="btn">
                    BUY    
                  </a>
                <a href="#" target="_blank" className="btn">STAKE</a>
                <div className="menu-dropdown">
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="hb-inner">
            <div className="logo">
            
                   <span alt="Taostats">Taostats</span>

            </div>
            <div className="menuBtn">
              <span></span><span></span><span></span>
            </div>
            <div className="main-menu">
              <div className="container">
               
                <nav>
                  <ul>
                    <li className="menu-item-has-children">
                      <a href="#">Subnets</a>
                      <ul className="megaMenu subMenu">
                        <li>
                          <div className="menu-col-box">
                            
                
                          </div>
                          <ul>
                            <li><a href="#">Root</a></li>
                            <li><a href="#">Text Prompting</a></li>
                            <li><a href="#">Omron</a></li>
                            <li><a href="#">MyShell TTS</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    
                    <li className="menu-item-has-children">
                      <a href="#">Validators</a>
                      <ul className="subMenu">
                        <li><a href="#">Verified Validators</a></li>
                        <li><a href="#">Delegation/Staking</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Developers</a>
                      <ul className="subMenu">
                        <li><a href="#">Corcel</a></li>
                        <li><a href="#">Taostats API</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Resources</a>
                      <ul className="subMenu">
                        <li className=""><a href="#">Links</a></li>
                        <li className=""><a href="#">Media</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
