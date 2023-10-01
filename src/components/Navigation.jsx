import { NavLink } from "react-router-dom";

export default function Navigation() {

    return (
        <nav style={{ display: "flex", width: "100%", justifyContent: "flex-end", gap: "10px" }}>
            <NavLink to="/">Hjem</NavLink>
            <NavLink to="/">Produkter</NavLink>
            <NavLink to="/">Plejeguide</NavLink>
            <NavLink to="/">Om os</NavLink>
            <NavLink to="/">Mine Tider</NavLink>
        </nav>
    )
}