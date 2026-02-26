import React from 'react';
import SearchHeader from '../components/SearchHeader';
import PropertyCard from '../components/PropertyCard';
import HandymanCard from '../components/HandymanCard';
import Sidebar from '../components/Sidebar';
import ChatBot from '../components/ChatBot';

const Dashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <SearchHeader />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Sidebar />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', flex: '1' }}>
                    {/* Example of Property Cards */}
                    {[...Array(6)].map((_, idx) => (
                        <PropertyCard key={idx} />
                    ))}
                    {/* Example of Handyman Cards */}
                    {[...Array(3)].map((_, idx) => (
                        <HandymanCard key={idx} />
                    ))}
                </div>
            </div>
            <ChatBot />
        </div>
    );
};

export default Dashboard;
