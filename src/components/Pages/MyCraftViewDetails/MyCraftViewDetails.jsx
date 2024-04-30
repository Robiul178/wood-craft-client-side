// import { useContext } from 'react';
// import { AuthContext } from '../../AuthProvider/AuthProvider';

import { Link } from "react-router-dom";
import swal from "sweetalert";

const MyCraftViewDetails = ({ item, setMyItem, myItem }) => {
    const { _id, photo, name, customization, stockStatus, rating, price } = item;


    const handleDelete = _id => {


        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`https://wood-wonders-server.vercel.app/items/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Poof! Your  item has been deleted!", {
                                    icon: "success",
                                });
                                const remaining = myItem.filter(i => i._id != _id)
                                setMyItem(remaining);
                            }
                        })


                } else {
                    swal("Your imaginary file is safe!");
                }
            });







    }




    return (
        <div >
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-xl font-bold font-mono">Price: ${price}</p>

                    <div className="flex py-0">
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

                    <p className="py-0">Customization: {customization}</p>
                    <p className="text-green-600"> {stockStatus}</p>

                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">
                            <Link to={`/update/${_id}`}>Update</Link>
                        </button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline">Delete</button>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyCraftViewDetails;