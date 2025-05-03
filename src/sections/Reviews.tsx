"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Reviews() {
  const [newReview, setNewReview] = useState({ name: "", comment: "", rating: 5 });
  const [reviews, setReviews] = useState([
    // Add some initial reviews if you want
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, { ...newReview, id: Date.now() }]);
    setNewReview({ name: "", comment: "", rating: 5 });
  };

  return (
    <section id="reviews" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Reviews</h2>
        
        {/* Review Form */}
        <form onSubmit={handleSubmit} className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium mb-2">Rating</label>
            <select
              id="rating"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium mb-2">Comment</label>
            <textarea
              id="comment"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Submit Review
          </button>
        </form>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review: any) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{review.name}</h3>
                <div className="flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 