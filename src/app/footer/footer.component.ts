import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  userForm = new FormGroup({
    email: new FormControl('')
  })
  constructor(private auth: AuthService,) {

    console.log('FooterComponent cargado');
  }

  ngOnInit(): void {
  }

  sendSubscribe() {
    let parsedUserData = this.userForm.value
    this.auth.sendNotification(parsedUserData).subscribe((res: any) => {
      console.log(res)
    });
  }
}
