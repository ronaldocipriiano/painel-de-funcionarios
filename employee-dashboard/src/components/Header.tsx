import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        src={ logo }
        alt="Logo"
        className="logo"
      />
      <h1 className="title">Painel de Funcionários</h1>
    </header>
  );
};

export default Header;
