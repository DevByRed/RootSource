export type InternalRole =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "EDITOR"
  | "MARKETING"
  | "RECRUITER"
  | "SUPPORT";

export interface InternalUserDTO {
  id: string; // Identifiant unique de l'utilisateur
  firstName: string; // Prénom de l'utilisateur
  lastName: string; // Nom de famille de l'utilisateur
  email: string; // Adresse e-mail de l'utilisateur
  phoneNumber: string; // Numéro de téléphone de l'utilisateur
  role: InternalRole; // Rôle de l'utilisateur dans le système
  createdAt: string; // Date de création du compte
  updatedAt?: string; // Date de dernière modification
}
