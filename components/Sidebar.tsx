import {  House, PlusCircle, Wrench, CheckSquare } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white">
            <h1 className="text-xl font-bold p-4">Landlord Management</h1>
            <ul className="space-y-2 p-4">
                <li className="flex items-center">
                    <House className="mr-2" />
                    <a href="/my-listings" className="hover:underline">My Listings</a>
                </li>
                <li className="flex items-center">
                    <PlusCircle className="mr-2" />
                    <a href="/add-property" className="hover:underline">Add Property</a>
                </li>
                <li className="flex items-center">
                    <Wrench className="mr-2" />
                    <a href="/maintenance-requests" className="hover:underline">Maintenance Requests</a>
                </li>
                <li className="flex items-center">
                    <CheckSquare className="mr-2" />
                    <a href="/verify-handyman" className="hover:underline">Verify Handyman</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;