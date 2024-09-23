import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Link } from "react-router-dom"

const FilterDetailsBox = ({ theme }) => {
  const [state, setState] = useState(false);
  const { id } = useParams();
  const [details, setDetails] = useState(null); // Initialize as null to handle loading state

  useEffect(() => {
    setState(theme === "dark");
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

  if (!details) {
    return <div className="text-center text-xl">Loading...</div>; // Loading state
  }

  return (
    <div className={`p-6 max-w-7xl mx-auto ${state ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} rounded-lg shadow-md`}>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img 
            src={details.photo} 
            alt={details.name} 
            className="w-full h-full object-cover rounded-lg shadow-md md:w-96 md:h-96"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 p-4 space-y-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold border-b-2 pb-2">{details.name}</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xl font-semibold text-gray-600">Brand</p>
              <p className="text-lg font-medium">{details.brand}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-600">Model</p>
              <p className="text-lg font-medium">{details.model}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-600">Price</p>
              <p className="text-lg font-medium">${details.price}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-600">Seller</p>
              <p className="text-lg font-medium">{details.seller}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-600">Performance</p>
              <p className="text-lg font-medium">{details.performance}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-600">Owner</p>
              <p className="text-lg font-medium">{details.owner}</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-600">Mileage</p>
              <p className="text-lg font-medium">{details.miLeg} km</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-600">Servicing</p>
              <p className="text-lg font-medium">{details.serviving}</p>
            </div>
          </div>
       
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
       
        </div>
      </div>
    </div>
  );
};

export default FilterDetailsBox;
