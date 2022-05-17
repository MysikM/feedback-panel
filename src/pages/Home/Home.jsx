import React from 'react';
import './home.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeContent from "../../components/HomeContent/HomeContent";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const Home = () => {
    return (
        <section className='home'>
            <div className="home--container container">
                <Sidebar />
                <HomeContent />
                <BurgerMenu />
            </div>
        </section>
    );
};

export default Home;