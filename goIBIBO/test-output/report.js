$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/358978/git/goIBIBO/goIBIBO/src/main/java/features/SampleLogin.Feature");
formatter.feature({
  "line": 1,
  "name": "GoIBIBO Application",
  "description": "",
  "id": "goibibo-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the Active Tab is flights",
  "description": "",
  "id": "goibibo-application;verify-the-active-tab-is-flights",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User logs into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify whether the active Tab is \"Flights\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefintions.user_logs_into_the_application()"
});
formatter.result({
  "duration": 18236041335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flights",
      "offset": 34
    }
  ],
  "location": "LoginStepDefintions.verify_whether_the_active_Tab_is_Flights(String)"
});
formatter.result({
  "duration": 2604939,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.getAttribute(Unknown Source)\r\n\tat com.qa.pages.HomePage.isActive(HomePage.java:101)\r\n\tat stepDefintions.LoginStepDefintions.verify_whether_the_active_Tab_is_Flights(LoginStepDefintions.java:32)\r\n\tat ✽.Then Verify whether the active Tab is \"Flights\"(C:/Users/358978/git/goIBIBO/goIBIBO/src/main/java/features/SampleLogin.Feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefintions.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Navigate to all other tabs and verify whether the same is highlighted",
  "description": "",
  "id": "goibibo-application;navigate-to-all-other-tabs-and-verify-whether-the-same-is-highlighted",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User logs into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user selects the \"Flights\" link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "verfiy whether the active tab is \"Flights\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefintions.user_logs_into_the_application()"
});
formatter.result({
  "duration": 26893129254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flights",
      "offset": 18
    }
  ],
  "location": "LoginStepDefintions.user_selects_the_link(String)"
});
formatter.result({
  "duration": 50062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flights",
      "offset": 34
    }
  ],
  "location": "LoginStepDefintions.verify_the_active_tab(String)"
});
formatter.result({
  "duration": 31805395,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefintions.close_the_browser()"
});
formatter.result({
  "duration": 2524089850,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Swap Link",
  "description": "",
  "id": "goibibo-application;verify-swap-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User logs into the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User selects one way and flight details from \"BLR\" and to \"DEL\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User swaps the places",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "places should be swapped",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefintions.user_logs_into_the_application()"
});
formatter.result({
  "duration": 14234429106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BLR",
      "offset": 46
    },
    {
      "val": "DEL",
      "offset": 59
    }
  ],
  "location": "LoginStepDefintions.User_selects_one_way_and_flight_details(String,String)"
});
formatter.result({
  "duration": 13994078,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LTIN112321\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:57664}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1), userDataDir\u003dC:\\Users\\358978\\AppData\\Local\\Temp\\scoped_dir15808_18582}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d75.0.3770.90, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4888d647cfb44924479015fce9cb3478\n*** Element info: {Using\u003dxpath, value\u003d//input[@placeholder\u003d\u0027From\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat com.qa.pages.HomePage.enterDetails(HomePage.java:48)\r\n\tat stepDefintions.LoginStepDefintions.User_selects_one_way_and_flight_details(LoginStepDefintions.java:52)\r\n\tat ✽.When User selects one way and flight details from \"BLR\" and to \"DEL\"(C:/Users/358978/git/goIBIBO/goIBIBO/src/main/java/features/SampleLogin.Feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefintions.And_User_swaps_the_places()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefintions.places_should_be_swapped()"
});
formatter.result({
  "status": "skipped"
});
});