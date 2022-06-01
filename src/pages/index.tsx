import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import { Loader } from "@/components/Loader";
import { Logos } from "@/components/Logos";
import { Products } from "@/components/Products";
import { Quality } from "@/components/Quality";
import Speciality from "@/components/Speciality";

function DefaultPage() {
  return (
    <>
      <Header />
      <Loader />

      <main>
        <Home />
        <Speciality />
        <Products />
        <Quality />
        <Logos />
        <Blog />
      </main>

      <Footer />
    </>
  )
}

export default DefaultPage;