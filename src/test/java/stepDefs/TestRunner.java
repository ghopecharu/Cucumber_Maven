package stepDefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome = true,
		//plugin= {"pretty","html:target/cucumber-html"},
		plugin= {"pretty","html:target/cucumber-html","json:target/cucumber.json"},
	    features = "src/test/java/features",
	    tags= {"@FBSignUp"},
	    glue= {"stepDefs"}
		
		)
public class TestRunner {

}

//tags= {"@NegativeLogin"},
	// tags= {"@NegativeLogin,@PositiveLogin"},
	//tags= {"@NegativeLogin","@Sanity"},
	    