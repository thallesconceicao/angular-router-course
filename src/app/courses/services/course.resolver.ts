import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from "@angular/router";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";
import { Observable } from "rxjs";

export const CourseResolver: ResolveFn<Course> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> => {
 
    const coursesService = inject(CoursesService);

    const courseUrl = route.paramMap.get("courseUrl");

    return coursesService.loadCourseByUrl(courseUrl);   

}