import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>
      this.service.getById(+params.get('id'))
        .subscribe(user => {
          this.user = user
        })
    );
  }

}
