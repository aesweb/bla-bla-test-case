import React from 'react';

const CommentSection = ({ comment }) => {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-lg border p-2 my-4 mx-6 ">
        <div className="flex flex-col">
          <div className="border rounded-md p-3 ml-3 my-3">
            <div className="flex gap-3 items-center">
              <h3 className="font-bold">{comment.name}</h3>
            </div>
            <p className="text-gray-600 mt-2">{comment.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
