import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [FooComponent],
  imports: [CommonModule, NzButtonModule],
  exports: [FooComponent],
})
export class FooModule {}
