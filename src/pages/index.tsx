import Header from "@/components/Header";
import Home from "@/components/Home";
import Speciality from "@/components/Speciality";

function DefaultPage() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <Speciality />
      </main>
    </>
  )
}

export default DefaultPage;
