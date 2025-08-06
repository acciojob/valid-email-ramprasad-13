function validEmail(str) {
  //your JS code here.
	// Edge case: Handle empty or non-string inputs
  if (typeof str !== 'string' || str.length === 0) {
    return false;
  }
	// Regular expression to validate the email format.
  // Breakdown of the regex:
  // ^                                  - Start of the string
  // [a-zA-Z0-9]+                       - One or more alphanumeric characters (start of username)
  // (?:[._-][a-zA-Z0-9]+)* - Non-capturing group: allows periods, underscores, or hyphens
  //                                      followed by one or more alphanumeric characters.
  //                                      The '*' means this group can appear zero or more times,
  //                                      ensuring special characters are not consecutive or at the end.
  // @                                  - Literal '@' symbol
  // [a-zA-Z0-9]+                       - One or more alphanumeric characters (start of domain name)
  // (?:[.-][a-zA-Z0-9]+)* - Non-capturing group: allows periods or hyphens
  //                                      followed by one or more alphanumeric characters.
  //                                      The '*' means this group can appear zero or more times.
  // \.                                 - Literal dot before the TLD
  // [a-zA-Z]{2,3}                      - Exactly two or three alphabetic characters for the TLD
  // $                                  - End of the string
const emailRegex = /^[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:[.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}$/;

  return emailRegex.test(str);
	
}

// Do not change the code below.
//const str = prompt("Enter an email address.");
//alert(validEmail(str));
