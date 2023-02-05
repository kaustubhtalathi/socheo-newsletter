function Footer() {
    const footerYear = new Date().getFullYear();
    return (
        <footer className="footer p-10 bg-secondary text-neutral-content footer-center">
            <div>
                <p>coming soon...</p>
                <p>A platform to sell digital products, socialize and build a community.</p>
                <p>Copyright &copy; {footerYear} All right reserved</p>
            </div>
        </footer>
    );
}

export default Footer;