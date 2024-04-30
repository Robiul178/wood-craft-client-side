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



    const onClickYes = c => {
        console.log(myItem, c)
        const myItems = myItem?.find(i => i.customization == c);
        // setMyItem[...myItem,myItems]
    }

    return (
        <div>
            <div>
                <h2 className="text-3xl">My Art & Craft {myItem?.length}</h2>
            </div>
            <div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => onClickYes('Yes')}>Yes</a></li>
                        {/* <li><a onClick={() => onClickNo()}>No</a></li> */}
                    </ul>
                </div>
            </div>
            <div className='grid md:grid-cols-2 sm:p-10 mt-12 gap-4 '>
                {
                    myItem?.map(item => <MyCraftViewDetails
                        key={item._id}
                        item={item}
                        myItem={myItem}
                        setMyItem={setMyItem}
                    ></MyCraftViewDetails>)
                }
            </div>
        </div>
    );
};

export default MyArtAndCraft;