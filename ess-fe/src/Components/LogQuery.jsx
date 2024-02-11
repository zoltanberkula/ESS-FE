//DEFAULT IMPORTS
import React from "react";
import { useState } from "react";
import "../App.css";
//DEFAULT IMPORTS

//COMPONENTS
import { FilterQuery } from "./FilterQuery";
import { LogTable } from "./LogTable";
//COMPONENTS

export const LogQuery = (props) => {
  const [showQuery, setShowQuery] = useState(false);
  return (
    <div className="LogQueryContainer">
      <FilterQuery
        doQueryCB={props.doQueryCB}
        doIntervalQueryCB={props.doIntervalQueryCB}
        showQuery={showQuery}
        showQueryCB={setShowQuery}
        states={props.states}
        stamps={props.stamps}
      />
      {console.log(showQuery)}
      {console.log("FILTER QUERY:", props.states)}
      {showQuery && <LogTable input={props.states.dateInterval} />}
    </div>
  );
};
