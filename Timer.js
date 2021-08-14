// @author Maik Basso <maik@maikbasso.com.br>

class Timer{
  
  constructor(maxTimeSeconds, callback, callbackStop){
    this.timeSeconds = 0;
    this.maxTimeSeconds = maxTimeSeconds;
    this.callback = callback;
    this.callbackStop = callbackStop;
    this.t = null;
  }
  
  start(){
    var c = this;
    this.t = setInterval(function(){
      c.timeSeconds += 1;
      c.callback();
      if(c.timeSeconds >= c.maxTimeSeconds){
        c.callbackStop();
        c.stop();
      }
    }, 1000);
  }
  
  stop(){
    if(this.t != null){
      clearInterval(this.t);
      this.timeSeconds = 0;
      this.t = null;
    }
  }
  
}
