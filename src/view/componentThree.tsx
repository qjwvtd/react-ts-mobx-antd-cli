import React from 'react';
import { Row, Col, Input } from 'antd';
import { observer } from 'mobx-react';
import store from '@/common/store/index';

interface ThreeName {
    name: string
}

const ComponentThree: React.SFC<ThreeName> = observer(({ name }) => {
    function handleAddress(e: { target: { value: string; }; }) {
        store.setAddress(e.target.value);
    }
    return <>
        <Row style={{ marginTop: '25px' }}>
            <Col span={8}>
                <h4>Mobx Exzample</h4>
            </Col>
        </Row>
        <Row style={{ margin: '25px 0' }}>
            <Col span={8}>
                <Input value={store.address} onChange={handleAddress} />
            </Col>
        </Row>
        <Row>
            <Col span={8}>
                <h4>{name}</h4>
                {store.address}
            </Col>
        </Row>
    </>;
});
export default ComponentThree;