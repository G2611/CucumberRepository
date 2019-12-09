package Step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class operation
{
	int a,b,prod,sum,diff;
	float quotient;
	
	@Given("^I have variable a$")
	public void i_have_variable_a()
	{
		a=100;
		System.out.println("The value of a is " + a);				
	}	

	@Given("^I have variable b$")
	public void i_have_variable_b()
	{
		b=10;
		System.out.println("The value of b is " + b);
	}	

	@When("^I multiply a and b$")
	public void i_multiplication_a_and_b()
	{
	    prod = a * b;
	}

	@Then("^I display the product$")
	public void i_display_the_Result()
	{
	    System.out.println("The product of a and b is " + prod);	    
	    System.out.println("=========================");
	}
			
	@When("^I add a and b$")
	public void i_add_a_and_b()
	{
		sum = a + b;
	}
		
	@Then("^I display the sum$")
	public void i_display_the_sum() 
	{
	    System.out.println("The sum of a and b is " + sum);	    
	    System.out.println("=====================");
	}
	
	@When("^I subtract a from b$")
	public void i_subtract_a_from_b() 
	{
	    diff = b - a;		   
	}

	@Then("^I display the difference$")
	public void i_display_the_difference() 
	{
		System.out.println("The difference between a and b is " + diff);	
		System.out.println("=================================");
	}

	@When("^I divide a from b$")
	public void i_divide_a_and_b()
	{
		quotient=a/b;		   
	}

	@Then("^I display the Quotient$")
	public void i_display_the_Quotient() 
	{
		System.out.println("The quotient is " + quotient);	
		System.out.println("============================");
	}			
}