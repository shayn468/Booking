import React from "react";
import { Featured } from "../../components/featured/Featured";

import  MailList from "../../components/mailList/MailList";
import  PropertyList from "../../components/propertyList/PropertyList";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css"
import Footer from "../../components/footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList/>
      <MailList/>
      <Footer/>
      </div>
    </div>
  );
};
