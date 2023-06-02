import React from 'react';
import './App.css';
import { NavbarComponent, menuLinks } from './components/navbar';
import Logotype from './components/logotype';

function App() {

  const renderMenu = menuLinks.map( (item) => (
    <li className="nav-item" key={item.id}>
      <a className="nav-link" href={`${item.link}`}>{item.name}</a>
    </li>
  ) )

  return (
    <div className="App">
      <header className="App-header padding-content">
        <Logotype />
        <NavbarComponent className=""/>
      </header>

      <div className="main col-12 margin-block padding-content" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/landing-gerl.png'})` 
      }}>
        <div className='main-info col-12 col-md-6'>
          <h1>ТАЙНЫЙ ПОКУПАТЕЛЬ</h1>
          <h3>Твоя возможность оценивать заведения города!</h3>
          <p>Главная цель путеводителя - выделить те заведения в городе,
            которые топят за качество, сервис и дорожат своими клиентами.
          </p>
          
          <a href={`#shopper`}>
            <button > Подробнее </button>
          </a>
          
        </div>
        
      </div>

      <div className='padding-content'>
        <div className="description margin-block">
          
          <h3>3RAZA - это путеводитель проверенных заведений позволяющий отделить <br />
          из общего списка те заведения, которые дорожат своими гостями и держат планку качества на высоком уровне.</h3>
          
        </div>
      </div>

      

      <div className="shopper margin-block pt-5 padding-content" id="shopper">
        <div className='header-block'>
          <h2>
            Зачем становиться
            <br />
            <strong> тайным покупателем?</strong>
          </h2>
        </div>

        <div className='d-flex col-12 justify-content-center justify-content-xl-between flex-wrap margin-block'>
          <div className='p-2 col-12 col-md-6 col-xl-4 d-flex justify-content-center'>
            <div className='shopper-block '>
              <img src={process.env.PUBLIC_URL + "/images/landing-heads.png"} alt="Ощути себя в новой роли" />
              <h3>Ощути себя в новой роли</h3>
              <p>ты сможешь оценить его по многим параметрам и помочь остальным в выборе лучшего</p>
            </div>
          </div>
          
          <div className='p-2 col-12 col-md-6 col-xl-4 d-flex justify-content-center'>
            <div className='shopper-block'>
              <img src={process.env.PUBLIC_URL + "/images/landing-money.png"} alt="Получи кэшбэк 70%" />
              <h3>Получи кэшбэк 70%</h3>
              <p>от среднего чека, посетив заведение и написав отзыв</p>
            </div>
          </div>
          
          <div className='p-2 col-12 col-md-6 col-xl-4 d-flex justify-content-center'>
            <div className='shopper-block'>
              <img src={process.env.PUBLIC_URL + "/images/landing-rocket.png"} alt="Эксклюзивные скидки" />
              <h3>Эксклюзивные скидки</h3>
              <p>для тайных покупателей от различных заведений города</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="register margin-block pt-5 padding-content" id="register">
        <div className='header-block d-flex flex-column align-items-center mb-3'>
          <h2>
            Как стать тайным покупателем?
            <br />
            <strong>Регистрация</strong>
          </h2>

          <a href="https://3raza.com" rel="noreferrer" target="_blank">
            <button className="btn btn-primary">
              Начать
            </button>
          </a>
          
        </div>

        <div className='d-flex col-12 justify-content-center justify-content-xl-between flex-wrap'>

          <div className='register-block col-12 col-md-6 col-xl-4'>
            <ol>
              <li>Зайди на <a href="https://3raza.com" rel="noreferrer" target="_blank">3raza.com</a>
                <br />
                Выбирай "Войти"
              </li>
            </ol>

            <div className='register-block-start'>
              <img src={process.env.PUBLIC_URL + "/images/landing-startpage.png"} alt="Главная страница 3RAZA" />
            </div>
          </div>

          <div className='register-block col-12 col-md-6 col-xl-4'>
            <ol start={2}>
              <li>Жми "Зарегистрироваться".
                <br />
                Выбирай "Пользователь".
              </li>
            </ol>
            

            <div className='register-block-center'>
              <img src={process.env.PUBLIC_URL + "/images/landing-register.png"} alt="Регистрация на сайте" />
            </div>
          </div>

          <div className='register-block col-12 col-md-6 col-xl-4'>
            <ol start={3}>
              <li>Смотри видео с инструкцией.
                <br />
                Введи данные и следуй
                <br />
                инструкции на сайте.
              </li>
            </ol>

            <div className='register-block-end'>
              <img src={process.env.PUBLIC_URL + "/images/landing-video.png"} alt="Видео с инструкцией" />
            </div>
          </div>

        </div>

      </div>

      <div className="commands margin-block padding-content" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/landing-mobile.png'})` 
      }} id="commands">
        <div className='commands-info'>
          <h1>Наша команда</h1>
          <h3>Если остались вопросы</h3>
          <p>Всегда поможем разобраться.</p>

          <a href="https://t.me/+xks27Pc6dCZiZDFi" target="_blank" rel="noopener noreferrer">
            <button> Telegram </button>
          </a>
          
        </div>
        
      </div>

      <footer className='footer'>
        <ul>
          {renderMenu}
        </ul>
      </footer>
    </div>
  );
}

export default App;
