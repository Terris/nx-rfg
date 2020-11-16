import * as admin from 'firebase-admin';
import serviceAccount from './serviceAccount.credentials.json';
// To generate a private key file for your service account:
// 1. In the Firebase console, open Settings > Service Accounts.
// 2. Click Generate New Private Key, then confirm by clicking Generate Key.
// 3. Store the JSON file in the api `src/lib` directory
// Don't let anyone see it.

export const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://cool-app.firebaseio.com',
});
export const db = firebaseAdmin.firestore();
