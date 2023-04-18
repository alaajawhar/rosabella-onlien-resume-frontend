import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Backend} from "../../services/backend";
import {CryptoUtil} from "../../services/encryption";
import {Router} from "@angular/router";
import {ContactMeRequest} from "../../services/model/contact.me";

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  crypto = require("crypto-js");

  contactMeRequest: ContactMeRequest = {
    email: "", message: "", name: "", subject: "no subject"
  };

  constructor(private backend: Backend, private cryptoUtil: CryptoUtil, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formDetails: NgForm) {
    this.cryptoUtil.generateRequestKey().then(res => { //
      this.backend.contactMeSubmit(this.contactMeRequest, res).subscribe(res => {
        this.router.navigate(['/thank-you']);
      });
    });
  }

}
