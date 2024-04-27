

const AddItems = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold">Add Add Items</h2>
            <div>
                <form
                    onSubmit={ }
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Item Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <input type="text" name='subcategory' placeholder="Subcategory Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Photo Url</span>
                        </label>
                        <input type="url" name='photo' placeholder="Item Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-primary" type='text' name='description' placeholder="Description" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Price</span>
                        </label>
                        <input type="number" name='price' placeholder="Item Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Item Rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">processing_time
                            </span>
                        </label>
                        <input type="time" name='time' placeholder="processing time" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Rating</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Customization</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Rating</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>stockStatus</option>
                            <option>In stock</option>
                            <option>Made to Order</option>
                        </select>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Items</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddItems;