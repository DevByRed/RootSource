export interface ApplicationDto {
  id: string;
  candidateId: string;
  jobId: string;
  status: ApplicationStatus;
  appliedAt: string;
  interviewDate?: string;
  notes?: string;
}

export enum ApplicationStatus {
  PENDING = "PENDING",
  IN_REVIEW = "IN_REVIEW",
  INTERVIEW = "INTERVIEW",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

