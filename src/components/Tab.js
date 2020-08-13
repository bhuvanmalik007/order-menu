/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: 20px;
`;

function Tab({ text, active, onClick }) {
  return (
    <Wrapper>
      <p
        style={{ fontSize: 36, fontWeight: 700, cursor: 'pointer' }}
        className={active ? 'hoverable cursive' : 'cursive'}
        onClick={onClick}
      >
        {text}
      </p>
    </Wrapper>
  );
}

export default Tab;
