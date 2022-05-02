import "../styles/nav.css";
import { FiBookOpen, FiBook } from "react-icons/fi";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { BsBox, BsStar } from "react-icons/bs";
const Nav = ({reposList}) => {
  return (
    <header className="nav-header" >
      <ul>
        <li>
          <FiBookOpen className="nav-icons"
          /> Overview
        </li>
        <li className="active-nav-header">
          <FiBook className="nav-icons" />
          Repositories <span className="nav-rep-no">{reposList.length}</span>
        </li>
        <li>
          <AiOutlineBorderOuter className="nav-icons" />
          Projects
        </li>
        <li>
          <BsBox className="nav-icons" />
          Packages
        </li>
        <li>
          <BsStar className="nav-icons" />
          Stars
          <span className="nav-rep-no">190</span>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
