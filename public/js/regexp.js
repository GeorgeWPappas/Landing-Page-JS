// Calculates Regular Expression

function RegExpTest() {
    user_Test_String = document.getElementById("Test_String").value;
    user_Regular_Expression = document.getElementById("Regular_Expression").value;
    regex_word = RegExp(user_Regular_Expression);

    if (user_Test_String === '') {
        document.getElementById("result").value = 'Please enter a Text String'  // Will display if the Test String field is left blank.
    } else if (user_Regular_Expression === '') {
        document.getElementById("result").value = 'Please enter a Regular Expression'   // Will display if the Regular Expression field is left blank.
    } else if (user_Regular_Expression === '') {
    } else {
        document.getElementById("result").value = regex_word.test(user_Test_String);    // Determines result.
    }   
}
