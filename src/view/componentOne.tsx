import React from 'react';
import { Card } from 'antd';

interface Name {
    name: string
}

const ComponentOne: React.SFC<Name> = (props) => {
    return <>
        <Card title="title" extra={<a>More</a>} style={{ width: 300 }}>
            <p>{props.name}</p>
        </Card>
    </>;
};
export default ComponentOne;