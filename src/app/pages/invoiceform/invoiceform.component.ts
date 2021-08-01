import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpmethodsService } from 'src/app/constants/httpmethods.service';

export class Invocie {
  bookingDate :string;
  TripNumber: string;
  BoardingTime: string;
  TicketNumber: string;
  pickup: string;
  drop: string;
  pickupdate: string;
  pickuptime: string;
  passangers: string;
  carType: string;
  journey: string;
  fullName: string;
  email: string;
  mobnumber: string;
  paymentStatus: string;
  waiting: string;
  totalKm: string;
  basicFire: string;
  reservCharge: string;
  GST: string;
  chargeAmnt: string;
  pendingAmnt: string;
}

@Component({
  selector: 'app-invoiceform',
  templateUrl: './invoiceform.component.html',
  styleUrls: ['./invoiceform.component.css']
})
export class InvoiceformComponent implements OnInit {

  invoiceModel = new Invocie();
  mailBody: string = "";
  invoiceForm : FormGroup;


  constructor(private httpService: HttpmethodsService) { }

  ngOnInit() {
  }
  sendMail() {

    alert("Your Invoice Send to :"+ this.invoiceModel.email);
    let formData = new FormData();
    formData.append('sender_mail_id', "invoice@9carclubtoursandtravels.com");
    formData.append('receiver_mail_id', this.invoiceModel.email);
    formData.append('subject', "Invoice : 9 Car Club Tours And Travels");

    // this.mailBody = "TripNumber : " + this.invoiceModel.TripNumber + " " + "\n\n";


    this.mailBody += "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Invoice</title></head><body>";

    //My Table
    this.mailBody +="<table style='width:750px;margin:0 auto;border:2px solid black;border-spacing:3px'>";
    this.mailBody +="<tbody>";
    this.mailBody +="<tr>";
    this.mailBody +='<td><img src="http://mail.zpluscybertech.co.in/mail_send/logo.png" border="0" style="width:100px;" alt="9car club tours and travels"></td>';
    this.mailBody +='<td style="vertical-align:top;text-align:center;padding-top:5px">';
    this.mailBody +='<h2 style="font-size:19px">9 CAR CLUB Tours and Travels</h2>';
    this.mailBody +='<p style="font-size:12px">352, Narayan Peth, Shop No-7,<br> Vijay Talkies, Pune-411030.</p>';
    this.mailBody +='<span style="font-size:19px;padding-top:20px;display:block">E-Reservation Ticket</span></td>';
    this.mailBody +='<td style="text-align:center;padding-top:5px;vertical-align:top">';
    this.mailBody +='<div style="vertical-align:top">';
    this.mailBody +='<p style="font-size:12px">Contact: 9325423346 / 9923063074<br>Helpline No.:9850192394<br>Email: <a href="mailto:contact@9carclubtoursandtravels.com" target="_blank">contact@9carclubtoursandtravels.com</a></p>';
    this.mailBody +='</div>';
    this.mailBody +='</td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr>';
    this.mailBody +='<td style="padding:5px 0 5px 3px" colspan="2"><span style="font-weight:bold">Trip Information</span></td>';
    this.mailBody +='<td colspan="1">Booking Date : '+ this.invoiceModel.bookingDate  +'</td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr>';
    this.mailBody +='<td colspan="3">';
    this.mailBody +='<table style="width:100%;border-spacing:0;border:1px solid black;font-size:12px">';
    this.mailBody +='<tbody>';
    this.mailBody +='<tr style="border:1px solid black">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">Trip Number :</td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px"><span>'+ this.invoiceModel.TripNumber +'</span></td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">Aprrox. Boarding Time :</td>';
    this.mailBody +='<td style="padding:5px 10px;border-bottom:1px solid black"><span>'+ this.invoiceModel.BoardingTime+'</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr style="border:1px solid black;padding:5px 10px">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">Ticket Number :</td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px"><span>'+this.invoiceModel.TicketNumber +'</span></td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">Booking Type :</td>';
    this.mailBody +='<td style="padding:5px 10px;border-bottom:1px solid black"><span>'+ this.invoiceModel.journey+'</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr style="border:1px solid black;padding:5px 10px">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">Service Start Place :</td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px"><span> '+this.invoiceModel.pickup +'</span></td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">Service End Place :</td>';
    this.mailBody +='<td style="padding:5px 10px;border-bottom:1px solid black"><span>'+this.invoiceModel.drop +'</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr style="border:1px solid black;padding:5px 10px">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">Passenger Boarding Point :</td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px"><span>'+this.invoiceModel.pickup +'</span></td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">Passenger Dropping Point :</td>';
    this.mailBody +='<td style="padding:5px 10px;border-bottom:1px solid black"><span>'+ this.invoiceModel.drop +'</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr style="border:1px solid black;padding:5px 10px">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">Date of Journey :</td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px"><span>'+this.invoiceModel.pickupdate +'</span></td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">Departure time from Starting Point :</td>';
    this.mailBody +='<td style="padding:5px 10px;border-bottom:1px solid black"><span>'+this.invoiceModel.pickuptime +'</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr style="border:1px solid black;padding:5px 10px">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">Cab Type :</td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px"><span>'+this.invoiceModel.carType +'</span></td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px 10px">No of Passangers :</td>';
    this.mailBody +='<td style="padding:5px 10px;border-bottom:1px solid black"><span>'+this.invoiceModel.passangers +'</span></td>';
    this.mailBody +=' </tr>';
    this.mailBody +='</tbody>';
    this.mailBody +=' </table>';
    this.mailBody +='</td>';
    this.mailBody +=' </tr>';
    this.mailBody +='<tr>';
    this.mailBody +='<td colspan="3"><span style="font-weight:bold;padding-left:3px">Passengers Information</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr>';
    this.mailBody +='<td colspan="3">';
    this.mailBody +='<table style="width:100%;border-spacing:0;border:1px solid black;font-size:12px">';
    this.mailBody +=' <tbody>';
    this.mailBody +='<tr style="border:1px solid black;font-weight:bold">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px">SR No.</td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px">Name</td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px">MobileNo.</td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px">Email ID</td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px">Booking Status</td>';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:5px">Waiting List No</td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr style="border:1px solid black">';
    this.mailBody +=' <td style="border-right:1px solid black;padding:3px;text-align:center">1</td>';
    this.mailBody +='<td style="border-right:1px solid black;padding:3px;text-align:center">'+this.invoiceModel.fullName +'</td>';
    this.mailBody +='<td style="border-right:1px solid black;padding:3px;text-align:center">'+this.invoiceModel.mobnumber +'</td>';
    this.mailBody +='<td style="border-right:1px solid black;padding:3px;text-align:center"><a href="mailto:'+this.invoiceModel.email+'" target="_blank">'+this.invoiceModel.email+'</a>';
    this.mailBody +='<td style="border-right:1px solid black;padding:3px;text-align:center">'+this.invoiceModel.paymentStatus +'</td>';
    this.mailBody +='<td style="border-right:1px solid black;padding:3px;text-align:center">'+this.invoiceModel.waiting +'</td>';
    this.mailBody +='</tr>';
    this.mailBody +='</tbody>';
    this.mailBody +=' </table>';
    this.mailBody +='</td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr>';
    this.mailBody +='<td colspan="3"><span style="font-weight:bold;padding-left:3px">Total Fare Details</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr>';
    this.mailBody +='<td colspan="3">';
    this.mailBody +='<table style="width:100%;border-spacing:0;border:1px solid black;font-size:12px">';
    this.mailBody +='<tbody>';
    this.mailBody +='<tr style="border:1px solid black;padding:5px">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;width:30%;padding:10px">Pickup + Drop in Kms = Total Kms</td>';
    this.mailBody +='<td style="text-align:right;padding:10px;border-bottom:1px solid black"><span>'+this.invoiceModel.totalKm +'</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr style="border:1px solid black;padding:5px">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;width:30%;padding:10px">Total KMs * Rate Per KMs = Basic Fare</td>';
    this.mailBody +='<td style="text-align:right;padding:10px;border-bottom:1px solid black"><span>'+this.invoiceModel.basicFire +'</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr style="border:1px solid black;padding:5px">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:10px">Reservation Charge :</td>';
    this.mailBody +='<td style="text-align:right;padding:10px;border-bottom:1px solid black"><span>'+this.invoiceModel.reservCharge +'</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr style="border:1px solid black;padding:5px">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:10px">GST :</td>';
    this.mailBody +='<td style="text-align:right;padding:10px;border-bottom:1px solid black"><span>'+this.invoiceModel.GST +'</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr style="border:1px solid black;padding:5px">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:10px">Total Chargeable Amount:</td>';
    this.mailBody +='<td style="text-align:right;padding:10px;border-bottom:1px solid black"><span>'+this.invoiceModel.chargeAmnt +'</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr style="border:1px solid black;padding:5px">';
    this.mailBody +='<td style="border-right:1px solid black;border-bottom:1px solid black;padding:10px">Total Chargeable Amount - Paid Amount = Pending Amount:</td>';
    this.mailBody +='<td style="text-align:right;padding:10px;border-bottom:1px solid black"><span>'+this.invoiceModel.pendingAmnt +'</span></td>';
    this.mailBody +='</tr>';
    this.mailBody +='</tbody>';
    this.mailBody +='</table>';
    this.mailBody +='</td>';
    this.mailBody +='</tr>';
    this.mailBody +='<tr>';
    this.mailBody +='<td style="font-weight:bold;font-size:11px" colspan="3">';
    this.mailBody +='<div style="margin-left:2px">Terms &amp; Conditions:<br>';
    this.mailBody +='<div style="margin-left:15px">';
    this.mailBody +='<ul style="list-style:disc;margin-left:0;padding-left:0">';
    this.mailBody +='<li>This E-Ticket is not transferable. This E-Ticket is valid only for the details specified above. The passenger having this E-Ticket required to carry print out of this E-Ticket or to show the soft copy of E-Ticket or E-Ticket SMS sent by 9 CAR CLUB TOURS AND TRVELS/AGENT on his Mobile, Tab , Laptop, etc. Along with Photo ID Card in original like Voter ID, Pan Card, Adhar Card, Driving License, Passport etc</li>';
    this.mailBody +='<li>Corporation reserves the rights to change/cancel the CAB service mentioned in the E-Ticket.</li>';
    this.mailBody +='<li>Passenger will have to pay the fare difference if any in case of Revision of fare or Change of Service.</li>';
    this.mailBody +='<li>';
    this.mailBody +='<div>Cancellation Rules &amp; Refund Procedure for E-Tickets : E-Ticket cancellation is permitted through 9 Car Club Tours And Travels site(<a href="http://9carclubtoursandtravels.com" target="_blank">www.9carclubtoursandtravels.com</a>). Cancellation is allowed before 4 hours of scheduled departure time. In case, if passenger is absent for journey, no refund will be given to the passenger. Following cancellation charges are applicable.<br> I) 10% ticket fare will get deducted if the ticket is cancelled 24 hrs. before the departure time.<br> II) 25% ticket fare will get deducted if the ticket is cancelled 12 hrs. before the departure time.<br> III) 50% ticket fare will get deducted if the ticket is cancelled 4 hrs. before the departure time.<br> Reservation charges and convenience charges including GST charge are not refundable.</div>';
    this.mailBody +='</li>';
    this.mailBody +='</ul>';
    this.mailBody +='</div>';
    this.mailBody +='</div>';
    this.mailBody +='<div style="text-align:center;margin-bottom:10px">';
    this.mailBody +='<div style="margin-bottom:2px">Wish You Happy Journey</div>';
    this.mailBody +='<div style="margin-bottom:2px">For more detail visit us @ <a href="http://9carclubtoursandtravels.com" target="_blank">www.9carclubtoursandtravels.com</a></div>';
    this.mailBody +='<div style="margin-bottom:2px">Send your support emails to: <a href="mailto:contact@9carclubtoursandtravels.com" target="_blank">contact@9carclubtoursandtravels.com</a></div>';
    this.mailBody +='<div>Powered by Mr Nilesh Markad Patil</div>';
    this.mailBody +='</div>';
    this.mailBody +='</td>';
    this.mailBody +='</tr>';
    this.mailBody +='</tbody>';
    this.mailBody +='</table>';


    this.mailBody += "</body></html>";



    formData.append('body', this.mailBody);

    // if(this.invoiceModel.GST == null || this.invoiceModel.fullName == null){
    //   this.invoiceModel.fullName =  "N/A";
    //   this.invoiceModel.GST = "N/A";
    //   this.invoiceModel.chargeAmnt = "N/A";
    //   this.invoiceModel.TripNumber = "N/A";
    //   this.invoiceModel.passangers = "N/A";
    //   this.invoiceModel.paymentStatus = "N/A";
    //   this.invoiceModel.pendingAmnt = "N/A";
    //   this.invoiceModel.mobnumber = "N/A";
    // }
    this.httpService.postMailRequest("mail_send.php", formData).subscribe((data: any) => {
      if (data) { 
        // alert(); 
        this.invoiceModel = new Invocie();
        // this.invoiceForm.reset();
        // location.reload();
      }
      else { }
      this.invoiceForm.reset();
      location.reload();
    })
  }

}
