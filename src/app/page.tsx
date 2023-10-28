import Description from "@/section/description";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "@/section/hero";
import Post from "@/section/post";
import User from "@/section/user";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scollUpButton";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollToTopButton/>
      <Hero />
      <Description />
      <div className="backgroundsection">
        <Post />
        <User />
      </div>
      <Footer />
      <ToastContainer />
    </main>
  );
}
