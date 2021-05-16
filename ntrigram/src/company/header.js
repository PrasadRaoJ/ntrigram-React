import { Text, Box, Image } from "grommet";

export default function HeaderCompany() {
  return (
    <Box
      background="url(/assets/images/grayBuilding.jpg)"
      responsive={true}
      animation="fadeIn"
      height="large"
    >
      <Box>
        <Image
          fit="contain"
          src="/assets/images/NTrigramSolutions.gif"
          fallback="logo"
          animation="fadeIn"
          style={{
            width: "400px",
            height: "400px",
          }}
        />
      </Box>
      
      <Box responsive={true} animation="fadeIn" alignSelf="center" margin="xlarge" pad="xlarge">
        <Text animation="fadeIn" color="white" margin="medium" size="xxlarge">
          nTrigram®
        </Text>
        <Text
          animation="fadeIn"
          color="white"
          margin="medium"
          size="4xl"
          weight="bold"
        >
          We build solutions for the future.
        </Text>
      </Box>
    </Box>
  );
}
