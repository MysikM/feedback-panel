import React from 'react';
import './home.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeContent from "../../components/HomeContent/HomeContent";

const Home = () => {
    return (
        <section className='home'>
            <div className="home--container container">
                <Sidebar />
                <HomeContent />
            </div>
        </section>
    );
};

export default Home;