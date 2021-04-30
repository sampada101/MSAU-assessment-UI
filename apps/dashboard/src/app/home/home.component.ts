import { Component, OnInit } from '@angular/core';
import { UserService, User } from '@workspace/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = [
    
    {icon: "question_answer", title:"Attempt Test", link: '/exam',
    line1: "Attempt tests, and evaluate your results",
    },

    {icon: "work", title:"Projects", link: "/projects",
    line1: "Manage your projects to teach your students",
    },
    
    {icon: "work", title:"Quiz", link: "/quiz",
    line1: "Create & view quizes using created questions",
    },
    
    {icon: "help", title:"Questions", link: "/questions",
    line1: "Add & view questions to create quiz",
  }
  ]

  currUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUserDetails()
      .subscribe(res => {
        this.currUser = res;
      })
  }

  ngOnInit(): void {
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
