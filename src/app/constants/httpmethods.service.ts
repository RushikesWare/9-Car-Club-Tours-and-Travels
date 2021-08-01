import { Injectable } from '@angular/core';
import { MainUrl } from './configUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpmethodsService {

  baseUrl = MainUrl.HostUrl;
 // nodeUrl = MainUrl.NodeUrl;
  constructor(private http:HttpClient) { }
  
  postMailRequest(url,formData: any) {
   // const uploadfile: FormData = new FormData();  
   // uploadfile.append('uploadfile', formData);  
    return this.http.post(this.baseUrl+url, formData);
    //return this.http.post(this.baseUrl+url,body)
    }

  getRequest(url){
    //return this.http.get("https://cors-anywhere.herokuapp.com/"+this.baseUrl+url)
  }
}
