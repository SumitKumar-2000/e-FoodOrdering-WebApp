import React, { useState } from "react";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import Dineout from "../../components/dineout";
import Delivery from "../../components/delivery";
import Nightlife from "../../components/nightlife";
import location from "../../data/location"; 
// import LoadingBar from 'react-top-loading-bar';

const HomePage = () => {
    const [activeTab,setActiveTab] = useState("Delivery");
    const [cityName,setCityName] = useState("Delhi");
    const [searchTerm,setSearchTerm] = useState("");
    // const [progress,setProgress] = useState(0);

    const getCorrectScreen = (tab) => {
        switch (tab) {
            case "Delivery":
                return <Delivery activeSearchTerm={searchTerm} activeName={cityName} activeTab={activeTab}/>;
            case "Dineout":
                return <Dineout  activeName={cityName} activeSearchTerm={searchTerm} activeTab={activeTab}/>;
            case "Nightlife":
                return <Nightlife  activeName={cityName} activeSearchTerm={searchTerm} activeTab={activeTab}/>;
            default:
                return <Delivery activeName={cityName} activeSearchTerm={searchTerm} activeTab={activeTab}/>;
        }
    };

    return (
        <div>
            {/* <LoadingBar 
                style={{height:'2px'}}
                color='#f11946'
                progress={progress}
            /> */}
            <Header locationList={location} setActiveSearchTerm={setSearchTerm} activeName={cityName} setActiveName={setCityName}/>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
        </div>
    );
};

export default HomePage;
