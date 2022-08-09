import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {
  transform(tasks: any[], sortedBy: string): any {
      console.log('sortedBy', sortedBy);

      return tasks.sort((a, b) => {return b[sortedBy] - a[sortedBy]});
  }
}
