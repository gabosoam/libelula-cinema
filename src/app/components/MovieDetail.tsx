import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment'; // Asegúrate de haber instalado moment en tu proyecto
import { getCommentsByMovieId, saveComment } from '../../../firebase';
import { UserContext } from '../context/userContext/UserContext';

const MovieDetail = ({ movie }: any) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { isLogged, user } = useContext<any>(UserContext);

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    if (newComment.trim() !== '') {
      await saveComment(movie.id, user.email, newComment.trim());
      setNewComment('');
      fetchComments();
    }
  };

  useEffect(() => {

  
    fetchComments();
  }, [movie.id]);

  const fetchComments = async () => {
    const fetchedComments = await getCommentsByMovieId(movie.id);
    setComments(fetchedComments);
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-md"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg text-gray-400 mb-4">{movie.overview}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-bold">Genres: </span>
              <span>{movie.genres.map((genre: any) => genre.name).join(', ')}</span>
            </div>
            <div>
              <span className="font-bold">Duration: </span>
              <span>{movie.runtime} minutos</span>
            </div>
            <div>
              <span className="font-bold">Release date: </span>
              <span>{movie.release_date}</span>
            </div>
            <div>
              <span className="font-bold">Voting: </span>
              <span>{movie.vote_average.toFixed(1)} / 10 ({movie.vote_count} votes)</span>
            </div>
            <div>
              <span className="font-bold">Country of origin: </span>
              <span>{movie.production_countries[0].name}</span>
            </div>
            <div>
              <span className="font-bold">Production Companies: </span>
              <span>{movie.production_companies.map((company: any) => company.name).join(', ')}</span>
            </div>
            <div>
              <span className="font-bold">Revenue: </span>
              <span>${movie.revenue.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de comentarios */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-md">
              <p className="text-white">{comment.message}</p>
              <span className="text-sm text-gray-400">
                {comment.user} - {moment(comment.date).format('DD/MM/YYYY HH:mm')}
              </span>
            </div>
          ))}
        </div>
        {isLogged ? (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Write your comment..."
              value={newComment}
              onChange={handleCommentChange}
              maxLength={50}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
            />
            <button
              onClick={handleCommentSubmit}
              className="mt-2 bg-gray-800 text-white text-lg font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 focus:outline-none"
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-gray-400">
              You need to <Link href="/login" className="text-blue-500 hover:underline">log in</Link> or <Link href="/register" className="text-blue-500 hover:underline">register</Link> to leave a comment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
