import React, { useState, FC } from "react";
import { Link, HashRouter, Switch, Route } from 'react-router-dom';
import { Button } from 'antd';
import ComponentOne from "./componentOne";
import ComponentTwo from "./componentTwo";
import ComponentThree from './componentThree';



const App: FC = () => {
    const [name, setName] = useState("zhang.xiaojun");
    function handleOnchange(value) {
        setName(value);
    }
    return <>
        <HashRouter>
            <div>
                <Link to="/one"><Button type="primary">component one</Button></Link>
                  &nbsp;
                <Link to="/two"><Button type="primary">component two</Button></Link>
                &nbsp;
                <Link to="/three"><Button type="primary">component three</Button></Link>
            </div>
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
            </Switch>
        </HashRouter>
    </>;
};
export default App;
