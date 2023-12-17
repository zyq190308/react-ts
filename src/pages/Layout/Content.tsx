import { Breadcrumb, Layout, theme } from "antd"
import {
  Outlet,
  useLocation,

} from "react-router-dom"

const { Content } = Layout

export default function LayoutContent() {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const { pathname } = useLocation()

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        <Outlet></Outlet>
      </Content>
    </>
  )
}
