import ThemeToogle from "../theme/ThemeToggle";

export default function TopNav() {
    return (<nav>
        <a href="/">Home</a>
        <ThemeToogle />
    </nav>);
}