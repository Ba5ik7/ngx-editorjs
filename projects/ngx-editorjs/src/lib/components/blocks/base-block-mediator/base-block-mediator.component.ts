import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-base-block-mediator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      base-block-mediator works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseBlockMediatorComponent {

}
