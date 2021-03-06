import * as React from "react";
import { Section } from "./styled";

const Welcome = (): React.ReactElement => {
  const auth = localStorage.getItem("token");

  if (!auth) {
    return <Section>Not authorised</Section>;
  }

  return <Section>Welcome</Section>;
};

export default Welcome;
