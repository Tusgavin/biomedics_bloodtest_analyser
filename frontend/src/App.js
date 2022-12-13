import React, { useState } from 'react';
import { LineChartOutlined, TableOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import { Chartview } from './components/Chart';
import { Tableview } from './components/Table';

import './App.css'

const { Content, Sider } = Layout;

const menu = [{
  icon: LineChartOutlined,
  name: "Chart"
}, {
  icon: TableOutlined,
  name: "Table"
}]

const App = () => {
  const [active, setActive] = useState(0);

  return (
    <Layout style={{ minHeight: "100vh", height: "fit-content" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['0']}
          items={menu.map(
            (item, index) => ({
              key: String(index),
              icon: React.createElement(item.icon),
              label: `${item.name}`
            }),
          )}
          onClick={({key}) => setActive(key)}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '60px 60px' }}>
          <div style={{ height: '100%' }}>
            { active === '0' && <Chartview />}
            { active === '1' && <Tableview />}
            </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
