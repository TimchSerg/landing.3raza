import React from "react";

export const menuLinks = [
  { id: 1, name: 'Главная', link: '#'},
  { id: 2, name: 'Регистрация', link: '#'},
  { id: 3,  name: 'Наша команда', link: '#'}
]

interface IProps {
  className?: string | null;
}

{/* <a className="nav-link active" aria-current="page" href="#">Главная</a> */}

export const Navbar: React.FC<IProps> = (props: IProps) => {
  const render = menuLinks.map( (item) => (
    <li className="nav-item" key={item.id}>
      <a className="nav-link" href={`${item.link}`}>{item.name}</a>
    </li>
  ) )

  return (
    <div className="navbar-main">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {render}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
