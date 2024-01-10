import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";
import { Observable } from "rxjs";

@Injectable()
export class CourseResolver implements Resolve<Course>{

    constructor(private coursesService: CoursesService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course | Observable<Course> | Promise<Course> {
        
        const courseUrl = route.paramMap.get("courseUrl");

        return this.coursesService.loadCourseByUrl(courseUrl);

    }

}