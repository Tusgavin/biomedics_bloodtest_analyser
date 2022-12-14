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
    getItem("Colesterol HDL", "colesterolHDL"),
    getItem("Colesterol LDL", "colesterolLDL"),
    getItem("Colesterol não-LDL", "colesterolNaoLDL"),
    getItem("Colesterol Total", "colesterolTotal"),
    getItem("Colesterol VLDL", "colesterolVLDL"),
    getItem("Creatinina", "creatinina"),
    getItem("Glicemia", "glicemia"),
    getItem("Hemacias", "hemacias"),
    getItem("Hemoglobina", "hemoglobina"),
    getItem(
      "Índice de Saturacao da Transferrina",
      "indiceDeSaturacaoDaTransferrina"
    ),
    getItem("Plaquetas", "plaquetas"),
    getItem("Leucocitos", "leucocitos"),
    getItem("T4 Livre", "tQuatroLivre"),
    getItem("Triglicerides", "triglicerides"),
    getItem("TSH Ultra Sensível", "tshUltraSensivel"),
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
            {active !== "1" ? <Chartview exam={active} /> : <Tableview />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
