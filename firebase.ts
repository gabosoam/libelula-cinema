import { initializeApp } from 'firebase/app';
import { clientConfig } from './config';
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';



export const app = initializeApp(clientConfig);

export const db = getFirestore(app);

// Función para guardar comentarios en Firestore
export const saveComment = async (movieId: string, user: string, message: string) => {
    try {
      const now = new Date();
      const commentData = {
        movieId,
        user,
        message,
        date: now.toISOString(),
      };
      await addDoc(collection(db, 'comments'), commentData);
      console.log('Comentario guardado exitosamente en Firestore!');
    } catch (error) {
      console.error('Error al guardar el comentario en Firestore:', error);
    }
  };

  export const getCommentsByMovieId = async (movieId: string) => {
    const comments = [];
    const q = query(collection(db, 'comments'), where('movieId', '==', movieId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() });
    });
    return comments;
  };
