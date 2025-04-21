import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Drug } from '../../utility/Drug';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  product: Drug[] = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getDrug();
  }

    // fetch all the drugs from the database
    getDrug(){
    this.api.getProductList().subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (error) => {
        this.product = [];
        console.log('Error occured while fetching data', error);
      }
    });
    }

// ===============================================================================================
// drug submission form

    addDrug(drug:Drug){
      this.api.addDrug(drug).subscribe((data:Drug)=>{
        if(data){
          this.getDrug();
        }
      })
    }

    
    // delete the drug from database
    deleteDrug(id:number){
      this.api.deleteDrug(id).subscribe((data:Drug)=>{
      this.getDrug();
      });
    }

  }















// absolutely working fine it is reactive forms and above one is for template driven form
// and this form is used whenm you have mulitple different fields

// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../../services/api.service';
// import { Drug } from '../../utility/Drug';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-home',
//   standalone: false,
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   product: Drug[] = [];
//   drugForm = new FormGroup({
//       drugName: new FormControl('', Validators.required),
//       description: new FormControl('', Validators.required),
//       price: new FormControl(null, Validators.required),
//       stock: new FormControl(null, Validators.required)
//   });

//   constructor(private api: ApiService) { }

//   ngOnInit() {
//     this.getDrug();
//   }

//   // Fetch all the drugs from the database
//   getDrug() {
//     this.api.getProductList().subscribe({
//       next: (data) => {
//         this.product = data;
//       },
//       error: (error) => {
//         this.product = [];
//         console.log('Error occurred while fetching data', error);
//       }
//     });
//   }

//   // // Add a new drug and this method is perfectly working fine
//   // addDrug() {
//   //   const newDrug = {
//   //     name: this.drugForm.value.drugName!,
//   //     description: this.drugForm.value.description!,
//   //     price: this.drugForm.value.price!,
//   //     stock: this.drugForm.value.stock!
//   //   };


//   //   this.api.addDrug(newDrug).subscribe({
//   //     next: (data: Drug) => {
//   //       if (data) {
//   //         this.getDrug();
//   //         this.drugForm.reset(); // Reset the form
//   //       }
//   //     },
//   //     error: (error) => {
//   //       console.error('Error occurred while adding drug', error);
//   //     }
//   //   });
//   // }

//   // add drug to the database

//   addDrug(drug:Drug){
//       this.api.addDrug(drug).subscribe({
//       next:(data)=>{
//         if(data){
//           this.getDrug();
//         }
//       }
      
//     })
//   }

//   // Delete a drug from the database
//   deleteDrug(id: number) {
//     this.api.deleteDrug(id).subscribe({
//       next: () => {
//         this.getDrug();
//       },
//       error: (error) => {
//         console.error('Error occurred while deleting drug', error);
//       }
//     });
//   }
// }