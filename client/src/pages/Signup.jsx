import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        role:"Member"
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

            await API.post("/auth/signup",formData);

            navigate("/");

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
                    Signup
                </h2>

                <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border p-2 mb-4"
                onChange={handleChange}
                />

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

                <select
                name="role"
                className="w-full border p-2 mb-4"
                onChange={handleChange}
                >

                    <option value="Member">Member</option>

                    <option value="Admin">Admin</option>

                </select>

                <button
                className="w-full bg-green-500 text-white p-2 rounded"
                >
                    Signup
                </button>

                <p className="mt-4 text-center">
                    Already have account?
                    <Link
                    to="/"
                    className="text-blue-500 ml-1"
                    >
                        Login
                    </Link>
                </p>

            </form>

        </div>

    )
}

export default Signup