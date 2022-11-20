export interface ISendEmailResponse{
  destinationName: string;
  destinationAddress: string;
  dueDate: string;
  subject: string;
  body: string;
  deletedAt?: any;
  id: string;
  status: string;
  criatedAt: string;
  updatedAt: string;

}