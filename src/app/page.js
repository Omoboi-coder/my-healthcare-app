'use client'
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Package from "./Components/Package";
import ChooseUs from "./Components/ChooseUs";
import GetInTouch from "./Components/GetInTouch";
import Footer from "./Components/Footer";




export default function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    <Package />
    <ChooseUs />
    <GetInTouch />
    <Footer />
    </>
  );
}