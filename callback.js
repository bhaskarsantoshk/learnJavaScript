function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
}
function showOK(){
    alert("You agreed!!");
}
function showCancel(){
    alert("You canceled the execution.");
}
ask("Do you agree", showOK, showCancel);

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
