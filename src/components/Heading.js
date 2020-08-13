import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Heading() {
  return (
    <Wrapper>
      <h1 className="cursive" style={{ fontSize: 48 }}>Active Culture</h1>
    </Wrapper>
  );
}

export default Heading;
