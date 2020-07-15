var cemetry = document.getElementsByClassName('b-shooter')[0];
var aimShooter = document.getElementsByClassName('b-shooter__aim')[0];
var aimShooterImg = document.getElementsByClassName('b-shooter__img-aim')[0];
var ghost = document.getElementsByClassName('b-shooter__img-ghost')[0];
var fire = document.getElementsByClassName('b-shooter__img-fire')[0];
var progressIcon = document.getElementsByClassName('b-shooter__progress-icon');
var healthIcon = document.getElementsByClassName('b-shooter__health-icon');
var healthIconBar = document.getElementsByClassName('b-shooter__health')[0];
var delayToReset = 500;
var isGameOver = false;
var shooterGameOver = document.querySelector('.b-shooter__game-over');
var shooterGameOverTitle = document.getElementsByClassName('.b-shooter__game-over-title')[0];

var clickHandler = function(e){

  if(ghost.style.animationPlayState ==='paused' || isGameOver == true){
    return
  };

  var x = e.offsetX - aimShooter.offsetWidth/2;
  var y = e.offsetY - aimShooter.offsetHeight/2;

  if ( x < 0){ 
    x = 0;
  } else if(x + aimShooter.offsetWidth > cemetry.offsetWidth){
    x = cemetry.offsetWidth - aimShooter.offsetWidth;
  };
  if ( y < 0){ 
    y = 0;
  } else if ( y + aimShooter.offsetHeight > cemetry.offsetHeight){
    y = cemetry.offsetHeight - aimShooter.offsetHeight;
  };

  aimShooter.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

};

var keyDownHandler = function(e){

  if (e.code === 'Enter') {
    aimShooterImg.style.transform = 'scale(.9)';
  }
};

var keyUpHandler = function(e){

  if (e.code === 'Enter') {
    aimShooterImg.style.transform = '';
  }

  var rect = aimShooterImg.getBoundingClientRect();
  var aimCenterX = rect.x + rect.width/2;
  var aimCenterY = rect.y + rect.height/2;
  console.log(aimCenterX, aimCenterY);

  var ghoostGoords = ghost.getBoundingClientRect();

  if (
    aimCenterX <= ghoostGoords.right - 20
    && aimCenterX >= ghoostGoords.x + 20
    && aimCenterY >= ghoostGoords.y - 20
    && aimCenterY <= ghoostGoords.bottom + 20
  ){
    fire.style.visibility = 'visible';
    fire.style.transitionDuration = delayToReset * 0.6 +'ms';
    fire.style.transitionDelay = delayToReset * 0.4 + 'ms';
    fire.style.opacity = 0;
    ghost.style.animationPlayState = 'paused';
    ghost.style.transitionDuration = delayToReset * 0.6 +'ms';
    ghost.style.transitionDelay = delayToReset * 0.4 + 'ms';
    ghost.style.opacity = 0;
    aimShooterImg.style.display = 'none';

    markProgress();
  } else markLifeStatus();

  setTimeout(function() {
    fire.removeAttribute('style');
    fire.style.visibility = 'hidden';
    aimShooterImg.style.display = '';
    ghost.removeAttribute('style');
    ghost.style.display = 'none';
  }, delayToReset);
};

var setRandomCoors = function(e){

  var left = Math.floor(Math.random() * (cemetry.offsetWidth - ghost.offsetWidth) +1);
  var top = Math.floor(Math.random() * (cemetry.offsetHeight - ghost.offsetHeight) +1);

  console.log(left, top)
  ghost.style.left = left + 'px';
  ghost.style.top = top + 'px';

};

function markProgress(){
  
  for( let i = 0; i < progressIcon.length; i++){
    if(!progressIcon[i].classList.contains('_score')){
      progressIcon[i].classList.add('_score');
      console.log(isGameOver)

      if(i === progressIcon.length-1){
        isGameOver = true;
        shooterGameOver.classList.add('_win');
        shooterGameOverTitle.innerHTML = '<h2>You Lose</h2>'
      }
      break
    } 
  }
};

function markLifeStatus(){

  if(healthIconBar.classList.contains('_loss-bar')){
    isGameOver = true;
    return
  };

  for( let i = 0; i < healthIcon.length; i++){
    if(!healthIcon[i].classList.contains('_loss')){
      healthIcon[i].classList.add('_loss');

      if(i === healthIcon.length-1){
        healthIconBar.classList.add('_loss-bar')
        shooterGameOver.classList.add('_lose');
      }
      break
    } 
  }
};


var setRandomCoorsInterval = setInterval(function(){
  if (ghost.style.animationPlayState ==='paused') {
    return;
  } else if (ghost.style.display == 'none'){
    ghost.style.display = '';
    setRandomCoors();
  }
}, 3000);

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
cemetry.addEventListener('click', clickHandler);

