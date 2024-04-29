import React from "react";
function Footer() {
  return (
    <footer className="new-site-footer">
      <div className="container">
        <div className="footer-cover">
          <div className="footer-top">
            <div className="ft-left">
              <div className="logo-tegline">
                <img src="images/f-logo.png" alt="Taostats" /> Taostats
              </div>
              <p>τaostats is a Block Explorer and Analytics Platform for Bittensor, a decentralized machine learning network.</p>
              <p>This site is not affiliated with the Opentensor Foundation.</p>
              <p>The content of this website is provided for information purposes only.
                <br />No claim is made as to the accuracy or currency of the content on this site at any time.
              </p>
              <p>τaosτaτs is created and maintained by <a href="#" target="_blank">mogmachine</a>. We hope you found it helpful, if you have any suggestions or issues please contact us at <a href="#"><span className="__cf_email__" data-cfemail="cabeaba5b9beabbeb98aa7a5ada7aba9a2a3a4afe4a9a5a7">taostats@mogmachine.com </span></a>.</p>
            </div>
            <div className="ft-right">
             
              <div className="f-col">
                <h5>Blockchain</h5>
                <ul>
                  <li><a href="#">Blocks</a></li>
                  <li><a href="#">Transfers</a></li>
                  <li><a href="#">Delegation</a></li>
                  <li><a href="#">Validators</a></li>
                  <li><a href="#">Accounts</a></li>
                  <li><a href="#">Subnets</a></li>
                  <li><a href="#">Tokenomics</a></li>
                  <li><a href="#">Nakamoto</a></li>
                  <li><a href="#">Kusanagi</a></li>
                </ul>
              </div>
              <div className="f-col">
                <h5>Validators</h5>
                <ul>
                  <li><a href="#">Verified Validators</a></li>
                  <li><a href="#">Delegation/Staking</a></li>
                </ul>
                <h5>Resources</h5>
                <ul>
                  <li><a href="#">Links</a></li>
                  <li><a href="#">Media</a></li>
                </ul>
              </div>
              <div className="f-col">
                <h5>Apps</h5>
                <ul>
                  <li><a href="#">Corcel Chat</a></li>
                  <li><a href="#">Corcel Image Studio</a></li>
                </ul>
                <h5>Developers</h5>
                <ul>
                  <li><a href="#">Corcel API</a></li>
                  <li><a href="#">Taostats API</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">
              <p>Taostats &copy;2024.</p>
            </div>
            <p>Taostats is funded by public delegation. Support us by delegating <a href="#" style={{ color: "#14dec2" }}>stake to the taostats.io validator</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
