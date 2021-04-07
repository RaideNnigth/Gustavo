function loadHeaderAndFooter(){
    header();
    footer();
}
function header(){
    var header = document.getElementById("header");
    var nav = document.createElement("nav");
    var divHe = document.createElement("div");
    var divHb = document.createElement("div");
    var p = document.createElement("p");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    nav.setAttribute("id", "nav");
    divHb.setAttribute("id", "divHeaderButtons");
    divHe.setAttribute("id", "headerElements");
    p.setAttribute("id", "headerText");
    button1.setAttribute("class", "headderButtons");
    button2.setAttribute("class", "headderButtons");
    button3.setAttribute("class", "headderButtons");
    p.innerHTML = "Projeto Portifólio";
    button1.innerHTML= "Sobre Mim";
    button2.innerHTML= "Projetos";
    button3.innerHTML= "Contato";
    divHb.appendChild(button1);
    divHb.appendChild(button2);
    divHb.appendChild(button3);
    divHe.appendChild(p);
    divHe.appendChild(divHb);
    nav.appendChild(divHe);
    header.appendChild(nav);
}
function footer (){
    var footer = document.getElementById("footer");
    var div =  document.createElement("div");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    p1.innerHTML = "&copy Gustavo Pereira 2021";
    p2.innerHTML = "Gravataí, Rs-Brasil";
    div.setAttribute("id", "footerText");
    div.appendChild(p1);
    div.appendChild(p2);
    footer.appendChild(div);
}