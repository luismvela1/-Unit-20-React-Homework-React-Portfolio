import React from "react";
//import Food from './pages/Screenshot_2020-12-07 Food Truck Finder.png';
//import Work from './pages/images/Screenshot_2020-12-07 Work Day Scheduler.png';
//import Happy from './pages/images/Screen Shot 2021-02-10.png';
//import Burger from './pages/images/Screen Shot 2021-02-15.png';

const Portfolio = () => (
<div className="containerp">
        <div className="row">
            <div className="col-md-12">
              <div className="food">
                <a className="nav-link" href="https://luismvela1.github.io/Food-Truck-Finder/">FOOD TRUCK FINDER</a>
                <a className="nav-link" href="https://github.com/luismvela1/Food-Truck-Finder">GITHUB REPO</a>
                <img src={process.env.PUBLIC_URL + '/images/FoodTruckFinder.png'} width="350px" height="350px" alt="Food Truck Finder" className="left"/>
                
              </div>
              <div className="work">
                <a className="nav-link" href="https://luismvela1.github.io/05-Third-Party-APIs-Work-Day-Scheduler/">WORK DAY SCHEDULER</a>
                <a className="nav-link" href="https://github.com/luismvela1/05-Third-Party-APIs-Work-Day-Scheduler">GITHUB REPO</a>
                <img src={process.env.PUBLIC_URL + '/images/WorkDayScheduler.png'} width="300px" height="300px" alt="Work Day Scheduler" className="right"/>
               
              </div>
            </div>
        </div>
            <div className="row">
                <div className="col-md-12">
                  <div className="pass">
                    <a className="nav-link" href="https://polar-lake-20379.herokuapp.com/">HAPPY HEALTHY HOME</a>
                    <a className="nav-link" href="https://github.com/marchandmr/project2">GITHUB REPO</a>
                    <img src={process.env.PUBLIC_URL + '/images/HappyHealthHomes.png'}  width="300px" height="300px" alt="Happy Healthy Home" className="img-thumbnail"/>
              </div>
              <div className="home">
                <a className="nav-link" href="https://frozen-cliffs-16716.herokuapp.com/">BURGER APP</a>
                <a className="nav-link" href="https://github.com/luismvela1/burger">GITHUB REPO</a>
                <img src={process.env.PUBLIC_URL + '/images/burger.png'}   width="300px" height="300px" alt="Homework-demo" className="img-thumbnail"/>
                  </div>  
                </div>
            </div>
  </div>
);

export default Portfolio;