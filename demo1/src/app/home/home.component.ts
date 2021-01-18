import {FormsModule} from '@angular/forms'; 
import { Component, OnInit, VERSION } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model:any={};
  name = 'Angular ' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = '';
    constructor() { }

  ngOnInit(): void {
  }
  changeQR(){
    console.log("Welcome"+this.model.title);
    this.value=this.model.title;
  }
  downloadQRCode(){
    const fileNameToDownload = 'image_qrcode';
    const base64Img = document.getElementsByClassName('bshadow')[0].children[0]['src'];
    fetch(base64Img)
      .then(res => res.blob())
      .then((blob) => {
         // IE
         if (window.navigator && window.navigator.msSaveOrOpenBlob){
            window.navigator.msSaveOrOpenBlob(blob,fileNameToDownload);
         } else { // Chrome
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileNameToDownload;
            link.click();
         }
      })
    
  }
}
