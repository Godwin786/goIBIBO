package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features="C:\\Users\\358978\\git\\goIBIBO\\goIBIBO\\src\\main\\java\\features\\SampleLogin.Feature",
		glue= {"stepDefintions"},
		format = {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		monochrome=true,
		strict = true,
		dryRun = false
		)

public class TestRunner {

}
