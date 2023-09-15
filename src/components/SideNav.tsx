import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const route = useLocation();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (route.pathname === "/") {
      const searchInput: HTMLInputElement | null = document.querySelector(
        'input[name="searchInput"]'
      );
      searchInput?.focus();
    } else {
      navigate("/");
    }
  };
  return (
    <div className=" flex flex-col h-screen bg-gradient-to-b from-primary to-secondary p-4 text-white text-[20px]">
      <h1 className="text-2xl font-bold mb-4">
        <FontAwesomeIcon icon={faUser} />
      </h1>
      <div className="flex-1 flex flex-col justify-center">
        <ul className="text-center flex gap-2 flex-col">
          <li className="mb-2 cursor-pointer" onClick={handleSearch}>
            <FontAwesomeIcon
              data-testid="search-icon"
              icon={faMagnifyingGlass}
            />
          </li>
          <li className="mb-2 cursor-pointer">
            <Link to={"/"}>
              <FontAwesomeIcon data-testid="home-icon" icon={faHouse} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
