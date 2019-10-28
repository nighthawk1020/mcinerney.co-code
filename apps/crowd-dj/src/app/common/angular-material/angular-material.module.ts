
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule(
  {
    imports: [
      MatButtonModule,
      MatInputModule,
      ReactiveFormsModule
    ],
    exports: [
      MatButtonModule,
      MatInputModule,
      ReactiveFormsModule
    ]
  }
)
export class AngularMaterialModule { };