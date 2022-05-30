import { Provider } from "react-redux";


import './resetcss.scss';
import "./Global.css";
import 'antd/dist/antd.min.css'


import Layout from './components/Layout';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider >
  );
}

export default App;
