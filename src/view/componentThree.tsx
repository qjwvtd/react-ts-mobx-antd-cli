import React from 'react';
import { Row, Col, Input } from 'antd';
import { observer } from 'mobx-react';
import store from '@/common/store/index';

const ComponentThree = observer(() => {
    function handleAddress(e: { target: { value: string; }; }) {
        store.setAddress(e.target.value);
    }
    return <>
        <Row>
            <Col span={8} offset={8}>
                <h4>Mobx Exzample</h4>
            </Col>
        </Row>
        <Row style={{ margin: '15px 0' }}>
            <Col span={8} offset={8}>
                <Input value={store.address} onChange={handleAddress} />
            </Col>
        </Row>
        <Row>
            <Col span={8} offset={8}>
                {store.address}
            </Col>
        </Row>
    </>;
});
export default ComponentThree;