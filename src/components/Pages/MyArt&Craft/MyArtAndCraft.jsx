import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyCraftViewDetails from "../MyCraftViewDetails/MyCraftViewDetails";


const MyArtAndCraft = () => {

    const { user } = useContext(AuthContext)
    const [myItem, setMyItem] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/myitem/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyItem(data)
            })
    }, [user])


    return (
        <div>
            <div>
                <h2 className="text-3xl">My Art & Craft</h2>
            </div>
            <div className='grid md:grid-cols-2 sm:p-10 mt-12 gap-4 '>
                {
                    myItem?.map(item => <MyCraftViewDetails
                        key={item._id}
                        item={item}
                    ></MyCraftViewDetails>)
                }
            </div>
        </div>
    );
};

export default MyArtAndCraft;