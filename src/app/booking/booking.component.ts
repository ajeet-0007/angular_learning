import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  get guests() {return this.bookingForm.get('guests') as FormArray;}
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: true }),
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guestAddress: [''],
      guestCity: [''],
      guestState: [''],
      guestCountry: [''],
      guestZipCode: [''],
      guests: this.fb.array([this.fb.group({ guestName: [''], age: [''] })]),
    });
  }
  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }

  addGuest(){
    this.guests.push(this.fb.group({ guestName: [''], age: [''] }));
  }

  addPassport(){
    this.bookingForm.addControl('passport', new FormControl(''))
  }

  deletePassport(){
    if(this.bookingForm.get("passport")){
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number){
    this.guests.removeAt(i)
  }
}
