import React from "react"
import { Layout } from "antd"

import Header from "./Header"
import Sider from "./Sider"
import Content from "./Content"

const App: React.FC = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header />
      <Layout>
        <Sider />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
