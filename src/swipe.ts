
	export default class Swipe {

    private touchStartCoords = {'x':-1, 'y':-1};
    private touchEndCoords = {'x':-1, 'y':-1};// X and Y coordinates on mouseup or touchend events.
    private direction:string = 'undefined';// Swipe direction
    private startTime:number = 0;// Time on swipeStart
    private elapsedTime:number = 0;// Elapsed time between swipeStart and swipeEnd
    protected minDistanceXAxis:number = 20;// Min distance on mousemove or touchmove on the X axis
    protected maxDistanceYAxis:number = 100;// Max distance on mousemove or touchmove on the Y axis
    protected maxAllowedTime:number = 1000;// Max allowed time between swipeStart and swipeEnd
   
    el:HTMLElement;
    fn_left:()=>boolean;
    fn_right:()=>boolean;

  constructor(el:HTMLElement, fn_left:()=>boolean, fn_right:()=>boolean) {
    this.el = el;
    this.fn_left = fn_left;
    this.fn_right = fn_right;
    this.swipeStart = this.swipeStart.bind(this);
    this.swipeMove = this.swipeMove.bind(this);
    this.swipeEnd = this.swipeEnd.bind(this);

    this.el.addEventListener('mousedown', this.swipeStart, false);
    this.el.addEventListener('touchstart', this.swipeStart, false);
    this.el.addEventListener('mousemove', this.swipeMove, false);
    this.el.addEventListener('touchmove', this.swipeMove, false);
    this.el.addEventListener('mouseup', this.swipeEnd, false);
    this.el.addEventListener('touchend', this.swipeEnd, false);

}



swipeStart(e:Event | Touch):void{
  e = e ? e : window.event;
  e = ('changedTouches' in e)?(e as TouchEvent).changedTouches[0] : e;
  this.touchStartCoords = {'x':(e as MouseEvent | Touch).pageX, 'y':(e as MouseEvent | Touch).pageY};
  this.startTime = +new Date().getTime();
}

swipeMove(e:Event | Touch):void{
  e = e ? e : window.event;
  (e as Event | TouchEvent).preventDefault();
}

swipeEnd(e:Event | Touch):void {

  e = e ? e : window.event;
  e = ('changedTouches' in e)?(e as TouchEvent).changedTouches[0] : e;
  this.touchEndCoords = {'x':(e as MouseEvent | Touch).pageX - this.touchStartCoords.x, 'y':(e as MouseEvent | Touch).pageY - this.touchStartCoords.y};
  this.elapsedTime = new Date().getTime() - this.startTime;
  if (this.elapsedTime <= this.maxAllowedTime){
    if (Math.abs(this.touchEndCoords.x) >= this.minDistanceXAxis && Math.abs(this.touchEndCoords.y) <= this.maxDistanceYAxis){
      this.direction = (this.touchEndCoords.x < 0)? 'left' : 'right';
      switch(this.direction){
        case 'left':
          this.fn_left();
          break;
        case 'right':
          this.fn_right();
          break;
      }
    }
  }
}



}
