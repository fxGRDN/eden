import { onMount } from "svelte";

export class ImgSlider {
    IMG_INDEX: number
    IMG_ARR: HTMLImageElement[]
    IMG_ELE: HTMLDivElement

    constructor(ele:HTMLImageElement){
        this.IMG_INDEX = 0;
        this.IMG_ELE= ele;
        this.IMG_ARR = [];
        this.init();
    
    }

    init() {
        this.IMG_ARR.push(this.cImgEle());
        this.IMG_ARR[this.IMG_INDEX].style.opacity = '0';
       

        this.IMG_ELE.replaceChildren(this.IMG_ARR[this.IMG_INDEX]);
        window.requestAnimationFrame((tp) => this.frame(tp, tp));
    }

    frame(timestamp, START) {
        

        let time_diff = timestamp - START;
        
        if(time_diff/1000 < 1.1) this.IMG_ARR[this.IMG_INDEX].style.opacity = Math.min(time_diff/1100, 1) + '';

        this.IMG_ARR[this.IMG_INDEX].style.objectPosition = -Math.min(time_diff/25, this.IMG_ARR[this.IMG_INDEX].naturalWidth) + 'px';

        if(time_diff/1000 > 9) this.IMG_ARR[this.IMG_INDEX].style.opacity = (-time_diff + 10000)/1000 + '';

        if(time_diff/1000 > 10) {
            this.nextImg();
            START = timestamp;
        }

        window.requestAnimationFrame((tp) => this.frame(tp, START))
    }
    nextImg() {
        this.IMG_INDEX = (this.IMG_INDEX + 1)%5;

        if(this.IMG_ARR[this.IMG_INDEX] == undefined) this.IMG_ARR.push(this.cImgEle());

        this.IMG_ELE.replaceChildren(this.IMG_ARR[this.IMG_INDEX])
        this.IMG_ARR[this.IMG_INDEX].style.opacity = '0';
        
    }

    cImgEle() {
        let img = new Image();
        img.src = `/slider/bg_${this.IMG_INDEX}.jpg`;
        img.classList.add('object-cover','md:object-none', 'md:h-full','h-128' );
        return img;
    }

    
}