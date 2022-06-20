import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const TabContext = createContext();

const tabsReducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (state.length < 4) {
        return [...state, action.payload];
      } else {
        return state;
      }
    case "remove":
      return [
        ...state.filter((el) => {
          return el !== action.payload;
        }),
      ];
    default:
      return state;
  }
};

export const TabProvider = ({ children }) => {
  const [tabs, dispatchTabs] = useReducer(tabsReducer, []);
  const [currentTab, setcurrentTab] = useState(null);
  useEffect(() => {
    if (tabs.length === 1) {
      setcurrentTab(0);
    }
  }, [tabs]);

  return (
    <TabContext.Provider
      value={{ tabs, dispatchTabs, currentTab, setcurrentTab }}
    >
      {children}
    </TabContext.Provider>
  );
};
export const useTabs = () => useContext(TabContext);
