import styled from "styled-components";
export const TimelineMainLayout = styled.div<any>`
  min-height: ${(props) => props.height};
  width: 100%;
`;

export const Icon = styled.div`
  font-size: 50px;
  @media screen and (max-width: 640px) {
    font-size: 30px;
  }
`;
