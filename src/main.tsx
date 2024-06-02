import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import Router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <Router/>
  </ConfigProvider>
)
