export interface CategoryInput {
    name: string;
    description?: string;
  }
  
  export interface CategoryOutput extends CategoryInput {
    id: string;
    createdAt: Date;
    updatedAt: Date;
  }