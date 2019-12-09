package cucutest;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions  
  ( features = "Features",
    //features = "C:\\Users\\Girish\\eclipse-workspace\\cucumberlearning\\Features",
    glue =   {"Step_definitions"},
    //format = {"pretty","html:test-outout","json:report_json/cucumber.json", "junit:report_xml/cucumber.xml"}, 
    dryRun = false,
    monochrome = true,
    strict = true
    //tags = {"@Smoke"}
  ) 

public class TestRunner
{
	
}