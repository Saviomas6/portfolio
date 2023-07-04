import { NextPage } from "next";

import styled from "styled-components";

const NotFound: NextPage = () => {
  return <NotFountMainLayout>Not Found</NotFountMainLayout>;
};
export default NotFound;
const NotFountMainLayout = styled.div`
  height: 100vh;
  background-color: blue;
  font-size: 40px;
  font-family: "Roboto300";
`;
