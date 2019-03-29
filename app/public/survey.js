//
var questionCollection = [
    "Your mind is always buzzing with unexplored ideas and plans.",
    "Generally speaking, you rely more on your experience than your imagination.",
    "You find it easy to stay relaxed and focused even when there is some pressure.",
    "You rarely do something just out of sheer curiosity.",
    "People can rarely upset you.",
    "It is often difficult for you to relate to other people’s feelings.",
    "In a discussion, truth should be more important than people’s sensitivities.",
    "You rarely get carried away by fantasies and ideas.",
    "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
    "You feel more energetic after spending time with a group of people."
];

var question;

function selectFn(n) {

    var questW = document.createElement('h3');
    questW.innerHTML = "Question " + n;
    var questP = document.createElement('p');
    questP.innerHTML = questionCollection[n - 1];

    var select = document.createElement('select');
    select.setAttribute('id', "select" + n);
    select.appendChild(document.createElement('option'));
    select.lastElementChild.setAttribute("value", "choose");
    select.lastElementChild.innerHTML = "Choose";

    for (var i = 0; i < 5; i++) {
        select.appendChild(document.createElement('option'));
        select.lastElementChild.setAttribute("value", i + 1);
        select.lastElementChild.innerHTML = i + 1;
    }

    document.getElementById('questions').appendChild(questW);
    document.getElementById('questions').appendChild(questP);
    document.getElementById('questions').appendChild(select);
}

for (let index = 0; index < 10; index++) {
    selectFn(index + 1);
}



let results = [];

function collect() {

    var sel1 = document.getElementById("select1");
    var sel2 = document.getElementById("select2");
    var sel3 = document.getElementById("select3");
    var sel4 = document.getElementById("select4");
    var sel5 = document.getElementById("select5");
    var sel6 = document.getElementById("select6");
    var sel7 = document.getElementById("select7");
    var sel8 = document.getElementById("select8");
    var sel9 = document.getElementById("select9");
    var sel10 = document.getElementById("select10");

    var val1 = sel1.options[sel1.selectedIndex].value;
    var val2 = sel2.options[sel2.selectedIndex].value;
    var val3 = sel3.options[sel3.selectedIndex].value;
    var val4 = sel4.options[sel4.selectedIndex].value;
    var val5 = sel5.options[sel5.selectedIndex].value;
    var val6 = sel6.options[sel6.selectedIndex].value;
    var val7 = sel7.options[sel7.selectedIndex].value;
    var val8 = sel8.options[sel8.selectedIndex].value;
    var val9 = sel9.options[sel9.selectedIndex].value;
    var val10 = sel10.options[sel10.selectedIndex].value;


    results = [];
    results.push(document.getElementById('name').value);
    results.push(document.getElementById('link').value);    

    results.push(val1);
    results.push(val2);
    results.push(val3);
    results.push(val4);
    results.push(val5);
    results.push(val6);
    results.push(val7);
    results.push(val8);
    results.push(val9);
    results.push(val10);

    callLog();

    return results;
}


function callLog() {
    console.log(results);
}