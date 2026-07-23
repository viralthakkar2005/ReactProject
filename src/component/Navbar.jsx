import { NavLink } from "react-router-dom";
import { account } from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

function Navbar() {

   const navigate = useNavigate();

    async function handleLogout() {
  try {
    await account.deleteSession("current");

    navigate("/login");
  } catch (error) {
    console.error(error);
  }
}

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        
   
        <h1 className="text-2xl font-bold text-red-600">
          Youtube
        </h1>

        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-600 transition"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/upload"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-600 transition"
            }
          >
            Upload
          </NavLink>
        </div>

        {/* Logout Button */}
        <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;