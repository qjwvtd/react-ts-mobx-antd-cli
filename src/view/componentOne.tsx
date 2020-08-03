import React from 'react';
import { observer } from 'mobx-react';
import { Card } from 'antd';
import store from '@/common/store/index';

interface Name {
    name: string
}

const ComponentOne: React.FC<Name> = observer(({ name }) => {
    return <>
        <Card title="title" extra={<a>More</a>} style={{ width: 300 }}>
            <h4>{name}</h4>
            <p>{store.address}</p>
        </Card>
    </>;
});
export default ComponentOne;