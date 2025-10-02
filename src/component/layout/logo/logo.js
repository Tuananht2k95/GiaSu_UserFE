import "./logo.scss"

export const Logo = () => {
    return(
        <section className="logo d-flex justify-content-between">
            <a href="/" className="">
                <img className="rounded-circle d-inline-block align-text-center" src="/images/growgreen-logo.jpg" alt="Gia Su"></img>
                Gia sư
            </a>
        </section>
    )
}