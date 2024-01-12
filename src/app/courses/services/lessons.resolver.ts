import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { LessonSummary } from "../model/lesson-summary";
import { Injectable } from "@angular/core";

@Injectable()
export class LessonsResolver implements Resolve<LessonSummary[]>{

    constructor(private coursesService: CoursesService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> {
        
        const courseUrl = route.paramMap.get("courseUrl");
        
        return this.coursesService.loadAllCourseLessonsSummary(courseUrl);

    }
}