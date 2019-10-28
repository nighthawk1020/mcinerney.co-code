
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule(
  {
    imports: [
      MatAutocompleteModule,
      MatButtonModule,
      MatInputModule,
      ReactiveFormsModule
    ],
    exports: [
      MatAutocompleteModule,
      MatButtonModule,
      MatInputModule,
      ReactiveFormsModule
    ]
  }
)
export class AngularMaterialModule { };