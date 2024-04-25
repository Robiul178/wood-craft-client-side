import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {

    const { logInuser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleLOgIn = event => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const email = form.get('email')
        const password = form.get('password')

        logInuser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                alert('User Log In successfully')
                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)
            });

    };

    const handleGoogleLogIn = (e) => {
        e.preventDefault()

        googleSignIn()
            .then(result => {
                console.log(result)
                // if (result.user) {
                //     navigate(location?.state ? location.state : '/');
                // }
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }



    return (
        <div className="max-w-[800px] mx-auto mt-12">
            <h2 className="text-4xl font-bold text-center"> LogIn Here</h2>
            <div>
                <form
                    onSubmit={handleLOgIn}
                    className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Log In</button>
                    </div>
                </form>

                <div className="">
                    <div className="flex gap-4">
                        <button onClick={handleGoogleLogIn}>
                            <FcGoogle className="text-2xl" />
                        </button>

                        <BsGithub className="text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;