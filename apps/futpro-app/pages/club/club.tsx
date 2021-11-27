import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {listAllCountries} from '../request';
import {Header as Hdr, Footer as Ftr, Card, Nav} from '@futpro/ui';
import cuid from 'cuid';

const MainContainer = styled.div`
  font-family: 'Outfit', sans-serif;
  display: flex;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  height: 100%;
  width: 100%;
  @media (max_device: 1200px) {
    flex-direction: column;
  }
`;
const Box = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.342);
  border-width: 1px 1px 1px 0;
  background-color: #2F9B54;
  @media (max_device: 1200px) {
    display: none;
  }
`;
const BoxContent = styled.div`
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const StyledClubs = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TitleCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2%;
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  justify-content: center;
`;

export function Club() {

  const [countriesData, setCountriesData] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const countries = await listAllCountries();
      setCountriesData(countries);
    })();
  }, []);

  return (
    <>
      <Hdr/>
      <MainContainer>
        <Container>
          <Box>
            <Nav/>          
          </Box>
          <BoxContent>
            <StyledClubs>
              <TitleCardContainer>
                {/* Card del club */}
              </TitleCardContainer>
              <CardContainer>
                {countriesData.map((countrie) => {
                  return (
                    
                    <Card
                      key={cuid()}
                      text={countrie.name}
                      imagelink={countrie.img}
                      id = {countrie.id}
                    />
                  );
                })}
              </CardContainer>
            </StyledClubs>
          </BoxContent>
        </Container>
      </MainContainer>
      <Ftr/>
    </>
  );
}

export default Club;