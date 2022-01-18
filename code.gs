function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

function getData(){
  var spreadSheetId = "1fJmRSsipxQsATydQY9K19B2HY_iwxEb4rmM9MQ-huhY"; 
  var dataRange     = "Data!A:B"; 
 
  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  var values  = range.values;
 
  return values;
}
 
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


https://docs.google.com/spreadsheets/d/1fJmRSsipxQsATydQY9K19B2HY_iwxEb4rmM9MQ-huhY/edit?usp=sharing