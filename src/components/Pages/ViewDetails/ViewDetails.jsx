// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const data = useLoaderData();
    const { id } = useParams()
    // console.log(id, data[1]._id)

    const item = data?.find(i => i._id == id);
    const { customization, description, name, photo, price, rating, stockStatus, subcategory, time } = item;



    return (
        <div>
            <div className="px-10 py-12">
                <div className="flex gap-6 mb-4">
                    <div className="w-[900px]">
                        <img src={photo} alt="" className="w-full h-screen" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-2">{name}</h2>
                        <div className="flex justify-between border p-3">
                            <h2 className="text-lg mb-2">Rating: <span className="font-semibold">{rating}</span></h2>
                            <p>customization: {customization}</p>
                        </div>
                        <span className="flex justify-between my-4 border p-3">
                            <p>stockStatus: {stockStatus}</p>
                            <p>subcategory: {subcategory}</p>
                        </span>
                        <p className="mt-4"> <span className="font-semibold">Price: $</span> {price}</p>
                        <p className="font-bold">Time: {time} week</p>
                    </div>

                </div>
                <p>
                    <span className="font-bold">Description : </span>
                    {description}
                </p>

            </div>
        </div>
    );
};

export default ViewDetails;