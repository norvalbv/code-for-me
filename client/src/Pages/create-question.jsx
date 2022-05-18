import NavBar from "../Components/navbar";
import * as React from "react";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FileUploader } from "react-drag-drop-files";
// import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import FileBase from "react-file-base64";

const CreateQuestion = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const theme = createTheme();

  const fileTypes = ["JPG", "PNG"];
  const [file, setFile] = useState(null);
  console.log(file);
  const handleChange = (file) => {
    setFile(file);
  };
  // const data = new FormData(event.currentTarget);

  //     password: data.get("password"),
  //     username: data.get("username"),
  //   }),

  return (
    <>
      <NavBar />
      <div>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setFile(base64)
          }
        />
        <input
          type="text"
          list="currencyFrom"
          className="w-64 h-10 block my-6 rounded text-center shadow-2xl shadow-emerald-500"
          placeholder="Search Currency"
          onChange={(e) => {
            // setCurrencyFrom(e.target.value);
            // setConverted(null);
          }}
        />
        <datalist id="currencyFrom">
          {/* {Object.entries(currencies.conversion_rates).map(
        (item, i) => (
          <option value={item[0]} key={i}>
            {item[0]}
          </option>
        )
      )} */}
        </datalist>
        <input
          type="text"
          list="currencyFrom"
          className="w-64 h-10 block my-6 rounded text-center shadow-2xl shadow-emerald-500"
          placeholder="Search Currency"
          onChange={(e) => {
            // setCurrencyFrom(e.target.value);
            // setConverted(null);
          }}
        />
        <datalist id="currencyFrom">
          {/* {Object.entries(currencies.conversion_rates).map(
                    (item, i) => (
                      <option value={item[0]} key={i}>
                        {item[0]}
                      </option>
                    )
                  )} */}
        </datalist>
      </div>
      {/* <Slider />
      <Range /> */}
      <select className="w-64 h-10 block my-6 rounded text-center shadow-2xl shadow-emerald-500">
        <option defaultChecked>Any</option>
        <option>Junior</option>
        <option>Mid</option>
        <option>Senior</option>
        <option>Senior +</option>
      </select>
      <textarea
        className="w-64 h-40 block my-6 rounded text-center shadow-2xl shadow-emerald-500"
        placeholder="Descript your problem or project"
      ></textarea>
      <input
        type="text"
        list="currencyFrom"
        className="w-64 h-10 block my-6 rounded text-center shadow-2xl shadow-emerald-500"
        placeholder="Link To Your Repository"
        onChange={(e) => {
          // setCurrencyFrom(e.target.value);
          // setConverted(null);
        }}
      />
      <FileUploader
        handleChange={handleChange}
        name="file"
        label="Upload image of your problem or project idea."
        types={fileTypes}
      />
      {/* <Footer /> */}
    </>
  );
};

export default CreateQuestion;
