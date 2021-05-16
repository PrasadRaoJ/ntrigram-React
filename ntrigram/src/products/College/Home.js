import React from "react";
import cookie from 'react-cookies'

import {
  Text,
  Box,
  Image,
  Header,
  Button,
  Menu,
  Tabs,
  Tab,
  Main,
  Heading,
  RadioButton,
  Grid,
  Form,
  Markdown,
} from "grommet";
import { ContactInfo, Home, Logout, Optimize, UserAdmin } from "grommet-icons";

import FooterHome from "./footer";
import StudentAnalysis from "./StudentAnalysis";
import Profile from "./Profile";
import Account from "./Account";

import CONSTANTS from "../../CONSTANTS";

export default function CollegeHome() {
  const [activeIndex, setActiveIndex] = React.useState(
    cookie.load("login") ? 0 : 2
  );
  const onActive = (nextIndex) => {
    if(cookie.load('login')) {
      setActiveIndex(nextIndex);
    }
    else {
      setActiveIndex(2);
    }
  }

  let component = null;
  switch(activeIndex) {
    case 0: component=<StudentAnalysis/>;
    break;
    case 1: component=<Profile/>;
    break;
    case 2: component=<Account/>;
    break;
  }

  function onClickLogout(event) {
    // TODO: redirect to account page!
    cookie.remove('login');
    cookie.remove('email');
    window.location.href = CONSTANTS.URL + "College/";
    alert("Logging out.", cookie.load('login'));
  }

  return (
    <>
      <Header background="dark-1" responsive>
        <Button
          icon={
            <Image
              fit="contain"
              src="/assets/images/NTrigramSolutions.gif"
              fallback="logo"
              animation="fadeIn"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          }
          hoverIndicator
          margin="none"
          href={CONSTANTS.URL+"nTrigram/"}
        />
        <Tabs
          responsive
          animation="fadeIn"
          activeIndex={activeIndex}
          onActive={onActive}
        >
          <Tab icon={<Optimize />} title="Analysis"></Tab>
          <Tab icon={<ContactInfo />} title="Profile"></Tab>
          <Tab icon={<UserAdmin />} title="Account"></Tab>
          <span
            onClick={(event) => onClickLogout(event)}
            style={{
              display: cookie.load("login") ? "flex" : "none",
            }}
          >
            <Tab icon={<Logout />} title="Logout"></Tab>
          </span>
        </Tabs>
      </Header>

      <Main pad="small" direction="column" align="center" animation="fadeIn">
        {component}
      </Main>
      <FooterHome animation="fadeIn" />
    </>
  );
}
