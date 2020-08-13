import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import LoadingIcon from '../icons/loader.webp';
import { API_ENDPOINT, REQUEST_OBJ, CORS_ENABLER_URL } from '../constants';
import Tabs from './Tabs';
import Tab from './Tab';

const Grid = styled.div`
  margin-top: 20px;
  margin-right: 40px;
  margin-left: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  column-gap: 40px;
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
const CategoryDescription = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const MenuItem = styled.p`
  font-size: 26px;
`;
const Loader = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const fetcher = async () => {
  const rawResponse = await fetch(CORS_ENABLER_URL + API_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(REQUEST_OBJ)
  });
  return rawResponse.json();
};
function Menu() {
  const { isLoading, error, data } = useQuery('menuData', fetcher);
  const [ value, setValue ] = useState(0);
  let uniqueCategories;
  if (data && data.data[0] && data.data[0].desc) {
    uniqueCategories = data.data[0].desc.filter((item, index, self) => (
      self.findIndex((v) => v.categoryName === item.categoryName) === index
    ));
  }
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {isLoading && (
        <Loader>
          <img src={LoadingIcon} alt="loading" height="150px" />
        </Loader>
      )}
      {!isLoading && !error && (
      <Tabs>
        {uniqueCategories && uniqueCategories.map((item, index) => ({ ...rest }) => (
          <Tab
            {...rest}
            onClick={() => {
              handleChange(index);
              rest.onClick();
            }}
            text={item.categoryName}
          />
        ))}
      </Tabs>
      )}
      <CategoryDescription className="roboto">{uniqueCategories && uniqueCategories[value].categoryDescription}</CategoryDescription>
      <Grid>
        {!isLoading
        && !error
        && data.data[0].desc
          .filter(
            (item) => item.categoryName === uniqueCategories[value].categoryName
          )
          .map((item) => (
            <div key={item.itemNum}>
              <MenuItem className="cursive">{item.name}</MenuItem>
              <p className="roboto">{item.description}</p>
              <p className="roboto">{`$${item.itemPrice}`}</p>
            </div>
          ))}
      </Grid>
    </div>
  );
}
export default Menu;
