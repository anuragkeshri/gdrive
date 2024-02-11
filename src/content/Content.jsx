import React from 'react'
import style from './content.module.css'

const Content = () => {
  return (
    <>
       <div className={style.content}>
          <h1 style={{ color: "rgb(9, 40, 219)", fontSize: "40px" }}>
            Welcome to G-Drive{" "}
          </h1>
          <h1 style={{ color: "grey" }}>
            {" "}
            🚀 Unleash the Power of Collaboration and Organization{" "}
          </h1>
          <p style={{ fontWeight: "500" }}>
            Thank you for choosing G-Drive We are thrilled to have you on board.
            <br /> Whether you're a seasoned pro or a newcomer to cloud storage
            and collaboration,
            <br /> we're here to make your experience seamless and enjoyable.
          </p>
          <h3>Key Features:</h3>
          <h5>📂 Organize with Ease:</h5>
          <p>
            Effortlessly manage your files and folders. Create, edit, and
            organize your documents, <br />
            spreadsheets, presentations, and more—all in one place.
          </p>
          <h5>🔄 Real-Time Collaboration:</h5>
          Collaborate in real-time with colleagues, friends, or family. Multiple
          users can work on
          <br /> the same document simultaneously, making teamwork a breeze.
          <h5> 🔐 Secure and Accessible:</h5> Rest easy knowing that your data
          is secure. Our robust security features ensure the
          <br /> privacy and confidentiality of your files. Access your
          documents from anywhere, on any device.
        </div>

    </>
  )
}

export default Content
