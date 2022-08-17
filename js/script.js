<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css" />
    <script src="js/anime.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://vk.com/js/api/openapi.js?169" type="text/javascript"></script>
</head>

<body>
    <div class="wrapper">
        <header class="header" id="header">
            <div class="container">
                <div class="header__content">
                    <div class="header__content-right">
                        <div class="logo">
                            KIN<span>
                                <img src="img/logo.png" alt="logo" class="logo__pic" /></span>NEWS
                        </div>
                        <div class="menu__small">
                            <div class="stripe"></div>
                            <div class="stripe"></div>
                            <div class="stripe"></div>
                        </div>
                    </div>
                    <div class="header__content-left">
                        <nav class="nav">
                            <ul class="nav__list">
                                <li class="nav__item">
                                    <a href="#news" class="nav__item-link">News</a>
                                </li>

                                <li class="nav__item">
                                    <a class="nav__item-link contact">Contact</a>
                                    <div class="arrow">
                                        <img src="/img/chevron.png" alt="" />
                                    </div>
                                    <div class="contacts">
                                        <a href="#mailling" class="nav__item-link mailling-link">Mailling</a>
                                        <a href="#contact" class="nav__item-link contact-link">Contact</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <main class="main" id="main">
            <div class="main__content">
                <div class="main__content-title">
                    KINONEWS - ВАШЕ УДОБСТВО, НАШЕ СТАРАНИЕ
                </div>
                <div class="main__content-desc">
                    Ежедневно собираем последние новости киноиндустрии , чтобы Вы могли узнавать их одними из первых!
                </div>
            </div>
        </main>
        <section id="news" class="news">
            <div class="container">
                <div class="news__content">
                    <div class="news__content-header">СВЕЖИЕ НОВОСТИ</div>

                    <div class="news__content-switch">
                        <button class="news__content-switcher active" value="145404816">
                            RedHeadSound
                        </button>
                        <button class="news__content-switcher" value="108468">
                            Kinopoisk
                        </button>
                        <button class="news__content-switcher" value="22554373">
                            KinoNews.ru™
                        </button>
                    </div>
                </div>
                <div class="news__content-block">
                    <div class="notification">
                        <div class="main__news">
                            <div class="grup" id=" vk_groups "></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="mailling" class="mailling">
            <div class="mailling__content">
                <div class="mailling__content-desc">
                    Подпишитесь на рассылку наших новостей
                </div>

                <form class="mailling__content-form">
                    <input type="text" name="" value="" placeholder="Name" />
                    <input type="text" name="" value="" placeholder="E-mail" />
                    <button type="button" class="btn">Отправить</button>
                </form>
            </div>
        </section>
        <footer id="contact" class="footer">
            <div class="footer__content">
                <div class="footer__content-left">
                    <div class="footer__content-left-logo">
                        <div>
                            <div class="logo">
                                KIN<span><img src="img/logo.png" alt="logo" class="logo__pic" /></span>NEWS
                            </div>
                            <div class="footer__content-text">
                                ВАШЕ УДОБСТВО, <br /> НАШЕ СТАРАНИЕ
                            </div>
                        </div>
                    </div>
                    <div class="footer__content-left-desc">
                        <span>О нас:</span>
                        <span>Время работы: 10.00 - 22.00</span>
                    </div>
                </div>
                <div class="footer__content-right">
                    <div id="map">
                        <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-118.2504254579544%2C34.14588237961833%2C-118.24837088584901%2C34.14712991260799&amp;layer=mapnik&amp;marker=34.146506148416044%2C-118.2493981719017"
                            style="border: 1px solid black"></iframe>
                    </div>
                    <div class="footer__content-right-inf">
                        <div>
                            <span>Контакты:</span>
                            <span>Телефон: 055666908</span>
                            <span>Адрес: 001128, Глендейл</span>
                        </div>
                        <span>Все права защищены © 2022 by gsaryann</span>
                    </div>
                </div>
            </div>
        </footer>
        <div class="menu">
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a class="nav__item-link mnews">News</a>
                    </li>

                    <li class="nav__item">
                        <a class="nav__item-link contact mcontact ">Contact</a>
                        <div class="arrow marrow">
                            <img src="/img/chevron.png" alt="" />
                        </div>
                        <div class="contacts mob-contacts">
                            <a class="nav__item-link mmailling-link mailling-link point">Mailling</a>
                            <a class="nav__item-link mcontact-link contact-link point">Contact</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly" defer></script>
        <script src="js/script.js"></script>
    </div>
</body>

</html>
