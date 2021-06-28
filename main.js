 const display = document.getElementById('time'); 
 const start = document.getElementById('start');
 const stop = document.getElementById('stop')
 const reset = document.getElementById('reset');
  
  
 let elapsed = 0;
          
 let intervalID=null;
  
 function updateTime(){
 const ms = elapsed % 1000;
 const s = Math.floor(elapsed / 1000) % 60;
 const m = Math.floor(elapsed / (1000*60)) % 60;
 const h = Math.floor(elapsed / (1000*60*60));
  
 const msStr = ms.toString().slice(0,1);
 const sStr = s.toString().padStart(2, '0');
 const mStr = m.toString().padStart(2, '0');
 const hStr = h.toString().padStart(2,'0');
    
 display.innerHTML = `${hStr}:${mStr}:${sStr}.${msStr}`;
 }
  
 function OseruOsenaiInitial(){
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.add('inactive');
 }
  
 function OseruOsenaiRunning(){
  start.classList.add('inactive');
  stop.classList.remove('inactive');
  reset.classList.add('inactive');
 }
 
 function OseruOsenaiStopped(){
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.remove('inactive');
 }
  
  
  
  
  
  
 start.addEventListener('click',function(e){
 OseruOsenaiRunning();
 if(intervalID !==null){return;}
 let past = new Date();
 intervalID =setInterval(function(){
 const now = new Date();
 elapsed += now -past;
 past=now;
 updateTime();
 }, 10);
 });
   
 stop.addEventListener('click',function(e){
 OseruOsenaiStopped();
 clearInterval(intervalID);
 intervalID = null;
 });
       
 reset.addEventListener('click',function(e) {
 OseruOsenaiInitial();
 elapsed = 0;
 updateTime();
 
 });    