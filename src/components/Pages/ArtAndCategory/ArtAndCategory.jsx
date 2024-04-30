// import React from 'react';

import { useLoaderData } from "react-router-dom";
import CategoryVidew from "../CategoryVidew/CategoryVidew";
// import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Fade } from "react-awesome-reveal";

const ArtAndCategory = () => {
    const data = useLoaderData();

    // const [categoryData, setCategoryData] = useState([data])


    const sortDataBysubcategory = (subcategory) => {

        // // const myData = [...categoryData]
        // console.log(subcategory)

        // const filterData = categoryData.filter(i => console.log(i.subcategory))
        // console.log(filterData)


        const filteredData = [];
        for (const item of data) {
            if (item.subcategory_Name === subcategory) {
                // filteredData.push(item);
                console.log(item)
            }
        }
        return filteredData;


    }


    return (
        <div className="md:flex justify-between">

            <div>
                <div className=" py-4 border-b-4">
                    <Fade>
                        <span className="text-3xl font-bold">ArtAndCategory</span>
                    </Fade>
                </div>
                <div className="dropdown dropdown-bottom mt-8">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-600 text-white">Sort By : Ctegory<span>
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
            <div className="grid md:grid-cols-2 gap-4">
                {
                    data?.map(d => <CategoryVidew
                        key={d._id}
                        d={d}
                    ></CategoryVidew>)
                }
            </div>
        </div>
    );
}

export default ArtAndCategory;