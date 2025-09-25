'use client'
import ChooseUs from "./Components/ChooseUs";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Package from "./Components/Package";




export default function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    <Package />
    <ChooseUs />
    </>
  );
}