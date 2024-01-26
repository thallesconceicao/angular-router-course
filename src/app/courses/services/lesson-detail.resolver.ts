import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./courses.service";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";
import { inject } from "@angular/core";

export const LessonDetailResolver: ResolveFn<LessonDetail> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail> => {

    const coursesService = inject(CoursesService);

    const courseUrl = route.parent.paramMap.get("courseUrl");
    const lessonSeqNo = route.paramMap.get("lessonSeqNo");

    return coursesService.loadLessonDetail(courseUrl, lessonSeqNo);

}