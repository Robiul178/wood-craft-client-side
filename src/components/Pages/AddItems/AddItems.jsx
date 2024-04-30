import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddItems = () => {

    const { user } = useContext(AuthContext)
    const userName = user.displayName;
    const userEmail = user.email;

    const handleAddItem = e => {
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

        const itemsDetails = {
            name: itemNAme,
            subcategory: subcategory,
            photo: photo,
            description: description,
            price: price,
            rating: rating,
            time: time,
            customization: customization,
            stockStatus: stockStatus,
            userName: userName,
            email: userEmail
        }


        fetch('https://wood-wonders-server.vercel.app/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemsDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Items Add Successfully')

                }
            })

        form.reset();
    }

    return (
        <div>
            <h2 className="text-center text-4xl font-bold">Add Add Items</h2>
            <div>
                <form
                    onSubmit={handleAddItem}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name='itemName' placeholder="Item Name" className="input input-bordered" required />
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
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea className="textarea textarea-primary" type='text' name='description' placeholder="short Description" />
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
                        <input type="text" name='time' placeholder="processing time / week" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Customization
                            </span>
                        </label>
                        <input type="text" name='customization' placeholder="Yes or No" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email
                            </span>
                        </label>
                        <input type="email" name='email'
                            placeholder={user.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name
                            </span>
                        </label>
                        <input type="text" name='name' placeholder={user.displayName} className="input input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item stockStatus</span>
                        </label>
                        <input type="text" name='stockStatus' placeholder="Stock Status" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Items</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddItems;