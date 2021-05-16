import { Icon } from "@material-ui/core";
import { Text, Box, Anchor, Footer, Heading, Image, Paragraph, Tab } from "grommet";
import { Attraction, Mail, MapLocation } from "grommet-icons";
import CONSTANTS from "./CONSTANTS";

export default function FooterCompany() {
  const redirect = () => window.location.href = CONSTANTS.URL+"College/";
  return (
    <Box align="center">
      <br />
      <br />
      <Heading level={2}>
        Oops! Couldn't find what you were looking for.
      </Heading>
      <Box
        background={{
          image: "url(/assets/images/notFound.png)",
        }}
        height="600px"
        width="500px"
        align="center"
      >
        <Tab
          color="#e46661"
          icon={
            <Attraction size="xlarge" cursor="pointer" onClick={redirect} />
          }
        ></Tab>
      </Box>
    </Box>
  );
}