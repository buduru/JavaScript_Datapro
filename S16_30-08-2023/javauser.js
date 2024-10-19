function UserDetails(){
    let table = document.createElement("table");
    let thref = document.createElement("th");
    let thref1 = document.createElement("th");
    let thref2 = document.createElement("th");
    let trref  = document.createElement("tr");

    thref.innerText="Name";
    thref1.innerText="Email";
    thref2.innerText="City";


    trref.appendChild(thref);
    trref.appendChild(thref1);
    trref.appendChild(thref2);

    table.width = "800px";
    table.frame = "box";
    table.rules = "all";
    table.style.margin = "auto";
    table.cellPadding = "10px";

    let bref = document.getElementsByTagName('body');
    bref[0].appendChild(table);

    table.appendChild(trref);
}
//7718012345