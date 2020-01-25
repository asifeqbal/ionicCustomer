import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list.customer',
  templateUrl: './list.customer.component.html',
  styleUrls: ['./list.customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private router:Router) { }
  customers = this.customerService.getCustomers();
  

  ngOnInit() {
  	
  }
 
  deleteCustomer(customer){
    this.customerService.deleteCustomer(customer);
    customer = this.customerService.getCustomers();
  }
  editCustomer(customer){
    console.log("id" + customer.id);
    this.router.navigate(['/edit-customer/'+customer.id]);
     
    
  }

}
   

























