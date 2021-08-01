import { Component, OnInit } from '@angular/core';
import { HttpmethodsService } from 'src/app/constants/httpmethods.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormControl, FormGroup } from '@angular/forms';

export class Booking {
  name: string;
  eaddress: string;
  tel:string;
  pickup: string;
  drop: string;
  pickuptime: string;
  pickupdate: string;
  passangers: string;
  cartype: string;
  journeytype: string;
}

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  bookingModel = new Booking();
  mailBody: string = "";
  bookingForm: FormGroup;

  constructor( private httpService: HttpmethodsService, private toastr: ToastrManager) { }

  ngOnInit() {
  }
  
  sendMail() {

    // alert(JSON.stringify(this.bookingModel))
    // this.franchiseeModel.to = "fr.enquiry@accexpress.in";
    // this.franchiseeModel.from = this.franchiseeModel.emailId;
    // this.franchiseeModel.name = this.franchiseeModel.name;
    // this.franchiseeModel.subject = "Franchise Enquiry!";

    // this.franchiseeModel.html = "Hello";
    // this.franchiseeModel.html = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Franchisee Enquiry</title></head><body>";
    // this.franchiseeModel.html += "<table style='width: 100%;'>";
    // this.franchiseeModel.html += "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
    // this.franchiseeModel.html += "</td></tr></thead><tbody>";
    // this.franchiseeModel.html += "<tr><td style='border:none;'><strong>Name : </strong>" + this.franchiseeModel.name + "</td></tr>";
    // this.franchiseeModel.html += "<tr><td  style='border:none;'><strong>Email : </strong>" + this.franchiseeModel.emailId + "</td></tr>";
    // this.franchiseeModel.html += "<tr><td  style='border:none;'><strong>Mobile No : </strong>" + this.franchiseeModel.mobileNo + "</td></tr>";
    // this.franchiseeModel.html += "</tbody></table>";
    // this.franchiseeModel.html += "</body></html>";

    let formData = new FormData();
    formData.append('sender_mail_id', this.bookingModel.eaddress);
    formData.append('receiver_mail_id', "contact@9carclubtoursandtravels.com");
    formData.append('subject', "Booking Enquiry 2 Customer Inforation");
    this.mailBody = "Name : " + this.bookingModel.name + " " + "\n\n" +
      "Email : " + this.bookingModel.eaddress + " " + "\n \n" +
      "Mobile o : " + this.bookingModel.tel + " " + "\n \n" +
      "Pick-Up Location : " + this.bookingModel.pickup + " " + "\n \n" +
      "Drop Location : " + this.bookingModel.drop + " " + "\n \n" +
      "Pick-Up Date : " + this.bookingModel.pickupdate + " " + "\n \n" +
      "Pick-Up Time : " + this.bookingModel.pickuptime + " " + "\n \n" +
      "No. Of Passanger : " + this.bookingModel.passangers + " " + "\n \n" +
      "Car Type : " + this.bookingModel.cartype + " " + "\n \n" +
      "Journey Type : " + this.bookingModel.journeytype + " ";

    formData.append('body', this.mailBody);

    // alert("Form Data :" + JSON.stringify(this.mailBody));
    alert("mail Send Successfully....!");

    this.httpService.postMailRequest("/mail_send.php", formData).subscribe((data: any) => {

      if (data) {

        //  this.showSuccess();
        //  this.route.navigateByUrl("/franchiseestructure")

      } else {
        // this.showError();
      }
      // this.toastr.successToastr("Your Mail Send Successfully....!")

    })
    this.bookingModel = new Booking();
    this.bookingForm.reset();
    location.reload();

  }


}
