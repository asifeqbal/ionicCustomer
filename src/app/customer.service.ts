import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
	constructor() { }
	
  customers = [
  {id:1, name:'Asif', email:'Asif@gmail.com', address:'Kolkata', phone:'9681396392'},
  {id:2, name:'Nageshwar', email:'nageshwar@gmail.com', address:'Bangalore', phone:'9874123694'},
  {id:3, name:'Ram', email:'Ram@gmail.com', address:'Bangalore', phone:'9681396392'},
  {id:4, name:'Rakesh', email:'rakesh@gmail.com', address:'Bangalore', phone:'9851477254'},
  ];

  getCustomers(){
  	return this.customers;
  }
  	getCustomerById(id){
		for(var i = 0;i<this.customers.length;i++){
			if(id == this.customers[i].id){
				return this.customers[i];
			}
		}
		return null;
	}

  updateCustomer(customer){
    var updated = false;
    for(var i = 0;i<this.customers.length;i++){
    	if(customer.id == this.customers[i].id){
    		updated = true;
    		this.customers[i] = customer;
    		break;
    	}
    }
}

  addCustomer(customer){
  	customer.id = Math.round(Math.random()*100000);
    	this.customers.push(customer);

  }

   deleteCustomer(customer){
    for(var i = 0;i<this.customers.length;i++){
      if(customer.id == this.customers[i].id){
        this.customers.splice(i,1);
      }
    }

  }
}

