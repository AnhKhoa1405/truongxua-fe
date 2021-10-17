import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/popup.css";

import { useForm } from "react-hook-form";
import { render } from "@testing-library/react";
function AccountPopup(props) {
  const initialState = {
    search: "",
    phone: "",
    address: "",
    bio: "",
    img: "",
    schoolId: "",
    email: "",
    password: "",
  };

  const [alumiId,setAluniId] = useState(9);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState(initialState);
  const [searchList, setSearchList] = useState([]);
  const [schoolName, setSchoolName] = useState("");
  const [find, setFind] = useState(false);

  const SearchList = () => {
    return searchList.map((search) => {
      return (
        <div>
          <p
            key={search.name}
            onClick={() => {
              fetchSchool(search);
            }}
            className="item-search"
          >
            {search.name}
          </p>
        </div>
      );
    });
  };

  let searchValue = document.querySelectorAll(".item-search");

  function removeActiveSearch() {
    searchValue.forEach(function (s) {
      s.classList.remove("active");
    });
  }

  searchValue.forEach(function (item, index) {
    item.addEventListener("click", function (e) {
      removeActiveSearch();
      this.classList.add("active");
    });
  });

  const fetchSchool = async (school) => {
    try {
      const response = await axios.get(
        `http://20.188.111.70:12348/api/v1/schools/${school.id}`
      );
      setFormData({ ...formData, schoolId: response.data.id });
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    const { name, value, type } = e.target;
    if (name === "search") {
      setSchoolName(value);
    }

    if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  
    // console.log(data);

  const updateProfile =  async () => {
const data = {
      phone: formData.phone,
    address: formData.address,
    bio: formData.bio,
    img: formData.img,
    schoolId: formData.schoolId,
    email: formData.email,
    password: formData.password,
    };
    
  try{
    const response  = await axios.put("http://20.188.111.70:12348/api/v1/alumni?id=9",
    data
    )
	setTrigger(false);
  }
  catch(err){
    console.log(err)
  }
  };
 
  const [trigger,setTrigger]= useState(true);

  const getProfile = async () => {
    try {
      const response = await axios.get(
        "http://20.188.111.70:12348/api/v1/alumni/9"
      );
      initialState.name = response.data.name;
      initialState.email = response.data.email;
      initialState.address = response.data.address;
      initialState.bio = response.data.bio;
      initialState.phone = response.data.phone;
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchSearchData() {
    try {
      const response = await axios.get(
        `http://20.188.111.70:12348/api/v1/schools/name?searchName=${schoolName}&pageNumber=1&pageSize=4`
      );
      setSearchList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSearchData();
  }, [schoolName]);

  useEffect(() => {
    getProfile();
  }, []);

  return trigger ? (
    <div
      className="popup-wrap"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000000bf",
        position: "fixed",
        zIndex: 1000,
      }}
    >
      <div
        className="popup"
      >
        <div className="popup-inner" style={{}}>
          <div className="search-school" style={{ marginLeft: 0 }}>
            <form
              style={{ borderBottom: "1px solid black", paddingBottom: 20 }}
            >
              <h6 className="label-of-field" style={{ marginBottom: 10 }}>
                Tìm trường
              </h6>
              <div className="search-field">
                <input
                  type="text"
                  onChange={onChange}
                  name="search"
                  placeholder="Search..."
                />
              </div>
              <div className="list-search">
                <SearchList />
              </div>
            </form>

            <form method="post" name="form-info">
              <p style={{ marginBottom: 10, marginTop: 20 }}>
                Nhập Số điện thoại
              </p>
              <input
                type="text"
                {...register("phone", {
                  required: "Nhập số điện thoại ",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Số điện thoại không chứa kí tự đặc biệt hoặc chữ",
                  },
                })}
                onChange={onChange}
                value={formData.phone}
                name="phone"
                placeholder="Phone..."
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
              <p style={{ marginBottom: 10, marginTop: 20 }}>
                Giới thiệu bản thân
              </p>
              <textarea
                {...register("bio", {
                  required: "Nhập tiểu sử ",
                })}
                onChange={onChange}
                name="bio"
                value={formData.bio}
                placeholder="Giới thiệu..."
              ></textarea>
                {errors.bio && <p className="error">{errors.bio.message}</p>}
              <p style={{ marginBottom: 10, marginTop: 20 }}>Chọn ảnh</p>
              <input type="file" onChange={onChange} name="img" />

              <button
                type="submit"
                style={{
                  position: "unset",
                  backgroundColor: "#007bff",
                  color: "white",
                  margin: "20px auto",
                  width: "max-content",
                  display: "block",
                  padding: "10px 40px",
                  borderRadius: 20,
                }}
                onClick={handleSubmit(updateProfile)}
              >
                Hoàn tất
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AccountPopup;