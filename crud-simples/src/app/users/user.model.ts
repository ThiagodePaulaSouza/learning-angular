export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface ResponseUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

// Post
export interface RequestCreate {
  name: string;
  job: string;
}

export interface ResponseCreate {
  name: string;
  job: string;
  id: string;
  createdAt: Date;
}

// GetUser
export interface ResponseUser {
  data: User
}

// Update
export interface RequestUpdate {
  name: string;
  job: string;
}

export interface ResponseUpdate {
  name: string;
  job: string;
  updatedAt: Date;
}
