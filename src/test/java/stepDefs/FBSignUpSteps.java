package stepDefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FBSignUpSteps {
	 WebDriver driver = BaseClass.driver;
	 @Given("^User has launched the FB application$")
	 
	    public void user_has_launched_the_fb_application()  {
		 
		 driver.get("https://en-gb.facebook.com/");
	       driver.manage().window().maximize();
	       driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
	    }

   @When("^User clicks on Create New Account link$")
    public void user_clicks_on_create_new_account_link() {
     
	  WebElement CreateAccount = driver.findElement(By.xpath("//*[text()='Create New Account']"));
	  CreateAccount.click();
   }
   @And("^User creates new account$")
   public void user_creates_new_account(DataTable table) {
   	
   	String FirstName = table.cell(1, 1);
   	String LastName = table.cell(2, 1);
   	String MobileNum = table.cell(3, 1);
   	String Password = table.cell(4, 1);
   	
   	WebElement tbFirstName = driver.findElement(By.xpath("//*[@name='firstname']"));
   	WebElement tbLastName = driver.findElement(By.xpath("//*[@name='lastname']"));
   	WebElement tbMobile = driver.findElement(By.xpath("//*[@name='reg_email__']"));
   	WebElement tbPassword = driver.findElement(By.xpath("//input[@name='reg_passwd__']"));
   	
   	tbFirstName.sendKeys(FirstName);
   	tbLastName.sendKeys(LastName);
   	tbMobile.sendKeys(MobileNum);
   	tbPassword.sendKeys(Password);
   }
@Then("^User should be able to see success message$")
public void user_should_be_able_to_see_success_message() {
   
}

@And("^User enters \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
public void user_enters_something_something_something_something(String firstname, String lastname, String mobilenum, String password) {
   

}

@And("^User selects \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
public void user_selects_something_something_something(String month, String date, String year) {
   
}

@And("^User clicks on SignUp button$")
public void user_clicks_on_signup_button()  {
    
}

}