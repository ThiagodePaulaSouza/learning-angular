import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  // por enquanto vou deixar assim pq ta dando mt conflito string null etc
  id: any;
  request!: RequestUpdate;

  // pra recuperar o id da url usa o activatedroute
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe((res) => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: '',
      };
    });
  }

  update() {
    this.userService.updateUser(this.id, this.request).subscribe( res => {
      alert(`
      Nome: ${res.name}
      Job: ${res.job}
      Atualizado: ${res.updatedAt}
      `)
    })
  }
}
