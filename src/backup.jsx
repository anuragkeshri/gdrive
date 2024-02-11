import React, { useState } from "react";
import style from "./sidebar.module.css";
import drive from "./drive.png";
import computers from "./computer.png";
import share from "./share.png";
import recent from "./recent.png";
import trash from "./trash.png";
import database from "./database.png";

const Sidebar = () => {
  const [isCreateFolderPopupVisible, setCreateFolderPopupVisible] =
    useState(true);
  const [newFolderName, setNewFolderName] = useState("");

  // const handleCreateFolderClick = () => {
  //   setCreateFolderPopupVisible(true);
  // };

  const handleCreateFolder = () => {
    const apiUrl = "https://ujjwalzero7.pythonanywhere.com/api/create_entity/";

    const userid = sessionStorage.getItem("userid");
    if (!newFolderName) {
      alert("Error: Folder name cannot be empty");

      return;
    }

    const payload = {
      user_id: userid,
      folder_path: "/",
      name: newFolderName,
      is_folder: true,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Folder created successfully:", data);
        setCreateFolderPopupVisible(false);
        window.location.reload();
        // Add additional logic if needed based on the API response
      })
      .catch((error) => {
        console.error("Error creating folder:", error);
        // Handle error appropriately (e.g., show an error message to the user)
      });
  };

  return (
    <>
      <div className={style.sidebar}>
        <input type="file"></input>
        <button
          style={{
            marginLeft: "50px",
            marginTop: "30px",
            width: "140px",
            height: "40px",
            borderRadius: "20px",
            backgroundColor: "white",
            color: "rgb(78, 149, 230)",
            fontSize: "12px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
          }}
        >
          Upload New Files
        </button>


        
        <div className={style.column}>
          <p style={{ fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
            <img
              src={drive}
              style={{ width: "20px", height: "20px" }}
              alt="drive"
            />{" "}
            &nbsp;My drive{" "}
          </p>

         

          <p style={{ fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
            <img
              src={recent}
              style={{ width: "20px", height: "20px" }}
              alt="drive"
            />{" "}
            &nbsp;Recent
          </p>
        </div>

        {isCreateFolderPopupVisible && (
          <div className={style.createFolderPopup}>
            <input
              className={style.search}
              type="text"
              width="10px"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              placeholder="Enter folder name"
            />
            <button
              onClick={handleCreateFolder}
              style={{
                backgroundColor: "white",
                padding: "7px",
                fontSize: "13px",
                marginLeft: "10px",
                borderRadius: "10px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(event) => {
                event.target.style.backgroundColor = "grey";
              }}
              onMouseOut={(event) => {
                event.target.style.backgroundColor = "white";
              }}
            >
              Create Folder
            </button>

            {/* <button
              onClick={() => setCreateFolderPopupVisible(false)}
              style={{
                backgroundColor: "white",
                padding: "7px",
                fontSize: "13px",
                marginLeft: "10px",
                borderRadius:"10px"
              }}
            >
              Cancel
            </button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
