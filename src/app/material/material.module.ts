import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';


const materialComponent = [
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatGridListModule
];



@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule { }
