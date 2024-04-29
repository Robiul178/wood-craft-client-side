import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ShowItems from '../ShowItems/ShowItems'


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
            <h2>My Art and craft:{myItem.length}</h2>

            <div className='grid md:grid-cols-3 sm:p-10 mt-12 gap-4 '>
                {
                    myItem?.map(item => <ShowItems
                        key={item._id}
                        item={item}
                    ></ShowItems>)
                }
            </div>
        </div>
    );
};

export default MyArtAndCraft;