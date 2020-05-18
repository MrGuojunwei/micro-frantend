import { Layout, Menu, Icon, Breadcrumb } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Container } from '@/components'
import { microInit } from '@/qiankun'
import { StaticRouter } from 'react-router-dom'
const { Header, Sider, Content } = Layout

class SystemLayout extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    microInit() // 子应用初始化
  }

  routeChange = path => {
    this.props.history.push('/system' + path)
  }

  render () {
    return (
      <Layout>
        <HeaderLayout>
          <Logo></Logo>
          <Menu theme='dark' mode='horizontal' style={{ lineHeight: '64px' }}>
            <MenuItem key='1' onClick={() => this.routeChange('/app1')}>
              app1
            </MenuItem>
            <MenuItem key='2' onClick={() => this.routeChange('/app2')}>
              app2
            </MenuItem>
            <MenuItem key='3'>nav 3</MenuItem>
          </Menu>
        </HeaderLayout>
        <Layout>
          <SiderLayout>
            <Menu
              mode='inline'
              theme='dark'
              style={{ height: '100%' }}
              defaultOpenKeys={['1-1']}
            >
              <SubMenu
                key='1-1'
                title={
                  <span>
                    <Icon type='mail' />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <MenuItem
                  key='1'
                  onClick={() => {
                    this.routeChange('/app1/user')
                  }}
                >
                  用户管理
                </MenuItem>
                <MenuItem
                  key='2'
                  onClick={() => {
                    this.routeChange('/app1/role')
                  }}
                >
                  角色管理
                </MenuItem>
                <MenuItem
                  key='3'
                  onClick={() => {
                    this.routeChange('/app2/menu')
                  }}
                >
                  菜单管理
                </MenuItem>
                <MenuItem
                  key='4'
                  onClick={() => {
                    this.routeChange('/app2/user')
                  }}
                >
                  app2-用户管理
                </MenuItem>
              </SubMenu>
            </Menu>
          </SiderLayout>
          <ContentLayout>
            <BreadcrumbWrap>
              <Container>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>Application Center</Breadcrumb.Item>
                  <Breadcrumb.Item>Application List</Breadcrumb.Item>
                  <Breadcrumb.Item>An AppFlication</Breadcrumb.Item>
                </Breadcrumb>
              </Container>
            </BreadcrumbWrap>
            <ContentWrap id='container'></ContentWrap>
          </ContentLayout>
        </Layout>
      </Layout>
    )
  }
}

export default SystemLayout

const siderWidth = '200px'
const headerHeight = '64px'

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
`

const HeaderLayout = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${headerHeight};
`

const SiderLayout = styled(Sider)`
  position: fixed;
  top: ${headerHeight};
  left: 0;
  bottom: 0;
  width: ${siderWidth};
`

const ContentLayout = styled(Content)`
  position: fixed;
  top: ${headerHeight};
  left: ${siderWidth};
  right: 0;
  bottom: 0;
  background-color: #ececec;
`

const BreadcrumbWrap = styled.div`
  margin: 20px 20px 0 20px;
`

const ContentWrap = styled.div`
  padding: 20px;
`
