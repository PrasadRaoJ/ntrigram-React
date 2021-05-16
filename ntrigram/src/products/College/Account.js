import React from "react";
import cookie from 'react-cookies'

import {
  Grid,
  Heading,
  RadioButton,
  FormField,
  TextInput,
  Button,
  Box,
  Markdown,
  Image,
  Layer,
} from "grommet";
import { Mail, FormViewHide, FormView, View, Hide, Emoji } from "grommet-icons";
import * as yup from "yup";

export default function Account() {
  const [showLoginForm, setShowLoginForm] = React.useState(false);
  const [showSignUpForm, setShowSignUpForm] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(cookie.load('login'));

  function formLabel(str) {
    return <Heading level={4}>{str}</Heading>;
  }

  function loginSignForm() {
    setShowLoginForm(true);
  }

  function LoginForm() {
    const [email, setEmail] = React.useState();
    const [pwd, setPwd] = React.useState();
    const [revealPwd, setRevealPwd] = React.useState(false);
    const [errorStatusEmail, setErrorStatusEmail] = React.useState(false);
    const [errorStatusPwd, setErrorStatusPwd] = React.useState(false);

    let emailSchema = yup.object().shape({
      email: yup.string().required().trim().email(),
    });
    let pwdSchema = yup.object().shape({
      pwd: yup.string().required().trim().min(8),
    });

    React.useEffect(() => {
      let shouldCheck = email ?? false;
      if (shouldCheck) {
        emailSchema
          .isValid({
            email: email,
          })
          .then(function (valid) {
            if (valid) {
              setErrorStatusEmail(false);
            } else {
              setErrorStatusEmail(true);
            }
          });
      }
    }, [email]);

    React.useEffect(() => {
      let shouldCheck = pwd ?? false;
      console.log(shouldCheck, pwd);
      if (shouldCheck) {
        pwdSchema
          .isValid({
            pwd: pwd,
          })
          .then(function (valid) {
            console.log("Here", valid);
            if (valid) {
              setErrorStatusPwd(false);
            } else {
              setErrorStatusPwd(true);
            }
          });
      }
    }, [pwd]);

    function login() {
      if (!errorStatusEmail && !errorStatusPwd && email && pwd) {
        // valid email pwd entered
        // TODO: check if account exists and if email-pwd combo is correct according to DB
        // TODO: account doesn't exist => ask to sign up
        // TODO: accountr is there. pwd is incorrect. verification mail?
        cookie.save("login", true);
        cookie.save("email", email);
        // TODO: check if profile is filled in db
        // TODO: if profile is filled then redirect to analysis page
        // TODO: if profile is not filled then redirect to profile page.
        setShowSignUpForm(true);
      }
    }

    return (
      <FormField border margin="small" pad="small">
        <Heading alignSelf="center" level={2}>
          Hi, How are you <Emoji size="medium" /> ?
        </Heading>
        <Box
          width="medium"
          direction="row"
          margin="large"
          align="center"
          round="small"
          border={{
            color: errorStatusEmail ? "status-error" : "status-unknown",
          }}
        >
          <TextInput
            plain
            value={email}
            placeholder="e@mail.com"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button icon={<Mail />} cursor="default" />
        </Box>
        <Box
          width="medium"
          direction="row"
          margin="large"
          align="center"
          round="small"
          border={{
            color: errorStatusPwd ? "status-error" : "status-unknown",
          }}
        >
          <TextInput
            plain
            type={revealPwd ? "text" : "password"}
            value={pwd}
            placeholder="password"
            onChange={(event) => setPwd(event.target.value)}
          />
          <Button
            cursor="pointer"
            icon={
              revealPwd ? (
                <FormView size="medium" />
              ) : (
                <FormViewHide size="medium" />
              )
            }
            onClick={() => setRevealPwd(!revealPwd)}
          />
        </Box>
        <Button label="Login / Sign Up" onClick={()=>login()} />
      </FormField>
    );
  }

  function SignUpForm() {
    const [consultantCheck, setConsultantCheck] = React.useState(false);
    const [studentCheck, setStudentCheck] = React.useState(false);  
    const [roleValue, setRoleValue] = React.useState();
    const CONSULTANT = "Consultant";
    const STUDENT = "Student";

    React.useEffect(() => {
      if (consultantCheck) {
        setRoleValue(CONSULTANT);
      }
      if (studentCheck) {
        setRoleValue(STUDENT);
      }
    }, [consultantCheck, studentCheck]);

    function updateRadioButtons(selection, whichButton) {
      if (selection) {
        switch (whichButton) {
          case CONSULTANT:
            setStudentCheck(false);
            setConsultantCheck(true);
            break;
          case STUDENT:
            setConsultantCheck(false);
            setStudentCheck(true);
            break;
        }
      }
    }
     
    function signMeUp() {
      if (roleValue) {
        // TODO: redirect to profile component
        window.location.href = "http://localhost:3000/College/";
      }
    }
    return (

      <FormField border margin="small" pad="small">
        <Heading alignSelf="center" level={3}>
          Hey! You're new. 
        </Heading>
        <Heading alignSelf="center" level={2}>
          You are a {roleValue ?? "___"}
        </Heading>
        <Grid
          rows={["xxsmall"]}
          columns={["small", "small"]}
          justify="center"
          gap="xlarge"
          areas={[
            { name: CONSULTANT, start: [0, 0], end: [0, 0] },
            { name: STUDENT, start: [1, 0], end: [1, 0] },
          ]}
        >
          <RadioButton
            gridArea={CONSULTANT}
            margin="medium"
            checked={consultantCheck}
            label={formLabel("Consultant")}
            onChange={(event) =>
              updateRadioButtons(event.target.checked, CONSULTANT)
            }
          />
          <RadioButton
            gridArea={STUDENT}
            margin="medium"
            checked={studentCheck}
            label={formLabel("Student")}
            onChange={(event) =>
              updateRadioButtons(event.target.checked, STUDENT)
            }
          />
        </Grid>
        <Button label="Sign Me Up!" onClick={(event) => {signMeUp()}} />
      </FormField>
    );
  }

  return (
    <>
      <Heading level={1}>
        Greetings from <Markdown>*nTrigram*</Markdown>!
      </Heading>
      {showLoginForm && (
        <Layer
          onEsc={() => setShowLoginForm(false)}
          onClickOutside={() => setShowLoginForm(false)}
        >
          <LoginForm />
        </Layer>
      )}
      {showSignUpForm && (
        <Layer
          onEsc={() => setShowSignUpForm(false)}
          onClickOutside={() => setShowSignUpForm(false)}
        >
          <SignUpForm />
        </Layer>
      )}
      {isLoggedIn ? (
        <Button
          margin="small"
          hoverIndicator
          label={
            <Heading level={4} margin="none">
              {cookie.load("email")}
            </Heading>
          }
          onClick={(event) => loginSignForm(event)}
        ></Button>
      ) : (
        <Button
          margin="small"
          hoverIndicator
          label={
            <Heading level={4} margin="none">
              Login / Sign Up
            </Heading>
          }
          onClick={(event) => loginSignForm(event)}
        ></Button>
      )}
      {isLoggedIn ? (
        <Image
          src="/assets/images/loggedIn.png"
          width="820px"
          height="600px"
        />
      ) : (
        <Image
          src="/assets/images/collegeBase.png"
          width="720px"
          height="600px"
        />
      )}
    </>
  );
}
