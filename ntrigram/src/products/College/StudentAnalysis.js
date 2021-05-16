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
  DataTable,
  Meter,
  Text,
  Tip,
  Paragraph,
} from "grommet";
import { Mail, FormViewHide, FormView, View, Hide, Emoji, Favorite, ShareOption, Compliance, FormTrash } from "grommet-icons";
import * as yup from "yup";
import { GridList } from "@material-ui/core";

export default function Analysis() {
  
  function showStats(){
    let items = [
      <DataTable
        columns={[
          {
            property: "name",
            header: <Text level={5}><Markdown>**College**</Markdown></Text>,
            primary: true,
          },
          {
            property: "percent",
            header: <Text level={5}><Markdown>**% Chance**</Markdown></Text>,
            render: (datum) => (
              <Box pad={{ vertical: "xsmall" }}>
                <Meter
                  values={[{ value: datum.percent }]}
                  thickness="small"
                  size="small"
                  color="accent-2"
                />
                {<Paragraph>{datum.percent}%</Paragraph>}
              </Box>
            ),
          },
        ]}
        data={[
          { name: "Harvard", percent: 20 },
          { name: "MIT", percent: 30 },
          { name: "Stanford", percent: 40 },
          { name: "UC Berkley", percent: 80 },
          { name: "Wharton", percent: 45 },
        ]}
      />,
    ];
    return (
      <Card
        // height="medium"
        width="large"
        background={{
          color: "light-1",
          opacity: "weak",
          image: "url(/assets/images/analysis.png)",
        }}
        border
      >
        <CardHeader
          pad="medium"
          background={{
            opacity: "weak",
          }}
        ></CardHeader>
        <CardBody
          pad="medium"
          background={{
            opacity: "weak",
          }}
        >
          <GridList cols={1}>{items.map((item) => item)}</GridList>
        </CardBody>
        <CardFooter
          pad={{ horizontal: "small" }}
          background={{
            color: "light-2",
            opacity: "weak",
          }}
        ></CardFooter>
      </Card>
    );
  }

  return (
    <>
      {showStats()}
    </>
  );
}
