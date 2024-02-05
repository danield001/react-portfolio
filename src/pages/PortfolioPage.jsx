import React from 'react';
import calendarAppIcon from '../assets/images/calendar-app-icon.png';
import ecommerceDbIcon from '../assets/images/ecommerce-db-icon.png';
import employeeDbIcon from '../assets/images/employee-db-icon.png';
import quizAppIcon from '../assets/images/quiz-app-icon.jpeg';
import weatherAppIcon from '../assets/images/weather-app-icon.png';
import wineDineIcon from '../assets/images/wine-dine-icon.png';

export default function PortfolioPage() {
    return (
        <div className="portfolio-page">
            <h1>Portfolio</h1>
            <img src={calendarAppIcon} alt="Calendar App" />
            <img src={ecommerceDbIcon} alt="Ecommerce Database" />
            <br />
            <img src={employeeDbIcon} alt="Employee Database" />
            <img src={quizAppIcon} alt="Quiz App" />
            <br />
            <img src={weatherAppIcon} alt="Weather App" />
            <img src={wineDineIcon} alt="Wine and Dine App" />
        </div>
    );
}
