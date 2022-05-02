import { AiOutlineTwitter } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsPeople, BsDot } from "react-icons/bs";
import "../styles/ProfileCard.css";

const ProfileCard = ( {loading, error, profile} ) => {
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h2>{error?.data.message}</h2>
      ) : (
        <div className="profile-card">
          <div className="profile-img-container">
            <img
              src={profile?.avatar_url}
              alt="./none"
              className="profile-img"
            />
          </div>
          <div className="profile-names">
            <span className="nickName">{profile.login}</span> <br />
            <span className="fullName">{profile?.name}</span>
            <button className="prof-btn">Follow</button>
            {profile?.bio ? <span className="bio">{profile?.bio}</span> : null}
            <span>
              <span>
                <BsPeople className="prof-icon" />
                {profile?.followers} followers
              </span>
              <BsDot className="dot" />
              <span className="following">{profile.following} following</span>
            </span>
            <div className="profile-lists">
              {profile?.location ? (
                <p className="list-prof">
                  {" "}
                  <FaMapMarkerAlt className="prof-list-icons" />{" "}
                  {profile?.location}
                </p>
              ) : null}
              {profile?.email ? (
                <p className="list-prof">
                  (<MdOutlineMailOutline className="prof-list-icons" />
                  {profile?.email}
                </p>
              ) : null}

              {profile?.twitter_username ? (
                <p className="list-prof">
                  <AiOutlineTwitter className="prof-list-icons" /> @
                  {profile?.twitter_username}
                </p>
              ) : null}
            </div>
          </div>
          <div className="achivements">
            <h4 className="achivements-header">Achivements</h4>
            {profile?.recieved_events_url ? (
              <div>{profile?.recieved_events_url}</div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
