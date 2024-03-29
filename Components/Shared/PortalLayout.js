import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, CarOutlined, UserOutlined, TagsOutlined, SnippetsOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
import Router from 'next/router';
import Cookies from 'js-cookie';

const PortalLayout = ({children}) => {

  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Layout className='portal-layout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        {!collapsed && <h5 className='my-4 text-center white-txt'>Welcome</h5> }
        {collapsed && <div style={{minHeight:72}}></div> }
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onSelect={(x)=>{
            if(x.key=='1'){ Router.push('/portal/dashboard')
            } else if(x.key=='2'){ Router.push('/portal/tourCreation') }
          }}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <SnippetsOutlined />,
              label: 'Tours',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <span style={{marginLeft:12, cursor:'pointer'}} onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
          </span>
          <span className='mx-4' style={{float:'right', cursor:'pointer'}}
            onClick={()=>{
                Cookies.remove('token');
                Cookies.remove('username');
                Cookies.remove('loginId');
                Router.push('/login');
            }}
          >Logout</span>
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default PortalLayout;