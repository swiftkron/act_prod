$(document).ready(function () {
  $('#form1').attr('id','ticketForm');
    $('option.eMktg').css('display','none');
    $('option.onPrem').css('display','none');
    $('#emktgTypeWrapper').css('display','none');
    $('#supportIssueWrapper').css('display','none');
    //product change
    $('#product').change(function(){
        var productVal = $('#product').val();
        if((productVal == "Act! Pro") || (productVal == "On Premise")){
        $('#version option').css('display','block');
        $('option.eMktg').css('display','none');
        $('#emktgTypeWrapper').css('display','none');
        $('#supportIssueWrapper').css('display','none');
        }
        else if((productVal == "Email Marketing - Support") || (productVal == "Email Marketing - Billing")){
        $('#version option').css('display','block');
        $('option.onPrem').css('display','none');
        $('#emktgTypeWrapper').css('display','block');
        $('#supportIssueWrapper').css('display','block');
        }
        else{
        $('#version option').css('display','block');
        $('option.eMktg').css('display','none');
        $('option.onPrem').css('display','none');
        $('#emktgTypeWrapper').css('display','none');
        $('#supportIssueWrapper').css('display','none');
        }
    });
    //emarketing type
    $('#emktgType').change(function(){
        var emktgTypeVal = $('#emktgType').val();
        if(emktgTypeVal == "Support"){
        var productVal = "Email Marketing - Support";
        $('#supportIssueWrapper').css('display','block');
        }
        else if(emktgTypeVal == "Billing"){
        var productVal = "Email Marketing - Billing";
        $('#supportIssueWrapper').css('display','none');
        }
        else{
        var productVal = 'Email Marketing - Support';
        }
        $('#emktgOption').attr('value', productVal);
        $('#emktgOption').attr('selected', 'selected');
    });
    //version change
            $('.acctAddress').css('display','none');
            $('.acctName').css('display','none');
            $('.acctID').css('display','none');
            $('.slxVersion').css('display','none');
            $('.sageVersion').css('display','none');
    $('#version').change(function(){
        var versionVal = $("#version").val();
        var emktgTypeVal = $("#emktgType").val();
        if ((versionVal != "Swiftpage emarketing") && (versionVal != "Sage CRM Emarketing") && (emktgTypeVal == "Support")){
            $('.sageOption').css('display','none');
            $('.semOption').css('display','none');          
            $('#webformOption').css('display','block');
            $('.acctAddress').css('display','block');
            $('.acctName').css('display','none');
            $('.acctID').css('display','none');
            $('.slxVersion').css('display','none');
            $('.sageVersion').css('display','none');
        }
        else if((versionVal == "Swiftpage emarketing") && (emktgTypeVal == "Support")){
            $('.sageOption').css('display','none');
            $('.semOption').css('display','block');         
            $('#webformOption').css('display','none');
            $('.acctAddress').css('display','none');
            $('.acctName').css('display','block');
            $('.acctID').css('display','block');
            $('.slxVersion').css('display','block');
            $('.sageVersion').css('display','none');
        }
        else if ((versionVal == "Sage CRM Emarketing") && (emktgTypeVal == "Support")){
            $('.sageOption').css('display','block');
            $('.semOption').css('display','none');          
            $('#webformOption').css('display','none');
            $('.acctAddress').css('display','none');
            $('.acctName').css('display','block');
            $('.acctID').css('display','block');
            $('.slxVersion').css('display','none');
            $('.sageVersion').css('display','block');
        }
        else{
            $('.sageOption').css('display','none');
            $('.semOption').css('display','none');          
            $('#webformOption').css('display','none');
            $('.acctAddress').css('display','none');
            $('.acctName').css('display','none');
            $('.acctID').css('display','none');
            $('.slxVersion').css('display','none');
            $('.sageVersion').css('display','none');
        }
    });
});

        //Takes strings for each of the parameters, returns object containing ticket number and/or error message
        function GetTicket(country, firstname, lastname, email, phone, product, description, accountnumber, companyname, language, postcode, querytype) {
            // Production 
            var url = "https://crm-web1.crmcloud.infor.com/RESTServices/CreateTicketService.svc/";
            // Test 
            // var url = "https://crm-web1-stg.crmcloud.infor.com/RESTServices/CreateTicketService.svc/";
            var value = {
                "Country": country, "EmailAddress": email, "FirstName": firstname,
                "LastName": lastname, "PhoneNumber": phone, "QueryType": querytype,
                "Product": product, "Description": description,
                "AccountNumber": accountnumber, "CompanyName": companyname, "PostalCode": postcode,
                "PreferredLanguage": language
            }
            var client = new XMLHttpRequest();

            client.open("POST", url, false);

            // client.withCredentials = true; // this line is not needed and is the cause of the issue. 
            // it is used to indicate whether or not the browser should send credentials with the OPTIONS request. 
            // The service will respond to any OPTIONS request it receives so credential are not needed for this operation. 

            client.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            client.setRequestHeader("Authorization", "Basic dXNlcjpwYXNzd29yZA==");

            //client.onreadystatechange = function () {
            //    if (client.readyState == 4 && client.status == 200) {
            //    }
            //}

            client.send(JSON.stringify(value));  // this line actually sets the request�s body
            var resp = client.responseText;
            return resp;

        }


        // Validator
        $(document).ready(function () {

            // Define Language
            language = $('input[name=PreferredLanguage]').val();

            // Place ID's of all required fields here.
            required = ["country", "firstname", "lastname", "emailaddress", "phone", "product", "ticket", "version"];
            // If using an ID other than #email or #error then replace it here
            email = $("#emailaddress");
            firstname = $("#firstname");
            lastname = $("#lastname");
            company = $("#company");
            country = $("#country");
            phone = $("#phone");
            product = $("#product");
                        version = $("#version");
                        emktgType = $("#emktgType");
                        supportIssue = $("#supportIssue");
                        acctAddress = $("#acctAddress");
                        acctName = $("#acctName");
                        acctID = $("#acctID");
                        slxVersion = $("#slxVersion");
                        sageVersion = $("#sageVersion");
                        os = $("#os");
                        browser = $("#browser");
            description = $("#description");
            accountnumber = $("#accountnumber");
            errornotice = $("#error");
            postcode = $("#postalcode");
          ticket = $("#ticket");
            // The text to show up within a field when it is incorrect
            if (language == "French (France)") {
                emptyerror = "Veuillez remplir ce champ";
            }
            else if (language == "German") {
                emptyerror = "Bitte dieses Feld ausfuellen.";
            }
            else {
                emptyerror = "Please fill out this field.";
            }
            // email
            if (language == "French (France)") {
                emailerror = "Veuillez saisir votre adresse email";
            }
            else if (language == "German") {
                emailerror = "Bitte eine gueltige E-Mail Adresse eintragen.";
            }
            else {
                emailerror = "Please enter a valid e-mail.";
            }
            // phone
            if (language == "French (France)") {
                phoneerror = "Veuillez saisir votre numéro de téléphone";
            }
            else if (language == "German") {
                phoneerror = "Bitte eine gueltige Telfonnummer eintragen.";
            }
            else {
                phoneerror = "Please enter a valid phone number";
            }
            // select
            if (language == "French (France)") {
                selecterror = "Veuillez sélectionner votre produit";
            }
            else if (language == "German") {
                selecterror = "Bitte waehlen Sie Ihr Produkt.";
            }
            else {
                selecterror = "Please select an option";
            }

            $("#formSubmit").click(function () {
              $('#description').html("Product - "+product.val()+"\nProduct version - "+version.val()+"\nBrowser - "+browser.val()+"\nDescription - \n"+ticket.val()+"\rFirst Name - "+firstname.val()+"\nLast Name - "+lastname.val()+"\nPhone Number - "+phone.val()+"\nEmail Address - "+email.val()+"\nCountry - "+country.val()+"\nPostal Code - "+postcode.val()+"\nCompany - "+company.val()+"\nAccount Number - "+accountnumber.val()+"\rADDITIONAL EMARKETING INFO\nInquiry Type - "+emktgType.val()+"\nSupport Issue - "+supportIssue.val()+"\nEmarketing Account Email Address - "+acctAddress.val()+"\nEmarketing Account Name - "+acctName.val()+"\nEmarketing User ID - "+acctID.val()+"\nSaleslogix/Infor Version - "+slxVersion.val()+"\nSage CRM Version - "+sageVersion.val()+"\nOS - "+os.val()+"\n");
              //Validate required fields
                for (i = 0; i < required.length; i++) {
                    var input = $('#' + required[i]);
                    if ((input.val() == "") || (input.val() == emptyerror)) {
                        input.addClass("needsfilled");
                        input.val(emptyerror);
                        errornotice.fadeIn(750);
                    } else {
                        input.removeClass("needsfilled");
                    }

                }
                // Validate the e-mail.
                if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val())) {
                    email.addClass("needsfilled");
                    email.val(emailerror);
                }

                // Validate the phone number.
                if (!/^[+()-]?(?:\d*\.)?\d+[+()-]?/.test(phone.val())) {
                    phone.addClass("needsfilled");
                    phone.val(phoneerror);
                }

                // Validate product selection.
                if (!(product.val())) {
                    product.addClass("needsfilled");
                }

                // Clears any fields in the form when the user clicks on them
                $(":input").focus(function () {
                    if ($(this).hasClass("needsfilled")) {
                        $(this).val("");
                        $(this).removeClass("needsfilled");
                    }
                });

              //var testticket = GetTicket(country, firstname, lastname, email, phone, product, "Test ticket", company, "English", postcode);
//alert(testticket);

                //if any inputs on the page have the class 'needsfilled' the form will not submit
                if ($(":input").hasClass("needsfilled")) {
                    return false;
                } else {
                    //alert('SUCCESS!');
                    // add values to summary
                    $('#summaryFname').html(firstname.val());
                    $('#summaryLname').html(lastname.val());
                    $('#summaryPhone').html(phone.val());
                    $('#summaryEmail').html(email.val());
                    $('#summaryCountry').html(country.val());
                    $('#summaryPostal').html(postcode.val());
                  $('#summaryCompany').html(company.val());  
                  $('#summaryProduct').html(product.val());
                    $('#summaryTicket').html(ticket.val());
                    $('#summaryAccount').html(accountnumber.val());
                  $('#summaryVersion').html(version.val());  
                  $('#summaryOS').html(os.val());
                  $('#summaryBrowser').html(browser.val());
                  var element = google.search.cse.element.getElement('relevant');
                    element.execute(ticket.val());
                  $('.supportForm').css('display','none');
                  $('.ticketSummary').css('display','block');
                }

            });

            // Submit ticket form
            $("#ticketForm").submit(function () {              
 
                // Define wait time
                
                if ((product.val() == "Email Marketing - Support") || (product.val() == "Email Marketing - Billing")){
                 var waittime = "48";
                }
                else{
                 var waittime = "4";
                }
              
              errornotice.hide();
                var ticketnumber = GetTicket(country.val(), firstname.val(), lastname.val(), email.val(), phone.val(), product.val(), description.val(), accountnumber.val(), company.val(), language, postcode.val(), "");
                var rmsg = JSON.parse(ticketnumber);

                //Define Translations
                if (language == "English (International)") {
                    geoConfirm = "<h2>Thank you &ndash; your ticket has been created.</h2><p>Ticket Number: <strong>" + rmsg.TicketNumber + "</strong></p><p><strong>An Act! Support representative will respond to your query within " + waittime + " business hours.</strong></p>";
                    geoError = "<h2>Sorry, we encountered an error generating the support ticket.</h2><p>Please contact customer support by calling 0845 268 0220 (UK), 0766 801 364 (Ireland), 0105 003 672 (South Africa) or by emailing us at <a href=\"mailto:software.support@swiftpage.com\">software.support@swiftpage.com</a>.</p>";
                }
                else if (language == "French (France)") {
                    geoConfirm = "<h2>Merci, votre ticket a été créé.</h2><p>Numéro de ticket : <strong>" + rmsg.TicketNumber + "</strong></p><p><strong>Un conseiller technique Act! va répondre à votre demande dans un délai de " + waittime + " heures ouvrables.</strong></p>";
                    geoError = "<h2>Nous avons rencontré une erreur lors de la création de ce ticket.</h2><p>Merci de contacter notre équipe d'assistance au <strong>09 75 18 23 09</strong> (France), <strong>078 483 840</strong> (Belgique) ou en écrivant à <a href=\"mailto:support-france@swiftpage.com\">support-france@swiftpage.com</a>.</p>";
                }
                else if (language == "German") {
                    geoConfirm = "<h2>Vielen Dank &ndash; ihr Support-Ticket wurde angelegt.</h2><p>Ticketnummer: <strong>" + rmsg.TicketNumber + "</strong></p><p><strong>Ein Mitarbeiter des Act! Supports wird ihre Anfrage innerhalb der nächsten " + waittime + " Stunden beantworten.</strong></p>";
                    geoError = "<h2>Bei der Erstellung ihres Support-Tickets ist leider ein Fehler aufgetreten.</h2><p>Bitte wenden Sie sich telefonisch an unseren Support. Die Rufnummer für Kunden in Deutschland: 069 643 508 433. Für Kunden in der Schweiz: 043 508 2364. Alternativ können Sie eine Email an <a href=\"mailto:support-deutsch@swiftpage.com\">support-deutsch@swiftpage.com schicken.</p>";
                }
                else {
                    geoConfirm = "<h2>Thank you &ndash; your ticket has been created</h2><p>Ticket Number: <strong>" + rmsg.TicketNumber + "</strong></p><p><strong>An Act! Support representative will respond to your query within " + waittime + " business hours.</strong></p>";
                    geoError = "<h2>Sorry, we encountered an error generating the support ticket.</h2><p>Please contact customer support by calling <strong>(866) 873-2006</strong> or by emailing us at <a href=\"mailto:support@act.com\">support@act.com</a>.</p>";
                }

                //alert(ticketnumber);
                $('.supportForm').css('display', 'none');
              $('.ticketSummary').css('display', 'none');
              $('.ticketHeadline').css('display', 'none');

                // Display confirmation or error message from REST service
                if (!rmsg.TicketNumber) {
                    $('.returnMsg').addClass('returnError');
                    $('.returnMsg').html(geoError);
                }
                else {
                    $('.returnMsg').html(geoConfirm);
                }

                $('.returnMsg').css('display', 'block');
                _kmq.push(['identify', email.val()]);
                _kmq.push(['record', 'Submitted Online Support Ticket']);
                return false;
            });

        });
