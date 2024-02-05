import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Loading></Loading>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;