import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

        const userData = {
            name: name,
            email: email,
            photo: photo,
            password: password
        }

        if (password.length < 6) {
            toast('Password must have 6 character');
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast('Password must have 1 Upparcase character');
            return;
        } else if (!/[a-z]/.test(password)) {
            toast('Password must have 1 lowercase character');
            return;
        }

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

        fetch('https://wood-wonders-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('from registration', data)
            })
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
                    <div className="text-center">
                        <p>If you have already an acoount ,<Link to='/login' className="text-blue-700 underline">please login here</Link> </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;