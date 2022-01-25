// https://github.com/mdbootstrap/mdb-easydata 
// api key included as repo secret

{
  {
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
      initOAuthClient({ apiKey: secrets.API_KEY });
    });

    document.addEventListener("gapi-loaded", (e) => {
      loadData();
    });
  }
}
