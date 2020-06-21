package com.briteerp.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage {

    @FindBy(id="login")
    public WebElement userName;

    @FindBy(id="password")
    public WebElement password;

    @FindBy(css = "button[type=\"submit\"]")
    public WebElement submit;

    @FindBy(css = "[class=\"alert alert-danger\"]")
    public WebElement wrongloginMessage;

    public void login(String userNameStr, String passwordStr) {

        userName.sendKeys(userNameStr);
        password.sendKeys(passwordStr);
        submit.click();

    }
}