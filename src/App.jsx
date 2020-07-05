//这是项目的根组件

import React from 'react'

// 导入路由组件
import { HashRouter, Route, Link } from 'react-router-dom'

// 导入需要的ant 组件
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

//导入模块化的样式
import styles from './css/app.scss'

//导入路由相关的组件页面
import HomeContainer from './components/home/HomeContainer.jsx'
import MovieContainer from './components/movie/MovieContainer.jsx'
import AboutContainer from './components/about/AboutContainer.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        console.log(window.location.hash.split('/'))

    }

    render() {
        return <HashRouter>
            <Layout className="layout" style={{ height: '100%' }}>

                {/* 这是头部区 */}
                <Header>
                    <div className="styles.logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split('/')[1]]}>
                        <Menu.Item key="1">
                            <Link to='/home'>首页 </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/movie/in_theaters/1'>
                                电影
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/about'>
                                关于
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>

                {/* 这是中间内容区 */}
                <Content style={{ backgroundColor: '#fff' }}>
                    <Route path="/home" component={HomeContainer}></Route>
                    <Route path="/movie" component={MovieContainer}></Route>
                    <Route path="/about" component={AboutContainer}></Route>
                </Content>

                {/* 这是底部区 */}
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </HashRouter>
    }


}