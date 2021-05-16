import { Box, Grid } from "grommet";

import HeaderCompany from "./company/header";
import AboutUs from "./company/aboutUs";
import Product from "./company/products";
import Testimonial from "./company/testimonial";
import FooterComapny from "./company/footer";

export default function CompanyHome() {
  let components = [
    {
      ui: <HeaderCompany />,
      id: "Header",
    },
    {
      ui: <AboutUs />,
      id: "AboutUs",
    },
    {
      ui: <Product />,
      id: "Product",
    },
    {
      ui: <Testimonial />,
      id: "Testimonial",
    },
  ];

  let dom = (
    <>
      <Grid gap="small">
        {components.map((item) => (
          <Box key={item.id} responsive height="large">
            {item.ui}
          </Box>
        ))}
      </Grid>
      <Box responsive margin="none" pad="none">
        <FooterComapny />
      </Box>
    </>
  );
  return dom;
}
