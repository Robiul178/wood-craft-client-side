// import React from 'react';

import { useLoaderData } from "react-router-dom";
import ShowItems from "../ShowItems/ShowItems";

const AllItems = () => {

    const items = useLoaderData();
    // console.log(items)


    return (
        <div className="grid md:grid-cols-3 gap-6">
            {
                items.map(item => <ShowItems
                    key={item._id}
                    item={item}
                ></ShowItems>)
            }
        </div>
    );
};

export default AllItems;