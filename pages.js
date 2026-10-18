/* Shared navigation, reservations, menu browsing, and catering on internal pages. */
(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  function closeNav(restoreFocus=false) {
    const wasOpen=menuToggle.getAttribute('aria-expanded')==='true';
    menuToggle.setAttribute('aria-expanded','false');
    menuToggle.setAttribute('aria-label','Open navigation');
    mobileNav.hidden=true;
    if(restoreFocus&&wasOpen)menuToggle.focus();
  }
  function updateHeader() {
    header.classList.toggle('has-scrolled',window.scrollY>32);
    if(!mobileNav.hidden)mobileNav.style.top=Math.round(header.getBoundingClientRect().bottom)+'px';
  }
  menuToggle.addEventListener('click',()=>{
    const open=menuToggle.getAttribute('aria-expanded')==='false';
    menuToggle.setAttribute('aria-expanded',String(open));
    menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    mobileNav.hidden=!open;updateHeader();
  });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeNav()));
  document.addEventListener('click',event=>{if(!mobileNav.hidden&&!mobileNav.contains(event.target)&&!menuToggle.contains(event.target))closeNav();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeNav(true);});
  window.addEventListener('scroll',updateHeader,{passive:true});
  window.addEventListener('resize',()=>{if(window.innerWidth>1050)closeNav();updateHeader();},{passive:true});
  updateHeader();

  const reservationDialog=document.querySelector('#reservation-dialog');
  let returnFocus=null;
  document.querySelectorAll('[data-reserve]').forEach(button=>button.addEventListener('click',()=>{
    closeNav();refreshReservation();returnFocus=button;
    reservationDialog.showModal();document.body.classList.add('modal-open');
  }));
  reservationDialog.querySelector('.close-dialog').addEventListener('click',()=>reservationDialog.close());
  reservationDialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');returnFocus?.focus({preventScroll:true});});
  reservationDialog.addEventListener('click',event=>{
    if(event.target!==reservationDialog)return;
    const r=reservationDialog.getBoundingClientRect();
    if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)reservationDialog.close();
  });

  /* The validated reservation logic is copied from app.js by build-content.py. */
  /* BEGIN RESERVATION LOGIC */
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

/* END RESERVATION LOGIC */

  const search=document.querySelector('#page-menu-search');
  const category=document.querySelector('#page-menu-category');
  if(search&&category) {
    const normalize=value=>value.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
    function filterMenu() {
      const query=normalize(search.value.trim());let count=0;
      document.querySelectorAll('[data-menu-group]').forEach(group=>{
        let matches=0;
        group.querySelectorAll('.page-menu-item').forEach(item=>{
          const visible=(category.value==='all'||category.value===group.dataset.menuGroup)&&normalize(item.textContent).includes(query);
          item.hidden=!visible;if(visible)matches++;
        });
        group.hidden=matches===0;count+=matches;
      });
      document.querySelector('#page-menu-count').textContent=count+' '+(count===1?'dish':'dishes')+' to discover';
      document.querySelector('#page-menu-empty').hidden=count!==0;
    }
    search.addEventListener('input',filterMenu);category.addEventListener('change',filterMenu);filterMenu();
    document.querySelector('#page-print-menu').addEventListener('click',()=>window.print());
  }
  const catering=document.querySelector('#catering-form');
  if(catering) {
    const draft=document.querySelector('#catering-draft');
    document.querySelector('#catering-date').min=restaurantNow().date;
    catering.addEventListener('input',()=>{draft.hidden=true;});
    catering.addEventListener('submit',event=>{
      event.preventDefault();const data=new FormData(catering);
      const lines=['Hello Sapiens Kitchen,','','I would love to discuss catering for an upcoming occasion.','','Occasion: '+data.get('occasion'),'Event date: '+data.get('date'),'Estimated guests: '+data.get('guests'),'','A little about our plans:',data.get('notes')||'Happy to discuss the details.','','Thank you!'];
      const email=document.querySelector('#catering-email');
      email.href='mailto:catering@sapienskitchen.com?subject='+encodeURIComponent('Catering enquiry — '+data.get('occasion'))+'&body='+encodeURIComponent(lines.join('\n'));
      draft.hidden=false;email.focus({preventScroll:true});
      draft.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    });
  }
  document.querySelector('#year').textContent=String(new Date().getFullYear());
})();
