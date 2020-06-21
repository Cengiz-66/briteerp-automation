package com.briteerp.runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/failed-html-report"},
        strict = true,
        features = "@target/rerun.txt",
        glue = "com/briteerp/stepdefinitions"

)
public class FailedTestRunner {


}
