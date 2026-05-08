import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const {data} = await API.post("/auth/login",formData);

            localStorage.setItem("token",data.token);

            navigate("/dashboard");

        } catch (error) {
            alert(error.response.data.message);
        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-96"
            >

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Login
                </h2>

                <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border p-2 mb-4"
                onChange={handleChange}
                />

                <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border p-2 mb-4"
                onChange={handleChange}
                />

                <button
                className="w-full bg-blue-500 text-white p-2 rounded"
                >
                    Login
                </button>

                <p className="mt-4 text-center">
                    No account?
                    <Link
                    to="/signup"
                    className="text-blue-500 ml-1"
                    >
                        Signup
                    </Link>
                </p>

            </form>

        </div>

    )
}

export default Login