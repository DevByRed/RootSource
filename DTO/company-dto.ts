export interface CompanyDTO {
  // Représente une entreprise dans le système avec qui on peut être en partenariat
  id: string;
  name: string;
  vatNumber?: string; // Numéro de TVA (optionnel)
  sector?: string; // Secteur d'activité (optionnel)

  address: Address; // Adresse de l'entreprise
  contactPerson: ContactPerson; // Personne de contact pour l'entreprise

  email: string;
  phone?: string;
  website?: string;

  isActive: boolean; // Indique si l'entreprise est active ou non
  createdAt: string; // Date de création de l'entreprise dans le système
}
export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}
export interface ContactPerson {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}
