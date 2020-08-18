import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Service/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html', 
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  user = [];
  
  constructor(private dataService: UsersService) {}

ngOnInit(): void {
  
  this.dataService.get_users().subscribe((res)=>{
    console.log(res);
    this.user = res["data"];
  })  
}

   
create_user(){
  this.dataService.create_user().subscribe((res)=>{
    console.log(res);
   
  })  
}
update_user(){
  this.dataService.update_user().subscribe((res)=>{
    console.log(res);
  })  
}

delete_User(){
  this.dataService.delete_User().subscribe((res)=>{
    console.log(res);
  })  
}
}



