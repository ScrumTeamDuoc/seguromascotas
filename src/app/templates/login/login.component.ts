import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {

    let parsedUserData = this.userForm.value
    console.log(parsedUserData)
    parsedUserData.password = Md5.hashStr(`${parsedUserData.password}`)
    console.log(parsedUserData.password)
    this.auth.login(this.userForm.value).subscribe((res: any) => {
      if (res !== 'No user matches the provided information') {
        if (this.auth.setToken(res['jwtToken'])) {
          this.router.navigate(['index'])
        } else {
          console.log('cant log in')
        }
      } else {
        console.log('info error')
      }
    });
    //console.log(parsedUserData)
  }
}
