import "./Main.scss";
import note from "../../assets/note.svg";
import record_voice_over from "../../assets/record_voice_over.svg";
import close from "../../assets/close.svg";
import empty from "../../assets/empty.svg";
import hamburger from "../../assets/hamburger.svg";
import { useTabs } from "../../contexts/TabsContext";

const Main = ({ setOpen }) => {
  const { tabs, dispatchTabs, currentTab, setcurrentTab } = useTabs();

  const deleteTab = (el, idx) => {
    if (tabs.length === 1) {
      setcurrentTab(null);
    }
    if (tabs.length > 1 && currentTab !== 0 && idx <= currentTab) {
      setcurrentTab((prev) => prev - 1);
    }
    dispatchTabs({
      type: "remove",
      payload: el,
    });
  };
  return (
    <main>
      <div className="header">
        Workspace
        <div>
          <img src={record_voice_over} alt="" />
          <img src={note} alt="" />
          <img
            src={hamburger}
            alt=""
            className="hamburger"
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      {tabs.length === 0 && (
        <div className="empty">
          <img src={empty} alt="" />
          <h3>Your workspace is empty!</h3>
          <p>To add a tab, click on any option on your bottom left</p>
        </div>
      )}
      {tabs.length !== 0 && (
        <>
          <div className="tabname">
            {tabs.map((el, idx) => {
              return (
                <div className={currentTab === idx ? "tab active" : "tab"}>
                  <p
                    onClick={() => {
                      setcurrentTab(idx);
                    }}
                  >
                    {el.name}
                  </p>
                  <img
                    src={close}
                    alt=""
                    onClick={() => {
                      deleteTab(el, idx);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="content">{tabs[currentTab]?.name}</div>
        </>
      )}
    </main>
  );
};

export default Main;
