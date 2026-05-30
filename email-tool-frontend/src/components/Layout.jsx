import { Layout, AppBar } from 'react-admin';

const EmptyAppBar = () => <AppBar sx={{ display: 'none' }} />;

const CustomLayout = (props) => <Layout {...props} appBar={EmptyAppBar} />;

export default CustomLayout;