import React, { useState, useEffect } from "react";
import "../css/group.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

function Groups(props) {
  const [listGroups, setListGroups] = useState([]);
  const userInfo = useSelector(state => state.userReducer.user)
  async function featchGroups() {
    try {
      const response = await axios.get(
        `https://truongxuaapp.online/api/v1/groups/schoolyearid?schoolyearid=${userInfo.SchoolId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userInfo.author,
          },
        }
      );
      setListGroups(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    featchGroups();
  }, []);

  const renderGroup = () => {
    return listGroups.map((group) => {
      return (
        <div className="group-wrap ">
          <div className="group-item">
            <a href="#">
              <h5 className="group-name">{group.name}</h5>
            </a>

            <p className="creator">(Trưởng nhóm) </p>
          </div>
          <div className="body">
            <img className="group-img" src={group.avataImg} />
            <p
              style={{
                color: "black",
                fontSize: 12,
                marginBottom: 0,
              }}
            >
              {group.description}
            </p>
          </div>

          <div className="bottom">
            <Link to={`groupDetails?idGroup=${group.id}`}>
              <p className="join">Tham gia</p>
            </Link>
          </div>
        </div>
      );
    });
  };

  return <div className="group-grid">{renderGroup()}</div>;
}

export default Groups;
