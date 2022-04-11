import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  subs = new Subscription();

  constructor(private dragulaService: DragulaService) {
    this.subs.add(dragulaService.dropModel('FrontEnd')
      .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
        console.log('dropModel:');
        console.log(el);
        console.log(source);
        console.log(target);
        console.log(sourceModel);
        console.log(targetModel);
        console.log(item);
      })
    );
    // this.subs.add(dragulaService.removeModel('FrontEnd')
    //   .subscribe(({ el, source, item, sourceModel }) => {
    //     console.log('removeModel:');
    //     console.log(el);
    //     console.log(source);
    //     console.log(sourceModel);
    //     console.log(item);
    //   })
    // );

  }

  title = 'DragAndDrop';

  technologies = ['Angular', 'React', 'Vue', 'TypeScript', 'JavaScript', 'BootStrap', 'SCSS', 'Git', 'WebPack', 'Gulp'];
  stTechAvailable = ['HTML', 'CSS'];

  report() {
    console.log(this.stTechAvailable);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
