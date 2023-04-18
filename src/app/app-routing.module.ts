import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThankYouComponent} from "./thank-you/thank-you.component";
import {HomeScreenComponent} from "./home-screen/home-screen.component";

const routes: Routes = [
  { path: 'thank-you', component: ThankYouComponent },
  { path: '', component: HomeScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
