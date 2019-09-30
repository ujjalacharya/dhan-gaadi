import Header from './Header';

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