import React from 'react';
import { Col, Row } from 'antd';
import { LineChartOutlined, TableOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import { DemoLine } from './components/chart';

import './App.css'

const { Content, Sider } = Layout;

const menu = [{
  icon: LineChartOutlined,
  name: "Chart"
}, {
  icon: TableOutlined,
  name: "Table"
}]

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menu.map(
            (item, index) => ({
              key: String(index + 1),
              icon: React.createElement(item.icon),
              label: `${item.name}`
            }),
          )}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '40px 20px' }}>
          <Row>
            <Col span={16} offset={4}>
              <DemoLine />
            </Col>
          </Row> 
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
