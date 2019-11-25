import { NgModule } from '@angular/core';
import { SearchPipe } from "./searchpipe";

const classesToInclude = [ SearchPipe ];
@NgModule({
    // imports: [],
    declarations: classesToInclude,
    exports: classesToInclude
})
export class PipesModule { }