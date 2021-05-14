import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'DashboardStylePipe'})
export class DashboardStylePipe implements PipeTransform {
  transform(value: string): string {
    
    switch(value) {
      
      case 'success':
      case 'succeeded':
        return 'bg-success text-light';
          
      case 'failed':
        return 'bg-danger text-light';

      case 'partiallySucceeded':
        return 'bg-warning text-dark';

      case 'notStarted':
        return 'bg-dark text-light';
      
      case 'rejected':
        return 'bg-dark text-light';
        
      default:
        return 'bg-dark text-light';
    }
  }
}