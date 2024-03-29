import { UserButton } from "@clerk/nextjs";
import HomePage from "../components/Home";

export default function Home() {
  return (
   <>
   <HomePage/>
   <UserButton/>
   </>
  );
}
