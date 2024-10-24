import "./Footer.css"


function Footer(){
    return(
    <div className="footer">
        <div>
            <p>© 2023 LL</p>
            <p id="ft-contact">Contact Me:</p>
            <a  href="https://github.com/l-lavelle">
                <img className="github" src="/images/github.png" />
            </a>
            <a  href="https://www.linkedin.com/in/lauren-lavelle/">
                <img className="linkedIn" src="/images/linkedin.png" />
            </a>
        </div>
    </div>
  )
}

export default Footer;