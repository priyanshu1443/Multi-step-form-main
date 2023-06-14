const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
// step1 id element
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const gotostep2 = document.getElementById("gotostep2");
// step2 id element 
const gotostep1 = document.getElementById("gotostep1");
const choose_m_y = document.getElementById("choose_m_y");
const gotostep3 = document.getElementById("gotostep3");
// step3 id element
const gotostep2r = document.getElementById("gotostep2r");
const addonscheckbox1 = document.getElementById("addonscheckbox1");
const addonscheckbox2 = document.getElementById("addonscheckbox2");
const addonscheckbox3 = document.getElementById("addonscheckbox3");
const gotostep4 = document.getElementById("gotostep4");
// step4 id element
const gotostep3r = document.getElementById("gotostep3r");
const planname = document.getElementById("planname");
const planprice4 = document.getElementById("planprice4");
const service1price = document.getElementById("service1price");
const service2price = document.getElementById("service2price");
const service3price = document.getElementById("service3price");
const step4buttons = document.getElementById("step4buttons");
const show_total_price = document.getElementById("show_total_price");
const s4munyr = document.getElementById("s4munyr");
const submitform = document.getElementById("submitform");
const gotostep3rr = document.getElementById("gotostep3rr");
const submitformm = document.getElementById("submitformm")
// thank you id elements
const thankyou = document.getElementById("thankyou");



const step_number = document.getElementsByClassName("step_number");
//step1 class element
const msgrequired1 = document.getElementsByClassName("msgrequired1");
//step2 class element
const select_m_y = document.getElementsByClassName("select_m_y");
const step2price = document.getElementsByClassName("step2price");
const yr = document.getElementsByClassName("yr");
const cards = document.getElementsByClassName("cards");
const step3price = document.getElementsByClassName("step3price");
//step3 class element
const summary = document.getElementsByClassName("summary");
const addons = document.getElementsByClassName("addons");


var totalprice = 0

const Activeform = (a, b) => {
  step_number[a].classList.remove("active_form");
  step_number[b].classList.add("active_form");
}


//  ------------ step 1 start ---------------


const chengeborder = (element, color, x, D) => {
  element.style.border = `1.6px solid ${color}`;
  msgrequired1[x].style.display = D;
}

gotostep2.addEventListener("click", () => {
  if (name.value == "" || email.value == "" || number.value == "") {
    name.value == "" ? chengeborder(name, "hsl(354, 84%, 57%)", 0, "block") : chengeborder(name, "hsl(231, 11%, 63%)", 0, "none");
    email.value == "" ? chengeborder(email, "hsl(354, 84%, 57%)", 1, "block") : chengeborder(email, "hsl(231, 11%, 63%)", 1, "none");
    number.value == "" ? chengeborder(number, "hsl(354, 84%, 57%)", 2, "block") : chengeborder(number, "hsl(231, 11%, 63%)", 2, "none");
  } else {
    step1.style.display = "none";
    step2.style.display = "flex";
    Activeform(0, 1);
  }
});


//  ----------- step 1 end --------------


// ------------- step 2 start ----------- 


var media = window.matchMedia("(max-width:900px");

var month_year = "Monthly";
var planprice;
var plan = "";
var plantype = "Monthly";
var mo_yr, price2_20, price1_10;

const arcadeprice = step2price[0].innerHTML;
const advancedprice = step2price[1].innerHTML;
const proprice = step2price[2].innerHTML;


gotostep1.onclick = () => {
  step1.style.display = "block";
  step2.style.display = "none";
  Activeform(1, 0);
};

select_m_y[1].addEventListener("click", () => {
  if (month_year == "Monthly") {
    select_m_y[0].style.color = "hsl(231, 11%, 63%)";
    select_m_y[1].style.flexDirection = "row-reverse";
    select_m_y[2].style.color = "hsl(213, 96%, 18%)";
    step2price[0].innerHTML = "$90/yr";
    step2price[1].innerHTML = "$120/yr";
    step2price[2].innerHTML = "$150/yr";
    yr[0].style.display = "block";
    yr[1].style.display = "block";
    yr[2].style.display = "block";
    if (media.matches == false) {
      cards[0].style.height = "169px";
      cards[1].style.height = "169px";
      cards[2].style.height = "169px";
    } else {
      cards[0].style.height = "89px";
      cards[1].style.height = "89px";
      cards[2].style.height = "89px";
    }
    choose_m_y.style.marginTop = "25px";
    plantype = "Yearly";
    month_year = "Yearly";
  }
  else {
    select_m_y[0].style.color = "hsl(213, 96%, 18%)";
    select_m_y[1].style.flexDirection = "row";
    select_m_y[2].style.color = "hsl(231, 11%, 63%)";
    step2price[0].innerHTML = arcadeprice;
    step2price[1].innerHTML = advancedprice;
    step2price[2].innerHTML = proprice;
    yr[0].style.display = "none";
    yr[1].style.display = "none";
    yr[2].style.display = "none";
    if (media.matches == false) {
      cards[0].style.height = "150px";
      cards[1].style.height = "150px";
      cards[2].style.height = "150px";
    } else {
      cards[0].style.height = "70px";
      cards[1].style.height = "70px";
      cards[2].style.height = "70px";
    }
    choose_m_y.style.marginTop = "44px";
    plantype = "Monthly";
    month_year = "Monthly";
  }
});

const deselectplan = (p) => {
  for (let i = 0; i < cards.length; i++) {
    if (i == p) continue;
    else {
      cards[i].style.backgroundColor = "hsl(0, 0%, 100%)";
      cards[i].style.borderColor = "hsl(231, 11%, 63%)";
    }
  }
}

const getplanprice = () => {
  if (month_year == "Monthly") { plan == "Arcade" ? planprice = "$9/mo" : plan == "Advance" ? planprice = "$12/mo" : planprice = "$15/mo"; }
  else { plan == "Arcade" ? planprice = "$90/yr" : plan == "Advance" ? planprice = "$120/yr" : planprice = "$150/yr"; }
}

const getplanname = (i) => {
  i == 0 ? plan = "Arcade" : i == 1 ? plan = "Advance" : plan = "Pro";
  getplanprice();
}

const selectplan = (i) => {
  cards[i].style.backgroundColor = "hsl(217, 100%, 97%)";
  cards[i].style.borderColor = "hsl(213, 96%, 18%)";
  getplanname(i)
  deselectplan(i);
}

cards[0].onclick = () => { selectplan(0) };
cards[1].onclick = () => { selectplan(1) };
cards[2].onclick = () => { selectplan(2) };

gotostep3.addEventListener("click", () => {
  if (plan == "") alert("Please select any plan.");
  else {
    step2.style.display = "none";
    step3.style.display = "block";
    Activeform(1, 2);
    month_year == "Monthly" ? mo_yr = "mo" : mo_yr = "yr";
    month_year == "Monthly" ? price1_10 = "1" : price1_10 = "10";
    month_year == "Monthly" ? price2_20 = "2" : price2_20 = "20";
    month_year == "Monthly" ? s4munyr.innerHTML = "monthly" : s4munyr.innerHTML = "year";
    step3price[0].innerHTML = `+$${price1_10}/${mo_yr}`;
    step3price[1].innerHTML = `+$${price2_20}/${mo_yr}`;
    step3price[2].innerHTML = `+$${price2_20}/${mo_yr}`;
  }
});


//  -------------- step 2 end -------------------- 


// --------------- step 3 start -----------------


var addonscounter = 0
var addons1 = 0;
var addons2 = 0;
var addons3 = 0;

gotostep2r.onclick = () => {
  step3.style.display = "none";
  step2.style.display = "flex";
  Activeform(2, 1);
}

const select_addons = (ele) => {
  ele.style.borderColor = "hsl(243, 100%, 62%)";
  ele.style.backgroundColor = "hsl(217, 100%, 97%)";
}

const deselect_addons = (ele) => {
  ele.style.borderColor = "hsl(231, 11%, 63%)";
  ele.style.backgroundColor = "hsl(0, 0%, 100%)";
}

addons[0].onclick = () => {
  if (addons1 == "0") {
    select_addons(addons[0]);
    addonscheckbox1.setAttribute("checked", "checked")
    addons1 = "1";
    addonscounter++;
  }
  else {
    deselect_addons(addons[0]);
    addonscheckbox1.removeAttribute("checked")
    addons1 = "0";
    addonscounter--;
  }
};

addons[1].onclick = () => {
  if (addons2 == "0") {
    select_addons(addons[1]);
    addonscheckbox2.setAttribute("checked", "checked")
    addons2 = "1";
    addonscounter++;
  }
  else {
    deselect_addons(addons[1]);
    addonscheckbox2.removeAttribute("checked")
    addons2 = "0";
    addonscounter--;
  }
};

addons[2].onclick = () => {
  if (addons3 == "0") {
    select_addons(addons[2]);
    addonscheckbox3.setAttribute("checked", "checked")
    addons3 = "1";
    addonscounter++;
  }
  else {
    deselect_addons(addons[2]);
    addonscheckbox3.removeAttribute("checked")
    addons3 = "0";
    addonscounter--;
  }
};

const get_total_price = (v) => {
  plan == "Arcade" ? totalprice += 9 * v : plan == "Advance" ? totalprice += 12 * v : totalprice += 15 * v;
  if (addons1 == 1) { totalprice += 1 * v };
  if (addons2 == 1) { totalprice += 2 * v };
  if (addons3 == 1) { totalprice += 2 * v };
}

gotostep4.addEventListener("click", () => {
  step3.style.display = "none";
  step4.style.display = "block";
  Activeform(2, 3);
  planname.innerHTML = `${plan}(${month_year})`;
  planprice4.innerHTML = planprice;
  service1price.innerHTML = step3price[0].innerHTML;
  service2price.innerHTML = step3price[1].innerHTML;
  service3price.innerHTML = step3price[2].innerHTML;
  addons1 == 1 ? summary[1].style.display = "flex" : summary[1].style.display = "none";
  addons2 == 1 ? summary[2].style.display = "flex" : summary[2].style.display = "none";
  addons3 == 1 ? summary[3].style.display = "flex" : summary[3].style.display = "none";
  addonscounter == 1 ? step4buttons.style.top = "105px" : addonscounter == 2 ? step4buttons.style.top = "72px" : addonscounter == 3 ? step4buttons.style.top = "39px" : step4buttons.style.top = "138px";
  month_year == "Monthly" ? get_total_price(1) : get_total_price(10);
  show_total_price.innerHTML = `+$${totalprice}/${mo_yr}`
});


// --------------- step 3 start end -----------------


//  --------------- step 4 start ----------------------


const gotoster3f = () => {
  step4.style.display = "none";
  step3.style.display = "block";
  Activeform(3, 2);
  totalprice = 0;
};

const submitformf = () => {
  step4.style.display = "none";
  thankyou.style.display = "flex";
};


gotostep3r.onclick = () => { gotoster3f() }
gotostep3rr.onclick = () => { gotoster3f() }

submitform.onclick = () => { submitformf() }
submitformm.onclick = () => { submitformf() }


    //  ------------------ step 4 end --------------------

