import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Solar Explorer</h1>
        <nav className="navigation" aria-label="Navegação principal">
          <a href="#planetas">Planetas</a>
          <a href="#missoes">Missões</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
