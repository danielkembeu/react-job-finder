import React from 'react';
import JobItem from './item';

export default function JobRenderer({ items }) {

    const [datas, setDatas] = React.useState();

    React.useEffect(() => {
        if (items)
            setDatas(items)
    }, [items]);

    return (
        <div>
            {/* Mapping the received datas (props) to render the JobItem component */}
            {datas?.map((item, index) => (<JobItem key={index} informations={item} />))}
        </div>
  )
}
