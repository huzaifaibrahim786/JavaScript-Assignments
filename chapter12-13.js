/*------------------------------------------CHAPTER 12-13------------------------------------------------- */

/* ----------- Question 1 ----------- */


var ch = prompt("Enter Character");


if (ch>=65 && ch<=90){
    alert("Character is a capital letter");
}
else if (ch>=97 && ch<=122){
    alert("Character is a small letter");
}
else if (ch>=48 && ch<=57){
    alert("Character is a digit");
}
else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)|| (ch>=91 && ch<=96)||(ch>=123 && ch<=127)){
    alert("Character is a special symbol"); 
}


/* ----------- Question 2 ----------- */