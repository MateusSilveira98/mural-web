import { Component, OnInit } from '@angular/core';
// import { Apollo } from 'apollo-angular';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';

// import gql from 'graphql-tag';

// import { Course, Query } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // courses: Observable<Course[]>;
  // constructor(private apollo: Apollo) {
  // }
  // ngOnInit() {
  //   this.courses = this.apollo.watchQuery<Query>({
  //     query: gql`
  //       query allCourses {
  //         allCourses {
  //           id
  //           title
  //           author
  //           description
  //           topic
  //           url
  //         }
  //       }
  //     `
  //   }).valueChanges.pipe(
  //     map(result => {
  //       console.log(result);
  //       return result.data.allCourses;
  //     })
  //   );
  // }
}
