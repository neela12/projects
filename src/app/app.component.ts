import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){

  }
  
   Item:any ; 
   Title:string;
   searchTerm :any;
 data = [{ title: 'New Note', content : '3:20 PM  No addtional comment', isSelected:'false'},{ title: 'One', content : '3:20 PM  No addtional comment', isSelected:'false'},{ title: 'Two', content : '3:20 PM  No addtional comment', isSelected:'false'},{ title: 'Three', content : '3:20 PM  No addtional comment', isSelected:'false'},{ title: 'Four', content : '3:20 PM  No addtional comment', isSelected:'false'},{ title: 'Five', content : '3:20 PM  No addtional comment', isSelected:'false'}];

 clicked(item){
  item.isSelected = !item.isSelected;  
 
  this.Item = item ;

 }
 deleteList(){
   
  this.data.splice(this.Item , 1);  
 }

 editList(){
  
  this.data.push(this.Item);
  let obj = { title: 'New Note', content : '3:20 PM  No addtional comment', isSelected:'false'};
  this.data.splice(0, 0,obj);
 }


 search(): void {
  let term = this.searchTerm;
  this.data = this.data.filter(function(tag) {
      return tag.title.indexOf(term) >= 0;
  }); 
}
};
