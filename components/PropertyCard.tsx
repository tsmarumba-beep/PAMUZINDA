import React from 'react';
import { Bus, Walking, CheckCircle } from 'lucide-react';

const PropertyCard = ({ rent, proximity, verified }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Monthly Rent: ${rent}</h2>
        {verified && (
          <span className="flex items-center text-green-500">
            <CheckCircle className="mr-1" /> Verified Landlord
          </span>
        )}
      </div>
      <div className="mt-2 flex space-x-4">
        <span className="flex items-center text-gray-600">
          <Bus className="mr-1" /> {proximity.bus} min to bus stop
        </span>
        <span className="flex items-center text-gray-600">
          <Walking className="mr-1" /> {proximity.walk} min to walking path
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;