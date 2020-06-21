package com.briteerp.stepdefinitions;


import com.briteerp.utulities.ConfigurationReader;
import com.briteerp.utulities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class Hooks {

    @Before
    public void setUp(){

        Driver.get().manage().window().maximize();
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Driver.get().get(ConfigurationReader.get("url"));


    }

    @After
    public void tearDown(Scenario scenario){

        if(scenario.isFailed()) {
            final byte [] screenshot=((TakesScreenshot)Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot,"image/png","screenshot");
        }

        Driver.closeDriver();
    }
}
