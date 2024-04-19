import { Octokit } from "octokit";

export const octokit = new Octokit({ 
    auth: process.env.SNEAKERS_APP_API_KEY
});