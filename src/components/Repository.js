import { BsStar, BsChevronDown } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";
import date from "date-and-time";
import "../styles/repo.css";

const Repository = ({ reposList, inputText }) => { 
  return (
    <main className="repo-container">
      {reposList?.name !== "Error" &&
        reposList
          .filter((repo) => {
            if (inputText == "") {
              return repo;
            } else if (
              repo.name.toLowerCase().includes(inputText.toLowerCase())
            ) {
              return repo;
            }
          })
          .map((repo) => (
            <div className="repo" key={repo?.id}>
              <div className="left-sec">
                <h2>
                  {repo?.name}
                  <span className="repo-type">{repo.visibility}</span>
                </h2>
                {repo?.description ? (
                  <p className="repo-description">
                    Api design with djangorest framework
                  </p>
                ) : null}
                <span className="repo-details">
                  {repo?.language ? <p>{repo?.language}</p> : null}
                  {repo?.forks ? (
                    <p>
                      <VscRepoForked className="repo-icon" />
                      {repo?.forks} forked
                    </p>
                  ) : null}
                  {repo?.licence ? (
                    <p>
                      <FaBalanceScale className="repo-icon" />
                      {repo?.licence}
                    </p>
                  ) : null}
                  <p>
                    <BsStar className="repo-icon" /> {repo?.stargazers_count}
                  </p>
                  <p>updated {} days ago</p>
                </span>
              </div>
              <div>
                <div className="star-group">
                  <button className="repo-star">
                    <BsStar className="repo-star-icon" />
                    Star
                  </button>
                  <p name="Sort" list="Sort" id="Sort" className="repo-sort">
                    <BsChevronDown />
                  </p>
                </div>
              </div>
            </div>
          ))}
    </main>
  );
};

export default Repository;

// const List = ([])
