import './theme.css'
import { useState } from "react";
import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";

type themeType = {
    setTheme: any
}

function Theme(props: themeType){
    const [checked, setChecked] = useState(false);

    const changeHandler = (check: boolean) => {
        setChecked(!checked);
        if (check) {
          props.setTheme("dark");
        } else {
          props.setTheme("light");
        }
        console.log(checked, check);
    };
    return (
        <Switch
        onChange={changeHandler}
        checked={checked}
        className="react-switch"
        checkedIcon={
          <FaSun
            size={22}
            style={{ color: "orange", paddingTop: "3px", paddingLeft: "4px" }}
          ></FaSun>
        }
        uncheckedIcon={
          <FaMoon
            size={22}
            style={{
              color: "white",
              paddingTop: "3px",
              paddingRight: "4px",
              float: "right",
            }}
          />
        }
        onColor="#ddd"
        offColor="#333"
        onHandleColor="#333"
        offHandleColor="#ddd"
      ></Switch>
    );
}

export default Theme;