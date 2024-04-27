import { Link } from "react-router-dom";


const ShowItems = ({ item }) => {

    const { _id, photo, name, description, price } = item;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={photo} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{description}</p>
                    <p className="font-bold">${price}</p>
                </div>
                <div>
                    <Link
                        to={`/viewDetais/${_id}`}
                    >
                        <button className="border p-4 hover:bg-white hover:text-black">View Properties</button></Link>

                </div>
            </div>
        </div >
    );
};

export default ShowItems;