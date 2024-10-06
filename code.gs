function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var jsonData = JSON.parse(e.postData.contents);
  
  var values = Object.values(jsonData);

  sheet.appendRow(values);
  
  return ContentService.createTextOutput(JSON.stringify(jsonData));
}
