const clock = document.querySelector('.clock');
const hoursSpan = clock.querySelector('.hours');
const minutesSpan = clock.querySelector('.minutes');
const secondsSpan = clock.querySelector('.seconds');
const amPm=clock.querySelector('.ampm')
const hoursInput = document.getElementById('alarm-hours');
const minutesInput = document.getElementById('alarm-minutes');
const secondsInput = document.getElementById('alarm-seconds');
const amPmInput = document.getElementById('alarm-am-pm');
let currentTime,setTime;
let time=[]

//update function to continuous change the time on UI
function updateClock(){
  let  now=new Date();
  let hours=now.getHours();
  let minutes=now.getMinutes();
  let seconds=now.getSeconds();
  //hours=(hours>12)?hours-12:hours

  hoursSpan.textContent=hours<10?'0'+hours:hours;
  minutesSpan.textContent=minutes<10?'0'+minutes:minutes;
  secondsSpan.textContent=seconds<10?'0'+seconds:seconds;
  let aftBef=amPm.textContent=(hours<12)?"AM":"PM"

  currentTime=`${hours}:${minutes}:${aftBef}`;


  for(let i=0;i<time.length;i++){
    if(time[i]==currentTime){
      ringtone.play();
      setTimeout(()=>{
        ringtone.pause()
        
      },10000)
      
    }
  }
}
setInterval(updateClock,1000);

const setAlarmButton = document.getElementById('set-alarm');
const alarmsList = document.getElementById('alarms-list');


//set Alarm button function

setAlarmButton.addEventListener("click",function(){
  const hours=parseInt(hoursInput.value)
  const minutes=parseInt(minutesInput.value)
  const seconds=00;
  const am=amPmInput.value

  const alarmTime = new Date();
  alarmTime.setHours(hours + (am === 'PM' && hours !== 12 ? 12 : 0)); //if the hours is 12 u will get pm and when the hours is 0 u will get am 
  alarmTime.setMinutes(minutes);
  alarmTime.setSeconds(seconds);
  const hour=alarmTime.getHours();
  const minute=alarmTime.getMinutes();
  const second=alarmTime.getSeconds();

  const alarmListItem=document.createElement('li')
  const alarmTimeText=document.createTextNode(alarmTime.toLocaleTimeString());
  alarmListItem.appendChild(alarmTimeText)


  const deleteButton=document.createElement('button');
  deleteButton.classList.add('delete-button')
  deleteButton.textContent='Delete';

  deleteButton.addEventListener("click",function(){
  let del=alarmsList.removeChild(alarmListItem)
  let set=alarmListItem.appendChild(alarmTimeText)
  
  time.pop(del)
  

    
  })
  alarmListItem.appendChild(deleteButton);
  alarmsList.appendChild(alarmListItem);

 
  setTime=`${hour}:${minute}:${am}`
  time.push(setTime)
  
  

})