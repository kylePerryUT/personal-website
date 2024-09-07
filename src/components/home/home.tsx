import { FC } from 'react';
import Header from './header';


const Home: FC = () => {
    return (
        <div id="home" className={"bg-perry-family h-screen w-screen bg-center bg-cover relative opacity-50"}>
            <Header />
        </div>
    );
};

export default Home;