import React from 'react'

//布局相关的组件
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout

//导入路由相关的组件
import { Link, Route } from 'react-router-dom'

//导入路由组件页面
import MovieList from './MovieList.jsx'

export default class MovieContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <Layout style={{ height: '100%' }}>
            <Sider style={{ background: '#fff' }}>
                <Menu mode="inline" defaultSelectedKeys={['1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="1">
                        <Link to='/movie/in_theaters/1/ff55df4f0a2e6df7f2cced306fb4912d/3/json' >正在热映</Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Link to='/movie/coming_soon/1/ff55df4f0a2e6df7f2cced306fb4912d/3/json'>即将上映</Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <Link to='/movie/top250/1/ff55df4f0a2e6df7f2cced306fb4912d/3/json'>Top250</Link>
                    </Menu.Item>



                </Menu>
            </Sider>

            {/* <Layout style={{ paddingLeft: '1px' }}></Layout> */}
            <Content style={{ background: '#fff', padding: 10, margin: 0, minHeight: 280 }}>
                {/* 在匹配路由规则的时候，提供了两个参数 */}
                {/* 如果想要从路由规则中，提取参数，需要使用this.props.match.params中获取 */}
                <Route path="/movie/:type/:page/:key/:cityid/:dtype" component={MovieList}></Route>
            </Content>

        </Layout>
    }


}