import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {

    const { logInuser, googleSignIn, githubSignIn } = useContext(AuthContext);
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

                if (user) {
                    navigate(location?.state ? location.state : '/');
                }
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
                const user = result.user;
                const name = user.displayName;
                const email = user.email;
                const photo = user.photoURL;

                const userData = {
                    name: name,
                    email: email,
                    photo: photo
                }
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
                if (result.user) {
                    navigate(location?.state ? location.state : '/');
                }
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    const handleGitHubLogIn = () => {
        githubSignIn()
            .then((result) => {

                const user = result.user;

                console.log(user)

            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)
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
                <div className="text-center">
                    <p>If you don't have already an acoount ,<Link to='/registration' className="text-blue-700 underline">please Registration  here</Link> </p>
                </div>
                <div className="">
                    <div className="flex gap-4 justify-center py-4">
                        <button onClick={handleGoogleLogIn}>
                            <FcGoogle className="text-2xl" />
                        </button>
                        <button onClick={handleGitHubLogIn}>
                            <BsGithub className="text-2xl" />
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;