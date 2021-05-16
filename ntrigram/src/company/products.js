import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Grid,
} from "grommet";
import { Certificate, ContactInfo, CaretNext } from "grommet-icons";
import { LoremIpsum } from "lorem-ipsum";
import constants from "../CONSTANTS";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 4,
  },
  wordsPerSentence: {
    max: 10,
    min: 4,
  },
});

function showProduct(data) {
    const redirect = () => (window.location.href = constants.URL + data.link);

  return (
    <Card
      height="medium"
      width="medium"
      background={{
        color: "light-2",
        opacity: "strong",
      }}
    >
      <CardHeader pad="medium">
        <Text size="large" weight="bold">
          {data.productName}
        </Text>
      </CardHeader>
      <CardBody pad="medium">{data.productDescription}</CardBody>
      <CardFooter
        pad={{ horizontal: "small" }}
        background={{
          color: "light-2",
          opacity: "strong",
        }}
      >
        <Button style={{ cursor: "default" }} icon={data.icon} />
        <Button
          icon={<CaretNext color="#8a3d3d" />}
          hoverIndicator
          onClick={redirect}
        />
      </CardFooter>
    </Card>
  );
}
export default function Product() {
  const collegeFinder = showProduct({
    productName: "College Finder",
    icon: <Certificate color="plain" />,
    productDescription: lorem.generateParagraphs(1),
    link: "College",
  });
  const lawSome = showProduct({
    productName: "Lawsome",
    icon: <ContactInfo color="plain" />,
    productDescription: lorem.generateParagraphs(1),
    link: "#",
  });
  return (
    <Box
      background={{
        image: "url(/assets/images/productBg.jpg)",
        opacity: "medium",
      }}
      responsive={true}
      animation="fadeIn"
      height="large"
      align="center"
    >
      <Heading animation="fadeIn" margin="large" weight="bold">
        Our Products
      </Heading>

      <Box margin="xlarge">
        <Grid columns={["medium", "medium"]} gap="xlarge" animation="fadeIn">
          {collegeFinder}
          {lawSome}
        </Grid>
      </Box>
    </Box>
  );
}
