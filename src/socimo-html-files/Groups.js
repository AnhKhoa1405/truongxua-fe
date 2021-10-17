import React, { useState, useEffect } from "react";
import "../css/group.css"
import axios from "axios";

function Groups(props) {
  const [listGroups, setListGroups] = useState([]);

  async function featchGroups() {
    try {
      const response = await axios.get(
        "http://20.188.111.70:12348/api/v1/groups?pageNumber=1&pageSize=5"
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

            <p className="creator">(Người tạo) {group.info}</p>
          </div>
          <div className="body">
            <img className="group-img" src={group.avataImg} />
          </div>
          <div>
            <div className="bottom">
              <p className="join">Tham gia</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="group-grid">{renderGroup()}</div>;
}

export default Groups;