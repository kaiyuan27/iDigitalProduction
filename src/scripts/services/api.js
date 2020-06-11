export const LocalService = (jsonFile) => {
  return new Promise((resolve, reject) => {
    fetch(jsonFile)
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        console.log("request error", error);
        reject(error);
      });
  });
};
