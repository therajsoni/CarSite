import { createContext, useState } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  // const [price, setPrice] = useState(null);
  // const [brand, setBrand] = useState(null);
  // const [typeOwner, setTypeOwner] = useState(null);
  // const [year, setYear] = useState(null);
  // const [performance, setPerformance] = useState(null);
  // const [owner, setOwner] = useState(null);
  // const [mileag, setMileag] = useState(null);
  // const [servicing, setServicing] = useState(null);

  // const value = {
  //   price,
  //   setPrice,
  //   brand,
  //   setBrand,
  //   typeOwner,
  //   setTypeOwner,
  //   year,
  //   setYear,
  //   performance,
  //   setPerformance,
  //   owner,
  //   setOwner,
  //   mileag,
  //   setMileag,
  //   servicing,
  //   setServicing,
  // };

  const [filters, setFilters] = useState({
    price: '',
    category: '',
    brand: '',
    seller: '',
    performance: '',
    owner: '',
    model: '',
});

// const [carDetails ,setCarDetils] = useState([])

const value = {filters,setFilters}

  return <BioContext.Provider value={value}>{children}</BioContext.Provider>;
};
