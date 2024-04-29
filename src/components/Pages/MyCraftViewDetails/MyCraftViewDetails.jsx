

const MyCraftViewDetails = ({ item }) => {
    const { photo, name, customization, stockStatus, rating, price } = item;

    const handleDeleteButton = () => {
        console.log('deleted')
    }
    const handleUpdateButton = () => {
        console.log('updated')
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
                        <button onClick={handleUpdateButton} className="btn btn-primary">Update</button>
                        <button onClick={handleDeleteButton} className="btn btn-outline">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyCraftViewDetails;