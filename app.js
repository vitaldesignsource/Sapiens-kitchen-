const dishes = {
 favorites: [
  {name:'Sapiens Duck',price:'34.90',image:'duck.webp',tag:'THE FRENCH CLASSIC',description:'Duck confit and seared breast, seasonal vegetables, and a rich orange reduction.'},
  {name:'Alaskan Salmon',price:'33.90',image:'salmon.webp',tag:'WILD-CAUGHT',description:'Gently seared salmon, roasted potatoes, farm vegetables, and Paleo crème sauce.'},
  {name:'Sapiens Crème Brûlée',price:'12',image:'brulee.webp',tag:'A SWEET FINISH',description:'Our dairy-free take on a French favorite, with a little chocolate indulgence.'}
 ],
 starters: [
  {name:'Sapiens Onion Soup',price:'13.90',image:'soup.webp',tag:'FRENCH COMFORT',description:'A deeply savory, slow-crafted French classic from the Sapiens kitchen.'},
  {name:'Stuffed Mushrooms',price:'16.90',image:'mushrooms.webp',tag:'FROM THE SEA',description:'Jumbo mushrooms filled with Dungeness crab and finished with Béchamel sauce.'},
  {name:'Sapiens Salad',price:'15.90',image:'salad.webp',tag:'CHEF’S ORIGINAL',description:'Organic greens, smoky bacon, cranberries, pecans, and house Sherry vinaigrette.'}
 ],
 plant: [
  {name:'Simple Greens',price:'14',image:'greens.webp',tag:'FRESH & VIBRANT',description:'Organic greens, roasted fennel, carrots, and tomatoes with apple cider vinaigrette.'},
  {name:'Beet Tartar',price:'14',image:'beets.webp',tag:'COLORFUL BY NATURE',description:'Beets, peas, and root vegetables with house sauerkraut and Dijon vinaigrette.'},
  {name:'Seasonal Veggies',price:'7',image:'vegetables.webp',tag:'FARM TO KITCHEN',description:'A celebration of fresh organic vegetables from local farms.'}
 ],
 desserts: [
  {name:'Sapiens Crème Brûlée',price:'12',image:'brulee.webp',tag:'THE FRENCH CLASSIC',description:'A delicate, dairy-free crème brûlée with a touch of chocolate.'},
  {name:'Waffle Tartine',price:'13.90',image:'waffle.webp',tag:'A LITTLE INDULGENCE',description:'A spiced Paleo waffle, served with warm Peruvian chocolate for dipping.'},
  {name:'Les Chocolats',price:'14',image:'chocolates.webp',tag:'MADE IN OUR KITCHEN',description:'A thoughtful collection of fine chocolates, freshly made at Sapiens.'}
 ]
};
const menuSections = {
 'To begin':[
 ['Sapiens Onion Soup','13.90','Our savory take on the quintessential French onion soup.'],
 ['Eggplant Crostini','12.90','Roasted eggplant on our artisan Paleo toast.'],
 ['Escargot','16.90','Burgundy escargot with fragrant garlic and herbs.'],
 ['Olives','7','Nocellara del Belice olives.'],
 ['Country Terrine','14.90','Pork and chicken liver terrine, Paleo toast, mustard, and cornichons.'],
 ['Farmer’s Flatbread','15.90','Pork belly, butternut squash, cabbage, and greens on Paleo crust.'],
 ['The Paleo Dip','13','Seasonal vegetable, tahini, and herb dip.'],
 ['Oysters Rockefeller','15.90','Baked oysters with spinach, herbs, garlic, and Paleo crème.'],
 ['Paleo Bread Platter','13.90','House Paleo breads with tomato jam and artichoke tapenade.'],
 ['Stuffed Mushrooms','16.90','Dungeness crab-stuffed mushrooms with Béchamel.'],
 ['Bone Broth','7','Slow-simmered grass-fed bone broth, served as a 4 oz portion.']
 ],
 'From the garden':[
 ['Sapiens Salad','15.90',dishes.starters[2].description],
 ['Simple Greens','14',dishes.plant[0].description],
 ['Beet Tartar','14',dishes.plant[1].description],
 ['Sapiens Kraut','13','Housemade sauerkraut with extra virgin olive oil.']
 ],
 'Burgers':[
 ['Sapiens Burger','18','Grass-fed beef, shallot chutney, arugula, bacon, and avocado oil mayo on a Paleo bun.'],
 ['Keto Burger','18','Our grass-fed burger, served without a bun, with avocado oil mayo and MCT oil.']
 ],
 'The main event':[
 ['Roasted Chicken','30','Organic chicken breast, roasted potatoes, seasonal vegetables, and thyme-garlic jus.'],
 ['Liver N’ Onions','33.90','Grass-fed calf liver, sweet onions, bacon, Sherry sauce, potatoes, and vegetables.'],
 ['Sapiens Duck','34.90',dishes.favorites[0].description],
 ['Paleo Meatloaf','30','Veal and Kobe beef meatloaf, potato gratin, seasonal vegetables, and Sherry sauce.'],
 ['Lamb Shank','32.90','Grass-fed Colorado lamb braised in red wine with root vegetables.'],
 ['Alaskan Salmon','33.90',dishes.favorites[1].description],
 ['Filet Mignon','38','Grass-fed filet, potato gratin, seasonal vegetables, and Malbec sauce.'],
 ['Vegetable Napoleon','28','Baked layers of zucchini, squash, potato, tomato, and pepper with a delicate Béchamel.'],
 ['Rabbit','34.90','French rabbit stew with potatoes, root vegetables, and mustard sauce.'],
 ['Vegan Entrée of the Day','34','Chef’s daily creation celebrating fresh seasonal vegetables.'],
 ['Chef Aurore’s Entrée of the Day','Market price','Ask about the kitchen’s daily French-inspired creation.']
 ],
 'A little on the side':[
 ['Sweet Potatoes','7','Organic sweet yam with vanilla and maple.'],
 ['Potato Au Gratin','7','Yukon potato layers baked with dairy-free Paleo crème.'],
 ['Roasted Plantains','7','Ripe plantains with Fresno pepper aioli.'],
 ['Seasonal Veggies','7','Fresh organic vegetables from local farms.'],
 ['Balsamic-Braised Brussels Sprouts','7','Organic Brussels sprouts with aged balsamic.']
 ],
 'Something sweet':[
 ['Sapiens Crème Brûlée','12',dishes.desserts[0].description],
 ['Clafoutis','12','An almond-flour and seasonal berry take on the French classic.'],
 ['Apple Crumble','12','Cinnamon-baked apples with house dairy-free ice cream.'],
 ['Waffle Tartine','13.90',dishes.desserts[1].description],
 ['Crème Caramel','12','Caramel custard finished with Sel Gris.'],
 ['Les Chocolats','14',dishes.desserts[2].description]
 ],
 'For little appetites':[
 ['Little Hunter','15','Paleo meatloaf, potatoes, and vegetables.'],
 ['Little Fisher','15','Wild-caught Alaskan salmon, potatoes, and vegetables.'],
 ['Little Bird Catcher','15','Free-range chicken, potatoes, and vegetables.'],
 ['Little Veggie Gatherer','15','Seasonal sautéed vegetables with potatoes.']
 ]
};
const grid=document.querySelector('#menu-grid');
const tabs=[...document.querySelectorAll('[data-category]')];
const dishDialog=document.querySelector('#dish-dialog');
let activeCategory='favorites';
function renderDishes(category){
 activeCategory=category;
 grid.innerHTML=dishes[category].map((d,index)=>`<article class="dish-card fade-in"><button class="dish-image dish-open" data-dish="${index}" aria-label="Preview ${d.name}"><img src="assets/${d.image}" alt="${d.name} from the Sapiens kitchen" loading="lazy"><span class="dish-tag">${d.tag}</span><span class="dish-zoom" aria-hidden="true">↗</span></button><div class="dish-info"><h3>${d.name}</h3><span class="dish-price">$${d.price}</span></div><p>${d.description}</p></article>`).join('');
 grid.scrollLeft=0;
 grid.querySelectorAll('[data-dish]').forEach(button=>button.addEventListener('click',()=>{
  const dish=dishes[activeCategory][Number(button.dataset.dish)];
  document.querySelector('#dish-photo').src='assets/'+dish.image;
  document.querySelector('#dish-photo').alt=dish.name+' from the Sapiens kitchen';
  document.querySelector('#dish-title').textContent=dish.name;
  document.querySelector('#dish-price').textContent='$'+dish.price;
  document.querySelector('#dish-description').textContent=dish.description;
  document.querySelector('#dish-eyebrow').textContent=dish.tag;
  openDialog(dishDialog,button);
 }));
 requestAnimationFrame(updateCarousel);
}
tabs.forEach((tab,index)=>{
 tab.id='menu-tab-'+index;
 tab.addEventListener('click',()=>{
  tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1;});
  grid.setAttribute('aria-labelledby',tab.id);
  renderDishes(tab.dataset.category);
 });
 tab.addEventListener('keydown',e=>{
  let next;
  if(e.key==='ArrowRight')next=tabs[(index+1)%tabs.length];
  if(e.key==='ArrowLeft')next=tabs[(index-1+tabs.length)%tabs.length];
  if(e.key==='Home')next=tabs[0];
  if(e.key==='End')next=tabs.at(-1);
  if(next){e.preventDefault();next.focus();next.click();next.scrollIntoView({block:'nearest',inline:'nearest'});}
 });
});
const previousDish=document.querySelector('#previous-dish');const nextDish=document.querySelector('#next-dish');
function updateCarousel(){
 const card=grid.querySelector('.dish-card');if(!card)return;
 const step=card.getBoundingClientRect().width+18;
 const index=Math.max(0,Math.min(2,Math.round(grid.scrollLeft/step)));
 document.querySelector('#carousel-position').textContent=String(index+1).padStart(2,'0')+' / 03';
 previousDish.disabled=grid.scrollLeft<=2;nextDish.disabled=grid.scrollLeft>=grid.scrollWidth-grid.clientWidth-2;
}
function moveCarousel(direction){const card=grid.querySelector('.dish-card');grid.scrollBy({left:direction*(card.getBoundingClientRect().width+18),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
previousDish.addEventListener('click',()=>moveCarousel(-1));nextDish.addEventListener('click',()=>moveCarousel(1));
grid.addEventListener('scroll',updateCarousel,{passive:true});window.addEventListener('resize',updateCarousel);
grid.addEventListener('keydown',e=>{if(e.target!==grid)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();moveCarousel(e.key==='ArrowRight'?1:-1);}});
grid.setAttribute('aria-labelledby',tabs[0].id);renderDishes('favorites');
const menuToggle=document.querySelector('.menu-toggle');const mobileNav=document.querySelector('#mobile-nav');
function closeNav(restoreFocus=false){const wasOpen=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');mobileNav.hidden=true;if(restoreFocus&&wasOpen)menuToggle.focus();}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')==='false';menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');mobileNav.hidden=!open;});
mobileNav.querySelectorAll('a,button').forEach(a=>a.addEventListener('click',()=>closeNav()));
document.addEventListener('click',e=>{if(!mobileNav.hidden&&!mobileNav.contains(e.target)&&!menuToggle.contains(e.target))closeNav();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav(true);});
matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches)closeNav();});
const reservationDialog=document.querySelector('#reservation-dialog');const menuDialog=document.querySelector('#menu-dialog');
function openDialog(dialog,trigger=document.activeElement){
 const current=document.querySelector('dialog[open]');
 const returnFocus=current?.returnFocusTo||trigger;
 document.querySelectorAll('dialog[open]').forEach(d=>d.close());
 dialog.returnFocusTo=returnFocus;dialog.showModal();document.body.classList.add('modal-open');
}
document.querySelectorAll('[data-reserve]').forEach(b=>b.addEventListener('click',()=>{refreshReservation();openDialog(reservationDialog,b);}));
document.querySelectorAll('dialog').forEach(dialog=>{
 dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]')){document.body.classList.remove('modal-open');const target=dialog.returnFocusTo;if(target?.isConnected&&!target.closest('dialog'))target.focus({preventScroll:true});}});
 dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
});
const menuSearch=document.querySelector('#menu-search');
function normalize(value){return value.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();}
function renderFullMenu(){
 const query=normalize(menuSearch.value.trim());let count=0;
 const html=Object.entries(menuSections).map(([group,items])=>{
  const matches=items.filter(item=>normalize(item.join(' ')).includes(query));count+=matches.length;
  if(!matches.length)return '';
  return `<section class="full-menu-group"><h3>${group}</h3>${matches.map(([name,price,description])=>`<div class="full-menu-item"><h4>${name}</h4><span>${price==='Market price'?price:'$'+price}</span><p>${description}</p></div>`).join('')}</section>`;
 }).join('');
 document.querySelector('#full-menu-content').innerHTML=html||'<div class="menu-empty"><h3>Something else in mind?</h3><p>Try a dish or ingredient, such as salmon, duck, or chocolate.</p></div>';
 document.querySelector('#menu-result-count').textContent=query?`${count} ${count===1?'dish':'dishes'} found`:'43 dishes, made with care';
}
menuSearch.addEventListener('input',renderFullMenu);
document.querySelector('[data-full-menu]').addEventListener('click',e=>{menuSearch.value='';renderFullMenu();openDialog(menuDialog,e.currentTarget);});
const dateInput=document.querySelector('#reservation-date');const timeSelect=document.querySelector('[name="time"]');const error=document.querySelector('#reservation-error');
function restaurantNow(){
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'America/Phoenix',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).map(x=>[x.type,x.value]));
 return {date:`${parts.year}-${parts.month}-${parts.day}`,minutes:Number(parts.hour)*60+Number(parts.minute)};
}
function serviceDay(date){return [3,4,5,6].includes(new Date(date+'T12:00:00Z').getUTCDay());}
function nextDinner(now){let day=new Date(now.date+'T12:00:00Z');if(now.minutes>=20*60)day.setUTCDate(day.getUTCDate()+1);while(![3,4,5,6].includes(day.getUTCDay()))day.setUTCDate(day.getUTCDate()+1);return day.toISOString().slice(0,10);}
function refreshTimes(){
 const now=restaurantNow();
 [...timeSelect.options].forEach(option=>{const [hour,minute]=option.value.split(':').map(Number);option.disabled=dateInput.value===now.date&&hour*60+minute<=now.minutes;});
 if(timeSelect.selectedOptions[0]?.disabled)timeSelect.value=[...timeSelect.options].find(o=>!o.disabled)?.value||'';
}
function clearReservationError(){error.hidden=true;dateInput.removeAttribute('aria-invalid');}
function refreshReservation(){
 const now=restaurantNow();dateInput.min=now.date;
 if(!dateInput.value||dateInput.value<now.date||(dateInput.value===now.date&&now.minutes>=20*60))dateInput.value=nextDinner(now);
 clearReservationError();refreshTimes();
}
refreshReservation();
dateInput.addEventListener('input',()=>{clearReservationError();refreshTimes();});
function reservationError(message){error.textContent=message;error.hidden=false;dateInput.setAttribute('aria-invalid','true');dateInput.focus();}
document.querySelector('#reservation-form').addEventListener('submit',e=>{
 e.preventDefault();const values=new FormData(e.currentTarget);const date=values.get('date');const now=restaurantNow();
 if(!serviceDay(date)){reservationError('Our dinner service is Wednesday–Saturday. Please choose one of those evenings.');return;}
 if(date<now.date){reservationError('Please choose today or a future date.');return;}
 const time=values.get('time');const [hour,minute]=(time||'0:0').split(':').map(Number);
 if(date===now.date&&hour*60+minute<=now.minutes){reservationError('That time has passed. Please choose a later time or another evening.');refreshTimes();return;}
 const url=new URL('https://www.opentable.com/r/sapiens-paleo-kitchen-reservations-scottsdale');
 url.searchParams.set('restref','1033744');url.searchParams.set('lang','en-US');url.searchParams.set('ot_source','Restaurant website');url.searchParams.set('covers',values.get('guests'));url.searchParams.set('datetime',date+'T'+time);window.open(url.toString(),'_blank','noopener');
});
const mobileBooking=document.querySelector('.mobile-booking');
if('IntersectionObserver' in window){
 let heroVisible=true,footerVisible=false;
 const updateBooking=()=>{const visible=!heroVisible&&!footerVisible;mobileBooking.classList.toggle('is-visible',visible);mobileBooking.inert=!visible;};
 new IntersectionObserver(entries=>{heroVisible=entries[0].isIntersecting;updateBooking();},{threshold:0}).observe(document.querySelector('.hero'));
 new IntersectionObserver(entries=>{footerVisible=entries[0].isIntersecting;updateBooking();},{threshold:0}).observe(document.querySelector('footer'));
}
document.querySelector('#year').textContent=String(new Date().getFullYear());
