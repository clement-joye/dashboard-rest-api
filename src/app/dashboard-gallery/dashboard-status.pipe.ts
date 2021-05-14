import { Pipe, PipeTransform } from "@angular/core";
import { faCheck, faTimes, faExclamation, faQuestion, faStop, faPause, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Pipe({name: 'DashboardStatusPipe'})
export class DashboardStatusPipe implements PipeTransform {
  transform(value: string): IconDefinition {

    switch(value) {
      
      case 'success':
      case 'succeeded':
        return faCheck;
          
      case 'failed':
        return faTimes;

      case 'partiallySucceeded':
        return faExclamation;

      case 'notStarted':
        return faPause;
      
      case 'rejected':
        return faStop;
        
      default:
        return faQuestion;
    }
  }
}