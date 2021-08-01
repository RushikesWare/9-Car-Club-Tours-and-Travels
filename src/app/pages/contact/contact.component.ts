import { Component, OnInit } from '@angular/core';
import { HttpmethodsService } from 'src/app/constants/httpmethods.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';


export class Contact{
  name:string;
  email:string;
  subject:string;
  number:string;
  Message:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contactModel=new Contact();
contactForm:FormGroup;
mailBody: string = "";

  constructor(private httpService :HttpmethodsService, private tostr :ToastrManager) { }

  ngOnInit() {
  }
  sendMail(){
    // alert(JSON.stringify(this.contactModel));

    let fromData =new FormData();
    fromData.append('sender_mail_id', this.contactModel.email);
    fromData.append('receiver_mail_id', "contact@9carclubtoursandtravels.com");
    fromData.append('subject', "Customer Enquiry in Contact Us Page");

    this.mailBody="Name :" + this.contactModel.name + " " + "\n \n" +
    "Email :" + this.contactModel.email + " " + "\n \n" +
    "Subject :" + this.contactModel.subject + " " + "\n \n" +
    "Number :" + this.contactModel.number + " " + "\n \n" +
    "Message :" + this.contactModel.Message + " ";

    fromData.append('body',this.mailBody);


    alert("mail Send Successfully....!");

    this.httpService.postMailRequest("/mail_send.php", fromData).subscribe((data : any)=>{
      if (data) {

      }
      else{

      }
      this.contactModel = new Contact();
      this.tostr.successToastr("Your Mail Send Successfully...!");  
      this.contactForm.reset();
      location.reload();
    })
  }
}
