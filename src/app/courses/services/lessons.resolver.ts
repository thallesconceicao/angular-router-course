import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { LessonSummary } from "../model/lesson-summary";
import { inject } from "@angular/core";

export const LessonsResolver: ResolveFn<LessonSummary[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> => {

    const coursesService = inject(CoursesService);
        
    const courseUrl = route.paramMap.get("courseUrl");
    
    return coursesService.loadAllCourseLessonsSummary(courseUrl);
    
}