import "./Rightbar.scss";
import upload from "../../assets/upload.svg";
import pause from "../../assets/pause.svg";
import stop from "../../assets/stop.svg";
import { useState } from "react";
import Activity from "../Activity.jsx";
import Tasks from "../Tasks.jsx";
import Progress from "../Progress.jsx";
import X from "../../assets/x.svg";

const Rightbar = ({ open, setOpen }) => {
  const [tab, setTab] = useState(1);
  return (
    <div
      className="rightbar"
      style={{
        right: open ? "0" : "100%",
      }}
    >
      <div className="controls">
        <div className="upload_button">
          <img src={upload} alt="" />
          Salesforce
        </div>
        <div className="video_controls">
          <img src={pause} alt="" />
          <img src={stop} alt="" />
          {open && (
            <img
              src={X}
              alt=""
              onClick={() => {
                setOpen(false);
              }}
            />
          )}
        </div>
      </div>
      <div className="lowerpart">
        <div className="sidenav">
          <div className={tab === 1 ? "active" : ""} onClick={() => setTab(1)}>
            Activity
          </div>
          <div className={tab === 2 ? "active" : ""} onClick={() => setTab(2)}>
            Tasks
          </div>
          <div className={tab === 3 ? "active" : ""} onClick={() => setTab(3)}>
            Progress
          </div>
        </div>
        <div className="content">
          {tab === 1 && <Activity />}
          {tab === 2 && <Tasks />}
          {tab === 3 && <Progress />}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
