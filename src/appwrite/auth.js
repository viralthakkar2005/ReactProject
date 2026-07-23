import { Client, Account, ID } from "appwrite"
import { appwriteUrl, projectId } from "./config/config";

const client = new Client()
    .setProject(projectId) // Your project ID
    .setEndpoint(appwriteUrl);

const account = new Account(client);


const auth={
  client,
  account
}

export {account,ID}