export class ImgSlider {
    IMG_INDEX: number 
    IMG_ELE: HTMLImageElement

    constructor(ele:HTMLImageElement){
        this.IMG_INDEX = 0;
        this.IMG_ELE = ele;
        this.init();
    
    }

    init() {
        this.IMG_ELE.src = `static/slider/bg_${this.IMG_INDEX}.jpg`;
        this.IMG_ELE.style.opacity = '0';
        window.requestAnimationFrame((tp) => this.frame(tp, 0));
        this.IMG_INDEX++;

    }

    frame(timestamp, START) {
        
        
        let time_diff = timestamp - START;
        
        if(time_diff/1000 < 1.1) this.IMG_ELE.style.opacity = Math.min(time_diff/1100, 1) + '';

        this.IMG_ELE.style.objectPosition = -Math.min(time_diff/25, this.IMG_ELE.width/2) + 'px';

        if(time_diff/1000 > 9) this.IMG_ELE.style.opacity = (-Math.abs(time_diff)+ 10000)/1000 + '';

        if(time_diff/1000 > 10) {
            this.nextImg()
            START = timestamp;
        }
        window.requestAnimationFrame((tp) => this.frame(tp, START))
    }
    nextImg() {
        this.IMG_ELE.src = `static/slider/bg_${this.IMG_INDEX}.jpg`;
        this.IMG_ELE.style.opacity = '0';
        this.IMG_INDEX = (this.IMG_INDEX + 1)%5;
    }

    
}