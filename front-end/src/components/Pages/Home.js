import React from 'react'
import { useTranslation } from 'react-i18next';
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
    const { t, i18n } = useTranslation();
    let photo = "https://unsplash.it/500/500";
    return (
        <div>
            <h2>{t('welcome.1')}</h2>
            <h3>{t('thanks.1')}</h3>
            <div className="row">
                <div className="column">
                    <img src={photo} alt="" />
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptas voluptatum, nam quasi sed minus reiciendis repellat
                iusto obcaecati molestias fugit aliquid architecto eum ab
                ullam dicta minima.Dolore, blanditiis ratione?
            </p>
            <button>
                <Link to='/'>Get more Infomation</Link>
            </button>
            <button>
                <Link to='/'>Get Help</Link>
            </button>
            <Footer />
        </div>
    )
}
export default Home;
