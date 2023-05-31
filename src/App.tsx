import React from 'react';
import './App.css';
import { Navbar, menuLinks } from './components/navbar';
import Logotype from './components/logotype';

function App() {

  const renderMenu = menuLinks.map( (item) => (
    <li className="nav-item" key={item.id}>
      <a className="nav-link" href={`${item.link}`}>{item.name}</a>
    </li>
  ) )

  return (
    <div className="App">
      <header className="App-header">
        <Logotype />
        <Navbar className=""/>
      </header>

      <div className="main">
        <div className='main-info'>
          <h1>ТАЙНЫЙ ПОКУПАТЕЛЬ</h1>
          <h3>Твоя возможность оценивать заведения города!</h3>
          <p>Главная цель путеводителя - выделить те заведения в городе,
            которые топят за качество, сервис и дорожат своими клиентами.
          </p>

          <button className="btn btn-primary">
            Подробнее
          </button>
        </div>
        
      </div>

      <div className="description">
        <h3>3RAZA - это путеводитель проверенных заведений 
        позволяющий отделить из общего списка те заведения, которые дорожат своими гостями
        и держат планку качества на высоком уровне.</h3>
      </div>

      <div className="shopper" >
        <div className='header-block'>
          <h2>
            Зачем становиться
            <strong> тайным покупателем?</strong>
          </h2>
        </div>

        <div className='d-flex col-12 justify-content-between'>

          <div className='shopper-block'>
            <img src={process.env.PUBLIC_URL + "/images/landing-heads.png"} alt="Ощути себя в новой роли" />
            <h3>Ощути себя в новой роли</h3>
            <p>ты сможешь оценить его по многим параметрам и помочь остальным в выборе лучшего</p>
          </div>

          <div className='shopper-block'>
            <img src={process.env.PUBLIC_URL + "/images/landing-money.png"} alt="Получи кэшбэк 70%" />
            <h3>Получи кэшбэк 70%</h3>
            <p>от среднего чека, посетив заведение и написав отзыв</p>
          </div>

          <div className='shopper-block'>
            <img src={process.env.PUBLIC_URL + "/images/landing-rocket.png"} alt="Эксклюзивные скидки" />
            <h3>Эксклюзивные скидки</h3>
            <p>для тайных покупателей от различных заведений города</p>
          </div>
        </div>
      </div>

      <div className="register" >
        <div className='header-block'>
          <h2>
            Как стать тайным покупателем?
            <strong>Регистрация</strong>
          </h2>

          <button className="btn btn-primary">
            Начать
          </button>
        </div>

        <div className='d-flex col-12 justify-content-between'>

          <div className='register-block'>
            <p>1. Зайди на <a href="https://3raza.com" rel="noreferrer" target="_blank">3raza.com</a>
              <br />
              Выбирай "Войти"
            </p>

            <div className='register-block-start'>
              <img src={process.env.PUBLIC_URL + "/images/landing-startpage.png"} alt="Главная страница 3RAZA" />
            </div>
          </div>

          <div className='register-block '>
            <p>2. Жми "Зарегистрироваться".
              <br />
              Выбирай "Пользователь".
            </p>

            <div className='register-block-center'>
              <img src={process.env.PUBLIC_URL + "/images/landing-register.png"} alt="Регистрация на сайте" />
            </div>
          </div>

          <div className='register-block'>
            <p>3. Смотри видео с инструкцией.
              <br />
              Введи данные и следуй
              <br />
              инструкции на сайте.
            </p>

            <div className='register-block-end'>
              <img src={process.env.PUBLIC_URL + "/images/landing-video.png"} alt="Видео с инструкцией" />
            </div>
          </div>

        </div>

      </div>

      <div className="commands">
        <div className='commands-info'>
          <h1>Наша команда</h1>
          <h3>Если остались вопросы</h3>
          <p>Всегда поможем разобраться.</p>

          <button className="btn btn-primary">
            Telegram
          </button>
        </div>
        
      </div>

      <footer>
        <ul>
          {renderMenu}
        </ul>
      </footer>
    </div>
  );
}

export default App;
