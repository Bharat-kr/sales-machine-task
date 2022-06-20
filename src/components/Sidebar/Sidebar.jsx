import "./Sidebar.scss";
import edit from "../../assets/edit.svg";
import people from "../../assets/people.svg";
import linkedin from "../../assets/linkedin.svg";
import cloud from "../../assets/cloud.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import translate from "../../assets/translate.svg";
import time from "../../assets/time.svg";
import link from "../../assets/link.svg";
import verified_user from "../../assets/verified_user.svg";
import call from "../../assets/call.svg";
import calender from "../../assets/calender.svg";
import email2 from "../../assets/email2.svg";
import meet from "../../assets/meet.svg";
import chat from "../../assets/chat.svg";
import { useTabs } from "../../contexts/TabsContext";
import { useEffect } from "react";

const Sidebar = () => {
  const { tabs, dispatchTabs } = useTabs();
  useEffect(() => {
    console.log(tabs);
  }, [tabs]);

  return (
    <div className="sidebar">
      <h3>
        Jean-Samuel Najnudel
        <div>
          <img src={edit} alt="" />
          <img src={verified_user} alt="" />
        </div>
      </h3>
      <p>President</p>
      <div>
        Ringover | <img src={people} alt="" /> 100-200
      </div>
      <a href="">http://www.ringover.com</a>
      <hr />
      <div className="links">
        <img src={linkedin} alt="" />
        <img src={cloud} alt="" />
      </div>
      <hr />
      <h2>Topics</h2>
      <div>
        <div className="topic">Some topic</div>
        <div className="topic">some topic name</div>
      </div>
      <h2>Contact</h2>
      <h4>
        <img src={email} alt="" />
        j.najnudel@ringover.com
      </h4>
      <h4>
        <img src={phone} alt="" />
        +33 07 55 35 23 21 <span>Primary</span>
      </h4>
      <h4>
        <img src={phone} alt="" />
        +33 99 53 05 19 21
      </h4>
      <h2>Additional</h2>
      <h4>
        <img src={email} alt="" />
        president@ringover.com
      </h4>
      <h4>
        <img src={translate} alt="" />
        Français
      </h4>
      <h4>
        <img src={link} alt="" />
        www.youtube.com/ringover
      </h4>
      <h4>
        <img src={time} alt="" />
        Indian Standard (+5:30)
      </h4>
      <div className="toolbar">
        <img src={call} alt="" className="bigphone" />
        <div>
          <img
            src={meet}
            alt=""
            onClick={() => {
              dispatchTabs({
                type: "add",
                payload: { name: "meet" },
              });
            }}
          />
          <img
            src={calender}
            alt=""
            onClick={() => {
              dispatchTabs({
                type: "add",
                payload: { name: "calender" },
              });
            }}
          />
          <img
            src={email2}
            alt=""
            onClick={() => {
              dispatchTabs({
                type: "add",
                payload: { name: "email" },
              });
            }}
          />
          <img
            src={chat}
            alt=""
            onClick={() => {
              dispatchTabs({
                type: "add",
                payload: { name: "chat" },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
