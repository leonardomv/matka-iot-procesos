import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";

/**
 * @title Stepper with customized states
 */
@Component({
  selector: "stepper-states-example",
  templateUrl: "stepper-states-example.html",
  styleUrls: ["stepper-states-example.css"],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class StepperStatesExample implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  temporizador: number = 45;

  constructor(private _formBuilder: FormBuilder) {}

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() =>
      console.log(this.temporizador)
    );
  }

  ngOnInit() {
    this.delay(500).then(any => {
      this.temporizador--;
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
