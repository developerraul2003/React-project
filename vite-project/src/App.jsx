import React from "react";
import { Card, Footer, Header } from "./components";
import {Buildingcard} from "./components";

const salesData = [
  {
    price: "290.000 $",
    title: "Apartment for sale",
    location: "London, Oxford St.",
    date: "26 November 2020",
    room: "3+1",
    floor: 10,
    size: "150 m²",
  },
  {
    price: "290.000 $",
    title: "Apartment for sale",
    location: "London, Oxford St.",
    date: "26 November 2020",
    room: "3+1",
    floor: 10,
    size: "150 m²",
  },
  {
    price: "290.000 $",
    title: "Apartment for sale",
    location: "London, Oxford St.",
    date: "26 November 2020",
    room: "3+1",
    floor: 10,
    size: "150 m²",
  },
  {
    price: "290.000 $",
    title: "Apartment for sale",
    location: "London, Oxford St.",
    date: "26 November 2020",
    room: "3+1",
    floor: 10,
    size: "150 m²",
  },
  {
    price: "290.000 $",
    title: "Apartment for sale",
    location: "London, Oxford St.",
    date: "26 November 2020",
    room: "3+1",
    floor: 10,
    size: "150 m²",
  },
];
const rentalData = [
  {
    price: "3.000 $",
    title: "Apartment for rent",
    location: "London, John Ruskin St.",
    date: "20 November 2020",
    room: "2+1",
    floor: 7,
    size: "110 m²",
  },
  {
    price: "3.000 $",
    title: "Apartment for rent",
    location: "London, John Ruskin St.",
    date: "20 November 2020",
    room: "2+1",
    floor: 7,
    size: "110 m²",
  },
  {
    price: "3.000 $",
    title: "Apartment for rent",
    location: "London, John Ruskin St.",
    date: "20 November 2020",
    room: "2+1",
    floor: 7,
    size: "110 m²",
  },
  {
    price: "3.000 $",
    title: "Apartment for rent",
    location: "London, John Ruskin St.",
    date: "20 November 2020",
    room: "2+1",
    floor: 7,
    size: "110 m²",
  },
  {
    price: "3.000 $",
    title: "Apartment for rent",
    location: "London, John Ruskin St.",
    date: "20 November 2020",
    room: "2+1",
    floor: 7,
    size: "110 m²",
  },
 
];

function App() {
  const listItem = ["For Sale", "For Rent", "Daily Rental", "Projects"];
  return (
    <>
      <Header lists={listItem} />
      <Card header="Featured Sales" cards={salesData} image={true} />
      
      <Card header="Featured Rental" cards={rentalData} image={false} />
      <Buildingcard />
      <Footer />
    </>
  );
}
export default App;
