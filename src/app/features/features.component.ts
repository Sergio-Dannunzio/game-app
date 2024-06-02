import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit {

  ngOnInit(): void {
  }
  
  displayDescription(int: any) {
     if (int==1) {
      var desc = document.getElementById("desc1");
      var ft = document.getElementById("ft1"); 
      if (desc?.className=="noShow") {
        ft?.classList.add("feature2");
        desc.classList.remove("noShow");
      }else{
        ft?.classList.remove("feature2");
        desc?.classList.add("noShow")
      }
     }else if(int==2){
      var desc = document.getElementById("desc2");
      var ft = document.getElementById("ft2"); 
      if (desc?.className=="noShow") {
        ft?.classList.add("feature2");
        desc.classList.remove("noShow");
      }else{
        ft?.classList.remove("feature2");
        desc?.classList.add("noShow")
      }
     }else if (int==3) {
      var desc = document.getElementById("desc3");
      var ft = document.getElementById("ft3"); 
      if (desc?.className=="noShow") {
        ft?.classList.add("feature2");
        desc.classList.remove("noShow");
      }else{
        ft?.classList.remove("feature2");
        desc?.classList.add("noShow")
      }
     }else if(int==4){
      var desc = document.getElementById("desc4");
      var ft = document.getElementById("ft4"); 
      if (desc?.className=="noShow") {
        ft?.classList.add("feature2");
        desc.classList.remove("noShow");
      }else{
        ft?.classList.remove("feature2");
        desc?.classList.add("noShow")
      }
     }
  }
}
