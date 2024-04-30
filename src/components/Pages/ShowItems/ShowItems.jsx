import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const ShowItems = ({ item }) => {

    const { _id, photo, name, description, price } = item;

    return (
        <div >
            <div className="card bg-base-100 shadow-xl md:p-10">
                <figure><img src={photo}
                    className="w-[300px] h-[300px]"
                /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{description.slice(0, 50)}</p>
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

ShowItems.propTypes = {
    item: PropTypes.array
};

export default ShowItems;