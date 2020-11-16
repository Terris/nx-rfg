import { db } from '../../lib/firebase/admin';

export const users = async () => {
  const users = await db
    .collection('users')
    .get()
    .then((res) => res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    .catch((error) => error);
  return users;
};
