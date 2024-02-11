const serviceAccount = require("./keys/serviceAccount.json");
const { initializeApp, cert } = require("firebase-admin/app");
const admin = require("firebase-admin");
const fs = require("fs");

initializeApp({
  credential: cert(serviceAccount),
});

const db = admin.firestore();

let storage,
  telemetryData,
  acrel1Data,
  lumel1Data,
  orno1Data,
  batteryData,
  contactorData;

let essDataRef = db.collection("ESS-DATA");
//let now = Date.now();

async function queryDone(data) {
  let dbData = await data;
  return dbData;
}

function createAndSaveJSON(data) {
  const jsonData = JSON.stringify(data, null, 2);
  saveJSON(jsonData);
}

function saveJSON(json) {
  fs.writeFile("telemetryData.json", json, function (err) {
    if (err) throw err;
    console.log("telemetryData.json saved!");
  });
}

const telemetryDataRetrieve = async () => {
  await essDataRef
    .where("timestamp", "==", 1662643634093)
    .get()
    .then((querySnapshot) =>
      querySnapshot.forEach((document) => {
        storage = document.data();

        acrel1Data = {
          Acrel1Voltage: storage.data.acrelData.DCVoltage,
          Acrel1Current: storage.data.acrelData.DCCurrent,
          Acrel1Power: storage.data.acrelData.Power,
        };

        lumel1Data = {
          Lumel1L1Voltage: storage.data.lumelData.L1Voltage,
          Lumel2L2Voltage: storage.data.lumelData.L2Voltage,
          Lumel2L3Voltage: storage.data.lumelData.L3Voltage,
        };

        orno1Data = {
          Orno1L1Voltage: storage.data.ornoData.L1Voltage,
          Orno1L2Voltage: storage.data.ornoData.L2Voltage,
          Orno1L3Voltage: storage.data.ornoData.L3Voltage,
        };

        batteryData = {
          BatteryTotalVoltage: storage.data.batteryData.TotalVoltage,
          BatteryTotalCurrent: storage.data.batteryData.TotalCurrent,
          BatterySOC: storage.data.batteryData.SystemSOC,
          BatterySOH: storage.data.batteryData.SOH,
        };

        contactorData = {
          K1: storage.data.contactorStates.K1,
          K2: storage.data.contactorStates.K2,
          K3: storage.data.contactorStates.K3,
          K4: storage.data.contactorStates.K4,
        };

        telemetryData = {
          Acrel1Data: acrel1Data,
          Lumel1Data: lumel1Data,
          Orno1Data: orno1Data,
          BatteryData: batteryData,
          ContactorData: contactorData,
          Timestamp: storage.timestamp,
          Data: new Date(storage.timestamp),
        };
        queryDone(telemetryData);
        console.log(telemetryData);
        createAndSaveJSON(telemetryData);
      })
    );
};

telemetryDataRetrieve();

module.export = {
  telemetryDataRetrieve: telemetryDataRetrieve,
};
