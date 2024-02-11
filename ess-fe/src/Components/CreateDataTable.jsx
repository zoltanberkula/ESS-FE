//DEFAULT IMPORTS
import React from "react";
import "../App.css";
//DEFAULT IMPORTS

export const CreateDataTable = (props) => {
  return (
    <>
      <div className="table-data-container">
        {props.data.map((data, key) => {
          return (
            <div key={key}>
              <RecordTable
                key={key}
                name={data.name}
                voltage={data.voltage}
                current={data.current}
                power={data.power}
                frequency={data.frequency}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const RecordTable = ({ name, voltage, current, power, frequency }) => {
  if (!name) return <div />;
  return (
    <div className="record-table">
      <table>
        <tbody>
          <tr>
            <td>
              <h3 id="record-table-name">{name}</h3>
            </td>
            <td>
              <h3 id="record-table-voltage">{voltage}</h3>
            </td>
            <td>
              <h3 id="record-table-current">{current}</h3>
            </td>
            <td>
              <h3 id="record-table-power">{power}</h3>
            </td>
            <td>
              <h3 id="record-table-frequency">{frequency}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
