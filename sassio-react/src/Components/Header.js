function Header() {
  return (
    <header className="header row" id="top">
      <div className="col logo-col">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="col navigation-col">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact Us</a>
        <a href="#blog">Blog</a>
      </div>
      <div className="col btn-primary">
        <button className="btn-white">Join</button>
        <button className="btn-black">Get the App</button>
      </div>
    </header>
  );
}

export default Header;
