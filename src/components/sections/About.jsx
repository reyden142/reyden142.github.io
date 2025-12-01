import RJLogo from "../../assets/svg/RJ.svg"; // Import RJ.svg

export default function About() {
    return (
        <section id="about" className="about-section">
            <p> About Section </p>
            <p>
                I’m a Licensed Electronics Engineer and passionate Software Developer who loves building systems
                that merge electronics, automation, and intelligent algorithms.
                My goal is to design meaningful solutions that create impact through technology.
            </p>
            <img
                src={RJLogo}
                alt="RJ Logo"
                className="about-logo"
            />
        </section>
    );
}
