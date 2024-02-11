import { db } from "../firestore";

export function epochToDate(epoch) {
  return new Date(epoch).toLocaleString();
}

export function dateToEpoch(dateStr) {
  return Math.floor(new Date(dateStr).getTime() / 1000);
}

//FIRESTORE SNAPSHOT QUERY
const collection = "DUMMY-ESS-DATA";

export const getSnapShot = (stateSetter) => {
  const telemetryData = db
    .collection(collection)
    .orderBy("time.timestamp", "desc")
    .limit(15)
    .onSnapshot(function (querySnapshot) {
      let data_list = [];
      querySnapshot.forEach(function (doc) {
        data_list.push(doc.data());
      });
      console.log("data_list: ");
      console.log(data_list);
      stateSetter(data_list.reverse());
    });
  return telemetryData;
};
//FIRESTORE SNAPSHOT QUERY

//FIRESTORE QUERY
export const queryDate = (fromDate, toDate, fromState, toState) => {
  const fromDateQuery = db
    .collection(collection)
    .where("time.timestamp", "==", fromDate)
    .onSnapshot(function (querySnapshot) {
      let data_list = [];
      querySnapshot.forEach(function (doc) {
        data_list.push(doc.data());
        fromState(data_list);
      });
      console.log("queryDate FromDate:", data_list);
    });

  const toDateQuery = db
    .collection(collection)
    .where("time.timestamp", "==", toDate)
    .onSnapshot(function (querySnapshot) {
      let data_list = [];
      querySnapshot.forEach(function (doc) {
        data_list.push(doc.data());
        toState(data_list);
      });
      console.log("queryData ToDate:", data_list);
    });
  return [fromDateQuery, toDateQuery];
};

export const getDateInterval = (fromDate, toDate, stateSetter) => {
  if (compareTimeInterval(fromDate, toDate)) {
    const dateIntervalData = db
      .collection(collection)
      .where("time.timestamp", ">=", fromDate)
      .where("time.timestamp", "<=", toDate)
      .onSnapshot(function (querySnapshot) {
        let data_list = [];
        querySnapshot.forEach(function (doc) {
          data_list.push(doc.data());
          stateSetter(data_list);
          console.log("intervalQuery", data_list);
        });
        console.log("intervalQueryData", data_list);
      });
    return dateIntervalData;
  } else {
    return;
  }
};

export const getTimestamps = (stateSetter) => {
  const timestampQuery = db
    .collection(collection)
    .where("time.timestamp", "<", Date.now())
    .orderBy("time.timestamp", "desc")
    .limit(20)
    .onSnapshot(function (querySnapshot) {
      let data_list = [];
      querySnapshot.forEach(function (doc) {
        data_list.push(doc.data());
        stateSetter(data_list);
      });
      console.log("getTimestamps:", data_list);
    });
  return timestampQuery;
};
//FIRESTORE QUERY

//OTHER HELPERS
/**
 *
 * @param {array} arr
 * @param {objectKey1} property1
 * @param {objectKey2} property2
 */
export const destructArr = (arr, property1, property2) => {
  Object.entries(arr).map((val) => {
    let value = val[1][String(property1)][String(property2)];
    console.log("Value", value);
    return value;
  });
};

/**
 *
 * @param {array | object } source
 * @param {string} key
 * @returns
 */
export const dynObj = (source, key) => {
  let dynObj = {};
  for (let i = 0; i < source.length; i++) {
    dynObj[key + i] = source[i]["time"]["timestamp"];
  }
  return dynObj;
};

export const compareTimeInterval = (fromDate, toDate) => {
  if (fromDate < toDate) {
    return true;
  } else if (fromDate > toDate) {
    alert(
      `To date ${epochToDate(
        toDate
      )} cannot be earlier than From date ${epochToDate(fromDate)}!`
    );
    return false;
  } else if (fromDate === toDate) {
    alert(
      `From date ${epochToDate(
        fromDate
      )} cannot be equal to To date ${epochToDate(toDate)}!`
    );
    return false;
  }
};

export const compareByLength = (x, y) => {
  if (x.length === y.length) {
    return true;
  } else {
    return false;
  }
};

export const objFromArrays = (arr1, arr2) => {
  const obj = Object.create();
  if (compareByLength(arr1, arr2)) {
    arr1.forEach((element, index) => {
      obj[element] = arr2[index];
    });
  }
  return obj;
};
