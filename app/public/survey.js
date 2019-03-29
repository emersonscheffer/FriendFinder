//

function selectFn(n) {
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
    document.getElementById('questions').appendChild(select);
}

for (let index = 0; index < 10; index++) {
    selectFn(index + 1);
}





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

    console.log(val1);
    
}