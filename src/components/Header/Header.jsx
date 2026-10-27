import "./Header.scss";

export default function Header({onToggleMenu}) {
    return (
        <header className="header">
            <nav className="nav">
                <a className="logo" href="#top">
                    EB <span style={{ color: "var(--ash)" }}>JEWELLERY</span>
                </a>
                <div className="navLinks">
                    <a href="#catalogue">Catalogue</a>
                    <a href="#wholesale">Wholesale</a>
                    <a href="#clients">Clients</a>
                    <a href="#booking">Contact</a>
                </div>
                <div className="navCta">
                    <a href="#booking" className="btn ghost-on-black" style={{ padding: "12px 22px", fontSize: "12px" }}>
                        Book appointment
                    </a>
                    <button className="burger" aria-label="Open menu" onClick={onToggleMenu}>
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>
        </header>
    )
}