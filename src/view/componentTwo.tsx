import React from 'react';
import { Row, Col, Input } from 'antd';
interface TwoProps {
    name: string;
    setName: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const ComponentTwo: React.SFC<TwoProps> = (props) => {
    function handleOnChange(e) {
        console.log(e.target.value);
        props.setName(e.target.value);
    }
    return <>
        <Row style={{ margin: '25px 0' }}>
            <Col span={8}>
                <h4>Update name:</h4>
            </Col>
        </Row>
        <Row>
            <Col span={8}>
                <Input value={props.name} onChange={handleOnChange} />
            </Col>
        </Row>
        <Row>
            <Col span={8}>
                <span>{props.name}</span>
            </Col>
        </Row>
    </>;
};
export default ComponentTwo;