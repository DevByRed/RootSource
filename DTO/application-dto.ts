import { CandidatDto } from "./candidat-dto";
import { JobDto } from "./jobs-dto";
import { InternalUserDTO } from "./InternalUser-dto";

export interface ApplicationDto {
  // Représente une candidature à une offre d'emploi
  id: string;

  candidateId: string;
  candidate?: CandidatDto; // Objet complet du candidat (optionnel)

  jobId: string;
  job?: JobDto; // Objet complet de l'offre d'emploi (optionnel)

  status: ApplicationStatus; // Statut de la candidature
  appliedAt: string; // Date de candidature
  interviewDate?: string; // Date de l'entretien (optionnel)
  notes?: string; // Notes supplémentaires (optionnel)

  createdById: string; // ID de l'utilisateur interne qui a créé la candidature
  createdBy?: InternalUserDTO; // Objet complet de l'utilisateur interne (optionnel)
  updatedAt?: string; // Date de dernière mise à jour (optionnel)
}

export enum ApplicationStatus {
  PENDING = "PENDING", // En attente
  IN_REVIEW = "IN_REVIEW", // En cours d'examen
  INTERVIEW = "INTERVIEW", // Entretien planifié
  ACCEPTED = "ACCEPTED", // Accepté
  REJECTED = "REJECTED", // Rejeté
}
