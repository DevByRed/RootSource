export interface JobDto {
  id: string;
  title: string;
  description: string;
  employerId: string;
  location: Location;
  contract: Contract;
  requirements: string[];
  experienceLevel: ExperienceLevel;
  status: JobStatus;
  createdAt: string;
}

export interface Location {
  city: string;
}

export interface Contract {
  type: ContractType;
  salaryRange: SalaryRange;
}

export interface SalaryRange {
  min: number;
  max: number;
}

export enum ContractType {
  CDI = "CDI",
  CDD = "CDD",
  FREELANCE = "Freelance",
  INTERIM = "Intérim",
  STAGE = "Stage",
  TEMPS_PARTIEL = "Temps partiel",
}

export enum ExperienceLevel {
  JUNIOR = "Junior",
  INTERMEDIAIRE = "Intermédiaire",
  SENIOR = "Senior",
  EXPERT = "Expert",
}

export enum JobStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  PENDING = "PENDING",
  FILLED = "FILLED",
}
