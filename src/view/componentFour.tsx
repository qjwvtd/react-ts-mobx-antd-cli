import React, { useState, useEffect, Fragment } from 'react';
import { Row, Col } from 'antd';
interface Props {
    age: number
}
const ComponentFour: React.FC<Props> = (props) => {
    const [name, setName] = useState<string>('Example Name');
    const [text, setText] = useState<string | null>(null);
    const [company, setCompany] = useState<{ name: string, address: string }>({
        name: 'xxx公司',
        address: '成都市XX区XX街道'
    });
    useEffect(() => {
        setTimeout(() => {
            setName('Test Name');
            setText('Test Text');
            setCompany({
                name: '牛逼的公司',
                address: '成都市武侯区外双楠街道'
            });
        }, 3000);
    }, []);
    return <Fragment>
        <Row style={{ marginTop: '25px' }}>
            <Col span={8}>
                <h4>hooks和typescript的结合</h4>
            </Col>
        </Row>
        <Row style={{ marginTop: '25px' }}>
            <Col span={8}>
                <h4>{name}</h4>
                <p>{props.age}</p>
            </Col>
        </Row>
        <Row style={{ marginTop: '25px' }}>
            <Col span={8}>
                <h4>{text}</h4>
            </Col>
        </Row>
        <Row style={{ marginTop: '25px' }}>
            <Col span={8}>
                <h4>{company.name}</h4>
                <p>{company.address}</p>
            </Col>
        </Row>
    </Fragment>;
};
export default ComponentFour;

