import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";


const Registration = () => {

    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleUserInfo = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');


        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, { displayName: name, photoURL: photo }).then(() => {
                    console.log(user)
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

        form.reset();
    }




    return (
        <div>
            <div className="max-w-[800px] mx-auto mt-12">
                <h2 className="text-4xl font-bold text-center"> Registration Here</h2>
                <div>
                    <form
                        onSubmit={handleUserInfo}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;