import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-baby-icons',
  templateUrl: './baby-icons.component.html',
  styleUrls: ['./baby-icons.component.css']
})
export class BabyIconsComponent implements OnInit, AfterViewInit, OnDestroy{

  iconName = 'baby-newborn-svgrepo-com';
  color: 'red';
  left: '0';
  top: '0';

  interval:any;
  style: CSSStyleDeclaration;

  @ViewChild('icon')
  icon: any;

  constructor() { }
  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.info('interval is closed')
  }
  ngAfterViewInit(): void {
    this.style = this.icon.element.nativeElement.style;
    this.style.position = 'absolute';
    this.style.zIndex = '-1';
    this.style.top = `0px`
    this.style.left = `0px`
    let count = 0;
    /* this.interval = setInterval(()=>{
      this.style.top = `${(Math.random()).toString()}%`
      this.style.left = `${(count++).toString()}%`
      console.log('interval')
      count = count + 0.1;
      count = count === 100 ? 0 : count;
    },100) */
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.icon.element.nativeElement.style);
      this.icon.element.nativeElement.style.fill = 'red';

    }, 1000);
  }

}
