package stepDefs;

import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class CalculatorSteps {
         int result;
	  @Given("^The calculator application is open$")
	    public void the_calculator_application_is_open()  {
	       System.out.println("Calculator is already open");
	    }

	    @When("^I add two numbers (-?\\d+) and \"([^\"]*)\"$")      //(-?\d+) can use this when use integer number.
	    public void i_add_two_numbers_something_and_something(int num1, int num2){
	    	 result = num1 + num2;
	    }
	    
	    @When("^I multiply two numbers \"([^\"]*)\" and \"([^\"]*)\"$")
	    public void i_multiply_two_numbers_something_and_something(int num1, int num2)  {
	    	 result = num1 * num2;
	    }
	        

	    @Then("^I should get the result as \"([^\"]*)\"$")
	    public void i_should_get_the_result_as_something(int expResult) {
	    	/* if (result==expResult) {
	    		 System.out.println("Test passed");
	    		 
	    	 }else
	    	 {
	    		 System.out.println("Test Failed");
	    	 }*/
	    	Assert.assertEquals(expResult, result);
	    } 


}
