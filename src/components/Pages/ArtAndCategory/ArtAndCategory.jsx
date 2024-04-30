// import React from 'react';

import { useLoaderData } from "react-router-dom";
import CategoryVidew from "../CategoryVidew/CategoryVidew";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ArtAndCategory = () => {
    const data = useLoaderData();

    const [categoryData, setCategoryData] = useState(data)


    const sortDataBysubcategory = (subcategory) => {


        useEffect(() => {
            fetch(`https://wood-wonders-server.vercel.app/myitem/${subcategory}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }, [])

    }



    return (
        <div>
            <h2>ArtAndCategory{data?.length}</h2>

            <div>
                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-600 text-white">Sort By <span>
                        <IoIosArrowDown className='text-2xl' /></span> </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => sortDataBysubcategory('Wooden Furniture & Sculptures')}><a>Wooden Furniture & Sculptures</a></li>
                        <li onClick={() => sortDataBysubcategory('Wooden Home Decor')}><a>Wooden Home Decor</a></li>
                        <li onClick={() => sortDataBysubcategory('Wooden Utensils and Kitchenware')}><a>Wooden Utensils and Kitchenware</a></li>
                        <li onClick={() => sortDataBysubcategory('Jute Home Decor')}><a>Jute Home Decor</a></li>
                        <li onClick={() => sortDataBysubcategory('Jute Kitchenware & utensils')}><a>Jute Kitchenware & utensils</a></li>
                        <li onClick={() => sortDataBysubcategory('Jute and wooden jewellery')}><a>Jute and wooden jewellery</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    data?.map(d => <CategoryVidew
                        categoryData={categoryData}
                        setCategoryData={setCategoryData}
                        key={d._id}
                        d={d}
                    ></CategoryVidew>)
                }
            </div>
        </div>
    );
}

export default ArtAndCategory;