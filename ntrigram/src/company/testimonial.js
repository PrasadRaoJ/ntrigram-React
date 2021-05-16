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
  Stack,
  Avatar,
} from "grommet";
import {
  User,
  Certificate,
  ContactInfo,
  CaretNext,
  Twitter,
  Linkedin,
} from "grommet-icons";
import { LoremIpsum } from "lorem-ipsum";

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

function showTestimonial(data) {
  return (
    <Card
      height="medium"
      width="medium"
      background={{
        image: "url(/assets/images/glitter.jpg)",
        opacity: "strong",
      }}
    >
      <CardHeader pad="medium">
        <Text size="large" weight="bold" color="light-1">
          {data.name}
        </Text>
      </CardHeader>
      <CardBody pad="medium">
        <Text color="light-2">{data.testimonial}</Text>
      </CardBody>
      <CardFooter
        pad={{ horizontal: "small" }}
        background={{
          color: "light-2",
          opacity: "strong",
        }}
      >
        {data.icon.map((item) => (
          <Button
            icon={item.icon}
            hoverIndicator
            onClick={() => (window.location.href = item.link)}
          />
        ))}
      </CardFooter>
    </Card>
  );
}
export default function Testimonial() {
  const collegeFinder = showTestimonial({
    name: "Name",
    testimonial: lorem.generateWords(25),
    icon: [
      {
        icon: <Twitter />,
        link: "#",
      },
      {
        icon: <Linkedin />,
        link: "#",
      },
    ],
  });
  const lawSome = showTestimonial({
    name: "Name",
    testimonial: lorem.generateWords(25),
    icon: [
      {
        icon: <Twitter />,
        link: "#",
      },
      {
        icon: <Linkedin />,
        link: "#",
      },
    ],
  });
  return (
    <Box
      background={{
        color: "neutral-4",
        image: "url(/assets/images/glassCeiling.jpg)",
        opacity: "weak",
      }}
      responsive={true}
      animation="fadeIn"
      height="large"
      align="center"
    >
      <Heading animation="fadeIn" margin="large" weight="bold">
        Testimonials
      </Heading>

      <Box animation="fadeIn" responsive margin="xlarge">
        <Grid columns={["medium", "medium"]} gap="xlarge" animation="fadeIn">
          {collegeFinder}
          {lawSome}
        </Grid>
      </Box>
    </Box>
  );
}
