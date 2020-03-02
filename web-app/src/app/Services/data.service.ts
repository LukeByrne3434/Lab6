import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


GetStudentData():Observable<any>{
  return this.http.get('https://jsonblob.com/api/284434e2-5ca1-11ea-b3a3-e50a69bd681a');
  
}
GetWeatherData():Observable<any>{
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  
}
}