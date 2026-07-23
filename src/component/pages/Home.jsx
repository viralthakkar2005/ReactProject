import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite/auth";
import Button from "../Button";

export default function Home() {

  const navigate = useNavigate();

   useEffect(() => {
    async function checkUser() {
      try {
        await account.get();
      } catch (error) {
        navigate("/login");
      }
    }

    checkUser();
  }, []);


  async function handleLogout() {
  try {
    await account.deleteSession("current");

    navigate("/login");
  } catch (error) {
    console.error(error);
  }
}

  return (
    <div>
      Home
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}
