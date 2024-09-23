import React, { useState, useEffect } from 'react';
import axios from 'axios';
import wrongIcon from '../assets/wrongIcon.jpg'
import { useParams } from 'react-router-dom';

const FilterDetailsBox = ({ theme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [details, setDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${id}`);
        setDetails(response.data.carDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  if (!details) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className={`p-6 max-w-7xl mx-auto ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} rounded-lg shadow-md`}>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-shrink-0">
          <img 
            src={details.photo} 
            alt={details.name} 
            className="w-full h-full object-cover rounded-lg shadow-md md:w-96 md:h-96"
          />
        </div>

        <div className="flex-1 p-4 space-y-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold border-b-2 pb-2">{details.name}</h2>

          <div className="grid grid-cols-2 gap-6">
            <DetailRow label="Brand" value={details.brand} />
            <DetailRow label="Model" value={details.model} />
            <DetailRow label="Price" value={`$${details.price}`} />
            <DetailRow label="Seller" value={details.seller} />
            <DetailRow label="Performance" value={details.performance} />
            <DetailRow label="Owner" value={details.owner} />
            <DetailRow label="Mileage" value={`${details.miLeg} km`} />
            <DetailRow label="Servicing" value={details.serviving} />
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={openDialog}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Open Card
            </button>

            {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={closeDialog}>
                <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={closeDialog}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  >
                    <img src={wrongIcon} height={40} width={40}/>
                  </button>
                  <h2 className="text-xl font-bold">Seller : {details.miLeg}</h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div>
    <p className="text-xl font-semibold text-gray-600">{label}</p>
    <p className="text-lg font-medium">{value}</p>
  </div>
);

export default FilterDetailsBox;
