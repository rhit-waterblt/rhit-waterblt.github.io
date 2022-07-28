import '../../styles/Links.scss'

export const Links = () => {
    return (
        <div className="social-buttons" style={{margin: "auto auto"}}>
            <a href="/resume" className="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/resume" className="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="/resume" className="social-buttons__button social-button social-button--snapchat" aria-label="SnapChat">
                <i className="fab fa-snapchat-ghost"></i>
            </a>
            <a href="/resume" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                <i className="fab fa-github"></i>
            </a>
            <a href="/resume" className="social-buttons__button social-button social-button--codepen" aria-label="CodePen">
                <i className="fab fa-codepen"></i>
            </a>
        </div>
    )
}