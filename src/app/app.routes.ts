import { Routes } from "@angular/router";
import {EMPTY_PATH, VIEW_PATH} from "./crossconcern/utilities/properties/path.property";
import {ViewComponent} from "./ui/view";
import {VIEW_ROUTES} from "./ui/view/view.routes";

// TODO: Add no content
export const ROUTES: Routes = [
  { path: EMPTY_PATH, component: ViewComponent, children: VIEW_ROUTES },
  { path: VIEW_PATH, component: ViewComponent, children: VIEW_ROUTES }
];
