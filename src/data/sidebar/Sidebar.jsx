// import React, { useState } from "react";
// import style from "./sidebar.module.css";
// import drive from "./drive.png";
// import recent from "./recent.png";
// import axios from "axios";

// const Sidebar = () => {
//   const [isCreateFolderPopupVisible, setCreateFolderPopupVisible] = useState(true);
//   const [newFolderName, setNewFolderName] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);

 
  
 
//   return (
//     <>
//       <div className={style.sidebar}>
     

//         <div className={style.column}>
//           <p style={{ fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
//             <img src={drive} style={{ width: "20px", height: "20px" }} alt="drive" /> &nbsp;My drive{" "}
//           </p>

//           <p style={{ fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
//             <img src={recent} style={{ width: "20px", height: "20px" }} alt="drive" /> &nbsp;Recent
//           </p>
//         </div>

//         {isCreateFolderPopupVisible && (
//           <div className={style.createFolderPopup}>
//             <input
//               className={style.search}
//               type="text"
//               width="10px"
//               value={newFolderName}
//               onChange={(e) => setNewFolderName(e.target.value)}
//               placeholder="Enter folder name"
//             />
//             <button
//               onClick={handleCreateFolder}
//               style={{
//                 backgroundColor: "white",
//                 padding: "7px",
//                 fontSize: "13px",
//                 marginLeft: "10px",
//                 borderRadius: "10px",
//                 transition: "background-color 0.3s ease",
//               }}
//               onMouseOver={(event) => {
//                 event.target.style.backgroundColor = "grey";
//               }}
//               onMouseOut={(event) => {
//                 event.target.style.backgroundColor = "white";
//               }}
//             >
//               Create Folder
//             </button>
//           </div>
          
//         )}

//         <hr />
//         <br />
//          <div style={{ display: "flex", alignItems: "center" }}>

//   <input
//     type="file"
//     onChange={handleFileChange}
//     style={{
//       display: "none",
//     }}
//     id="fileInput"
//   />
//   <label
//     htmlFor="fileInput"
//     style={{
//       marginLeft: "10px",
//       padding: "10px",
//       width: "120px",
//       backgroundColor: "#4e95e6",
//       color: "white",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize:"14px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
//       transition: "background-color 0.3s",
//     }}
//   >
//     Choose File
//   </label>

//   <button
//     onClick={handleUploadClick}
//     style={{
//       marginLeft: "10px",
//       padding: "10px",
//       width: "150px",
//       borderRadius: "5px",
//       backgroundColor: "white",
//       color: "#4e95e6",
//       fontSize: "14px",
//       fontWeight: "600",
//       border: "2px solid #4e95e6",
//       cursor: "pointer",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.7)",
//       transition: "color 0.3s, background-color 0.3s",
//     }}
//   >
//     Upload
//   </button>
// </div>

//       </div>
//     </>
//   );
// };

// export default Sidebar;
