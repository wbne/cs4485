import React from "react";
import TutorHeader from "../components/homePage/TutorHeader";
import TutorHome from "../components/homePage/TutorHome";
import AccessControl from "../components/AccessControl";
 
const TutorHomePage = () => {
    return (
        <div>
	    <AccessControl />
            <TutorHeader />
            <TutorHome />
        </div>
    );
};
 
export default TutorHomePage;
