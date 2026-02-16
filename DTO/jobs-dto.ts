import { InternalUserDTO } from "./InternalUser-dto";

export interface JobDto { // Représente une offre d'emploi dans le système
  id: string; // Identifiant unique de l'offre d'emploi
  title: string; // Titre de l'offre d'emploi
  description: string; // Description détaillée de l'offre d'emploi
  employerId: string; // Identifiant de l'employeur (peut être lié à une table d'employeurs)
  location: Location; // Localisation de l'emploi (ex: ville, région)
  contract: Contract; // Détails du contrat (type, salaire, etc.)
  requirements: string[]; // Liste des compétences ou qualifications requises
  experienceLevel: ExperienceLevel; // Niveau d'expérience requis (ex: Junior, Intermédiaire, Senior)
  status: JobStatus; // Statut de l'offre d'emploi (ex: Ouvert, Fermé, En attente)
  createdAt: string; // Date de création de l'offre d'emploi
  createdBy: InternalUserDTO; // Utilisateur interne qui a créé l'offre
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
