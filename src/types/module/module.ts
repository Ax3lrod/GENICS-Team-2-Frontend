import { ApiResponse } from '../api';

export type ModuleRequest = {
  id: string;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
};

export type BionixCompetitionResponse = ApiResponse<{
  id: string;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
}>;
