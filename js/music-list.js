// https://github.com/mdbootstrap/mdb-easydata 
// this repo has you use API key in plaintext. bad practice. it shouldn't matter for a free account with restrictions applied, but i am going to have to generate a new key to hide it for best practice's sake. 

{
  {
    const API_KEY = "AIzaSyA6DLqg2QZKLEsIiX9V86wKTMU3vt_4bkI";

    function displayResult2(response) {
      let tableHead = "";
      let tableBody = "";

      response.result.values.forEach((row, index) => {
        if (index === 0) {
          tableHead += "<tr>";
          row.forEach((val) => (tableHead += "<th>" + val + "</th>"));
          tableHead += "</tr>";
        } else {
          tableBody += "<tr>";
          row.forEach((val) => (tableBody += "<td>" + val + "</td>"));
          tableBody += "</tr>";
        }
      });

      document.getElementById("table-head").innerHTML = tableHead;
      document.getElementById("table-body").innerHTML = tableBody;
    }

    function loadData() {
      const spreadsheetId = "1fJmRSsipxQsATydQY9K19B2HY_iwxEb4rmM9MQ-huhY";
      const range = "A:Z";
      getPublicValues({ spreadsheetId, range }, displayResult2);
    }

    window.addEventListener("load", (e) => {
      initOAuthClient({ apiKey: API_KEY });
    });

    document.addEventListener("gapi-loaded", (e) => {
      loadData();
    });
  }
}
