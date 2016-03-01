var word = prompt("Enter any word:")
var msg1 = word + ", what a strange word to enter..\nLet's play with it!"
var msg2 = word + " is " + word.length + " characters long."
var msg3 = "The third character is \"" + word.charAt(3) + "\"."
var msg4 = "When in lower-case your word looks like..  " + word.toLowerCase()
var msg5 = "When in upper-case your word looks like..  " + word.toUpperCase()
var msg6 = "Your word in a sentence: \n \"A(n) " + word + " a day, keeps the doctor away.\""
var msg7 = "The subword from the 2nd to the 4th character is \" " + word.substring(2,4) + " \"."
alert(msg1 + "\n" + msg2 + "\n" + msg3 + "\n" + msg4 + "\n" + msg5 + "\n" + msg6 + "\n" + msg7)
