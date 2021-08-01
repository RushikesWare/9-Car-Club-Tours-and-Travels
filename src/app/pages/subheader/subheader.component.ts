import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // $(document).ready(function () {
    //     $("#drop").click(function () {
    //       $(".menu").show();
    //     });
    //     $(".testa").click(function () {
    //       $(".menu").hide();
    //     });
    // });

  }

}


