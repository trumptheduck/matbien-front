import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderstatus'
})
export class OrderstatusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch(value) {
      case -2: return "Thất bại"
      case -1: return "Đã hủy"
      case 0: return "Chờ phản hồi"
      case 1: return "Đã xác minh"
      case 2: return "Đang vận chuyển"
      case 3: return "Thành công"
      default: return "Không xác định"
      }
    }
  }

