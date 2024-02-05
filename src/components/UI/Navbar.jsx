export default function Nav({ links }) {
    return (
        <nav className="navbar navbar-expanded-lg bg-secondary">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {links.map((link, index) => (
                        <li key={index} className="nav-item">
                            {link}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
