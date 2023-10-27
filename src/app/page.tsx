import Description from "@/section/description";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from "@/section/hero";
import Post from "@/section/post";
import User from "@/section/user";
import Footer from "@/components/footer";
import "./globals.css"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Description />
      <Post />
      <User />
      <Footer/>
      <ToastContainer />
    </main>
  );
}
