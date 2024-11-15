import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Foo} from './foo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo-component.html',
  styleUrls: ['./foo-component.css']
})
export class FooComponent implements OnInit {
  fooData !: Foo[];
  data!: Object;
  loading!: boolean;
  o!: Observable<Object>;
  oFoo !: Observable<Foo[]>;
  constructor(public http: HttpClient) { }

  makeRequest(): void {
    
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    this.o.subscribe(this.getData);
  }

  getData = (d: Object) => {
    this.data = d;
    this.loading = false;
  }

  makeCompactRequest(): void {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeCompactPost(): void {
    this.loading = true;
    this.http
      .post('https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({ 
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeTypedRequest() : void
  {
    
    this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
    this.oFoo.subscribe(data => {this.fooData = data;});
  }

  ngOnInit() {
  }

}
