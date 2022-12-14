import React, { useState } from "react";
import { LineChartOutlined, TableOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

import { Chartview } from "./components/Chart";
import { Tableview } from "./components/Table";

import "./App.css";

const { Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const menu = [
  getItem("Charts", "1", LineChartOutlined, [
    getItem("Colesterol HDL", "sub1"),
    getItem("Colesterol LDL", "sub2"),
    getItem("Colesterol não-LDL", "sub3"),
    getItem("Colesterol Total", "sub4"),
    getItem("Colesterol VLDL", "sub5"),
    getItem("Creatinina", "sub6"),
    getItem("Glicemia", "sub7"),
    getItem("Hemacias", "sub8"),
    getItem("Hemoglobina", "sub9"),
    getItem("Índice de Saturacao da Transferrina", "sub10"),
    getItem("Leucocitos", "sub11"),
    getItem("T4 Livre", "sub12"),
    getItem("Triglicerides", "sub13"),
    getItem("TSH Ultra Sensível", "sub14"),
  ]),
  getItem("Table", "2", TableOutlined),
];

const App = () => {
  const [active, setActive] = useState(0);

  return (
    <Layout style={{ minHeight: "100vh", height: "fit-content" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={menu.map((item, index) => ({
            key: String(index),
            icon: React.createElement(item.icon),
            label: `${item.label}`,
            children: item.children,
          }))}
          onClick={({ key }) => setActive(key)}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "60px 60px" }}>
          <div style={{ height: "100%" }}>
            {active !== "1" ? <Chartview /> : <Tableview />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
