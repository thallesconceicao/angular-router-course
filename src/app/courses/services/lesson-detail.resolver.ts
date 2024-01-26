import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./courses.service";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail>{

    constructor(private courseService: CoursesService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail>{

        const courseUrl = route.parent.paramMap.get("courseUrl");
        const lessonSeqNo = route.paramMap.get("lessonSeqNo");

        return this.courseService.loadLessonDetail(courseUrl, lessonSeqNo);

    }

}