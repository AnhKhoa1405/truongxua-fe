import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GroupDetails(){
  const [imgNotSave, setimgNotSave] = useState([]);
  // const [imgSave, setImgSave] = useState([]);
  const [content, setContent] = useState("");
  const [dataContent, setDataContent] = useState([]);
  const [updateAPost, setUpdateAPost] = useState({});
  const [deleteAPost, setDeletePost] = useState(0);
  const [noti, setNoti] = useState("");
  const [postDetail, setPostDetail] = useState({});
  const [imgById, setImgById] = useState([]);
  const addApiImg = [];
  const axios = require("axios").default;
  function renderPostDetail() {
    if (postDetail != undefined) {
      const d = new Date(postDetail.createAt);
      return (
        <div className="modal fade" id="img-comt">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="row merged">
                  <div className="col-lg-9">
                    <div className="pop-image">
                      <div className="pop-item">
                        <div className="action-block">
                          <a className="action-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-tag"
                            >
                              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                              <line x1={7} y1={7} x2="7.01" y2={7} />
                            </svg>
                          </a>
                          <a className="action-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-map-pin"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                          </a>
                          <a className="action-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-arrow-down"
                            >
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <polyline points="19 12 12 19 5 12" />
                            </svg>
                          </a>
                          <a className="action-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-more-vertical"
                            >
                              <circle cx={12} cy={12} r={1} />
                              <circle cx={12} cy={5} r={1} />
                              <circle cx={12} cy={19} r={1} />
                            </svg>
                          </a>
                        </div>
                        <div>{renderImgInDB(postDetail)}</div>
                        <div className="stat-tools">
                          <div className="box">
                            <div className="Like">
                              <a className="Like__link">
                                <i className="icofont-like" /> Like
                              </a>
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box">
                            <div className="Emojis">
                              <div className="Emoji Emoji--like">
                                <div className="icon icon--like" />
                              </div>
                              <div className="Emoji Emoji--love">
                                <div className="icon icon--heart" />
                              </div>
                              <div className="Emoji Emoji--haha">
                                <div className="icon icon--haha" />
                              </div>
                              <div className="Emoji Emoji--wow">
                                <div className="icon icon--wow" />
                              </div>
                              <div className="Emoji Emoji--sad">
                                <div className="icon icon--sad" />
                              </div>
                              <div className="Emoji Emoji--angry">
                                <div className="icon icon--angry" />
                              </div>
                            </div>
                          </div>
                          <a title href="#" className="share-to">
                            <i className="icofont-share-alt" /> Share
                          </a>
                          <div className="emoji-state">
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title>
                                <img alt="" src="images/smiles/thumb.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="images/smiles/thumb.png" />{" "}
                                  Likes
                                </span>
                                <ul className="namelist">
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>20+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title>
                                <img alt="" src="images/smiles/heart.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="images/smiles/heart.png" />{" "}
                                  Love
                                </span>
                                <ul className="namelist">
                                  <li>Amara Sin</li>
                                  <li>Jhon Doe</li>
                                  <li>
                                    <span>10+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title>
                                <img alt="" src="images/smiles/smile.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="images/smiles/smile.png" />{" "}
                                  Happy
                                </span>
                                <ul className="namelist">
                                  <li>Sarah K.</li>
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>
                                    <span>100+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title>
                                <img alt="" src="images/smiles/weep.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="images/smiles/weep.png" />{" "}
                                  Dislike
                                </span>
                                <ul className="namelist">
                                  <li>Danial Carbal</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>15+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>10+</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="commentbar">
                      <div className="user">
                        <figure>
                          <img src="images/resources/user1.jpg" alt="" />
                        </figure>
                        <div className="user-information">
                          <h4>
                            <a href="#" title>
                              {postDetail.id}
                            </a>
                          </h4>
                          <span>
                            {d.getDate() +
                              "-" +
                              d.getMonth() +
                              "-" +
                              d.getFullYear()}
                          </span>
                        </div>
                        <a href="#" title="Follow" data-ripple>
                          Follow
                        </a>
                      </div>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: 700,
                        }}
                      >
                        {postDetail.content}
                      </p>
                      <div className="we-video-info">
                        <ul>
                          <li>
                            <span title="Comments" className="liked">
                              <i>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-thumbs-up"
                                >
                                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                                </svg>
                              </i>
                              <ins>52</ins>
                            </span>
                          </li>
                          <li>
                            <span title="Comments" className="comment">
                              <i>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-message-square"
                                >
                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                              </i>
                              <ins>52</ins>
                            </span>
                          </li>
                          <li>
                            <span>
                              <a title="Share" href="#" className>
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-share-2"
                                  >
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line
                                      x1="8.59"
                                      y1="13.51"
                                      x2="15.42"
                                      y2="17.49"
                                    />
                                    <line
                                      x1="15.41"
                                      y1="6.51"
                                      x2="8.59"
                                      y2="10.49"
                                    />
                                  </svg>
                                </i>
                              </a>
                              <ins>20</ins>
                            </span>
                          </li>
                        </ul>
                        <div className="users-thumb-list">
                          <a
                            href="#"
                            title
                            data-toggle="tooltip"
                            data-original-title="Anderw"
                          >
                            <img src="images/resources/userlist-1.jpg" alt="" />
                          </a>
                          <a
                            href="#"
                            title
                            data-toggle="tooltip"
                            data-original-title="frank"
                          >
                            <img src="images/resources/userlist-2.jpg" alt="" />
                          </a>
                          <a
                            href="#"
                            title
                            data-toggle="tooltip"
                            data-original-title="Sara"
                          >
                            <img src="images/resources/userlist-1.jpg" alt="" />
                          </a>
                          <a
                            href="#"
                            title
                            data-toggle="tooltip"
                            data-original-title="Amy"
                          >
                            <img src="images/resources/userlist-2.jpg" alt="" />
                          </a>
                          <span>
                            <strong>You</strong>, <b>Sarah</b> and{" "}
                            <a title href="#">
                              24+ more
                            </a>{" "}
                            liked
                          </span>
                        </div>
                      </div>
                      <div className="new-comment" style={{ display: "block" }}>
                        <form method="post">
                          <input type="text" placeholder="write comment" />
                          <button type="submit">
                            <i className="icofont-paper-plane" />
                          </button>
                        </form>
                        <div className="comments-area">
                          <ul>
                            <li>
                              <figure>
                                <img alt="" src="images/resources/user1.jpg" />
                              </figure>
                              <div className="commenter">
                                <h5>
                                  <a title href="#">
                                    Jack Carter
                                  </a>
                                </h5>
                                <span>2 hours ago</span>
                                <p>
                                  i think that some how, we learn who we really
                                  are and then live with that decision, great
                                  post!
                                </p>
                                <span>
                                  you can view the more detail via link
                                </span>
                                <a title href="#">
                                  https://www.youtube.com/watch?v=HpZgwHU1GcI
                                </a>
                              </div>
                              <a title="Like" href="#">
                                <i className="icofont-heart" />
                              </a>
                              <a
                                title="Reply"
                                href="#"
                                className="reply-coment"
                              >
                                <i className="icofont-reply" />
                              </a>
                            </li>
                            <li>
                              <figure>
                                <img alt="" src="images/resources/user2.jpg" />
                              </figure>
                              <div className="commenter">
                                <h5>
                                  <a title href="#">
                                    Ching xang
                                  </a>
                                </h5>
                                <span>2 hours ago</span>
                                <p>
                                  i think that some how, we learn who we really
                                  are and then live with that decision, great
                                  post!
                                </p>
                              </div>
                              <a title="Like" href="#">
                                <i className="icofont-heart" />
                              </a>
                              <a
                                title="Reply"
                                href="#"
                                className="reply-coment"
                              >
                                <i className="icofont-reply" />
                              </a>
                            </li>
                            <li>
                              <figure>
                                <img alt="" src="images/resources/user3.jpg" />
                              </figure>
                              <div className="commenter">
                                <h5>
                                  <a title href="#">
                                    Danial Comb
                                  </a>
                                </h5>
                                <span>2 hours ago</span>
                                <p>
                                  i think that some how, we learn who we really
                                  are and then live with that decision, great
                                  post!
                                </p>
                              </div>
                              <a title="Like" href="#">
                                <i className="icofont-heart" />
                              </a>
                              <a
                                title="Reply"
                                href="#"
                                className="reply-coment"
                              >
                                <i className="icofont-reply" />
                              </a>
                            </li>
                            <li>
                              <figure>
                                <img alt="" src="images/resources/user4.jpg" />
                              </figure>
                              <div className="commenter">
                                <h5>
                                  <a title href="#">
                                    Jack Carter
                                  </a>
                                </h5>
                                <span>2 hours ago</span>
                                <p>
                                  i think that some how, we learn who we really
                                  are and then live with that decision, great
                                  post!
                                </p>
                              </div>
                              <a title="Like" href="#">
                                <i className="icofont-heart" />
                              </a>
                              <a
                                title="Reply"
                                href="#"
                                className="reply-coment"
                              >
                                <i className="icofont-reply" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    // if(postDetail != undefined){
    //   return(

    //   )
    // }
  }

  useEffect(async () => {
    await getAllPost();
    setTimeout(() => getAllImg(), 3000);
  }, [noti]);
  const getAllImg = async () => {
    try {
      const response = await axios.get(
        "http://20.188.111.70:12348/api/v1/Images?sort=0&pageNumber=0&pageSize=0"
      );
      if (response.status == 200) {
        setImgById(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const getAllPost = async () => {
    try {
      const response = await axios.get(
        "http://20.188.111.70:12348/api/v1/Posts?pageNumber=0&pageSize=0"
      );
      setDataContent(response.data);
      return response.data[response.data.length - 1].id;
    } catch (err) {
      console.error(err);
    }
  };
  const findImageByPostId = async (id) => {
    if (id != []) {
      let imgData = [];
      for (let i = 0; i < id.length; i++) {
        try {
          const response = await axios.get(
            `http://20.188.111.70:12348/api/v1/Images/${id[i]}`
          );
          if (response.status == 200) {
            imgData[i] = response.data;
            setNoti(response.config.data);
          }
        } catch (err) {
          console.error(err);
        }
      }
      return imgData;
    }
  };
  const findIdToDelete = (id) => {
    const data = [];
    for (let i = 0; i < imgById.length; i++) {
      if (imgById[i].postId == id) {
        data.push(imgById[i].id);
      }
    }

    return data;
  };
  const deteleImageById = async (deleteOneImg) => {
    console.log(deleteOneImg);
    if (deleteOneImg != undefined) {
      try {
        const response = await axios.delete(
          `http://20.188.111.70:12348/api/v1/images/${deleteOneImg}`
        );
      } catch (err) {
        console.error(err);
      }
    } else {
      let id = findIdToDelete(deleteAPost);
      if (id != []) {
        for (let i = 0; i < id.length; i++) {
          try {
            const response = await axios.delete(
              `http://20.188.111.70:12348/api/v1/images/${id[i]}`
            );
          } catch (err) {
            console.error(err);
          }
        }
        return 200;
      } else {
        return 200;
      }
    }
  };
  const deletePost = async () => {
    const statusDeImg = await deteleImageById();
    if (statusDeImg === 200) {
      try {
        const response = await axios.delete(
          `http://20.188.111.70:12348/api/v1/posts/${deleteAPost}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status == 200) {
          var element = document.getElementById("delete-post");
          element.classList.remove("active");
          setNoti(deleteAPost);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  const renderImgInDB = (element) => {
    if (imgById != undefined) {
      return imgById.map((elementImg, indexImg) => {
        if (element.id === elementImg.postId) {
          return (
            <figure
              style={{
                display: "inline",
                marginRight: 20,
              }}
              key={indexImg}
              onClick={() => {
                setPostDetail(element);
              }}
            >
              <a
                data-toggle="modal"
                data-target="#img-comt"
                href="images/resources/album1.jpg"
              >
                <img
                  style={{
                    width: 250,
                    height: 225,
                    paddingBottom: 15,
                  }}
                  src={elementImg.imageUrl}
                  alt=""
                />
              </a>
            </figure>
          );
        }
      });
    }
  };
  const saveImgInImgBB = async () => {
    let dataImgSave = [];
    if (imgNotSave.length >= 1) {
      let body = new FormData();
      body.set("key", "71b6c3846105c92074f8e9a49b85887f");
      for (let i = 0; i < imgNotSave.length; i++) {
        if (imgNotSave[i].typeImg == "new") {
          let img = imgNotSave[i].img;
          body.append("image", img);
          try {
            const response = await axios({
              method: "POST",
              url: "https://api.imgbb.com/1/upload",
              data: body,
            });
            if (response.status == 200) {
              dataImgSave[i] = {
                name: response.data.data.title,
                url_display: response.data.data.display_url,
              };
            }
          } catch (err) {
            console.error(err);
          }
        }
      }
    }
    return dataImgSave;
  };

  const updatePostApi = async () => {
    const updatePost = {
      // alumniId: updateAPost.alumniId,
      // content: document.getElementById("emojionearea1").value,
      // createAt: updateAPost.createAt,
      // modifiedAt: new Date(),
      // status: updateAPost.status,
      //id: updateAPost.id,

      alumniId: updateAPost.alumniId,
      content: document.getElementById("emojionearea1").value,
      createAt: updateAPost.createAt,
      modifiedAt: new Date(),
      status: true,
    };
    //http://20.188.111.70:12348/api/v1/posts/id=${updateAPost.id}
    try {
      const response = await axios.put(
        `http://20.188.111.70:12348/api/v1/posts?id=${updateAPost.id}`,
        updatePost
      );
      if (response.status == 200) {
        setUpdateAPost({});
        var element = document.getElementById("post-new");
        element.classList.remove("active");
        document.getElementById("emojionearea1").value = "";
        setimgNotSave([]);
        setNoti(response.config.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addPostApi = async () => {
    const dataAddPost = {
      alumniId: 1,
      content: content,
      createAt: new Date(),
      modifiedAt: null,
      status: true,
    };
    try {
      const response = await axios.post(
        "http://20.188.111.70:12348/api/v1/Posts",
        dataAddPost
      );
      if (response.status == 200) {
        var element = document.getElementById("post-new");
        element.classList.remove("active");
        document.getElementById("emojionearea1").value = "";
        setimgNotSave([]);
        setNoti(response.config.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addImgApi = async (imgData) => {
    let id = 0;

    if (document.getElementById("popup-head-name").innerHTML != "Update Post") {
      id = await getAllPost();
    } else {
      id = deleteAPost;
    }

    for (let i = 0; i < imgData.length; i++) {
      if (imgData[i] != undefined) {
        const dataImg = {
          postId: id,
          eventId: null,
          imageUrl: imgData[i].url_display,
        };
        try {
          const response = await axios.post(
            "http://20.188.111.70:12348/api/v1/images",
            dataImg
          );
          if (response == 200) {
            setimgNotSave([]);
            setNoti(response.config.data);
          }
        } catch (err) {
          console.error(err);
        }
      }
    }
  };

  const updatePost = async (element) => {
    let classMove = document.getElementById("post-new");
    classMove.classList.add("active");
    let test = document.getElementById("popup-head-name");
    test.innerHTML = "Update Post";
    setUpdateAPost(element);
    document.getElementById("emojionearea1").value = element.content;
    setDeletePost(element.id);
    const idImg = findIdToDelete(element.id);
    const dataImg = await findImageByPostId(idImg);
    if (dataImg != []) {
      let imgUrl = [];
      for (let i = 0; i < dataImg.length; i++) {
        imgUrl[i] = {
          img: dataImg[i].imageUrl,
          typeImg: "ImgApi",
          idDelete: dataImg[i].id,
        };
      }
      setimgNotSave(imgUrl);
    }
  };

  function renderHome() {
    // alumni-alumniId-conmments-content-createAt-id-images-modifiedAt-postInGroups-status

    if (dataContent != undefined) {
      return dataContent.map((element, index) => {
        const d = new Date(element.createAt);
        return (
          <div key={index} className="main-wraper">
            <div className="user-post">
              <div className="friend-info">
                <figure>
                  <em>
                    <svg
                      style={{ verticalAlign: "middle" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#7fba00"
                        stroke="#7fba00"
                        d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                      />
                    </svg>
                  </em>
                  <img alt="" src="images/resources/user3.jpg" />
                </figure>
                <div className="friend-name">
                  <div className="more">
                    <div className="more-post-optns">
                      <i className>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-more-horizontal"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </i>
                      <ul>
                        <li onClick={() => updatePost(element)}>
                          <i className="icofont-pen-alt-1" />
                          Edit Post
                          <span>Edit This Post within a Hour</span>
                        </li>
                        <li>
                          <i className="icofont-ban" />
                          Hide Post
                          <span>Hide This Post</span>
                        </li>
                        <li
                          onClick={() => {
                            var value = document.getElementById("delete-post");
                            value.classList.add("active");
                            setDeletePost(element.id);
                          }}
                        >
                          <i className="icofont-ui-delete" />
                          Delete Post
                          <span>If inappropriate Post By Mistake</span>
                        </li>
                        <li>
                          <i className="icofont-flag" />
                          Report
                          <span>Inappropriate content</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ins>
                    <a title href="time-line.html">
                      {element.id}
                    </a>{" "}
                    Create Post
                  </ins>
                  <span>
                    <i className="icofont-globe" /> published:{" "}
                    {d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear()}
                  </span>
                </div>
                <div className="post-meta">
                  {/* <a href="post-detail.html" className="post-title">
                    Supervision as a Personnel Development Device
                  </a> */}
                  {renderImgInDB(element)}
                  <p
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: 700,
                    }}
                  >
                    {element.content}
                  </p>
                  <div className="we-video-info">
                    <ul>
                      <li>
                        <span title="views" className="views">
                          <i>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx={12} cy={12} r={3} />
                            </svg>
                          </i>
                          <ins>1.2k</ins>
                        </span>
                      </li>
                      <li>
                        <span title="Comments" className="Recommend">
                          <i>
                            <svg
                              className="feather feather-message-square"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 24 24"
                              height={16}
                              width={16}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                          </i>
                          <ins>54</ins>
                        </span>
                      </li>
                      <li>
                        <span title="follow" className="Follow">
                          <i>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </i>
                          <ins>5k</ins>
                        </span>
                      </li>
                      <li>
                        <span className="share-pst" title="Share">
                          <i>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-share-2"
                            >
                              <circle cx={18} cy={5} r={3} />
                              <circle cx={6} cy={12} r={3} />
                              <circle cx={18} cy={19} r={3} />
                              <line
                                x1="8.59"
                                y1="13.51"
                                x2="15.42"
                                y2="17.49"
                              />
                              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                            </svg>
                          </i>
                          <ins>205</ins>
                        </span>
                      </li>
                    </ul>
                    <a href="post-detail.html" title className="reply">
                      Reply <i className="icofont-reply" />
                    </a>
                  </div>
                  <div className="stat-tools">
                    <div className="box">
                      <div className="Like">
                        <a className="Like__link">
                          <i className="icofont-like" /> Like
                        </a>
                        <div className="Emojis">
                          <div className="Emoji Emoji--like">
                            <div className="icon icon--like" />
                          </div>
                          <div className="Emoji Emoji--love">
                            <div className="icon icon--heart" />
                          </div>
                          <div className="Emoji Emoji--haha">
                            <div className="icon icon--haha" />
                          </div>
                          <div className="Emoji Emoji--wow">
                            <div className="icon icon--wow" />
                          </div>
                          <div className="Emoji Emoji--sad">
                            <div className="icon icon--sad" />
                          </div>
                          <div className="Emoji Emoji--angry">
                            <div className="icon icon--angry" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="Emojis">
                        <div className="Emoji Emoji--like">
                          <div className="icon icon--like" />
                        </div>
                        <div className="Emoji Emoji--love">
                          <div className="icon icon--heart" />
                        </div>
                        <div className="Emoji Emoji--haha">
                          <div className="icon icon--haha" />
                        </div>
                        <div className="Emoji Emoji--wow">
                          <div className="icon icon--wow" />
                        </div>
                        <div className="Emoji Emoji--sad">
                          <div className="icon icon--sad" />
                        </div>
                        <div className="Emoji Emoji--angry">
                          <div className="icon icon--angry" />
                        </div>
                      </div>
                    </div>
                    <a title href="#" className="comment-to">
                      <i className="icofont-comment" /> Comment
                    </a>
                    <a title href="#" className="share-to">
                      <i className="icofont-share-alt" /> Share
                    </a>
                    <div className="emoji-state">
                      <div className="popover_wrapper">
                        <a className="popover_title" href="#" title>
                          <img alt="" src="images/smiles/thumb.png" />
                        </a>
                        <div className="popover_content">
                          <span>
                            <img alt="" src="images/smiles/thumb.png" /> Likes
                          </span>
                          <ul className="namelist">
                            <li>Jhon Doe</li>
                            <li>Amara Sin</li>
                            <li>Sarah K.</li>
                            <li>
                              <span>20+ more</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="popover_wrapper">
                        <a className="popover_title" href="#" title>
                          <img alt="" src="images/smiles/heart.png" />
                        </a>
                        <div className="popover_content">
                          <span>
                            <img alt="" src="images/smiles/heart.png" /> Love
                          </span>
                          <ul className="namelist">
                            <li>Amara Sin</li>
                            <li>Jhon Doe</li>
                            <li>
                              <span>10+ more</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="popover_wrapper">
                        <a className="popover_title" href="#" title>
                          <img alt="" src="images/smiles/smile.png" />
                        </a>
                        <div className="popover_content">
                          <span>
                            <img alt="" src="images/smiles/smile.png" /> Happy
                          </span>
                          <ul className="namelist">
                            <li>Sarah K.</li>
                            <li>Jhon Doe</li>
                            <li>Amara Sin</li>
                            <li>
                              <span>100+ more</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="popover_wrapper">
                        <a className="popover_title" href="#" title>
                          <img alt="" src="images/smiles/weep.png" />
                        </a>
                        <div className="popover_content">
                          <span>
                            <img alt="" src="images/smiles/weep.png" /> Dislike
                          </span>
                          <ul className="namelist">
                            <li>Danial Carbal</li>
                            <li>Amara Sin</li>
                            <li>Sarah K.</li>
                            <li>
                              <span>15+ more</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>30+</p>
                    </div>
                   
                  </div>
                  <div
                                          className="new-comment"
                                          style={{ display: "block" }}
                                        >
                                          <form method="post">
                                            <input
                                              type="text"
                                              placeholder="write comment"
                                            />
                                            <button type="submit">
                                              <i className="icofont-paper-plane" />
                                            </button>
                                          </form>
                                          <div className="comments-area">
                                            <ul>
                                              <li>
                                                <figure>
                                                  <img
                                                    alt=""
                                                    src="images/resources/user1.jpg"
                                                  />
                                                </figure>
                                                <div className="commenter">
                                                  <h5>
                                                    <a title href="#">
                                                      Jack Carter
                                                    </a>
                                                  </h5>
                                                  <span>2 hours ago</span>
                                                  <p>
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
                                                    decision, great post!
                                                  </p>
                                                  <span>
                                                    you can view the more detail
                                                    via link
                                                  </span>
                                                  <a title href="#">
                                                    https://www.youtube.com/watch?v=HpZgwHU1GcI
                                                  </a>
                                                </div>
                                                <a title="Like" href="#">
                                                  <i className="icofont-heart" />
                                                </a>
                                                <a
                                                  title="Reply"
                                                  href="#"
                                                  className="reply-coment"
                                                >
                                                  <i className="icofont-reply" />
                                                </a>
                                              </li>
                                              <li>
                                                <figure>
                                                  <img
                                                    alt=""
                                                    src="images/resources/user2.jpg"
                                                  />
                                                </figure>
                                                <div className="commenter">
                                                  <h5>
                                                    <a title href="#">
                                                      Ching xang
                                                    </a>
                                                  </h5>
                                                  <span>2 hours ago</span>
                                                  <p>
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
                                                    decision, great post!
                                                  </p>
                                                </div>
                                                <a title="Like" href="#">
                                                  <i className="icofont-heart" />
                                                </a>
                                                <a
                                                  title="Reply"
                                                  href="#"
                                                  className="reply-coment"
                                                >
                                                  <i className="icofont-reply" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  function renderImg() {
    if (imgNotSave.length > 0) {
      return imgNotSave.map((element, index) => {
        if (element.typeImg != "delete") {
          return (
            <div
              key={index}
              style={{
                display: "inline",
                paddingRight: 20,
                position: "relative",
              }}
            >
              <img
                src={
                  element.typeImg == undefined || element.typeImg == "new"
                    ? URL.createObjectURL(element.img)
                    : element.img
                }
                style={{
                  width: 150,
                  height: 120,
                  marginBottom: 10,
                }}
              ></img>
              <i
                style={{
                  position: "absolute",
                  fontSize: 24,
                  right: 25,
                  top: -50,
                  color: "black",
                }}
                onClick={() => deleteImg(index)}
                className="icofont-close-circled"
              />
            </div>
          );
        }
      });
    }
  }

  const deleteImg = async (index) => {
    let newNotSaveImg = [...imgNotSave];
    let img = newNotSaveImg[index];
    if (img.typeImg == "ImgApi") {
      img.typeImg = "delete";
    } else {
      newNotSaveImg.splice(index, 1);
    }
    setimgNotSave(newNotSaveImg);
  };

  function uploadImage(event) {
    let data = [];
    if (event.target.files.length == 1) {
      let imgNew = event.target.files[0];
      data[0] = { img: imgNew, typeImg: "new" };
    } else {
      for (let i = 0; i < event.target.files.length; i++) {
        let imgNew = event.target.files[i];
        data[i] = { img: imgNew, typeImg: "new" };
      }
    }
    console.log(data);
    if (imgNotSave.length > 0) {
      let oldImg = [...imgNotSave, ...data];
      setimgNotSave(oldImg);
    } else {
      setimgNotSave(data);
    }
  }

  function handleChange(event) {
    setContent(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (updateAPost.id == undefined) {
      await addPostApi();
      // setimgNotSave([]);
      // setContent("");
      // document.getElementById("emojionearea1").value = "";
    } else {
      const update = await updatePostApi();
      if (imgNotSave.length > 0) {
        for (let i = 0; i < imgNotSave.length; i++) {
          if (imgNotSave[i].typeImg === "delete") {
            await deteleImageById(imgNotSave[i].idDelete);
          }
        }
      }
    }

    if (imgNotSave.length > 0) {
      const saveImg = await saveImgInImgBB();
      addImgApi(saveImg);
    } else {
      setimgNotSave([]);
    }
  };
    return (
      <div>
        <div className="theme-layout">
          <div className="responsive-header">
            <div className="logo res">
              <img src="images/logo.png" alt="" />
              <span>Socimo</span>
            </div>
            <div className="user-avatar mobile">
              <a href="profile.html" title="View Profile">
                <img alt="" src="images/resources/user.jpg" />
              </a>
              <div className="name">
                <h4>Danial Cardos</h4>
                <span>Ontario, Canada</span>
              </div>
            </div>
            <div className="right-compact">
              <div className="sidemenu">
                <i>
                  <svg
                    id="side-menu2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={26}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu"
                  >
                    <line x1={3} y1={12} x2={21} y2={12} />
                    <line x1={3} y1={6} x2={21} y2={6} />
                    <line x1={3} y1={18} x2={21} y2={18} />
                  </svg>
                </i>
              </div>
              <div className="res-search">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-search"
                  >
                    <circle cx={11} cy={11} r={8} />
                    <line x1={21} y1={21} x2="16.65" y2="16.65" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="restop-search">
              <span className="hide-search">
                <i className="icofont-close-circled" />
              </span>
              <form method="post">
                <input type="text" placeholder="Search..." />
              </form>
            </div>
          </div>
          {/* responsive header */}
          <header className>
            <div className="topbar stick">
              <div className="logo">
                <img src="images/logo.png" alt="" />
                <span>Socimo</span>
              </div>
              <div className="searches">
                <form method="post">
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <i className="icofont-search" />
                  </button>
                  <span className="cancel-search">
                    <i className="icofont-close" />
                  </span>
                  <div className="recent-search">
                    <h4 className="recent-searches">Your's Recent Search</h4>
                    <ul className="so-history">
                      <li>
                        <div className="searched-user">
                          <figure>
                            <img src="images/resources/user1.jpg" alt="" />
                          </figure>
                          <span>Danial Carabal</span>
                        </div>
                        <span className="trash">
                          <i className="icofont-close-circled" />
                        </span>
                      </li>
                      <li>
                        <div className="searched-user">
                          <figure>
                            <img src="images/resources/user2.jpg" alt="" />
                          </figure>
                          <span>Maria K</span>
                        </div>
                        <span className="trash">
                          <i className="icofont-close-circled" />
                        </span>
                      </li>
                      <li>
                        <div className="searched-user">
                          <figure>
                            <img src="images/resources/user3.jpg" alt="" />
                          </figure>
                          <span>Fawad Khan</span>
                        </div>
                        <span className="trash">
                          <i className="icofont-close-circled" />
                        </span>
                      </li>
                      <li>
                        <div className="searched-user">
                          <figure>
                            <img src="images/resources/user4.jpg" alt="" />
                          </figure>
                          <span>Danial Sandos</span>
                        </div>
                        <span className="trash">
                          <i className="icofont-close-circled" />
                        </span>
                      </li>
                      <li>
                        <div className="searched-user">
                          <figure>
                            <img src="images/resources/user5.jpg" alt="" />
                          </figure>
                          <span>Jack Carter</span>
                        </div>
                        <span className="trash">
                          <i className="icofont-close-circled" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              <ul className="web-elements">
                <li>
                  <div className="user-dp">
                    <a href="profile-page2.html" title>
                      <img alt="" src="images/resources/user.jpg" />
                      <div className="name">
                        <h4>Danial Cardos</h4>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="go-live">
                  <a
                    href="live-stream.html"
                    title="Go Live"
                    data-toggle="tooltip"
                  >
                    <i>
                      <svg
                        fill="#f00"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="18px"
                        height="18px"
                      >
                        <path d="M 6.1015625 6.1015625 C 3.5675625 8.6345625 2 12.134 2 16 C 2 19.866 3.5675625 23.365437 6.1015625 25.898438 L 7.5195312 24.480469 C 5.3465312 22.307469 4 19.308 4 16 C 4 12.692 5.3465312 9.6925313 7.5195312 7.5195312 L 6.1015625 6.1015625 z M 25.898438 6.1015625 L 24.480469 7.5195312 C 26.653469 9.6925312 28 12.692 28 16 C 28 19.308 26.653469 22.307469 24.480469 24.480469 L 25.898438 25.898438 C 28.432437 23.365437 30 19.866 30 16 C 30 12.134 28.432437 8.6345625 25.898438 6.1015625 z M 9.6367188 9.6367188 C 8.0077188 11.265719 7 13.515 7 16 C 7 18.485 8.0077187 20.734281 9.6367188 22.363281 L 11.052734 20.947266 C 9.7847344 19.680266 9 17.93 9 16 C 9 14.07 9.7847344 12.319734 11.052734 11.052734 L 9.6367188 9.6367188 z M 22.363281 9.6367188 L 20.947266 11.052734 C 22.215266 12.319734 23 14.07 23 16 C 23 17.93 22.215266 19.680266 20.947266 20.947266 L 22.363281 22.363281 C 23.992281 20.734281 25 18.485 25 16 C 25 13.515 23.992281 11.265719 22.363281 9.6367188 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 16 12 z" />
                      </svg>
                    </i>
                  </a>
                </li>
                <li>
                  <a href="index.html" title="Home" data-toggle="tooltip">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-home"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    className="mesg-notif"
                    href="#"
                    title="Messages"
                    data-toggle="tooltip"
                  >
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-message-square"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </i>
                  </a>
                  <span />
                </li>
                <li>
                  <a
                    className="mesg-notif"
                    href="#"
                    title="Notifications"
                    data-toggle="tooltip"
                  >
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bell"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    </i>
                  </a>
                  <span />
                </li>
                <li>
                  <a
                    className="create"
                    href="#"
                    title="Add New"
                    data-toggle="tooltip"
                  >
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1={12} y1={5} x2={12} y2={19} />
                        <line x1={5} y1={12} x2={19} y2={12} />
                      </svg>
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#" title>
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-grid"
                      >
                        <rect x={3} y={3} width={7} height={7} />
                        <rect x={14} y={3} width={7} height={7} />
                        <rect x={14} y={14} width={7} height={7} />
                        <rect x={3} y={14} width={7} height={7} />
                      </svg>
                    </i>
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="profile.html" title>
                        <i className="icofont-user-alt-3" /> Your Profile
                      </a>
                    </li>
                    <li>
                      <a href="add-new-course.html" title>
                        <i className="icofont-plus" /> New Course
                      </a>
                    </li>
                    <li>
                      <a className="invite-new" href="#" title>
                        <i className="icofont-brand-slideshare" /> Invite
                        Collegue
                      </a>
                    </li>
                    <li>
                      <a href="pay-out.html" title>
                        <i className="icofont-price" /> Payout
                      </a>
                    </li>
                    <li>
                      <a href="price-plan.html" title>
                        <i className="icofont-flash" /> Upgrade
                      </a>
                    </li>
                    <li>
                      <a href="help-faq.html" title>
                        <i className="icofont-question-circle" /> Help
                      </a>
                    </li>
                    <li>
                      <a href="settings.html" title>
                        <i className="icofont-gear" /> Setting
                      </a>
                    </li>
                    <li>
                      <a href="privacy-n-policy.html" title>
                        <i className="icofont-notepad" /> Privacy
                      </a>
                    </li>
                    <li>
                      <a className="dark-mod" href="#" title>
                        <i className="icofont-moon" /> Dark Mode
                      </a>
                    </li>
                    <li className="logout">
                      <a href="sign-in.html" title>
                        <i className="icofont-power" /> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </header>
          {/* header */}
          <nav className="sidebar">
            <ul className="menu-slide">
              <li className="active menu-item-has-children">
                <a className href="#" title>
                  <i>
                    <svg
                      id="icon-home"
                      className="feather feather-home"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={14}
                      width={14}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </i>{" "}
                  Home
                </a>
                <ul className="submenu">
                  <li>
                    <a href="index.html" title>
                      Newsfeed
                    </a>
                  </li>
                  <li>
                    <a href="company-home.html" title>
                      Company Home
                    </a>
                  </li>
                  <li>
                    <a href="profile-page2.html" title>
                      User Profile
                    </a>
                  </li>
                  <li>
                    <a href="profile.html" title>
                      Student User Profile
                    </a>
                  </li>
                  <li>
                    <a href="groups.html" title>
                      Groups
                    </a>
                  </li>
                  <li>
                    <a href="group-detail.html" title>
                      Group Detail
                    </a>
                  </li>
                  <li>
                    <a href="post-detail.html" title>
                      Social Post Detail
                    </a>
                  </li>
                  <li>
                    <a href="messages.html" title>
                      Chat/Messages
                    </a>
                  </li>
                  <li>
                    <a href="notifications.html" title>
                      Notificatioins
                    </a>
                  </li>
                  <li>
                    <a href="search-result.html" title>
                      Search Result
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a className href="#" title>
                  <i className>
                    <svg
                      id="ab7"
                      className="feather feather-zap"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={14}
                      width={14}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </i>{" "}
                  Features
                </a>
                <ul className="submenu">
                  <li>
                    <a href="videos.html" title>
                      Videos
                    </a>
                  </li>
                  <li>
                    <a href="live-stream.html" title>
                      Live Stream
                    </a>
                  </li>
                  <li>
                    <a href="event-page.html" title>
                      Events Page
                    </a>
                  </li>
                  <li>
                    <a href="event-detail.html" title>
                      Event Detail
                    </a>
                  </li>
                  <li>
                    <a href="Q-A.html" title>
                      QA
                    </a>
                  </li>
                  <li>
                    <a href="Q-detail.html" title>
                      QA Detail
                    </a>
                  </li>
                  <li>
                    <a href="help-faq.html" title>
                      Support Help
                    </a>
                  </li>
                  <li>
                    <a href="help-faq-detail.html" title>
                      Support Detail
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a className href="#" title>
                  <i className>
                    <svg
                      id="ab5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </i>{" "}
                  Market Place
                </a>
                <ul className="submenu">
                  <li>
                    <a href="books.html" title>
                      Books
                    </a>
                  </li>
                  <li>
                    <a href="book-detail.html" title>
                      Books Detail
                    </a>
                  </li>
                  <li>
                    <a href="courses.html" title>
                      Course
                    </a>
                  </li>
                  <li>
                    <a href="course-detail.html" title>
                      course Detail
                    </a>
                  </li>
                  <li>
                    <a href="add-new-course.html" title>
                      Add New Course
                    </a>
                  </li>
                  <li>
                    <a href="product-cart.html" title>
                      Cart Page
                    </a>
                  </li>
                  <li>
                    <a href="product-checkout.html" title>
                      Checkout
                    </a>
                  </li>
                  <li>
                    <a href="add-credits.html" title>
                      Add Credit
                    </a>
                  </li>
                  <li>
                    <a href="pay-out.html" title>
                      Payouts
                    </a>
                  </li>
                  <li>
                    <a href="price-plan.html" title>
                      Pricing Plans
                    </a>
                  </li>
                  <li>
                    <a href="invoice.html" title>
                      Invoice
                    </a>
                  </li>
                  <li>
                    <a href="thank-you.html" title>
                      Thank you Page
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a className href="#" title>
                  <i className>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-coffee"
                    >
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1={6} y1={1} x2={6} y2={4} />
                      <line x1={10} y1={1} x2={10} y2={4} />
                      <line x1={14} y1={1} x2={14} y2={4} />
                    </svg>
                  </i>{" "}
                  Blogs
                </a>
                <ul className="submenu">
                  <li>
                    <a href="blog.html" title>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html" title>
                      Blog Detail
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a className href="#" title>
                  <i>
                    <svg
                      id="ab8"
                      className="feather feather-file"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={14}
                      width={14}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <polyline points="13 2 13 9 20 9" />
                    </svg>
                  </i>{" "}
                  Featured Pages
                </a>
                <ul className="submenu">
                  <li>
                    <a href="404.html" title>
                      Error 404
                    </a>
                  </li>
                  <li>
                    <a href="coming-soon.html" title>
                      Coming Soon
                    </a>
                  </li>
                  <li>
                    <a href="send-feedback.html" title>
                      Send Feedback
                    </a>
                  </li>
                  <li>
                    <a href="badges.html" title>
                      Badges
                    </a>
                  </li>
                  <li>
                    <a href="thank-you.html" title>
                      Thank You
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a className href="#" title>
                  <i className>
                    <svg
                      id="ab9"
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-lock"
                    >
                      <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </i>{" "}
                  Authentications
                </a>
                <ul className="submenu">
                  <li>
                    <a href="sign-in.html" title>
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="signup.html" title>
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="forgot-password.html" title>
                      Forgot Password
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a className href="about-university.html" title>
                  <i>
                    <svg
                      id="ab1"
                      className="feather feather-users"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={14}
                      width={14}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle r={4} cy={7} cx={9} />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </i>{" "}
                  University Profile
                </a>
              </li>
              <li className>
                <a className href="messages.html" title>
                  <i className>
                    <svg
                      className="feather feather-message-square"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={14}
                      width={14}
                      xmlns="http://www.w3.org/2000/svg"
                      id="ab2"
                    >
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                        style={{
                          strokeDasharray: "68, 88",
                          strokeDashoffset: 0,
                        }}
                      />
                    </svg>
                  </i>{" "}
                  Live Chat
                </a>
              </li>
              <li className>
                <a className href="privacy-n-policy.html" title>
                  <i className>
                    <svg
                      id="ab4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-airplay"
                    >
                      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                      <polygon points="12 15 17 21 7 21 12 15" />
                    </svg>
                  </i>{" "}
                  Privacy Polices
                </a>
              </li>
              <li className>
                <a className href="settings.html" title>
                  <i className>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-settings"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </i>{" "}
                  Web Settings
                </a>
              </li>
              <li className="menu-item-has-children">
                <a className="#" href="#" title>
                  <i className>
                    <svg
                      id="team"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-smile"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} y1={9} x2="9.01" y2={9} />
                      <line x1={15} y1={9} x2="15.01" y2={9} />
                    </svg>
                  </i>{" "}
                  Development Tools
                </a>
                <ul className="submenu">
                  <li>
                    <a href="widgets.html" title>
                      Widgets Collection
                    </a>
                  </li>
                  <li>
                    <a href="development-component.html" title>
                      Web Component
                    </a>
                  </li>
                  <li>
                    <a href="development-elements.html" title>
                      Web Elements
                    </a>
                  </li>
                  <li>
                    <a href="loader-spiners.html" title>
                      Loader Spiners
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* nav sidebar */}
          <section>
            <div className="white-bg">
              <div className="container-fluid">
                <div className="menu-caro">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="sidemenu">
                        <i>
                          <svg
                            id="side-menu"
                            xmlns="http://www.w3.org/2000/svg"
                            width={26}
                            height={26}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu"
                          >
                            <line x1={3} y1={12} x2={21} y2={12} />
                            <line x1={3} y1={6} x2={21} y2={6} />
                            <line x1={3} y1={18} x2={21} y2={18} />
                          </svg>
                        </i>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <h1
                        style={{
                          textAlign: "center",
                        }}
                      >
                        Truong Xua
                      </h1>
                    </div>
                    <div className="col-lg-2">
                      <div className="user-inf">
                        <div className="folowerz">Followers: 204</div>
                        <ul className="stars">
                          <li>
                            <i className="icofont-star" />
                          </li>
                          <li>
                            <i className="icofont-star" />
                          </li>
                          <li>
                            <i className="icofont-star" />
                          </li>
                          <li>
                            <i className="icofont-star" />
                          </li>
                          <li>
                            <i className="icofont-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* carousel menu */}
          <section>
            <div className="gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="page-contents" className="row merged20">
                      <div className="col-lg-3">
                        <aside className="sidebar static left">
                          <div className="widget">
                            <h4 className="widget-title">Your Groups</h4>
                            <ul className="ak-groups">
                              <li>
                                <figure>
                                  <img
                                    alt=""
                                    src="images/resources/your-group1.jpg"
                                  />
                                </figure>
                                <div className="your-grp">
                                  <h5>
                                    <a title href="group-detail.html">
                                      Good Group
                                    </a>
                                  </h5>
                                  <a title href="#">
                                    <i className="icofont-bell-alt" />
                                    Notifilactions <span>13</span>
                                  </a>
                                  <a
                                    className="promote"
                                    title
                                    href="group-feed.html"
                                  >
                                    view feed
                                  </a>
                                </div>
                              </li>
                              <li>
                                <figure>
                                  <img
                                    alt=""
                                    src="images/resources/your-group2.jpg"
                                  />
                                </figure>
                                <div className="your-grp">
                                  <h5>
                                    <a title href="group-detail.html">
                                      E-course Group
                                    </a>
                                  </h5>
                                  <a title href="#">
                                    <i className="icofont-bell-alt" />
                                    Notifilactions <span>13</span>
                                  </a>
                                  <a
                                    className="promote"
                                    title
                                    href="group-feed.html"
                                  >
                                    view feed
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="widget">
                            <h4 className="widget-title">Suggested Group</h4>
                            <div className="sug-caro">
                              <div className="friend-box">
                                <figure>
                                  <img
                                    alt=""
                                    src="images/resources/sidebar-info.jpg"
                                  />
                                  <span>Members: 505K</span>
                                </figure>
                                <div className="frnd-meta">
                                  <img
                                    alt=""
                                    src="images/resources/frnd-figure2.jpg"
                                  />
                                  <div className="frnd-name">
                                    <a title href="#">
                                      Social Research
                                    </a>
                                    <span>@biolabest</span>
                                  </div>
                                  <a className="main-btn2" href="#" title>
                                    Join Community
                                  </a>
                                </div>
                              </div>
                              <div className="friend-box">
                                <figure>
                                  <img
                                    alt=""
                                    src="images/resources/sidebar-info2.jpg"
                                  />
                                  <span>Members: 505K</span>
                                </figure>
                                <div className="frnd-meta">
                                  <img
                                    alt=""
                                    src="images/resources/frnd-figure3.jpg"
                                  />
                                  <div className="frnd-name">
                                    <a title href="#">
                                      Bio Labest Group
                                    </a>
                                    <span>@biolabest</span>
                                  </div>
                                  <a className="main-btn2" href="#" title>
                                    Join Community
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="widget">
                            <h4 className="widget-title">
                              Ask Research Question?
                            </h4>
                            <div className="ask-question">
                              <i className="icofont-question-circle" />
                              <h6>
                                Ask questions in Q&amp;A to get help from
                                experts in your field.
                              </h6>
                              <a className="ask-qst" href="#" title>
                                Ask a question
                              </a>
                            </div>
                          </div>
                          <div className="widget">
                            <h4 className="widget-title">
                              Explor Events{" "}
                              <a className="see-all" href="#" title>
                                See All
                              </a>
                            </h4>
                            <div className="rec-events bg-purple">
                              <i className="icofont-gift" />
                              <h6>
                                <a title href>
                                  BZ University good night event in columbia
                                </a>
                              </h6>
                              <img alt="" src="images/clock.png" />
                            </div>
                            <div className="rec-events bg-blue">
                              <i className="icofont-microphone" />
                              <h6>
                                <a title href>
                                  The 3rd International Conference 2020
                                </a>
                              </h6>
                              <img alt="" src="images/clock.png" />
                            </div>
                          </div>
                          <div className="widget">
                            <h4 className="widget-title">Group Terms</h4>
                            <div className="grop-rules">
                              <p>
                                Hi! To ensure that this is a great place for
                                everyone to have a wondefull time, we have some
                                rules. Breaking them will result in a ban from
                                the group.
                              </p>
                              <ol>
                                <li>
                                  <i className="icofont-dotted-right" /> Be
                                  positive! Respect and help other viewers
                                </li>
                                <li>
                                  <i className="icofont-dotted-right" /> No
                                  insults, aggravations or any other bad languag
                                </li>
                                <li>
                                  <i className="icofont-dotted-right" /> No self
                                  promotions
                                </li>
                                <li>
                                  <i className="icofont-dotted-right" /> Avoid
                                  political or religious discussions
                                </li>
                                <li>
                                  <i className="icofont-dotted-right" /> No
                                  comment spamming
                                </li>
                              </ol>
                            </div>
                          </div>
                          {/* <div className="widget stick-widget">
                            <h4 className="widget-title">
                              Featured Universities{" "}
                              <a className="see-all" href="#" title>
                                See All
                              </a>
                            </h4>
                            <ul className="featured-comp">
                              <li>
                                <a
                                  href="#"
                                  title="Color Hands inc"
                                  data-toggle="tooltip"
                                >
                                  <img
                                    src="images/resources/company1.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Macrosoft inc"
                                  data-toggle="tooltip"
                                >
                                  <img
                                    src="images/resources/company2.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="EBM inc"
                                  data-toggle="tooltip"
                                >
                                  <img
                                    src="images/resources/company3.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Boogle inc"
                                  data-toggle="tooltip"
                                >
                                  <img
                                    src="images/resources/company4.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Color Hands inc"
                                  data-toggle="tooltip"
                                >
                                  <img
                                    src="images/resources/company5.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Macrosoft inc"
                                  data-toggle="tooltip"
                                >
                                  <img
                                    src="images/resources/company6.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="EBM inc"
                                  data-toggle="tooltip"
                                >
                                  <img
                                    src="images/resources/company7.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Boogle inc"
                                  data-toggle="tooltip"
                                >
                                  <img
                                    src="images/resources/company8.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </div> */}
                          {/* feature universites logos */}
                        </aside>
                      </div>
                      <div className="col-lg-9">
                        <div className="group-feed">
                          <div className="group-avatar">
                            <img
                              src="images/resources/group-profile.jpg"
                              alt=""
                            />
                            <a href="#" title>
                              <i className="icofont-check-circled" />
                              Joined
                            </a>
                            <figure className="group-dp">
                              <img src="images/resources/group-dp.jpg" alt="" />
                            </figure>
                          </div>
                          <div className="grp-info">
                            <h4>
                              Science World <span>@Educational</span>
                            </h4>
                            <ul>
                              <li>
                                <span>Created:</span> April 2020
                              </li>
                              <li>
                                <span>Members:</span> 55K
                              </li>
                              <li>
                                <span>Posts:</span> 932
                              </li>
                              <li>
                                <span>Followers:</span> 2.2K
                              </li>
                            </ul>
                            <ul className="more-grp-info">
                              <li>
                                <form className="c-form" method="post">
                                  <input
                                    type="text"
                                    placeholder="search Group"
                                  />
                                  <i className="icofont-search-1" />
                                </form>
                              </li>
                              <li>
                                <div className="more">
                                  <div className="more-post-optns">
                                    <i className>
                                      <svg
                                        className="feather feather-more-horizontal"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        height={24}
                                        width={24}
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <circle r={1} cy={12} cx={12} />
                                        <circle r={1} cy={12} cx={19} />
                                        <circle r={1} cy={12} cx={5} />
                                      </svg>
                                    </i>
                                    <ul>
                                      <li>
                                        <i className="icofont-pen-alt-1" />
                                        Edit Post
                                        <span>
                                          Edit This Post within a Hour
                                        </span>
                                      </li>
                                      <li>
                                        <i className="icofont-ban" />
                                        Hide Post
                                        <span>Hide This Post</span>
                                      </li>
                                      <li>
                                        <i className="icofont-ui-delete" />
                                        Delete Post
                                        <span>
                                          If inappropriate Post By Mistake
                                        </span>
                                      </li>
                                      <li>
                                        <i className="icofont-flag" />
                                        Report
                                        <span>Inappropriate content</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="main-wraper">
                            <div className="grp-about">
                              <div className="row">
                                <div className="col-lg-8">
                                  <h4>Info</h4>
                                  <p>
                                    Hi! And welcome to the group! for those who
                                    just join us, we invite you to our Discord
                                    official channel, where we talk about
                                    vidplays, conventions, DIY, costume tips and
                                    more!
                                  </p>
                                </div>
                                <div className="col-lg-4">
                                  <div className="share-article">
                                    <span>share this Group</span>
                                    <a href="#" title className="facebook">
                                      <i className="icofont-facebook" />
                                    </a>
                                    <a href="#" title className="pinterest">
                                      <i className="icofont-pinterest" />
                                    </a>
                                    <a href="#" title className="instagram">
                                      <i className="icofont-instagram" />
                                    </a>
                                    <a href="#" title className="twitter">
                                      <i className="icofont-twitter" />
                                    </a>
                                    <a href="#" title className="google">
                                      <i className="icofont-google-plus" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-8">
                            <div className="main-wraper">
                        <span className="new-title">Create New Post</span>
                        <div className="new-post">
                          <form method="post">
                            <i className="icofont-pen-alt-1" />
                            <input
                              type="text"
                              placeholder="Create New Post"
                              onClick={() => {
                                var element =
                                  document.getElementById("post-new");
                                element.classList.add("active");
                                let test =
                                  document.getElementById("popup-head-name");
                                test.innerHTML = "Create New Post";
                              }}
                            />
                          </form>
                          <ul className="upload-media">
                            <li>
                              <a href="#" title>
                                <i>
                                  <img src="images/image.png" alt="" />
                                </i>
                                <span>Photo/Video</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" title>
                                <i>
                                  <img src="images/activity.png" alt="" />
                                </i>
                                <span>Feeling/Activity</span>
                              </a>
                            </li>
                            <li>
                              <a href="live-stream.html" title>
                                <i>
                                  <img src="images/live-stream.png" alt="" />
                                </i>
                                <span>Live Stream</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                              {/* create new post */}

                              {/* chat rooms */}
                              <div className="main-wraper">
                                <div className="user-post">
                                  <div className="friend-info">
                                    <figure>
                                      <i className="icofont-learn" />
                                    </figure>
                                    <div className="friend-name">
                                      <ins>
                                        <a title href="time-line.html">
                                          Suggested
                                        </a>
                                      </ins>
                                      <span>
                                        <i className="icofont-runner-alt-1" />{" "}
                                        Follow similar People
                                      </span>
                                    </div>
                                    <ul
                                      style={{
                                        display: "flex",
                                      }}
                                      className="suggested-caro"
                                    >
                                      <li>
                                        <figure>
                                          <img
                                            src="images/resources/speak-1.jpg"
                                            alt=""
                                          />
                                        </figure>
                                        <span>Amy Watson</span>
                                        <ins>Department of Socilolgy</ins>
                                        <a href="#" title data-ripple>
                                          <i className="icofont-star" /> Follow
                                        </a>
                                      </li>
                                      <li>
                                        <figure>
                                          <img
                                            src="images/resources/speak-2.jpg"
                                            alt=""
                                          />
                                        </figure>
                                        <span>Muhammad Khan</span>
                                        <ins>Department of Socilolgy</ins>
                                        <a href="#" title data-ripple>
                                          <i className="icofont-star" /> Follow
                                        </a>
                                      </li>
                                      <li>
                                        <figure>
                                          <img
                                            src="images/resources/speak-3.jpg"
                                            alt=""
                                          />
                                        </figure>
                                        <span>Sadia Gill</span>
                                        <ins>Department of Socilolgy</ins>
                                        <a href="#" title data-ripple>
                                          <i className="icofont-star" /> Follow
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* suggested friends */}
                              
                              {/* share post without image */}
                              <div className="main-wraper">
                                <div className="user-post">
                                  <div className="friend-info">
                                    <figure>
                                      <img
                                        alt=""
                                        src="images/resources/user2.jpg"
                                      />
                                    </figure>
                                    <div className="friend-name">
                                      <div className="more">
                                        <div className="more-post-optns">
                                          <i className>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={24}
                                              height={24}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth={2}
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="feather feather-more-horizontal"
                                            >
                                              <circle cx={12} cy={12} r={1} />
                                              <circle cx={19} cy={12} r={1} />
                                              <circle cx={5} cy={12} r={1} />
                                            </svg>
                                          </i>
                                          <ul>
                                            <li>
                                              <i className="icofont-pen-alt-1" />
                                              Edit Post
                                              <span>
                                                Edit This Post within a Hour
                                              </span>
                                            </li>
                                            <li>
                                              <i className="icofont-ban" />
                                              Hide Post
                                              <span>Hide This Post</span>
                                            </li>
                                            <li>
                                              <i className="icofont-ui-delete" />
                                              Delete Post
                                              <span>
                                                If inappropriate Post By Mistake
                                              </span>
                                            </li>
                                            <li>
                                              <i className="icofont-flag" />
                                              Report
                                              <span>Inappropriate content</span>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <ins>
                                        <a title href="time-line.html">
                                          Maria k.
                                        </a>{" "}
                                        Premium Product
                                      </ins>
                                      <span>
                                        <i className="icofont-globe" />{" "}
                                        published: Sep,15 2020
                                      </span>
                                    </div>
                                    <div className="post-meta">
                                      <figure className="premium-post">
                                        <img
                                          src="images/resources/book5.jpg"
                                          alt=""
                                        />
                                      </figure>
                                      <div className="premium">
                                        <a
                                          href="book-detail.html"
                                          className="post-title"
                                        >
                                          Technicial words 2020 Book world
                                        </a>
                                        <p>
                                          Nam eget dui. Etiam rhoncus. Maecenas
                                          tempus, tellus eget condimentum
                                          rhoncus, sem quam semper libero.
                                        </p>
                                        <a
                                          className="main-btn purchase-btn"
                                          title
                                          href="book-detail.html"
                                        >
                                          <i className="icofont-cart-alt" /> Buy
                                          Now
                                        </a>
                                      </div>
                                      <div className="we-video-info">
                                        <ul>
                                          <li>
                                            <span
                                              title="views"
                                              className="views"
                                            >
                                              <i>
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width={16}
                                                  height={16}
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth={2}
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="feather feather-eye"
                                                >
                                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                  <circle
                                                    cx={12}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                </svg>
                                              </i>
                                              <ins>1.2k</ins>
                                            </span>
                                          </li>
                                          <li>
                                            <span
                                              title="Comments"
                                              className="Recommend"
                                            >
                                              <i>
                                                <svg
                                                  className="feather feather-message-square"
                                                  strokeLinejoin="round"
                                                  strokeLinecap="round"
                                                  strokeWidth={2}
                                                  stroke="currentColor"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  height={16}
                                                  width={16}
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                </svg>
                                              </i>
                                              <ins>54</ins>
                                            </span>
                                          </li>
                                          <li>
                                            <span
                                              title="follow"
                                              className="Follow"
                                            >
                                              <i>
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width={16}
                                                  height={16}
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth={2}
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="feather feather-star"
                                                >
                                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>
                                              </i>
                                              <ins>5k</ins>
                                            </span>
                                          </li>
                                          <li>
                                            <span
                                              className="share-pst"
                                              title="Share"
                                            >
                                              <i>
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width={16}
                                                  height={16}
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth={2}
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="feather feather-share-2"
                                                >
                                                  <circle
                                                    cx={18}
                                                    cy={5}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={6}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={18}
                                                    cy={19}
                                                    r={3}
                                                  />
                                                  <line
                                                    x1="8.59"
                                                    y1="13.51"
                                                    x2="15.42"
                                                    y2="17.49"
                                                  />
                                                  <line
                                                    x1="15.41"
                                                    y1="6.51"
                                                    x2="8.59"
                                                    y2="10.49"
                                                  />
                                                </svg>
                                              </i>
                                              <ins>205</ins>
                                            </span>
                                          </li>
                                        </ul>
                                        <a
                                          href="post-detail.html"
                                          title
                                          className="reply"
                                        >
                                          Reply <i className="icofont-reply" />
                                        </a>
                                      </div>
                                      <div className="stat-tools">
                                        <div className="box">
                                          <div className="Like">
                                            <a className="Like__link">
                                              <i className="icofont-like" />{" "}
                                              Like
                                            </a>
                                            <div className="Emojis">
                                              <div className="Emoji Emoji--like">
                                                <div className="icon icon--like" />
                                              </div>
                                              <div className="Emoji Emoji--love">
                                                <div className="icon icon--heart" />
                                              </div>
                                              <div className="Emoji Emoji--haha">
                                                <div className="icon icon--haha" />
                                              </div>
                                              <div className="Emoji Emoji--wow">
                                                <div className="icon icon--wow" />
                                              </div>
                                              <div className="Emoji Emoji--sad">
                                                <div className="icon icon--sad" />
                                              </div>
                                              <div className="Emoji Emoji--angry">
                                                <div className="icon icon--angry" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="box">
                                          <div className="Emojis">
                                            <div className="Emoji Emoji--like">
                                              <div className="icon icon--like" />
                                            </div>
                                            <div className="Emoji Emoji--love">
                                              <div className="icon icon--heart" />
                                            </div>
                                            <div className="Emoji Emoji--haha">
                                              <div className="icon icon--haha" />
                                            </div>
                                            <div className="Emoji Emoji--wow">
                                              <div className="icon icon--wow" />
                                            </div>
                                            <div className="Emoji Emoji--sad">
                                              <div className="icon icon--sad" />
                                            </div>
                                            <div className="Emoji Emoji--angry">
                                              <div className="icon icon--angry" />
                                            </div>
                                          </div>
                                        </div>
                                        <a
                                          title
                                          href="#"
                                          className="comment-to"
                                        >
                                          <i className="icofont-comment" />{" "}
                                          Comment
                                        </a>
                                        <a title href="#" className="share-to">
                                          <i className="icofont-share-alt" />{" "}
                                          Share
                                        </a>
                                        <div className="emoji-state">
                                          <div className="popover_wrapper">
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title
                                            >
                                              <img
                                                alt=""
                                                src="images/smiles/thumb.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="images/smiles/thumb.png"
                                                />{" "}
                                                Likes
                                              </span>
                                              <ul className="namelist">
                                                <li>Jhon Doe</li>
                                                <li>Amara Sin</li>
                                                <li>Sarah K.</li>
                                                <li>
                                                  <span>20+ more</span>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="popover_wrapper">
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title
                                            >
                                              <img
                                                alt=""
                                                src="images/smiles/heart.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="images/smiles/heart.png"
                                                />{" "}
                                                Love
                                              </span>
                                              <ul className="namelist">
                                                <li>Amara Sin</li>
                                                <li>Jhon Doe</li>
                                                <li>
                                                  <span>10+ more</span>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="popover_wrapper">
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title
                                            >
                                              <img
                                                alt=""
                                                src="images/smiles/smile.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="images/smiles/smile.png"
                                                />{" "}
                                                Happy
                                              </span>
                                              <ul className="namelist">
                                                <li>Sarah K.</li>
                                                <li>Jhon Doe</li>
                                                <li>Amara Sin</li>
                                                <li>
                                                  <span>100+ more</span>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="popover_wrapper">
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title
                                            >
                                              <img
                                                alt=""
                                                src="images/smiles/weep.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="images/smiles/weep.png"
                                                />{" "}
                                                Dislike
                                              </span>
                                              <ul className="namelist">
                                                <li>Danial Carbal</li>
                                                <li>Amara Sin</li>
                                                <li>Sarah K.</li>
                                                <li>
                                                  <span>15+ more</span>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <p>10+</p>
                                        </div>
                                        <div
                                          className="new-comment"
                                          style={{ display: "block" }}
                                        >
                                          <form method="post">
                                            <input
                                              type="text"
                                              placeholder="write comment"
                                            />
                                            <button type="submit">
                                              <i className="icofont-paper-plane" />
                                            </button>
                                          </form>
                                          <div className="comments-area">
                                            <ul>
                                              <li>
                                                <figure>
                                                  <img
                                                    alt=""
                                                    src="images/resources/user1.jpg"
                                                  />
                                                </figure>
                                                <div className="commenter">
                                                  <h5>
                                                    <a title href="#">
                                                      Jack Carter
                                                    </a>
                                                  </h5>
                                                  <span>2 hours ago</span>
                                                  <p>
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
                                                    decision, great post!
                                                  </p>
                                                  <span>
                                                    you can view the more detail
                                                    via link
                                                  </span>
                                                  <a title href="#">
                                                    https://www.youtube.com/watch?v=HpZgwHU1GcI
                                                  </a>
                                                </div>
                                                <a title="Like" href="#">
                                                  <i className="icofont-heart" />
                                                </a>
                                                <a
                                                  title="Reply"
                                                  href="#"
                                                  className="reply-coment"
                                                >
                                                  <i className="icofont-reply" />
                                                </a>
                                              </li>
                                              <li>
                                                <figure>
                                                  <img
                                                    alt=""
                                                    src="images/resources/user2.jpg"
                                                  />
                                                </figure>
                                                <div className="commenter">
                                                  <h5>
                                                    <a title href="#">
                                                      Ching xang
                                                    </a>
                                                  </h5>
                                                  <span>2 hours ago</span>
                                                  <p>
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
                                                    decision, great post!
                                                  </p>
                                                </div>
                                                <a title="Like" href="#">
                                                  <i className="icofont-heart" />
                                                </a>
                                                <a
                                                  title="Reply"
                                                  href="#"
                                                  className="reply-coment"
                                                >
                                                  <i className="icofont-reply" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* post sell book */}
                              <div>{renderHome()}</div>
                            </div>
                            <div className="col-lg-4">
                              <aside className="sidebar static left">
                                <div className="advertisment-box">
                                  <h4 className>
                                    <i className="icofont-info-circle" />{" "}
                                    advertisment
                                  </h4>
                                  <figure>
                                    <a href="#" title="Advertisment">
                                      <img
                                        src="images/resources/ad-widget2.gif"
                                        alt=""
                                      />
                                    </a>
                                  </figure>
                                </div>
                                <div className="widget">
                                  <h4 className="widget-title">
                                    Members{" "}
                                    <a title href="#" className="see-all">
                                      See All
                                    </a>
                                  </h4>
                                  <ul className="invitepage">
                                    <li>
                                      <figure>
                                        <img
                                          alt=""
                                          src="images/resources/friend-avatar.jpg"
                                        />
                                        <a href>Jack carter</a>
                                      </figure>
                                      <button className="sug-like">
                                        <i className="invit">Follow</i>
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <figure>
                                        <img
                                          alt=""
                                          src="images/resources/friend-avatar2.jpg"
                                        />
                                        <a href>Emma watson</a>
                                      </figure>
                                      <button className="sug-like">
                                        <i className="invit">Follow</i>
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <figure>
                                        <img
                                          alt=""
                                          src="images/resources/friend-avatar3.jpg"
                                        />
                                        <a href>Andrew</a>
                                      </figure>
                                      <button className="sug-like">
                                        <i className="invit">Follow</i>
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <figure>
                                        <img
                                          alt=""
                                          src="images/resources/friend-avatar4.jpg"
                                        />
                                        <a href>Moona Singh</a>
                                      </figure>
                                      <button className="sug-like">
                                        <i className="invit">Follow</i>
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <figure>
                                        <img
                                          alt=""
                                          src="images/resources/friend-avatar5.jpg"
                                        />
                                        <a href>Harry pooter</a>
                                      </figure>
                                      <button className="sug-like">
                                        <i className="invit">Follow</i>
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                <div className="widget">
                                  <h4 className="widget-title">Recent Media</h4>
                                  <div className="recent-media">
                                    <figure>
                                      <img
                                        alt=""
                                        src="images/resources/course-3.jpg"
                                      />
                                      <a
                                        href="https://www.youtube.com/watch?v=nOCXXHGMezU&feature=emb_title"
                                        data-fancybox
                                        className="play-btn"
                                      >
                                        <i className="icofont-play" />
                                      </a>
                                      <span>Angular Js Tutorial</span>
                                    </figure>
                                    <figure>
                                      <img
                                        alt=""
                                        src="images/resources/course-4.jpg"
                                      />
                                      <a
                                        href="https://www.youtube.com/watch?v=nOCXXHGMezU&feature=emb_title"
                                        data-fancybox
                                        className="play-btn"
                                      >
                                        <i className="icofont-play" />
                                      </a>
                                      <span>Css3 2020 Tutorial</span>
                                    </figure>
                                  </div>
                                </div>
                                <div className="widget stick-widget">
                                  <h4 className="widget-title">
                                    You May Like Groups
                                  </h4>
                                  <ul className="suggestd">
                                    <li>
                                      <a className="sug-pic" href="#" title>
                                        <img
                                          src="images/resources/sug-page-1.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <a className="sug-title" href="#" title>
                                        Physics Shop
                                      </a>
                                      <button className="sug-like">
                                        <i className="icofont-like" />
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <a className="sug-pic" href="#" title>
                                        <img
                                          src="images/resources/sug-page-2.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <a className="sug-title" href="#" title>
                                        Sun Rise
                                      </a>
                                      <button className="sug-like">
                                        <i className="icofont-like" />
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <a className="sug-pic" href="#" title>
                                        <img
                                          src="images/resources/sug-page-3.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <a className="sug-title" href="#" title>
                                        Big Botny
                                      </a>
                                      <button className="sug-like">
                                        <i className="icofont-like" />
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <a className="sug-pic" href="#" title>
                                        <img
                                          src="images/resources/sug-page-4.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <a className="sug-title" href="#" title>
                                        King Work
                                      </a>
                                      <button className="sug-like">
                                        <i className="icofont-like" />
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <a className="sug-pic" href="#" title>
                                        <img
                                          src="images/resources/sug-page-5.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <a className="sug-title" href="#" title>
                                        18teen Guys
                                      </a>
                                      <button className="sug-like">
                                        <i className="icofont-like" />
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                {/* Suggested groups */}
                              </aside>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* content */}
          <figure className="bottom-mockup">
            <img alt="" src="images/footer.png" />
          </figure>
          <div className="bottombar">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <span className>
                    © copyright All rights reserved by socimo 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* bottombar */}
          <div className="wraper-invite">
            <div className="popup">
              <span className="popup-closed">
                <i className="icofont-close" />
              </span>
              <div className="popup-meta">
                <div className="popup-head">
                  <h5>
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-mail"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </i>{" "}
                    Invite Colleagues
                  </h5>
                </div>
                <div className="invitation-meta">
                  <p>
                    Enter an email address to invite a colleague or co-author to
                    join you on socimo. They will receive an email and, in some
                    cases, up to two reminders.
                  </p>
                  <form method="post" className="c-form">
                    <input type="text" placeholder="Enter Email" />
                    <button type="submit" className="main-btn">
                      Invite
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* invite colleague popup */}
          <div className="popup-wraper">
            <div className="popup">
              <span className="popup-closed">
                <i className="icofont-close" />
              </span>
              <div className="popup-meta">
                <div className="popup-head">
                  <h5>
                    <i>
                      <svg
                        className="feather feather-message-square"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </i>{" "}
                    Send Message
                  </h5>
                </div>
                <div className="send-message">
                  <form method="post" className="c-form">
                    <input type="text" placeholder="Enter Name.." />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Write Message" defaultValue={""} />
                    <div className="uploadimage">
                      <i className="icofont-file-jpg" />
                      <label className="fileContainer">
                        <input type="file" />
                        Attach file
                      </label>
                    </div>
                    <button type="submit" className="main-btn">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* send message popup */}
          <div className="side-slide">
            <span className="popup-closed">
              <i className="icofont-close" />
            </span>
            <div className="slide-meta">
              <ul className="nav nav-tabs slide-btns">
                <li className="nav-item">
                  <a className="active" href="#messages" data-toggle="tab">
                    Messages
                  </a>
                </li>
                <li className="nav-item">
                  <a className href="#notifications" data-toggle="tab">
                    Notifications
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active fade show" id="messages">
                  <h4>
                    <i className="icofont-envelope" /> messages
                  </h4>
                  <a
                    href="#"
                    className="send-mesg"
                    title="New Message"
                    data-toggle="tooltip"
                  >
                    <i className="icofont-edit" />
                  </a>
                  <ul className="new-messages">
                    <li>
                      <figure>
                        <img src="images/resources/user1.jpg" alt="" />
                      </figure>
                      <div className="mesg-info">
                        <span>Ibrahim Ahmed</span>
                        <a href="#" title>
                          Helo dear i wanna talk to you
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user2.jpg" alt="" />
                      </figure>
                      <div className="mesg-info">
                        <span>Fatima J.</span>
                        <a href="#" title>
                          Helo dear i wanna talk to you
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user3.jpg" alt="" />
                      </figure>
                      <div className="mesg-info">
                        <span>Fawad Ahmed</span>
                        <a href="#" title>
                          Helo dear i wanna talk to you
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user4.jpg" alt="" />
                      </figure>
                      <div className="mesg-info">
                        <span>Saim Turan</span>
                        <a href="#" title>
                          Helo dear i wanna talk to you
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user5.jpg" alt="" />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          Helo dear i wanna talk to you
                        </a>
                      </div>
                    </li>
                  </ul>
                  <a href="#" title className="main-btn" data-ripple>
                    view all
                  </a>
                </div>
                <div className="tab-pane fade" id="notifications">
                  <h4>
                    <i className="icofont-bell-alt" /> notifications
                  </h4>
                  <ul className="notificationz">
                    <li>
                      <figure>
                        <img src="images/resources/user5.jpg" alt="" />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          recommend your post
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user4.jpg" alt="" />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          share your post <strong>a good time today!</strong>
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user2.jpg" alt="" />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          recommend your post
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user1.jpg" alt="" />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          share your post <strong>a good time today!</strong>
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user3.jpg" alt="" />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          recommend your post
                        </a>
                      </div>
                    </li>
                  </ul>
                  <a href="#" title className="main-btn" data-ripple>
                    view all
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* side slide message & popup */}
          <div id="post-new" className="post-new-popup">
          <div className="popup" style={{ width: "800px" }}>
            <span
              onClick={() => {
                var element = document.getElementById("post-new");
                setimgNotSave([]);
                element.classList.remove("active");
                document.getElementById("emojionearea1").value = "";
                setUpdateAPost({});
              }}
              className="popup-closed"
            >
              <i className="icofont-close" />
            </span>
            <div className="popup-meta">
              <div className="popup-head">
                <h5>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-plus"
                    >
                      <line x1={12} y1={5} x2={12} y2={19} />
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                  </i>
                  <p
                    style={{
                      display: "inline",
                      fontSize: 20,
                    }}
                    id="popup-head-name"
                  >
                    Create New Post
                  </p>
                </h5>
              </div>
              <div className="post-new">
                <div className="post-newmeta">
                  <ul className="post-categoroes">
                    <li>
                      <label class="lablePhoto" for="upload-photo">
                        <i className="icofont-camera" /> Photo / Video
                      </label>
                      <input
                        type="file"
                        name="photo"
                        id="upload-photo"
                        onChange={uploadImage}
                        accept="image/*"
                        multiple
                      />
                    </li>
                  </ul>
                  <div id="imgBAdd" className="imgBeforeAdd">
                    {renderImg()}
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="c-form">
                  <textarea
                    id="emojionearea1"
                    placeholder="What's On Your Mind?"
                    defaultValue={""}
                    style={{
                      height: 300,
                    }}
                    onChange={handleChange}
                    required
                  />

                  <button type="submit" className="main-btn">
                    Publish
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div id="delete-post" className="post-new-popup-delete">
          <div className="popup" style={{ width: "800px" }}>
            <span
              onClick={() => {
                var element = document.getElementById("delete-post");
                element.classList.remove("active");
              }}
              className="popup-closed"
            >
              <i className="icofont-close" />
            </span>
            <div className="popup-meta">
              <div className="popup-head">
                <h5>
                  <p
                    style={{
                      fontSize: 18,
                    }}
                    id="popup-head-name"
                  >
                    Bạn có chắn muốn xóa bài đăng này ?
                  </p>
                </h5>
              </div>
              <div className="post-new">
                <button
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 20,
                    paddingLeft: 20,

                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#EFEFEF",
                    float: "right",
                    marginLeft: 10,
                  }}
                  onClick={() => {
                    var element = document.getElementById("delete-post");
                    element.classList.remove("active");
                  }}
                >
                  Hủy
                </button>
                <button
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 20,
                    paddingLeft: 20,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "red",
                    backgroundColor: "red",
                    float: "right",
                  }}
                  onClick={() => deletePost()}
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
          {/* New post popup */}
          <div className="new-question-popup">
            <div className="popup">
              <span className="popup-closed">
                <i className="icofont-close" />
              </span>
              <div className="popup-meta">
                <div className="popup-head">
                  <h5>
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-help-circle"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <line x1={12} y1={17} x2="12.01" y2={17} />
                      </svg>
                    </i>{" "}
                    Ask Question
                  </h5>
                </div>
                <div className="post-new">
                  <form method="post" className="c-form">
                    <input type="text" placeholder="Question Title" />
                    <textarea placeholder="Write Question" defaultValue={""} />
                    <select>
                      <option>Select Your Question Type</option>
                      <option>Article</option>
                      <option>Book</option>
                      <option>Chapter</option>
                      <option>Code</option>
                      <option>conference Paper</option>
                      <option>Cover Page</option>
                      <option>Data</option>
                      <option>Exprement Finding</option>
                      <option>Method</option>
                      <option>Poster</option>
                      <option>Preprint</option>
                      <option>Technicial Report</option>
                      <option>Thesis</option>
                      <option>Research</option>
                    </select>
                    <div className="uploadimage">
                      <i className="icofont-eye-alt-alt" />
                      <label className="fileContainer">
                        <input type="file" />
                        Upload File
                      </label>
                    </div>
                    <button type="submit" className="main-btn">
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* ask question */}

          {/* auto popup */}
          <div className="share-wraper">
            <div className="share-options">
              <span className="close-btn">
                <i className="icofont-close-circled" />
              </span>
              <h5>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-share"
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1={12} y1={2} x2={12} y2={15} />
                  </svg>
                </i>
                Share To!
              </h5>
              <form method="post">
                <textarea placeholder="Write Something" defaultValue={""} />
              </form>
              <ul>
                <li>
                  <a title href="#">
                    Your Timeline
                  </a>
                </li>
                <li className="friends">
                  <a title href="#">
                    To Friends
                  </a>
                </li>
                <li className="socialz">
                  <a className="active" title href="#">
                    Social Media
                  </a>
                </li>
              </ul>
              <div style={{ display: "block" }} className="social-media">
                <ul>
                  <li>
                    <a title href="#" className="facebook">
                      <i className="icofont-facebook" />
                    </a>
                  </li>
                  <li>
                    <a title href="#" className="twitter">
                      <i className="icofont-twitter" />
                    </a>
                  </li>
                  <li>
                    <a title href="#" className="instagram">
                      <i className="icofont-instagram" />
                    </a>
                  </li>
                  <li>
                    <a title href="#" className="pinterest">
                      <i className="icofont-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a title href="#" className="youtube">
                      <i className="icofont-youtube" />
                    </a>
                  </li>
                  <li>
                    <a title href="#" className="dribble">
                      <i className="icofont-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a title href="#" className="behance">
                      <i className="icofont-behance-original" />
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ display: "none" }} className="friends-to">
                <div className="follow-men">
                  <figure>
                    <img
                      className="mCS_img_loaded"
                      src="images/resources/user1.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="follow-meta">
                    <h5>
                      <a href="#" title>
                        Jack Carter
                      </a>
                    </h5>
                    <span>family member</span>
                  </div>
                  <a href="#" title>
                    Share
                  </a>
                </div>
                <div className="follow-men">
                  <figure>
                    <img
                      className="mCS_img_loaded"
                      src="images/resources/user2.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="follow-meta">
                    <h5>
                      <a href="#" title>
                        Xang Ching
                      </a>
                    </h5>
                    <span>Close Friend</span>
                  </div>
                  <a href="#" title>
                    Share
                  </a>
                </div>
                <div className="follow-men">
                  <figure>
                    <img
                      className="mCS_img_loaded"
                      src="images/resources/user3.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="follow-meta">
                    <h5>
                      <a href="#" title>
                        Emma Watson
                      </a>
                    </h5>
                    <span>Matul Friend</span>
                  </div>
                  <a href="#" title>
                    Share
                  </a>
                </div>
              </div>
              <button type="submit" className="main-btn">
                Publish
              </button>
            </div>
          </div>
          {/* share post */}
        </div>
      </div>
    );
  
}

export default GroupDetails;
