import { useSelector } from 'react-redux';
import styled from '@emotion/styled';


const MainPageView = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MainView = styled.div`
width: 100%;
margin: 10px;
padding: 24px;
text-align: left;
`;

const MainPage = () => {
    const state = useSelector((state) => (state));
    console.log(state.log.isLoggedin)
  return (
    <div>
        <MainPageView>
          <MainView>
            12312312323
          </MainView>
        </MainPageView>
    </div>
  )
}

export default MainPage