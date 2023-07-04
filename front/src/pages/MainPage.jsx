import { useSelector } from 'react-redux';

const MainPage = () => {
    const state = useSelector((state) => (state));
    console.log(state.log.isLoggedin)
  return (
    <div>
        
    </div>
  )
}

export default MainPage