import Header from './Header';
import 'antd/dist/antd.css';


const Layout = ({ children }) => {
    console.log(children)
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    );
};

export default Layout;