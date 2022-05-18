import NavBar from "../Components/navbar";
import * as React from "react";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/footer";

const CreateQuestion = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const theme = createTheme();

  // const data = new FormData(event.currentTarget);

  //     password: data.get("password"),
  //     username: data.get("username"),
  //   }),

  return (
    <>
      <NavBar />
      <div>
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
      <input
        type="range"
        list="currencyFrom"
        className="w-64 h-10 block my-6 rounded text-center shadow-2xl shadow-emerald-500"
        placeholder="Your Budget"
        onChange={(e) => {
          // setCurrencyFrom(e.target.value);
          // setConverted(null);
        }}
      />
      <select className="">
        <option defaultChecked>Any</option>
        <option>Junior</option>
        <option>Mid</option>
        <option>Senior</option>
        <option>Senior +</option>
      </select>
      {/* <Footer /> */}
    </>
  );
};

export default CreateQuestion;
