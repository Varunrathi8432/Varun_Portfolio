import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 150, ellipsis = '...'): string {
    if (!value || value.length <= limit) return value;
    return value.substring(0, limit).trimEnd() + ellipsis;
  }
}
