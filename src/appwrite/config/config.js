const config = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID, 
  bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export const { 
  appwriteUrl, 
  projectId, 
  databaseId, 
  collectionId,
  bucketId 
} = config;

export default config;