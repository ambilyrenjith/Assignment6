 function displayOther(addType) {
     var otherText = document.getElementById("other");

     if (addType.value == "other") {
         otherText.style.display = "block";
     } else {
         otherText.style.display = "none";
     }
 }

 function validateForm() {
     var name = document.getElementById("name").value;
     if (name == "") {
         alert("Name is required");
         return false;
     }

     var containsDigits = name.match(/\d+/g);
     if (containsDigits != null) {
         alert('Only characters  allowed');
         return false;
     }

     var streetname = document.getElementById("street").value;
     if (streetname == "") {
         alert("Please enter your street name");
         return false;
     }

     var apartnum = document.getElementById("aptno").value;
     if (apartnum == "") {
         alert("Please enter your apartment number");
         return false;
     }

     var cityname = document.getElementById("city").value;
     if (cityname == "") {
         alert("Please enter your city");
         return false;
     }

     var statename = document.getElementById("state").value;
     if (statename == "") {
         alert("State is required");
         return false;
     }

     var twoCharRegExp = /^([a-zA-Z]){2}$/;
     var stateid = statename.match(twoCharRegExp);

     if (stateid == null) {
         alert("Invalid input for state(Only two characters allowed)");
         return false;
     }

     var zip = document.getElementById("zip").value;
     if (zip == "") {
         alert("Zipcode is required");
         return false;
     }

     var zipcode = zip.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
     if (zipcode == null) {
         alert('Invalid input for zipcode');
         return false;
     }

     var phone = document.getElementById("phone").value;
     if (phone == "") {
         alert("Phone number is required");
         return false;
     }

     var phonenum = phone.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/);
     if (phonenum == null) {
         alert('Please use the format 123-456-7890 for phone');
         return false;
     }

     var email = document.getElementById("inputEmail").value;
     if (email == "") {
         alert("Email is required");
         return false;
     }

     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     if (email.match(emailReg) == null) {
         alert("Please use the format abc@yahoo.com");
         return false;
     }

     return true;
 }
 //PART 2

 var pizza = {
     thincrust: ["--Select--", "Small ($9.99)", "Medium ($12.99)", "Large ($14.99)"],
     thickcrust: ["--Select--", "Medium ($11.99)", "Large ($13.99)"],
     newyork: ["--Select--", "Large ($16.99)", "Extra Large($19.99)"],
     glutenfree: ["--Select--", "Small ($10.99)"]
 };

 function selectChoice(data) {
     var sizeAndPrice = document.getElementById("sizeAndPrice");

     while (sizeAndPrice.hasChildNodes()) {
         sizeAndPrice.removeChild(sizeAndPrice.firstChild);
     }

     if (data == "hand") {
         pizza.thincrust.forEach(function(element) {
             createOption(element);
         });
     } else if (data == "thin") {
         pizza.thickcrust.forEach(function(element) {
             createOption(element);
         });
     } else if (data == "newyork") {
         pizza.newyork.forEach(function(element) {
             createOption(element);
         });
     } else if (data == "gluten") {
         pizza.glutenfree.forEach(function(element) {
             createOption(element);
         });
     }
 }

 function createOption(element) {
     var opt = document.createElement("option");

     var numberPattern = /[-]{0,1}[\d.]*[\d]+/g;
     var price = element.match(numberPattern);

     if (price == null) {
         price = 0;
     }

     opt.innerHTML = element; //Small ($9.99)
     opt.value = price;

     sizeAndPrice.appendChild(opt);
 }

 function enableDisableCheeseSauceToppings() {
     document.getElementById("cheese").disabled = false;
     document.getElementById("sauce").disabled = false;

     document.getElementById("Pepp").disabled = false;
     document.getElementById("Saus").disabled = false;
     document.getElementById("Ham").disabled = false;
     document.getElementById("Bacon").disabled = false;
     document.getElementById("Salami").disabled = false;
     document.getElementById("Pepper").disabled = false;
     document.getElementById("Olives").disabled = false;
     document.getElementById("jalap").disabled = false;
     document.getElementById("mush").disabled = false;
     document.getElementById("pine").disabled = false;
     document.getElementById("onion").disabled = false;
 }

 function Calculate() {
     var sizeAndPrice = document.getElementById("sizeAndPrice");
     var cheeseNum = document.getElementById("cheese");
     var sauceNum = document.getElementById("sauce");

     var noOfToppings = 0;
     var toppings = document.getElementsByName("toppings");

     toppings.forEach(function(elem) {
         if (elem.checked) {
             noOfToppings++;
         }
     });

     var result = eval(cheeseNum.value) +
         eval(sauceNum.value) +
         noOfToppings * 0.99 +
         eval(sizeAndPrice.value);

     var total = document.getElementById("price");
     total.innerHTML = "$" + result;
     console.log(result);
 }

 window.onload = function() {

     var toppings = document.getElementsByName("toppings");

     toppings.forEach(function(elem) {
         elem.addEventListener("click", Calculate);
     });
 };

 var x = 0;

 function buildValidateForm() {
     x = confirm("Are you sure, you are done");
     return x;
 }


 //Part 3

 
 function billValidation() {  
    
    var name = document.getElementById("billName").value;
    if(name == "") {
        alert("Name is required");
        return false;
    } 
    
    var containsDigits = name.match(/\d+/g);
    if (containsDigits != null) {
        alert('Only characters  allowed');
        return false;
    } 
    
    var streetname = document.getElementById("billStreet").value;
    if(streetname == "") {
        alert("Please enter your street name");
        return false;
    }
    
    var apartnum = document.getElementById("billAptno").value;
    if(apartnum == ""){
        alert("Please enter your apartment number");
        return false;
    }
 
    var cityname = document.getElementById("billCity").value;
    if(cityname == ""){
        alert("Please enter your city");
        return false;
    }
    
    var statename = document.getElementById("billState").value;
    if(statename == "") {
        alert("State is required");
        return false;
    } 
    
    var twoCharRegExp = /^([a-zA-Z]){2}$/;
    var stateid = statename.match(twoCharRegExp);
    
    if(stateid == null) {
        alert("Invalid input for state(Only two characters allowed)");
        return false;
    }
    
    var zip = document.getElementById("billZip").value;
    if(zip == "") {
        alert("Zipcode is required");
        return false;
    } 
     
    var zipcode = zip.match( /(^\d{5}$)|(^\d{5}-\d{4}$)/);
    if (zipcode == null) {
        alert('Invalid input for zipcode'); 
        return false;
    }
    
    var phone  = document.getElementById("billPhone").value;
    if(phone == "") {
        alert("Phone number is required");
        return false;
    } 
    
     var phonenum = phone.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/ );
     if(phonenum == null) {
         alert('Please use the format 123-456-7890 for phone'); 
         return false;
     }

     var email = document.getElementById("billInputEmail").value;
     if(email == "") {
         alert("Email is required");
         return false;
     } 

     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     if (email.match(emailReg) == null) {
         alert("Please use the format abc@yahoo.com");
         return false;
     }

    var cardNumber = document.getElementById("billCardNumber").value;

    if (cardNumber == "") {
      alert("Card number is required");
      return false;
    }

    if (isNaN(cardNumber)) {
      alert("Card number is invalid, alphabets not allowed");
      return false;
    }

    var num1 = cardNumber.charAt(0);
    var num2 = cardNumber.charAt(1);
    var firstTwoNum = num1 + num2;

    // Visa
    if(num1 == "4") {
      if(cardNumber.length == 13 || cardNumber.length == 16) {
          var sum = sumDigits(cardNumber);
          if(sum % 10 != 0){
              alert("Card number is invalid");
              return false;
          }
      } else {
          alert("Card number is invalid");
          return false;
      }
    }
    // Master card
    else if(firstTwoNum == "51" || firstTwoNum == "52" || firstTwoNum == "53" ||           firstTwoNum == "54" || firstTwoNum == "55") {
      if(cardNumber.length == 16) {
          var sum = sumDigits(cardNumber);
          if(sum % 10 != 0){
              alert("Card number is invalid");
              return false;
          }
      } else {
          alert("Card number is invalid");
          return false;
      }
    }
    // American Express
    else if(firstTwoNum == "37"){
        if(cardNumber.length == 15) {
          var sum = sumDigits(cardNumber);
          if(sum % 10 != 0){
              alert("Card number is invalid");
              return false;
          }
      } else {
          alert("Card number is invalid");
          return false;
      }
    } else {
          alert("Card number is invalid");
          return false;
      }

     var today = new Date();
     var currentMonth = today.getMonth();
     currentMonth =currentMonth + 1;

     var givenMonth   = document.getElementById("monthStart").value;
     var currentYear  = document.getElementById("yearStart").value; 

     if(givenMonth == "--Select--") {
         alert("Exp month is reuired");
         return false;
     }
     
     if(currentYear == "--Select--") {
         alert("Exp year is reuired");
         return false;
     }
     
     if(givenMonth < currentMonth ){
         alert("Invalid card date");
         return false;
     } 
     
     return true;
 }

 function sumDigits(str) {
     var result = 0;
     var double = false;

     for (i=str.length - 1 ; i=0; i--) {
         
         if (double == true) {
             var val = eval(str[i]) * 2;
             if (val > 9) {
                 val = val.toString();
                 val = eval(val.charAt(0)) + eval(val.charAt(1));
             }
             result = val + result;
         } else {
             result = result + eval(str[i]);
         }
         
         if (double == false)
             double = true;
         else
             double = false;
     }
    
     return result;
 }
