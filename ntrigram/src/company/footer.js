import { Text, Box, Anchor, Footer, Heading, Image, Paragraph } from "grommet";
import { Mail, MapLocation } from "grommet-icons";

export default function FooterComapny() {
  return (
    <>
      <Footer
        background="url(/assets/images/grayBuilding.jpg)"
        pad="small"
        responsive
      >
        <Anchor label="support@ntrigram.com" icon={<Mail />} color="accent-1" />
        <Anchor
          href="https://maps.app.goo.gl/6coQaoEMgmFpkkow6"
          label={
            <Heading level={6} pad="none" margin="none" color="accent-1">
              #310 Praneeth Pranav Leaf Mallampet <br />
              Hyderabad, Telangana, 500043 <br />
              India
            </Heading>
          }
          icon={<MapLocation color="accent-1" />}
          height="100"
          width="300"
        ></Anchor>
      </Footer>
    </>
  );
}
