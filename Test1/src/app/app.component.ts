import { Component } from '@angular/core';
import{MainNode}from './main-node'
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  
export class AppComponent {
  
  constructor(){
      
  }

  tree :any =
    {
      //id: 1,
      name: 'Level1 Child',
      children: [{
        //id: 2,
        //parantId:1,
        name: 'Level2 Child',
        children: [{
         // id: 3,
          //parantId:2,
          name: 'Level3 Child',
          children: null
        }, {
          //id: 4,
          //parantId:2,
          name: 'Level3 Child',
          children: null
        }]
      }]
    }
 
  data:MainNode[]=[{
    "id": 1,
    "name": "Level1 Child",
    "child": [{
      
      "id": 2,
      "name": "Level2 Child",
      "child": [{
        "id": 3,
        "name": "Level3 Child",
        "child": []
      }, {

        "id": 4,
        "name": "Level3 Child",
        "child": []
      }]
    }]
  }, {

    "id": 5,
    "name": "Level1 Child",
    "child": [{
      "id": 6,
      "name": "Level2 Child",
      "child": [{
        "id": 7,
        "name": "Level3 Child",
        "child": [{
          "id": 8,
          "name": "Level4 Child",
          "child": [{
            "id": 9,
            "name": "Level5 Child",
            "child": []
          }]
        }]
      }, {
        "id": 10,
        "name": "Level3 Child",
        "child": []
      }]
    }]
  }];
getData=this.convertTreeToList(this.tree)
convertTreeToList(root:any){
  var stack = [], array = [], hashMap = {};
  stack.push(root);
  
  while(stack.length !== 0) {
      var node = stack.pop();
      if(node.children === null) {
          this.visitNode(node, hashMap, array);
      } else {
          for(var i = node.children.length - 1; i >= 0; i--) {
              stack.push(node.children[i]);
          }
      }
  }

  return array;
}
visitNode(node:any, hashMap:any, array:any) {
  if(!hashMap[node.data]) {
      hashMap[node.data] = true;
      array.push(node);
  }
}
runMeth(){
  console.log(this.getData)
  for(var i=0;i<this.getData.length;i++){
    console.log(this.getData[i]);
  }
 }
}
 
