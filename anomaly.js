function generateReport() { 
    // Fetch all the data and highlight them if bad
    var validForm = true
    document.getElementById("result").innerHTML = ""
    // Check Subject
    var Subject = document.getElementById("Subject").value
    console.log("Subject: " + Subject)
    if (Subject.length < 10) {
        document.getElementById("result").innerHTML += "Invalid Subject, 10 chars minimum<br>"
        validForm = false
    }
    // Check Summary
    var Summary = document.getElementById("Summary").value
    console.log("Summary: " + Summary)
    if (Summary.length < 10) {
        document.getElementById("result").innerHTML += "Invalid Summary, 10 chars minimum<br>"
        validForm = false
    }
    // Check SwVersion
    var SwVersion = document.getElementById("SwVersion").value
    console.log("SwVersion: " + SwVersion)
    if (SwVersion.length < 3) {
        document.getElementById("result").innerHTML += "Invalid SwVersion, 10 chars minimum<br>"
        validForm = false
    }
    // Check Steps
    var Steps = document.getElementById("Steps").value
    console.log("Steps: " + Steps)
    if (Steps.length < 10) {
        document.getElementById("result").innerHTML += "Invalid Steps, 10 chars minimum<br>"
        validForm = false
    }
    // Check ProductName
    var ProductName = document.getElementById("ProductName").value
    console.log("Product name: " + ProductName)
    if (ProductName.length < 5) {
        document.getElementById("result").innerHTML += "Invalid ProductName, 10 chars minimum<br>"
        validForm = false
    }
    // Check Severity
    var Severity = document.getElementById("Severity").value
    console.log("Severity: " + Severity)
    if (Severity < 1 || Severity > 10) {
        document.getElementById("result").innerHTML += "Invalid Severity<br>"
        validForm = false
    }
    // Check Occurrence
    var Occurrence = document.getElementById("Occurrence").value
    console.log("Occurrence: " + Occurrence)
    if (Occurrence < 1 || Occurrence > 10) {
        document.getElementById("result").innerHTML += "Invalid Occurrence<br>"
        validForm = false
    }
    // Check Detected
    var Detected = document.getElementById("Detected").value;
    console.log("Detected: " + Detected)
    if (Detected.length < 5) {
        document.getElementById("result").innerHTML += "Invalid Detected, 5 chars minimum<br>"
        validForm = false
    }
    // Check RegressionVersion
    var Regression = document.getElementById("Regression").checked;
    console.log("Regression: " + Regression)
    var RegressionVersion = document.getElementById("RegressionVersion").value;
    console.log("Regression version: " + RegressionVersion)
    if (Regression) {
        if (RegressionVersion.length < 3) {
            document.getElementById("result").innerHTML += "Invalid RegressionVersion, 5 chars minimum<br>"
            validForm = false
        }
    }
    // If form is valid, then proceed
    if (validForm) {
        console.log("Valid form detected")
        var outputDoc = "<b>Anomaly reported on</b> " + new Date().toJSON();
        var ContactInfo = document.getElementById("Contact").value;
        if (ContactInfo.length > 5) {
            outputDoc += "<br><b>Reported by:</b> "+ ContactInfo +"<br><br>";
        }
        outputDoc += "<b>Subject:</b> " + Subject + "<br><br>";
        outputDoc += "<b>Summary:</b> " + Summary + "<br><br>";
        outputDoc += "<b>Reported version:</b> " + SwVersion + "<br><br>";
        outputDoc += "<b>Steps to replicate:</b><br> " + Steps + "<br><br>";
        var SupportDocumentation = document.getElementById("Documentation").value
        if (SupportDocumentation.length > 5) {
            outputDoc += "<b>Documentation:</b><br>" + SupportDocumentation + "<br><br>"
        }
        if (Regression) {
            outputDoc += "<b>Regression:</b> YES" + "<br>"
            outputDoc += "<b>Latest working:</b>: " + RegressionVersion + "<br><br>" 
        }
        outputDoc += "<b>Impacted product:</b> " + ProductName + "<br><br>"
        outputDoc += "<b>Customer severity:</b> " + Severity + "<br><br>"
        outputDoc += "<b>Customer occurrence:</b> " + Occurrence + "<br><br>"
        outputDoc += "<b>Detected by:</b> " + Detected + "<br><br>"
        var CustomerName = document.getElementById("Customer").value
        if (CustomerName.length > 2) {
            outputDoc += "<b>Customer name:</b> " + CustomerName + "<br><br>"
        }
        var ContactInfo = document.getElementById("Contact").value
        if (ContactInfo.length > 2) {
            outputDoc += "<b>Contact info:</b> "+ ContactInfo + "<br><br>"
        }
        // Print output
        document.getElementById("result").innerHTML = outputDoc; 
    }
 } 