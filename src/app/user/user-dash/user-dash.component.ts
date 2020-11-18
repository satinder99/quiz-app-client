import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss']
})
export class UserDashComponent {

  /*upcoming_events={
                courses : ["Python","Ruby","C language","C++ language","Java"],
              }
*/

upcoming_events = [
  {course : "Python",date : "10 Nov 2020", time : "16:00", url :"https://datawider.com/wp-content/uploads/2019/11/How-to-Learn-Python.jpg"},
  {course : "Ruby",date : "11 Nov 2020", time : "12:00",url : "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190902124355/ruby-programming-language.png"},
  {course : "DSA",date : "12 Nov 2020", time : "08:00", url : "https://www.stoodnt.com/blog/wp-content/uploads/2020/06/Best-Online-Courses-Algorithms-Data-Structures.jpg"},
  {course : "JAVASCRIPT",date : "13 Nov 2020", time : "11:00", url : "https://static.frontendmasters.com/assets/courses/2019-04-05-js-recent-parts/thumb@2x.jpg"},
]

user_personal_detail = { name : "satinder", age : 21, contact : 8054567680, email : "abc@gmail.com", rank : 8544, highest_qualification:"Bacholor's of Technology"};

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
          personal : {cols:1, rows : 2},
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
        personal : {cols :4,rows : 1},
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
