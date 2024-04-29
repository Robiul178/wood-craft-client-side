// import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const data = useLoaderData();
    const { id } = useParams()
    // console.log(email, data[1].userEmail)

    // const email = 

    const item = data?.find(i => i._id == id);
    const { customization, description, name, photo, price, rating, stockStatus, subcategory, time } = item;



    return (
        <div>
            <div className="px-10 py-12">
                <div className="flex gap-6 mb-4">
                    <div className="w-[900px]">
                        <img src={photo} alt="" className="w-[80%]  h-full" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-2">{name}</h2>
                        <div className="flex py-4">

                            <span>
                                <h2 className="text-lg mb-2"><span className="font-semibold">{rating}</span></h2>
                            </span>
                            <span>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </span>
                        </div>
                        <p className="text-xl font-bold font-mono">Price: ${price}</p>
                        <div className="pb-2">
                            <p className="font-thin">Delivery: {time} weeks</p>
                        </div>
                        <p className="py-2">Subcategory: {subcategory}</p>
                        <p className="py-4">
                            {description}
                        </p>
                        <p className="py-2">Customization: {customization}</p>
                        <p className="text-green-600"> {stockStatus}</p>
                        <div className="mt-12">
                            <button className="btn btn-outline btn-secondary mr-4">Add To Cart</button>
                            <button className="btn btn-outline btn-accent">
                                <HiOutlineShoppingBag />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;