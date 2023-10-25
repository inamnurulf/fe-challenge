import Description from "@/section/description";
import Hero from "@/section/hero";
import Post from "@/section/post";
import User from "@/section/user";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Description />
      <Post />
      <User />
    </main>
  );
}
