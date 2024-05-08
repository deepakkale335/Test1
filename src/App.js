import "./App.css";
import FormComponent from "./Component/FormComponent";
import { useState } from "react";
import ListComponent from "./Component/ListComponent";

function App() {
  // store user input in list form 
  const [dataList, setDataList] = useState([]);
  // store user current input in value
  const [formData, setFormData] = useState("");
// input field props we can update it user set method 
  const [inputStyle, setinputStyle] = useState({ color: "red" });
  const [inputTitle, setinputTitle] = useState("Please Enter Your Name");
  const [inputrequired, setrequired] = useState(true);
  const [inputdisable, setinputdisable] = useState(false);
  const [holder, setinputholder] = useState("Please Enter First Name");
  const [labelStyle, setlabelStyle] = useState({ color: "blue" });
  const [errorMessage, seterrorMessage] = useState("Please Enter Some value");
  const [error, seterror] = useState(false);
  const [maxLength, setmaxLength] = useState(10);
  const [inputType, setinputType] = useState("text");
  const [selectedElementIndex, setselectedElementIndex] = useState(null);

  // handle user input
  const handleChange = (e) => {
    setFormData(e.target.value);
  };
  // save user input value in list form
  const handleOnSave = () => {
    if (inputrequired && formData === "") {
      seterror(true);
    } else {
      if (selectedElementIndex) {
        let data = [...dataList];
        data[selectedElementIndex] = formData;
        setDataList(data);
        setselectedElementIndex(null);
      } else {
        let data = [...dataList];
        data.push(formData);
        setDataList(data);
      }
    }
  };

  return (
    <div>
      <div className="App">
        <button> create </button>
        <FormComponent
          inputTitle={inputTitle}
          inputType={inputType}
          inputStyle={inputStyle}
          customChangeFunction={handleChange}
          required={inputrequired}
          holder={holder}
          labelStyle={labelStyle}
          errorMessage={errorMessage}
          error={error}
          disable={inputdisable}
          maxLength={maxLength}
          value={formData}
        />
        <button onClick={handleOnSave}>Save</button>
      </div>
      <div>
        <ListComponent
          list={dataList}
          handleEdit={(e, i) => {
            setFormData(e);
            setselectedElementIndex(i);
          }}
          handleDisable={(e) => setFormData(e)}
        />
      </div>
    </div>
  );
}

export default App;
