const dishes = {
  "favorites": [
    {
      "name": "Sapiens Duck",
      "price": "34.90",
      "image": "duck.webp",
      "tag": "THE FRENCH CLASSIC",
      "description": "Duck leg prepared confit-style alongside seared duck breast, roasted potato, local seasonal vegetables and an orange-reduction demi sauce."
    },
    {
      "name": "Alaskan Salmon",
      "price": "33.90",
      "image": "salmon.webp",
      "tag": "WILD-CAUGHT",
      "description": "Gently seared, wild-caught Alaskan king salmon with roasted potato, seasonal farm vegetables and Paleo crème sauce."
    },
    {
      "name": "Sapiens Crème Brûlée",
      "price": "12",
      "image": "brulee.webp",
      "tag": "A SWEET FINISH",
      "description": "A non-dairy interpretation of the French classic, with chocolate."
    }
  ],
  "starters": [
    {
      "name": "Sapiens Onion Soup",
      "price": "13.90",
      "image": "soup.webp",
      "tag": "FRENCH COMFORT",
      "description": "Classic French onion soup, presented by the kitchen as its Valley of the Sun favorite."
    },
    {
      "name": "Stuffed Mushrooms",
      "price": "16.90",
      "image": "mushrooms.webp",
      "tag": "FROM THE SEA",
      "description": "Jumbo mushrooms filled with Oregon Dungeness crab and baked with Béchamel sauce."
    },
    {
      "name": "Sapiens Salad",
      "price": "15.90",
      "image": "salad.webp",
      "tag": "CHEF’S ORIGINAL",
      "description": "Chef Aurore’s original salad: organic frisée and arugula, nitrate-free applewood-smoked bacon, cranberries, toasted pumpkin seeds and Georgia pecans, with homemade Sherry vinaigrette."
    }
  ],
  "plant": [
    {
      "name": "Simple Greens",
      "price": "14",
      "image": "greens.webp",
      "tag": "FRESH & VIBRANT",
      "description": "Organic mixed greens, baby kale, spinach, arugula, carrots, roasted fennel and tomatoes, dressed with Sapiens apple cider vinaigrette."
    },
    {
      "name": "Beet Tartar",
      "price": "14",
      "image": "beets.webp",
      "tag": "COLORFUL BY NATURE",
      "description": "Beets, green peas and root vegetables with homemade sauerkraut, pickle and Dijon mustard vinaigrette."
    },
    {
      "name": "Seasonal Veggies",
      "price": "7",
      "image": "vegetables.webp",
      "tag": "FARM TO KITCHEN",
      "description": "Fresh, organic vegetables sourced from local farms."
    }
  ],
  "desserts": [
    {
      "name": "Sapiens Crème Brûlée",
      "price": "12",
      "image": "brulee.webp",
      "tag": "THE FRENCH CLASSIC",
      "description": "A non-dairy interpretation of the French classic, with chocolate."
    },
    {
      "name": "Waffle Tartine",
      "price": "13.90",
      "image": "waffle.webp",
      "tag": "A LITTLE INDULGENCE",
      "description": "A Paleo waffle infused with 10 spices, served with warm Peruvian chocolate dip."
    },
    {
      "name": "Les Chocolats",
      "price": "14",
      "image": "chocolates.webp",
      "tag": "MADE IN OUR KITCHEN",
      "description": "A collection of fine chocolates, freshly made at Sapiens Kitchen."
    }
  ]
};
const menuSections = {
  "Starters": [
    [
      "Sapiens Onion Soup",
      "13.90",
      "Classic French onion soup, presented by the kitchen as its Valley of the Sun favorite."
    ],
    [
      "Eggplant Crostini",
      "12.90",
      "Roasted eggplant topping served on artisan Paleo toasts."
    ],
    [
      "Escargot",
      "16.90",
      "Snails from Burgundy, France, prepared with garlic and herbs."
    ],
    [
      "Olives",
      "7",
      "Nocellara del Belice olives."
    ],
    [
      "Country Terrine",
      "14.90",
      "Pork shoulder and chicken-liver terrine with Paleo toast, Maille mustard and cornichon pickle; a traditional French recipe dating to Louis XIV."
    ],
    [
      "Farmer’s Flatbread",
      "15.90",
      "Herb-infused pork belly, smashed butternut squash, roasted cabbage and seasonal greens on a rustic Paleo crust."
    ],
    [
      "The Paleo Dip",
      "13",
      "Seasonal vegetables blended with sesame tahini and herbs. The kitchen’s original listing highlights the vegetables’ phytonutrients."
    ],
    [
      "Oysters Rockefeller",
      "15.90",
      "Puget Sound oysters baked with spinach, garlic and herbs, finished with Paleo crème gratinée."
    ],
    [
      "Paleo Bread Platter",
      "13.90",
      "An assortment of freshly baked, grain-free Paleo breads, served with tomato jam and artichoke tapenade."
    ],
    [
      "Stuffed Mushrooms",
      "16.90",
      "Jumbo mushrooms filled with Oregon Dungeness crab and baked with Béchamel sauce."
    ],
    [
      "Bone Broth",
      "7",
      "A 4 oz serving of concentrated, 36-hour grass-fed bone broth. The published description notes collagen and glutathione."
    ]
  ],
  "Salads": [
    [
      "Sapiens Salad",
      "15.90",
      "Chef Aurore’s original salad: organic frisée and arugula, nitrate-free applewood-smoked bacon, cranberries, toasted pumpkin seeds and Georgia pecans, with homemade Sherry vinaigrette."
    ],
    [
      "Simple Greens",
      "14",
      "Organic mixed greens, baby kale, spinach, arugula, carrots, roasted fennel and tomatoes, dressed with Sapiens apple cider vinaigrette."
    ],
    [
      "Beet Tartar",
      "14",
      "Beets, green peas and root vegetables with homemade sauerkraut, pickle and Dijon mustard vinaigrette."
    ],
    [
      "Sapiens Kraut",
      "13",
      "Housemade sauerkraut generously finished with extra virgin olive oil. The original menu advertises 50 billion probiotics per bite and a money-back guarantee."
    ]
  ],
  "Salad additions": [
    [
      "Poached Egg",
      "3",
      "Add a poached egg to any salad."
    ],
    [
      "Breast of Chicken",
      "7",
      "Add chicken breast to any salad."
    ],
    [
      "Seared Alaskan Salmon (4 oz)",
      "8",
      "Add a 4 oz portion of seared Alaskan salmon to any salad."
    ]
  ],
  "Burgers": [
    [
      "Sapiens Burger",
      "18",
      "Grass-fed beef with shallot chutney, organic arugula, nitrate-free applewood-smoked bacon and housemade avocado-oil mayonnaise, served on a Sapiens Paleo bun."
    ],
    [
      "Keto Burger",
      "18",
      "Bunless grass-fed beef with shallot chutney, organic arugula, nitrate-free applewood-smoked bacon, housemade avocado-oil mayonnaise and MCT oil."
    ]
  ],
  "Entrées": [
    [
      "Roasted Chicken",
      "30",
      "Organic, pasture-raised chicken breast with roasted potato, local seasonal vegetables and thyme-garlic jus."
    ],
    [
      "Liver N’ Onions",
      "33.90",
      "Grass-fed calf liver sautéed with Vidalia onions and bacon in Sherry sauce, accompanied by roasted potato and local seasonal vegetables. The kitchen identifies it as its most nutrient-dense menu item."
    ],
    [
      "Sapiens Duck",
      "34.90",
      "Duck leg prepared confit-style alongside seared duck breast, roasted potato, local seasonal vegetables and an orange-reduction demi sauce."
    ],
    [
      "Paleo Meatloaf",
      "30",
      "Veal and Kobe beef meatloaf with potato au gratin, local seasonal vegetables and Sherry sauce."
    ],
    [
      "Lamb Shank",
      "32.90",
      "Grass-fed Colorado lamb shank braised in red wine with root vegetables."
    ],
    [
      "Alaskan Salmon",
      "33.90",
      "Gently seared, wild-caught Alaskan king salmon with roasted potato, seasonal farm vegetables and Paleo crème sauce."
    ],
    [
      "Filet Mignon",
      "38",
      "Grass-fed filet with potatoes au gratin, local seasonal vegetables and Argentinian Malbec wine sauce."
    ],
    [
      "Vegetable Napoleon",
      "28",
      "A vegan preparation of layered zucchini, yellow squash, potatoes, tomatoes and bell peppers, baked with Béchamel sauce."
    ],
    [
      "Rabbit",
      "34.90",
      "Naturally farmed Appalachian rabbit, braised French-style with potatoes and root vegetables in a Maille mustard sauce."
    ],
    [
      "Vegan Entrée of the Day",
      "34",
      "A seasonal vegan plate made from the fresh vegetables available that day and paired with a delicate sauce."
    ],
    [
      "Chef Aurore’s Entrée of the Day",
      "Market price",
      "Chef Aurore’s daily selection, prepared in the traditions of contemporary French fine dining. Ask the team for today’s dish and price."
    ]
  ],
  "Sides": [
    [
      "Sweet Potatoes",
      "7",
      "Organic sweet yam with a vanilla-maple glaze."
    ],
    [
      "Potato Au Gratin (Non-Dairy)",
      "7",
      "Thinly layered Yukon potatoes baked with Paleo crème."
    ],
    [
      "Roasted Plantains",
      "7",
      "Ripe amarillo plantains with Fresno-pepper aioli."
    ],
    [
      "Seasonal Veggies",
      "7",
      "Fresh, organic vegetables sourced from local farms."
    ],
    [
      "Balsamic-Braised Brussels Sprouts",
      "7",
      "Organic Brussels sprouts braised in aged balsamic."
    ]
  ],
  "Desserts": [
    [
      "Sapiens Crème Brûlée",
      "12",
      "A non-dairy interpretation of the French classic, with chocolate."
    ],
    [
      "Clafoutis {klah-foo-tee}",
      "12",
      "A French-style Paleo pie made with almond flour and seasonal berries."
    ],
    [
      "Apple Crumble",
      "12",
      "Baked apples infused with Ceylon cinnamon and topped with homemade non-dairy ice cream."
    ],
    [
      "Waffle Tartine",
      "13.90",
      "A Paleo waffle infused with 10 spices, served with warm Peruvian chocolate dip."
    ],
    [
      "Crème Caramel",
      "12",
      "Caramel custard finished with a flake of Sel Gris salt."
    ],
    [
      "Les Chocolats",
      "14",
      "A collection of fine chocolates, freshly made at Sapiens Kitchen."
    ]
  ],
  "“Little Cavemen” Kids’ Menu": [
    [
      "Little Hunter",
      "15",
      "Paleo meatloaf, potatoes and vegetables."
    ],
    [
      "Little Fisher",
      "15",
      "Wild-caught Alaskan salmon, potatoes and vegetables."
    ],
    [
      "Little Bird Catcher",
      "15",
      "Free-range chicken breast, potatoes and vegetables."
    ],
    [
      "Little Veggie Gatherer",
      "15",
      "Sautéed seasonal vegetables and potatoes."
    ]
  ]
};
const menuGroupNotes = {"Salads": "Add to any salad: poached egg $3; chicken breast $7; seared Alaskan salmon (4 oz) $8.", "Entrées": "Keto and AIP vegetable substitutions are available."};
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
document.addEventListener('focusin',e=>{if(!mobileNav.hidden&&!mobileNav.contains(e.target)&&!menuToggle.contains(e.target))closeNav();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav(true);});
matchMedia('(min-width:1051px)').addEventListener('change',e=>{if(e.matches)closeNav();});
const reservationDialog=document.querySelector('#reservation-dialog');const menuDialog=document.querySelector('#menu-dialog');
function openDialog(dialog,trigger=document.activeElement){
 const current=document.querySelector('dialog[open]');
 const returnFocus=current?.returnFocusTo||(mobileNav.hidden&&mobileNav.contains(trigger)?menuToggle:trigger);
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
 const query=normalize(menuSearch.value.trim());const category=document.querySelector('#menu-category').value;let count=0;
 const html=Object.entries(menuSections).map(([group,items])=>{
  if(category!=='all'&&category!==group)return '';
  const matches=items.filter(item=>normalize(item.join(' ')).includes(query));count+=matches.length;
  if(!matches.length)return '';
  return `<section class="full-menu-group"><h3>${group}</h3>${menuGroupNotes[group]?`<p class="full-menu-group-note">${menuGroupNotes[group]}</p>`:''}${matches.map(([name,price,description])=>`<div class="full-menu-item"><h4>${name}</h4><span>${price==='Market price'?price:'$'+price}</span><p>${description}</p></div>`).join('')}</section>`;
 }).join('');
 document.querySelector('#full-menu-content').innerHTML=html||'<div class="menu-empty"><h3>Something else in mind?</h3><p>Try a dish or ingredient, such as salmon, duck, or chocolate.</p></div>';
 document.querySelector('#menu-result-count').textContent=(query||category!=='all')?`${count} ${count===1?'dish':'dishes'} found`:`${count} dishes, made with care`;
}
menuSearch.addEventListener('input',renderFullMenu);
document.querySelector('#menu-category').addEventListener('change',renderFullMenu);
document.querySelectorAll('[data-full-menu]').forEach(button=>button.addEventListener('click',e=>{menuSearch.value='';document.querySelector('#menu-category').value='all';renderFullMenu();openDialog(menuDialog,e.currentTarget);}));
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
// Complete the smaller visitor journeys with the same care as dinner reservations.
(() => {
 const header=document.querySelector('.site-header');
 const updateHeader=()=>{
  header.classList.toggle('has-scrolled',scrollY>32);
  if(!mobileNav.hidden){
   const viewport=window.visualViewport;
   const viewportTop=viewport?.offsetTop||0;
   const top=Math.max(viewportTop,Math.round(header.getBoundingClientRect().bottom));
   const available=Math.max(0,Math.floor(viewportTop+(viewport?.height||window.innerHeight)-top));
   mobileNav.style.top=top+'px';
   mobileNav.style.setProperty('--nav-top',top+'px');
   mobileNav.style.maxHeight=`max(0px, calc(${available}px - env(safe-area-inset-bottom, 0px)))`;
  }
 };
 menuToggle.addEventListener('click',updateHeader);
 window.addEventListener('scroll',updateHeader,{passive:true});window.addEventListener('resize',()=>{if(window.innerWidth>1050)closeNav();updateHeader();},{passive:true});
 window.visualViewport?.addEventListener('resize',updateHeader,{passive:true});window.visualViewport?.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
 if('IntersectionObserver' in window){
  const navLinks=[...document.querySelectorAll('.desktop-nav>a')].filter(link=>link.hash.length>1&&link.origin===window.location.origin&&link.pathname===window.location.pathname);
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;navLinks.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}},{rootMargin:'-18% 0px -55% 0px',threshold:0});
  navLinks.forEach(link=>{let id;try{id=decodeURIComponent(link.hash.slice(1));}catch{return;}const section=document.getElementById(id);if(section)observer.observe(section);});
 }
 const mealDialog=document.querySelector('#meal-dialog');const cateringDialog=document.querySelector('#catering-dialog');
 document.querySelectorAll('[data-meal-prep]').forEach(button=>button.addEventListener('click',()=>openDialog(mealDialog,button)));
 document.querySelectorAll('[data-catering]').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#catering-date').min=restaurantNow().date;openDialog(cateringDialog,button);}));
 document.querySelector('#catering-date').min=restaurantNow().date;
 const cateringForm=document.querySelector('#catering-form');const cateringDraft=document.querySelector('#catering-draft');
 cateringForm.addEventListener('input',()=>{cateringDraft.hidden=true;});
 cateringForm.addEventListener('submit',event=>{
  event.preventDefault();const data=new FormData(cateringForm);
  const lines=['Hello Sapiens Kitchen,','','I would love to discuss catering for an upcoming occasion.','','Occasion: '+data.get('occasion'),'Event date: '+data.get('date'),'Estimated guests: '+data.get('guests'),'','A little about our plans:',data.get('notes')||'Happy to discuss the details.','','Thank you!'];
  document.querySelector('#catering-email').href='mailto:catering@sapienskitchen.com?subject='+encodeURIComponent('Catering enquiry — '+data.get('occasion'))+'&body='+encodeURIComponent(lines.join('\n'));
  cateringDraft.hidden=false;cateringDraft.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});document.querySelector('#catering-email').focus({preventScroll:true});
 });
 document.querySelectorAll('.faq-list details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open)document.querySelectorAll('.faq-list details').forEach(other=>{if(other!==detail)other.open=false;});}));
 document.querySelector('#print-menu').addEventListener('click',()=>{menuSearch.value='';document.querySelector('#menu-category').value='all';renderFullMenu();window.print();});
 const copyButton=document.querySelector('#copy-address');
 copyButton.addEventListener('click',async()=>{
  const address='Sapiens Paleo Kitchen, 10411 E McDowell Mountain Ranch Rd, Suite 120, Scottsdale, AZ 85255';
  try{await navigator.clipboard.writeText(address);copyButton.textContent='Address copied ✓';document.querySelector('#copy-address-status').textContent='Restaurant address copied to clipboard.';}
  catch{copyButton.textContent=address;document.querySelector('#copy-address-status').textContent='Select the displayed restaurant address to copy it.';}
 });
 const status=document.querySelector('#dinner-status');
 function updateDinnerStatus(){const now=restaurantNow();const today=serviceDay(now.date);const open=today&&now.minutes>=17*60&&now.minutes<21*60;status.classList.toggle('is-open',open);status.textContent=open?'Dinner service now · until 9 pm':today&&now.minutes<17*60?'Dinner tonight · 5–9 pm':'Dinner Wednesday–Saturday · 5–9 pm';}
 updateDinnerStatus();setInterval(updateDinnerStatus,60000);
})();
