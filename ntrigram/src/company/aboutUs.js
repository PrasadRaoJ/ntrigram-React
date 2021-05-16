import { Paragraph, Box, Heading } from "grommet";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default function AboutUs() {
  return (
    <Box
      background={{
        color: "neutral-4",
        opacity: "weak",
        image: "url(/assets/images/glassCeiling.jpg)",
      }}
      responsive={true}
      animation="fadeIn"
      height="large"
      align="center"
    >
      <Heading animation="fadeIn" margin="medium" weight="bold">
        About Us
      </Heading>
      <Paragraph animation="fadeIn" margin="large">
        {lorem.generateParagraphs(1)}
        <br />
        {lorem.generateParagraphs(1)}
      </Paragraph>
    </Box>
  );
}
