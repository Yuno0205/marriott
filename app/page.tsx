import { Banner } from "@/components/Banner";
import { Properties } from "@/components/Properties";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solution";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      {/* <Header /> */}
      <Banner />
      <Properties />
      <Services />
      {/* <Introduction />
         
      {/* <Projects /> */}
      {/* <FAQ /> */}
      <Solutions />
      {/* <Footer /> */}
    </Fragment>
  );
}
