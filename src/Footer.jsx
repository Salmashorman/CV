function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Salma.made with love ❤️.</p>
    </footer>
  );
}

export default Footer;