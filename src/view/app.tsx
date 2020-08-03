import React, { useState, FC } from "react";
import { Link, HashRouter, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Row, Col } from 'antd';
import ComponentOne from "./componentOne";
import ComponentTwo from "./componentTwo";
import ComponentThree from './componentThree';
import ComponentFour from './componentFour';
const { Header, Content } = Layout;



const App: FC = () => {
    const [name, setName] = useState("zhang.xiaojun");
    function handleOnchange(value) {
        setName(value);
    }
    return <>
        <HashRouter>
            <Layout>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to="/one">nav one</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/two">nav two</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/three">nav three</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/four">nav four</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <Row>
                        <Col span={20} offset={1}>
                            <Switch>
                                <Route exact path={'/one'}>
                                    <ComponentOne name={name} />
                                </Route>
                                <Route path={'/two'}>
                                    <ComponentTwo name={name} setName={handleOnchange} />
                                </Route>
                                <Route path={'/three'}>
                                    <ComponentThree name={name} />
                                </Route>
                                <Route path={'/four'}>
                                    <ComponentFour age={25} />
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </HashRouter>
    </>;
};
export default App;
