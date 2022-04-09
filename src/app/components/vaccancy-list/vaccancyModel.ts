import {TechStack} from "./techStackModel,ts";

export class Vacancy {

  public jobId: number;
  public name: string;
  public description: string;
  public startingDate: Date;
  public image: string;
  public location: string;
  public jobStatus: string;
  public salaryRange : number;
  public jobDescription: TechStack [];

  public constructor(jobId: number, name: string, description: string,
                     startingDate: Date, location: string, jobStatus: string,
                     salaryRange?: number, imagePath?: string, jobDescription?: TechStack[])
  {
    this.jobId = jobId;
    this.name = name;
    this.description = description;
    this.startingDate = startingDate;
    this.location = location;
    this.jobStatus = jobStatus;
    this.salaryRange = salaryRange;
    this.image = imagePath;
    this.jobDescription = jobDescription;

  }
}
