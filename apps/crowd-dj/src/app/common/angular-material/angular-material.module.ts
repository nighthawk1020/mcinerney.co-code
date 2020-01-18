
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
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