import "./App.css";
import BasicTable from "./components/table";
import Docx from "./components/docx";
import { Box, Card, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicDateTimePicker from "./components/dateTimePicker";
import dayjs from "dayjs";

function App() {
  const [vals, setVals] = React.useState([]);
  const [date, setDate] = useState(dayjs(new Date()));
  const [presents, setPresents] = useState([]);
  const [absent, setAbsent] = useState([]);

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div className="App">
      <header className="App-header">
        <Card style={{ width: "70%", padding: 20 }}>
          <Box gap={2} display={"flex"} justifyContent={"center"}>
            <TextField
              label="Present Names"
              onChange={(e) => {
                const val = e.target.value;
                const temp = val.split(",");
                setPresents(temp);
              }}
            />

            <TextField
              label="Absent Names"
              onChange={(e) => {
                const val = e.target.value;
                const temp = val.split(",");
                setAbsent(temp);
              }}
            />
          </Box>
          <BasicDateTimePicker date={date} setDate={setDate} />
          <BasicTable vals={vals} setVals={setVals} presents={presents} />
          <Box display={"flex"} gap={2} justifyContent={"center"}>
            <Docx title="Minutes" />
            <Docx title="Agenda" />
          </Box>
        </Card>
      </header>
    </div>
  );
}

export default App;
