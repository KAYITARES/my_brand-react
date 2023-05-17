import React from "react";

import HomeContainer from "../containers/HomeContainer";
import NotFoundContainer from "../containers/NotFoundContainer";
import AboutContainer from "../containers/AboutContainer";
import Portfolio from "../containers/Portfolio";
import SignUp from "../containers/SignUp";

const HomePage = () => <HomeContainer />;
const NotFoundPage = () => <NotFoundContainer />;
const AboutPage = () => <AboutContainer />;
const PortfolioPage = () => <Portfolio />;
const SignUpPage = () => <SignUp />;

export { HomePage, NotFoundPage, AboutPage, PortfolioPage, SignUpPage };
