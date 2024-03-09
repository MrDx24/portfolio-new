import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild('cursor') cursorDiv!: ElementRef;
  @ViewChild('cursorsyb') cursorsyb!: ElementRef;
  @ViewChild('item1') itemDiv1!: ElementRef;
  @ViewChild('item2') itemDiv2!: ElementRef;
  // @ViewChild('item3') itemDiv3!: ElementRef;
  @ViewChild('item4') itemDiv4!: ElementRef;
  @ViewChild('item5') itemDiv5!: ElementRef;
  @ViewChild('item6') itemDiv6!: ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursorDiv.nativeElement.style.left = (event.clientX - 10) + 'px';
    this.cursorDiv.nativeElement.style.top = (event.clientY - 10) + 'px';
  }

  @HostListener('document:mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    this.renderer.listen(this.itemDiv1.nativeElement, 'mouseenter', () => {
      this.renderer.addClass(this.cursorDiv.nativeElement, 'grow');
    });
    this.renderer.listen(this.itemDiv2.nativeElement, 'mouseenter', () => {
      this.renderer.addClass(this.cursorDiv.nativeElement, 'grow');
    });

    this.renderer.listen(this.itemDiv4.nativeElement, 'mouseenter', () => {
      this.renderer.addClass(this.cursorDiv.nativeElement, 'grow');
    });
    this.renderer.listen(this.itemDiv5.nativeElement, 'mouseenter', () => {
      this.renderer.addClass(this.cursorDiv.nativeElement, 'grow');
    });
    this.renderer.listen(this.itemDiv6.nativeElement, 'mouseenter', () => {
      this.renderer.addClass(this.cursorDiv.nativeElement, 'grow');
    });
  }

  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.renderer.listen(this.itemDiv1.nativeElement, 'mouseleave', () => {
      this.renderer.removeClass(this.cursorDiv.nativeElement, 'grow');
    });
    this.renderer.listen(this.itemDiv2.nativeElement, 'mouseleave', () => {
      this.renderer.removeClass(this.cursorDiv.nativeElement, 'grow');
    });

    this.renderer.listen(this.itemDiv4.nativeElement, 'mouseleave', () => {
      this.renderer.removeClass(this.cursorDiv.nativeElement, 'grow');
    });
    this.renderer.listen(this.itemDiv5.nativeElement, 'mouseleave', () => {
      this.renderer.removeClass(this.cursorDiv.nativeElement, 'grow');
    });
    this.renderer.listen(this.itemDiv6.nativeElement, 'mouseleave', () => {
      this.renderer.removeClass(this.cursorDiv.nativeElement, 'grow');
    });
  }


  getDay() {
    var day = new Date();
    if(day.getDay() === 7) {
      return 'Sunday';
    }
    if(day.getDay() === 1) {
      return 'Monday';
    }
    if(day.getDay() === 2) {
      return 'Tuesday';
    }
    if(day.getDay() === 3) {
      return 'Wednesday';
    }
    if(day.getDay() === 4) {
      return 'Thrusday';
    }
    if(day.getDay() === 5) {
      return 'Friday';
    }
    return 'Saturday';
  }

  getTime() {
    var day = new Date();
    console.log(day.getHours())
    if (day.getHours() >= 5 && day.getHours() < 12) {
      return 'Morning';
    } else if (day.getHours() >= 12 && day.getHours() < 17) {
      return 'Afternoon';
    } else if (day.getHours() >= 17 && day.getHours() < 20) {
      return 'Evening';
    } else if (day.getHours() >= 21 && day.getHours() <=23 ) {
      return 'Night';
    } else {
      return 'Midnight';
    }
  }

}
