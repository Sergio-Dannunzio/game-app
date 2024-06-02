import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {

  ngOnInit(): void {
  }
  
  displayFaqDescription(int: any) {
     if (int==1) {
      var desc = document.getElementById("faqdesc1");
      var ft = document.getElementById("faqft1"); 
      if (desc?.className=="noShow") {
        ft?.classList.add("feature2");
        desc.classList.remove("noShow");
      }else{
        ft?.classList.remove("feature2");
        desc?.classList.add("noShow")
      }
     }else if(int==2){
      var desc = document.getElementById("faqdesc2");
      var ft = document.getElementById("faqft2"); 
      if (desc?.className=="noShow") {
        ft?.classList.add("feature2");
        desc.classList.remove("noShow");
      }else{
        ft?.classList.remove("feature2");
        desc?.classList.add("noShow")
      }
     }else if (int==3) {
      var desc = document.getElementById("faqdesc3");
      var ft = document.getElementById("faqft3"); 
      if (desc?.className=="noShow") {
        ft?.classList.add("feature2");
        desc.classList.remove("noShow");
      }else{
        ft?.classList.remove("feature2");
        desc?.classList.add("noShow")
      }
     }else if(int==4){
      var desc = document.getElementById("faqdesc4");
      var ft = document.getElementById("faqft4"); 
      if (desc?.className=="noShow") {
        ft?.classList.add("feature2");
        desc.classList.remove("noShow");
      }else{
        ft?.classList.remove("feature2");
        desc?.classList.add("noShow")
      }
     }else if(int==5){
      var desc = document.getElementById("faqdesc5");
      var ft = document.getElementById("faqft5"); 
      if (desc?.className=="noShow") {
        ft?.classList.add("feature2");
        desc.classList.remove("noShow");
      }else{
        ft?.classList.remove("feature2");
        desc?.classList.add("noShow")
      }
     }else if(int==6){
      var desc = document.getElementById("faqdesc6");
      var ft = document.getElementById("faqft6"); 
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
