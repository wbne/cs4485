import React from "react";
import Header from "../components/homePage/Header";
import HomePageBody from "../components/homePage/HomePageBody";
import AccessControl from "../components/AccessControl";
 
const Home = () => {
    return (
        <div>
	    <AccessControl />
            <Header />
            <HomePageBody />
        </div>
    );
};
 
export default Home;
