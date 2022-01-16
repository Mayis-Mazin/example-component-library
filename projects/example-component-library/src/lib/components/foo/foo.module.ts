import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [FooComponent],
  imports: [CommonModule, NzButtonModule, NzTableModule, NzDividerModule],
  exports: [FooComponent],
})
export class FooModule {}
