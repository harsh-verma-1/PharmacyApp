import { Component } from '@angular/core';
import { Drug } from '../../utility/Drug';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  message:String="";
  drugName:String="";

  product: Drug[] = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.getDrug();
  }

    // fetch all the drugs from the database
    // getDrug(){
    // this.api.getProductList().subscribe({
    //   next: (data) => {
    //     this.product = data;
    //   },
    //   error: (error) => {
    //     this.product = [];
    //     console.log('Error occured while fetching data', error);
    //   }
    // });
    // }

// ===============================================================================================
// drug submission form

    // addDrug(drug:Drug){
    //   this.drugName=drug.name;
    //   this.api.addDrug(drug).subscribe((data:Drug)=>{
    //     if(data){
    //       this.message="Added Succesfully";
    //     }
    //   })
    // }
    

    addDrug(drug:Drug){
      this.drugName=drug.name
      this.api.addDrug(drug).subscribe({
        next:(data:Drug)=>{
          if(data){
            this.message="Added Successfully";
          }
        },
        error:(error)=>{
          this.message="not Added successfully"+error.message;
        }
      })
    }
    
    // // delete the drug from database
    // deleteDrug(id:number){
    //   this.api.deleteDrug(id).subscribe((data:Drug)=>{
    //   // this.getDrug();
    //   });
    // }

  }