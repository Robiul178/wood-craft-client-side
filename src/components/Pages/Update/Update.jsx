// import React from 'react';

import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {

    const data = useLoaderData()
    // console.log(data)
    const { _id, name,
        subcategory,
        photo,
        description,
        price,
        rating,
        time,
        customization,
        stockStatus } = data;

    const handleUpdateButton = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const itemNAme = form.get('itemName');
        const subcategory = form.get('subcategory');
        const photo = form.get('photo');
        const description = form.get('description');
        const price = form.get('price');
        const rating = form.get('rating');
        const time = form.get('time');
        const customization = form.get('customization');
        const stockStatus = form.get('stockStatus');

        const updateItem = {
            name: itemNAme,
            subcategory: subcategory,
            photo: photo,
            description: description,
            price: price,
            rating: rating,
            time: time,
            customization: customization,
            stockStatus: stockStatus
        }
        form.reset();

        fetch(`http://localhost:5000/items/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


    }



    return (
        <div>
            <h2>Update</h2>
            <div>
                <form
                    onSubmit={handleUpdateButton}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name='itemName' placeholder={name} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <input type="text" name='subcategory' placeholder={subcategory} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Photo Url</span>
                        </label>
                        <input type="url" name='photo' placeholder={photo} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea className="textarea textarea-primary" type='text' name='description' placeholder={description} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Price</span>
                        </label>
                        <input type="number" name='price' placeholder={price} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder={rating} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">processing_time
                            </span>
                        </label>
                        <input type="text" name='time' placeholder={time} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Customization
                            </span>
                        </label>
                        <input type="text" name='customization' placeholder={customization} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item stockStatus</span>
                        </label>
                        <input type="text" name='stockStatus' placeholder={stockStatus} className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Items</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;