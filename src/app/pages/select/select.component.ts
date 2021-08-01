import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      const minus = $('.minus1');
      const plus = $('.plus1');
      const input = $('.quantity__input1');

      minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 1) {
          value--;
        }
        input.val(value);
      });

      plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
      })
    });


    $(document).ready(function ($) {
      $('.card-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 400,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    });

  
  }

}
