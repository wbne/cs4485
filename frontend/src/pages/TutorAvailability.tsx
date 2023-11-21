import React from "react";
import TutorAvailability from "../components/availabilityPage/TutorAvailabilityPage";
import TutorHeader from "../components/homePage/TutorHeader";
import AccessControl from "../components/AccessControl";
 
const TutorAvailabilityPage = () => {
    return (
        <div>
	    <AccessControl/>
            <TutorHeader />
            <TutorAvailability />
        </div>
    );
};
 
export default TutorAvailabilityPage;
