import Image from "next/image";
import Header from "./ui/header";
import Footer from "./ui/footer";

export default function Page({ children }) {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
