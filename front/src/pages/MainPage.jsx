import styled from '@emotion/styled';
import MainPageComponent from '../components/frame/main/main-page-component/MainPageComponent';

const MainPageDiv = styled.div`
    width: 100%;
    /* margin: 20px; */
    /* padding: 24px; */
    /* text-align: left; */
`;


const MainPage = () => {

  return (
    <MainPageDiv>
        <MainPageComponent/>
    </MainPageDiv>
  )
}

export default MainPage