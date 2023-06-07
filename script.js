const orderNow = document.querySelector('.ordernow');
const home = document.querySelector('.home');
const logocont = document.querySelector('.bunslogo');
const home2 = document.querySelector('.home2');
const contmenu = document.querySelector('.contMenu');
const slide = document.querySelector('.slide');
const loading = document.querySelector('.loading-screen');
setTimeout(() => {
  home.style.display = 'flex';
  home.style.margin = '30px auto';
  logocont.style.height = 'auto';
  document.querySelector('.logo').style.width = '220px';
  document.querySelector('.logo').style.margin = '20px';
  document.querySelector('header').style.height = 'auto';
  document.querySelector('.head-end').style.display = 'flex';
  document.querySelector('.contact').style.display = 'flex';
}, 3000);
let addbtns = [];

const checkOutCont = document.createElement('div');
checkOutCont.className = 'checkoutcont';
const cartBtn = document.createElement('button');
cartBtn.innerHTML = `<p></p><i class="fa-solid fa-basket-shopping cart"></i>`;
cartBtn.className = 'btn cartbtn';
//offers btn
const btnOffers = document.createElement('button');
btnOffers.innerHTML = 'Offers';
btnOffers.className = 'btn menu Offers';
//offers menu
const offersCont = document.createElement('div');
offersCont.className = 'contMenu Offers';
const offerslider = document.createElement('div');
offerslider.classList.add('offerslider');
//banners nav btn
const btnNext = document.createElement('button');
btnNext.innerHTML = '<i class="fa-solid fa-circle-right"></i>';
btnNext.classList.add('nav-offers');
const btnBack = document.createElement('button');
btnBack.classList.add('nav-offers');
btnBack.innerHTML = '<i class="fa-solid fa-circle-left"></i>';
//add to cart btns for offers
const offerAddBtns = [];
const addmeal1 = document.createElement('button');
addmeal1.className = 'btnadd addmeal';
addmeal1.innerHTML = `<s>$30.99</s> <p>$15.99</p> <i class="fa-solid fa-circle-plus"></i>`;
addmeal1.value = '15.99';
offerAddBtns.push(addmeal1);
const addmeal2 = document.createElement('button');
addmeal2.className = 'btnadd addmeal';
addmeal2.innerHTML = `<s>$21.99</s> <p>$13.99</p> <i class="fa-solid fa-circle-plus"></i>`;
addmeal2.value = '13.99';
offerAddBtns.push(addmeal2);
const addmeal3 = document.createElement('button');
addmeal3.className = 'btnadd addmeal';
addmeal3.innerHTML = `<s>$17.99</s> <p>$10.99</p> <i class="fa-solid fa-circle-plus"></i>`;
addmeal3.value = '10.99';
offerAddBtns.push(addmeal3);
//Sandwiches btn
const btnSandwiches = document.createElement('button');
btnSandwiches.innerHTML = 'Sandwiches';
btnSandwiches.className = 'btn menu sandwiches';
//Sandwiches menu
const SandwichesCont = document.createElement('div');
SandwichesCont.className = 'contMenu Sandwiches';
//beef bun
const beefBun = document.createElement('div');
beefBun.className = 'card';
beefBun.innerHTML = `<img src="imgs/sandwiches/beef bun.png"/>
<p>Beef Burger</p>`;
const addbeefbun = document.createElement('button');
addbeefbun.className = 'btnadd addbeefbun';
addbeefbun.innerHTML = `<p>$5.00</p> <i class="fa-solid fa-circle-plus"></i>`;
beefBun.appendChild(addbeefbun);
addbeefbun.value = '5.00';
addbtns.push(addbeefbun);
SandwichesCont.appendChild(beefBun);
//chicken bun
const chickenburgerbun = document.createElement('div');
chickenburgerbun.className = 'card';
chickenburgerbun.innerHTML = `<img src="imgs/sandwiches/chicken burger bun.png"/>
<p>Chicken Burger</p>`;
const addchickenburgerbun = document.createElement('button');
addchickenburgerbun.className = 'btnadd addchicken burger bun';
addchickenburgerbun.innerHTML = `<p>$5.00</p> <i class="fa-solid fa-circle-plus"></i>`;
chickenburgerbun.appendChild(addchickenburgerbun);
addchickenburgerbun.value = '5.00';
addbtns.push(addchickenburgerbun);
SandwichesCont.appendChild(chickenburgerbun);
//cheese beef
const cheesebeefBun = document.createElement('div');
cheesebeefBun.className = 'card';
cheesebeefBun.innerHTML = `<img src="imgs/sandwiches/cheese beef bun.png"/>
<p>Cheese Beef Burger</p>`;
const addcheesebeefbun = document.createElement('button');
addcheesebeefbun.className = 'btnadd addcheesebeefbun';
addcheesebeefbun.innerHTML = `<p>$5.55</p> <i class="fa-solid fa-circle-plus"></i>`;
cheesebeefBun.appendChild(addcheesebeefbun);
addcheesebeefbun.value = '5.55';
addbtns.push(addcheesebeefbun);
SandwichesCont.appendChild(cheesebeefBun);
//grilled chicken
const grilledchickenBun = document.createElement('div');
grilledchickenBun.className = 'card';
grilledchickenBun.innerHTML = `<img src="imgs/sandwiches/grilled chicken bun.png"/>
<p>Grilled Chicken</p>`;
const addgrilledchickenbun = document.createElement('button');
addgrilledchickenbun.className = 'btnadd addgrilledchickenbun';
addgrilledchickenbun.innerHTML = `<p>4.00$</p> <i class="fa-solid fa-circle-plus"></i>`;
grilledchickenBun.appendChild(addgrilledchickenbun);
addgrilledchickenbun.value = '4.00';
addbtns.push(addgrilledchickenbun);
SandwichesCont.appendChild(grilledchickenBun);
//double beef
const doublebeefBun = document.createElement('div');
doublebeefBun.className = 'card';
doublebeefBun.innerHTML = `<img src="imgs/sandwiches/duble beef bun.png"/>
<p>Duble Beef Burger</p>`;
const adddoublebeefbun = document.createElement('button');
adddoublebeefbun.className = 'btnadd adddoublebeefbun';
adddoublebeefbun.innerHTML = `<p>7.50$</p> <i class="fa-solid fa-circle-plus"></i>`;
doublebeefBun.appendChild(adddoublebeefbun);
adddoublebeefbun.value = '7.50';
addbtns.push(adddoublebeefbun);
SandwichesCont.appendChild(doublebeefBun);
//bacon mashroom beef
const baconmashroombeefBun = document.createElement('div');
baconmashroombeefBun.className = 'card';
baconmashroombeefBun.innerHTML = `<img src="imgs/sandwiches/bacon mashroom beef bun.png"/>
<p>Mashroom Bacon Beef</p>`;
const addbaconmashroombeefbun = document.createElement('button');
addbaconmashroombeefbun.className = 'btnadd addbaconmashroombeefbun';
addbaconmashroombeefbun.innerHTML = `<p>6.50$</p> <i class="fa-solid fa-circle-plus"></i>`;
baconmashroombeefBun.appendChild(addbaconmashroombeefbun);
addbaconmashroombeefbun.value = '6.50';
addbtns.push(addbaconmashroombeefbun);
SandwichesCont.appendChild(baconmashroombeefBun);
//black beef
const blackbeefBun = document.createElement('div');
blackbeefBun.className = 'card';
blackbeefBun.innerHTML = `<img src="imgs/sandwiches/black beef bun.png"/>
<p>Black Beef</p>`;
const addblackbeefbun = document.createElement('button');
addblackbeefbun.className = 'btnadd addblackbeefbun';
addblackbeefbun.innerHTML = `<p>6.00$</p> <i class="fa-solid fa-circle-plus"></i>`;
blackbeefBun.appendChild(addblackbeefbun);
addblackbeefbun.value = '6.00';
addbtns.push(addblackbeefbun);
SandwichesCont.appendChild(blackbeefBun);
//black chicken
const blackchickenBun = document.createElement('div');
blackchickenBun.className = 'card';
blackchickenBun.innerHTML = `<img src="imgs/sandwiches/black chicken bun.png"/>
<p>Black Chicken</p>`;
const addblackchickenbun = document.createElement('button');
addblackchickenbun.className = 'btnadd addblackchickenbun';
addblackchickenbun.innerHTML = `<p>6.00$</p> <i class="fa-solid fa-circle-plus"></i>`;
blackchickenBun.appendChild(addblackchickenbun);
addblackchickenbun.value = '6.00';
addbtns.push(addblackchickenbun);
SandwichesCont.appendChild(blackchickenBun);

//Appetizers btn
const btnAppetizers = document.createElement('button');
btnAppetizers.innerHTML = 'Appetizers';
btnAppetizers.className = 'btn menu Appetizers';
//Appetizers menu
const appeCont = document.createElement('div');
appeCont.className = 'contMenu Appetizers';
//fries
const frise = document.createElement('div');
frise.className = 'card';
frise.innerHTML = `<img src="imgs/sides/frise.png"/>
<p>French Fries</p>`;
const addfries = document.createElement('button');
addfries.className = 'btnadd addfries';
addfries.innerHTML = `<p>1.99$</p> <i class="fa-solid fa-circle-plus"></i>`;
frise.appendChild(addfries);
addfries.value = '1.99';
addbtns.push(addfries);
appeCont.appendChild(frise);
//onion
const onion = document.createElement('div');
onion.className = 'card';
onion.innerHTML = `<img src="imgs/sides/onion.png"/>
<p>Onion Rings</p>`;
const addonion = document.createElement('button');
addonion.className = 'btnadd addonion';
addonion.innerHTML = `<p>2.99$</p> <i class="fa-solid fa-circle-plus"></i>`;
onion.appendChild(addonion);
addonion.value = '2.99';
addbtns.push(addonion);
appeCont.appendChild(onion);
//strips
const strips = document.createElement('div');
strips.className = 'card';
strips.innerHTML = `<img src="imgs/sides/strips.png"/>
<p>Chicken Strips</p>`;
const addstrips = document.createElement('button');
addstrips.className = 'btnadd addstrips';
addstrips.innerHTML = `<p>4.50$</p> <i class="fa-solid fa-circle-plus"></i>`;
strips.appendChild(addstrips);
addstrips.value = '4.50';
addbtns.push(addstrips);
appeCont.appendChild(strips);
//mix
const mix = document.createElement('div');
mix.className = 'card';
mix.innerHTML = `<img src="imgs/sides/mix.png"/>
<p>Snacks Mix</p>`;
const addmix = document.createElement('button');
addmix.className = 'btnadd addmix';
addmix.innerHTML = `<p>8.50$</p> <i class="fa-solid fa-circle-plus"></i>`;
mix.appendChild(addmix);
addmix.value = '8.50';
addbtns.push(addmix);
appeCont.appendChild(mix);

//Desserts btn
const btnDessert = document.createElement('button');
btnDessert.innerHTML = 'Dessert';
btnDessert.className = 'btn menu Dessert';
//Dessert menu
const DessertCont = document.createElement('div');
DessertCont.className = 'contMenu Dessert';
//carameldonut
const carameldonut = document.createElement('div');
carameldonut.className = 'card';
carameldonut.innerHTML = `<img src="imgs/Dessert/caramel donut.png"/>
<p>Caramel Donut</p>`;
const addcarameldonut = document.createElement('button');
addcarameldonut.className = 'btnadd addcarameldonut';
addcarameldonut.innerHTML = `<p>3.10$</p> <i class="fa-solid fa-circle-plus"></i>`;
carameldonut.appendChild(addcarameldonut);
addcarameldonut.value = '3.10';
addbtns.push(addcarameldonut);
DessertCont.appendChild(carameldonut);
//chocolatedonut
const chocolatedonut = document.createElement('div');
chocolatedonut.className = 'card';
chocolatedonut.innerHTML = `<img src="imgs/Dessert/chocolate donut.png"/>
<p>Chocolate Donut</p>`;
const addchocolatedonut = document.createElement('button');
addchocolatedonut.className = 'btnadd addchocolatedonut';
addchocolatedonut.innerHTML = `<p>3.10$</p> <i class="fa-solid fa-circle-plus"></i>`;
chocolatedonut.appendChild(addchocolatedonut);
addchocolatedonut.value = '3.10';
addbtns.push(addchocolatedonut);
DessertCont.appendChild(chocolatedonut);
//coconut
const coconutdonut = document.createElement('div');
coconutdonut.className = 'card';
coconutdonut.innerHTML = `<img src="imgs/Dessert/coconut donut.png"/>
<p>Coconut Donut</p>`;
const addcoconutdonut = document.createElement('button');
addcoconutdonut.className = 'btnadd addcoconutdonut';
addcoconutdonut.innerHTML = `<p>3.10$</p> <i class="fa-solid fa-circle-plus"></i>`;
coconutdonut.appendChild(addcoconutdonut);
addcoconutdonut.value = '3.10';
addbtns.push(addcoconutdonut);
DessertCont.appendChild(coconutdonut);
//strawberry
const strawberrydonut = document.createElement('div');
strawberrydonut.className = 'card';
strawberrydonut.innerHTML = `<img src="imgs/Dessert/strawberry donut.png"/>
<p>strawberry Donut</p>`;
const addstrawberrydonut = document.createElement('button');
addstrawberrydonut.className = 'btnadd addstrawberrydonut';
addstrawberrydonut.innerHTML = `<p>3.10$</p> <i class="fa-solid fa-circle-plus"></i>`;
strawberrydonut.appendChild(addstrawberrydonut);
addstrawberrydonut.value = '3.10';
addbtns.push(addstrawberrydonut);
DessertCont.appendChild(strawberrydonut);

//Sauces btn
const btnSauces = document.createElement('button');
btnSauces.innerHTML = 'Sauces';
btnSauces.className = 'btn menu Sauces';
//Sauces menu
const sauceCont = document.createElement('div');
sauceCont.className = 'contMenu SaucesMenu';
//ketchup
const ketchup = document.createElement('div');
ketchup.className = 'card';
ketchup.innerHTML = `<img src="imgs/Sauces/ketchup.png"/>
<p>Ketchup</p>`;
const addketchup = document.createElement('button');
addketchup.className = 'btnadd addketchup';
addketchup.innerHTML = `<p>0.50$</p> <i class="fa-solid fa-circle-plus"></i>`;
ketchup.appendChild(addketchup);
addketchup.value = '0.50';
addbtns.push(addketchup);
sauceCont.appendChild(ketchup);
//mustard
const mustard = document.createElement('div');
mustard.className = 'card';
mustard.innerHTML = `<img src="imgs/Sauces/mustard.png"/>
<p>Mustard</p>`;
const addmustard = document.createElement('button');
addmustard.className = 'btnadd addmustard';
addmustard.innerHTML = `<p>0.50$</p> <i class="fa-solid fa-circle-plus"></i>`;
mustard.appendChild(addmustard);
addmustard.value = '0.50';
addbtns.push(addmustard);
sauceCont.appendChild(mustard);
//mayonnaise
const mayonnaise = document.createElement('div');
mayonnaise.className = 'card';
mayonnaise.innerHTML = `<img src="imgs/Sauces/mayonnaise.png"/>
<p>Mayonnaise</p>`;
const addmayonnaise = document.createElement('button');
addmayonnaise.className = 'btnadd addmayonnaise';
addmayonnaise.innerHTML = `<p>0.50$</p> <i class="fa-solid fa-circle-plus"></i>`;
mayonnaise.appendChild(addmayonnaise);
addmayonnaise.value = '0.50';
addbtns.push(addmayonnaise);
sauceCont.appendChild(mayonnaise);
//garlic
const garlic = document.createElement('div');
garlic.className = 'card';
garlic.innerHTML = `<img src="imgs/Sauces/garlic sauce.png"/>
<p>Garlic Sauce</p>`;
const addgarlic = document.createElement('button');
addgarlic.className = 'btnadd addgarlic';
addgarlic.innerHTML = `<p>0.65$</p> <i class="fa-solid fa-circle-plus"></i>`;
garlic.appendChild(addgarlic);
addgarlic.value = '0.65';
addbtns.push(addgarlic);
sauceCont.appendChild(garlic);
//cheddar
const cheddar = document.createElement('div');
cheddar.className = 'card';
cheddar.innerHTML = `<img src="imgs/Sauces/cheddar sauce.png"/>
<p>Cheddar Sauce</p>`;
const addcheddar = document.createElement('button');
addcheddar.className = 'btnadd addcheddar';
addcheddar.innerHTML = `<p>0.75$</p> <i class="fa-solid fa-circle-plus"></i>`;
cheddar.appendChild(addcheddar);
addcheddar.value = '0.75';
addbtns.push(addcheddar);
sauceCont.appendChild(cheddar);

const menubtns = document.createElement('div');
menubtns.className = 'menubtns';

menubtns.appendChild(btnOffers);
menubtns.appendChild(btnSandwiches);
menubtns.appendChild(btnAppetizers);
menubtns.appendChild(btnSauces);
menubtns.appendChild(btnDessert);

orderNow.addEventListener('click', function (e) {
  e.preventDefault();
  home.innerHTML = '';
  home2.style.display = 'flex';
  home2.style.margin = 'auto';
  document.querySelector('.logo').style.width = '120px';
  home2.appendChild(menubtns);
  home2.appendChild(SandwichesCont);
  document
    .querySelectorAll('.btn')
    .forEach((e) => e.classList.remove('active'));
  btnSandwiches.classList.add('active');
});

let step;
btnOffers.addEventListener('click', function (e) {
  e.preventDefault();
  curbanner = 0;
  home2.innerHTML = '';
  home2.appendChild(menubtns);
  home2.appendChild(offersCont);
  offersCont.appendChild(btnBack);
  offersCont.appendChild(offerslider);
  offerslider.appendChild(slide);
  offersCont.appendChild(btnNext);
  document
    .querySelectorAll('.btn')
    .forEach((e) => e.classList.remove('active'));
  btnOffers.classList.add('active');

  step = setTimeout(() => {
    btnNext.click();
  }, 500);
  return step;
});

let curbanner = 0;

btnNext.addEventListener('click', function () {
  curbanner > 0 && offerslider.lastChild.remove();
  loading.style.display = 'flex';
  if (curbanner !== 3) {
    curbanner++;
    slide.firstElementChild.src = `imgs/banner${curbanner}.gif`;
    offerslider.appendChild(offerAddBtns[curbanner - 1]);
  } else {
    curbanner = 1;
    slide.firstElementChild.src = `imgs/banner${curbanner}.gif`;
    offerslider.appendChild(offerAddBtns[curbanner - 1]);
  }
  slide.appendChild(loading);
});

btnBack.addEventListener('click', function () {
  curbanner > 0 && offerslider.lastChild.remove();
  loading.style.display = 'flex';
  if (curbanner !== 0 && curbanner !== 1) {
    curbanner--;
    slide.firstElementChild.src = `imgs/banner${curbanner}.gif`;
    offerslider.appendChild(offerAddBtns[curbanner - 1]);
  } else {
    curbanner = 3;
    slide.firstElementChild.src = `imgs/banner${curbanner}.gif`;
    offerslider.appendChild(offerAddBtns[curbanner - 1]);
  }
  slide.appendChild(loading);
});

slide.firstElementChild.onload = () => loading.remove();

btnAppetizers.addEventListener('click', function (e) {
  e.preventDefault();
  clearTimeout(step);
  home2.innerHTML = '';
  offerslider.innerHTML = '';
  slide.firstElementChild.src = 'imgs/banner0.gif';
  home2.appendChild(slide);
  home2.appendChild(menubtns);
  home2.appendChild(appeCont);
  document
    .querySelectorAll('.btn')
    .forEach((e) => e.classList.remove('active'));
  btnAppetizers.classList.add('active');
});
btnSandwiches.addEventListener('click', function (e) {
  e.preventDefault();
  clearTimeout(step);
  home2.innerHTML = '';
  offerslider.innerHTML = '';
  slide.firstElementChild.src = 'imgs/banner0.gif';
  home2.appendChild(slide);
  home2.appendChild(menubtns);
  home2.appendChild(SandwichesCont);

  document
    .querySelectorAll('.btn')
    .forEach((e) => e.classList.remove('active'));
  btnSandwiches.classList.add('active');
});
btnSauces.addEventListener('click', function (e) {
  e.preventDefault();
  clearTimeout(step);
  home2.innerHTML = '';
  offerslider.innerHTML = '';
  slide.firstElementChild.src = 'imgs/banner0.gif';
  home2.appendChild(slide);
  home2.appendChild(menubtns);
  home2.appendChild(sauceCont);

  document
    .querySelectorAll('.btn')
    .forEach((e) => e.classList.remove('active'));
  btnSauces.classList.add('active');
});
btnDessert.addEventListener('click', function (e) {
  e.preventDefault();
  clearTimeout(step);
  home2.innerHTML = '';
  offerslider.innerHTML = '';
  slide.firstElementChild.src = 'imgs/banner0.gif';
  home2.appendChild(slide);
  home2.appendChild(menubtns);
  home2.appendChild(DessertCont);

  document
    .querySelectorAll('.btn')
    .forEach((e) => e.classList.remove('active'));
  btnDessert.classList.add('active');
});

let nItems = 0;
let total = [];
function addToCart(btn) {
  btn.style.backgroundColor = '#d25244';
  btn.style.width = '80%';
  cartBtn.style.fontSize = '35px';
  setTimeout(() => {
    btn.style.backgroundColor = '#954f35';
    btn.style.width = '90%';
    cartBtn.style.fontSize = '30px';
  }, 200);
  let order = document.createElement('div');
  order.className = 'orderItem';
  nItems++;
  const orderImg = btn.parentElement.firstElementChild.cloneNode(true);
  const orderName = btn.parentElement.querySelector('p').cloneNode(true);
  const price = btn.firstElementChild.cloneNode(true);
  orderprice = Number(btn.value);
  total.push(orderprice);
  order.appendChild(orderImg);
  order.appendChild(orderName);
  order.appendChild(price);
  checkOutCont.appendChild(order);
  menubtns.appendChild(cartBtn);
  cartBtn.focus();
  cartBtn.firstChild.innerHTML = nItems;
}

offerAddBtns.forEach((e) =>
  e.addEventListener('click', function () {
    e.style.backgroundColor = '#d25244';
    e.style.width = '200px';
    cartBtn.style.fontSize = '35px';
    setTimeout(() => {
      e.style.backgroundColor = '#954f35';
      e.style.width = '180px';
      cartBtn.style.fontSize = '30px';
    }, 200);

    let order = document.createElement('div');
    order.className = 'orderItem';
    nItems++;
    const orderImg = slide.querySelector('img').cloneNode(true);
    orderImg.classList.add('offerOrder--img');
    const price = e.querySelector('p').cloneNode(true);
    orderprice = Number(e.value);
    total.push(orderprice);
    order.appendChild(orderImg);
    order.appendChild(price);
    checkOutCont.appendChild(order);
    menubtns.appendChild(cartBtn);
    cartBtn.focus();
    cartBtn.firstChild.innerHTML = nItems;
  })
);

addbtns.forEach((e) =>
  e.addEventListener('click', function () {
    addToCart(e);
  })
);

const priceDis = document.createElement('p');
priceDis.className = 'distotal';
const checkOutBtn = document.createElement('button');
checkOutBtn.innerHTML = 'Check Out';
checkOutBtn.classList = 'btn checkoutbtn';
cartBtn.addEventListener('click', function (e) {
  e.preventDefault();
  priceDis.innerHTML = `Total: ${total
    .reduce((tot, e) => tot + e)
    .toFixed(2)}$`;
  home2.innerHTML = '';
  home2.appendChild(checkOutCont);
  checkOutCont.appendChild(priceDis);
  checkOutCont.appendChild(checkOutBtn);
});

const submit = document.createElement('input');
submit.value = 'Submit Order';
submit.type = 'submit';
submit.className = 'btn submit';
const invalid = document.createElement('p');
invalid.innerHTML = 'Invalid entries, please try again';
const fincont = document.createElement('form');
fincont.className = 'fincont';
fincont.innerHTML = `
    <label for="name">Name<input type="text" id='name' /></label>
    <label for="full-address">Full Address<input type="text" id="full-address" /></label>
    <label for="phone-number">Phone Number<input type="number" id="phone-number" /></label>
    <label for="cash"
><input type="checkbox" id ="cash" name = "cash" value = "cash"
/><i class="fa-solid fa-wallet"></i>Cash On Delivery</label>
<label for="credit"
><input type="button" id="credit" name = "credit" value = "+"
/><i class="fa-solid fa-credit-card"></i></i>Credit Card</label>
`;

checkOutBtn.addEventListener('click', function (e) {
  e.preventDefault();
  home2.innerHTML = '';
  home2.appendChild(fincont);
  fincont.appendChild(submit);
});

const creditForm = document.createElement('form');
creditForm.className = 'creditform';
creditForm.innerHTML = `<label for="name-on-card">Name on Card<input type="text" id='name-on-card' /></label>
<label for="card-number">Card Number<input type="number" id="card-number" /></label>
<label for="expiry-date">Expiry Date<input type="month" id="expiry-date"  placeholder="mm/yy" /></label>
<label for="cvv">CVV<input type="number" maxlength="3" minlength="3" id="cvv"  /></label>
`;
fincont.lastElementChild.addEventListener('click', function (e) {
  e.preventDefault();
  fincont.appendChild(creditForm);
  fincont.appendChild(submit);
});

submit.addEventListener('click', function () {
  document.querySelectorAll('input').forEach((e) => e.attributes['required']);

  if (fincont.checkValidity()) {
    home2.innerHTML = '';
    home.innerHTML = ` <div class="container">
    <div class="done">
    <i class="fa-solid fa-hourglass-start fa-bounce"></i>
    <p>Your Order Will Be Ready Soon</p>
  </div>
  </div>`;
  } else {
    fincont.insertBefore(invalid, fincont.firstChild);
  }
});
