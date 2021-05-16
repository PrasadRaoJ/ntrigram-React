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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Layer,
  RadioButtonGroup,
  InfiniteScroll,
  Select,
} from "grommet";
import { Mail, FormViewHide, FormView, View, Hide, Emoji, Favorite, ShareOption, Compliance, FormTrash } from "grommet-icons";
import * as yup from "yup";
import { GridList } from "@material-ui/core";

export default function Profile() {
  const [showLoginForm, setShowLoginForm] = React.useState(false);
  const [showSignUpForm, setShowSignUpForm] = React.useState(false);
  const [gender, setGender] = React.useState();
  const [ibCandidature, set_ibCandidature] = React.useState();
  const [schoolType, setSchoolType] = React.useState();
  const [schoolLocation, setSchoolLocation] = React.useState();
  const [major, setMajor] = React.useState();
  const [classRank, setClassRank] = React.useState();
  const [ethnicity, setEthnicity] = React.useState();
  const [passoutYear, setPassoutYear] = React.useState();
  const [weightedGPA, setWeightedGPA] = React.useState();
  const [mathScore, setMathScore] = React.useState();
  const [scienceScore, setScienceScore] = React.useState();
  const [otherScore, setOtherScore] = React.useState();
  const [historyScore, setHistoryScore] = React.useState();
  const [artScore, setArtScore] = React.useState();
  const [mathSAT, setMathSAT] = React.useState();
  const [englishSAT, setEnglishSAT] = React.useState();
  const [updateProfile, setUpdateProfile] = React.useState();

  function formLabel(str) {
    return <Heading level={4}>{str}</Heading>;
  }

  function loginSignForm() {
    setShowLoginForm(true);
  }

  function showProfile(){
    let items = [
      <FormField label="Gender">
        <RadioButtonGroup
          name="Gender"
          options={["Female", "Male"]}
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        />
      </FormField>,
      <FormField label="IB Candidate">
        <RadioButtonGroup
          name="ibCandidate"
          options={["Yes", "No"]}
          value={ibCandidature}
          onChange={(event) => set_ibCandidature(event.target.value)}
        />
      </FormField>,
      <FormField label="School Type">
        <Select
          options={["Home-Schooled", "Parochial", "Private"]}
          value={schoolType}
          onChange={({ option }) => setSchoolType(option)}
        />
      </FormField>,
      <FormField label="School Location">
        <Select
          options={["Arizona", "California", "Colorado", "Arkinsas"]}
          value={schoolLocation}
          onChange={({ option }) => setSchoolLocation(option)}
        />
      </FormField>,
      <FormField label="Major">
        <Select
          options={[
            "Science Math and Technology",
            "Multi Interdisciplinary Studies",
            "Trades Personal Services",
            "Health and Medicine",
            "Public and Social Services",
          ]}
          value={major}
          onChange={({ option }) => setMajor(option)}
        />
      </FormField>,
      <FormField label="Class Rank">
        <Select
          options={[
            "Top 100%",
            "Top 90%",
            "Top 80%",
            "Top 70%",
            "Top 60%",
            "Top 50%",
            "Top 40%",
            "Top 30%",
            "Top 20%",
            "Top 10%",
          ]}
          value={classRank}
          onChange={({ option }) => setClassRank(option)}
        />
      </FormField>,
      <FormField label="Ethnicity">
        <Select
          options={["Caucacian", "Hispanic", "South American", "Black"]}
          value={ethnicity}
          onChange={({ option }) => setEthnicity(option)}
        />
      </FormField>,
      <FormField label="Passout year">
        <TextInput
          placeholder="2021"
          value={passoutYear}
          onChange={(event) => setPassoutYear(event.target.value)}
        />
      </FormField>,
      <FormField label="Weighted GPA">
        <TextInput
          placeholder="4.0"
          value={weightedGPA}
          onChange={(event) => setWeightedGPA(event.target.value)}
        />
      </FormField>,
      <FormField label="Math Score">
        <TextInput
          placeholder="3"
          value={mathScore}
          onChange={(event) => setMathScore(event.target.value)}
        />
      </FormField>,
      <FormField label="Science Score">
        <TextInput
          placeholder="2"
          value={scienceScore}
          onChange={(event) => setScienceScore(event.target.value)}
        />
      </FormField>,
      <FormField label="Other Score">
        <TextInput
          placeholder="1"
          value={otherScore}
          onChange={(event) => setOtherScore(event.target.value)}
        />
      </FormField>,
      <FormField label="History">
        <TextInput
          placeholder="0"
          value={historyScore}
          onChange={(event) => setHistoryScore(event.target.value)}
        />
      </FormField>,
      <FormField label="Art">
        <TextInput
          placeholder="5"
          value={artScore}
          onChange={(event) => setArtScore(event.target.value)}
        />
      </FormField>,
      <FormField label="SAT Score: Math">
        <TextInput
          placeholder="750"
          value={mathSAT}
          onChange={(event) => setMathSAT(event.target.value)}
        />
      </FormField>,
      <FormField label="SAT Score: English">
        <TextInput
          placeholder="280"
          value={englishSAT}
          onChange={(event) => setEnglishSAT(event.target.value)}
        />
      </FormField>,
    ];
    return (
      <Card
        // height="medium"
        width="large"
        background={{
          color: "light-1",
          opacity: "weak",
          image: "url(/assets/images/profile.png)",
        }}
        border
      >
        <CardHeader
          pad="medium"
          background={{
            opacity: "weak",
          }}
        >
          <Heading level={2}>Profile:</Heading>
        </CardHeader>
        <CardBody
          pad="medium"
          background={{
            opacity: "weak",
          }}
        >
          {/* <InfiniteScroll items={items}>{(item) => <>{item}</>}</InfiniteScroll> */}
          <GridList cols={2}>{items.map((item) => item)}</GridList>
        </CardBody>
        <CardFooter
          pad={{ horizontal: "small" }}
          background={{
            color: "light-2",
            opacity: "weak",
          }}
        >
          <Button
            icon={<Compliance color="status-ok" />}
            hoverIndicator
            label="Update"
            margin="medium"
            onClick={() => setUpdateProfile(true)}
          />
        </CardFooter>
      </Card>
    );
  }

  return (
    <>
      <Heading level={2}>
        Hi <i>{cookie.load("email")}</i>!
      </Heading>
      {showProfile()}
      {updateProfile && (
        <Layer
          onEsc={() => setUpdateProfile(false)}
          onClickOutside={() => setUpdateProfile(false)}
        >
          <Image src="/assets/animations/check.gif" height="100px" width="100px" animate="fadeIn" />
        </Layer>
      )}
    </>
  );
}
