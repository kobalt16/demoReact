import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <a>News</a>
        </div>
        <div className={s.item}>
          <a>About us</a>
        </div>
        <div className={s.item}>
          <a>Project</a>
        </div>
        <div className={s.item}>
          <a>contact</a>
        </div>
      </nav>
  );
}

export default Navbar;