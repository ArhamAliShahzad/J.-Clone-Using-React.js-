import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        toast.success('Logged out successfully');
        navigate('/signin');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                        Logout
                    </button>
                </div>

                {user && (
                    <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h2 className="text-xl font-semibold">Welcome, {user.firstName}!</h2>
                            <p className="text-gray-600">You're successfully logged in.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg">
                                <h3 className="font-medium">Your Email</h3>
                                <p>{user.email}</p>
                            </div>
                            <div className="p-4 bg-purple-50 rounded-lg">
                                <h3 className="font-medium">Username</h3>
                                <p>{user.username}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Dashboard;