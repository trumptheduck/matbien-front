import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../models/order.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpService) { }

  getProvinces(callback: (provinces: Address[])=>any) {
    this.http.get("https://provinces.open-api.vn/api/p/",new HttpParams(),'',true).subscribe({
      next: (data) => {
        callback(data);
      }
    })
  }
  getDistrictsByCode(code: string ,callback: (districts: Address[])=>any) {
    this.http.get("https://provinces.open-api.vn/api/p/"+code+"?depth=2",new HttpParams(),'',true).subscribe({
      next: (data) => {
        callback(data['districts']);
      }
    })
  }
  getWardsByCode(code: string ,callback: (wards: Address[])=>any) {
    this.http.get("https://provinces.open-api.vn/api/d/"+code+"?depth=2",new HttpParams(),'',true).subscribe({
      next: (data) => {
        callback(data['wards']);
      }
    })
  }
}
