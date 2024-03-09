import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';


}

// this.renderer.listen(this.itemDiv3.nativeElement, 'mouseenter', () => {
    //   this.renderer.addClass(this.cursorDiv.nativeElement, 'grow');
    // });// this.renderer.listen(this.itemDiv3.nativeElement, 'mouseleave', () => {
    //   this.renderer.removeClass(this.cursorDiv.nativeElement, 'grow');
    // });
