import React, { useEffect, Fragment } from 'react';
import { Row, Col } from 'antd';
import { loadingModal } from '@/common/utils/loadingModal';


const ComponentFive: React.FC = () => {
    useEffect(() => {
        loadingModal.start('开始loading...');
        setTimeout(() => {
            loadingModal.end();
        }, 3000);
    }, []);
    return <Fragment>
        <Row style={{ marginTop: '25px' }}>
            <Col span={8}>
                <h4>在.ts中使用.js</h4>
            </Col>
        </Row>
    </Fragment>;
};
export default ComponentFive;

