import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

function Tabs({ children }) {
  const [ activeTab, setActiveTab ] = useState(0);
  return (
    <Wrapper>
      {children.map(
        (Tab, index) => (
          <Tab
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
            key={index}
          />
        )
      )}
    </Wrapper>
  );
}
export default Tabs;
