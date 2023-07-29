import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <a href='/'>
        <img src='/logo.png' alt='logo' width={140} height={100} />
      </a>
    </div>
  );
};

export default Header;