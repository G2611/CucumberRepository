$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Firstcucumber_multiplication.feature");
formatter.feature({
  "line": 1,
  "name": "Multiplication",
  "description": "multiply two numbers",
  "id": "multiplication",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "multiply a and b",
  "description": "",
  "id": "multiplication;multiply-a-and-b",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have variable a",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I have variable b",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I multiply a and b",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I display the Result",
  "keyword": "Then "
});
formatter.match({
  "location": "Firstcucumber_multiplication.i_have_variable_a()"
});
formatter.result({
  "duration": 635092300,
  "status": "passed"
});
formatter.match({
  "location": "Firstcucumber_multiplication.i_have_variable_b()"
});
formatter.result({
  "duration": 626400,
  "status": "passed"
});
formatter.match({
  "location": "Firstcucumber_multiplication.i_multiplication_a_and_b()"
});
formatter.result({
  "duration": 50800,
  "status": "passed"
});
formatter.match({
  "location": "Firstcucumber_multiplication.i_display_the_Result()"
});
formatter.result({
  "duration": 609100,
  "status": "passed"
});
formatter.uri("Secondcucumber_multiplication.feature");
formatter.feature({
  "line": 1,
  "name": "Multiply using data tables",
  "description": "Multiplication using data tables",
  "id": "multiply-using-data-tables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "multiply a and b using data table",
  "description": "",
  "id": "multiply-using-data-tables;multiply-a-and-b-using-data-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have variable a, which accepts value from table",
  "rows": [
    {
      "cells": [
        "20"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I have variable b, which accepts value from table",
  "rows": [
    {
      "cells": [
        "30"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I multiply a and b taking from DT",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I display the Product",
  "keyword": "Then "
});
formatter.match({
  "location": "Secondcucumber_multiplication.i_have_variable_a_datatable(DataTable)"
});
formatter.result({
  "duration": 4339800,
  "status": "passed"
});
formatter.match({
  "location": "Secondcucumber_multiplication.i_have_variable_b_datatable(DataTable)"
});
formatter.result({
  "duration": 583900,
  "status": "passed"
});
formatter.match({
  "location": "Secondcucumber_multiplication.i_multiplication_a_and_b()"
});
formatter.result({
  "duration": 80500,
  "status": "passed"
});
formatter.match({
  "location": "Secondcucumber_multiplication.i_display_the_Result()"
});
formatter.result({
  "duration": 556800,
  "status": "passed"
});
});