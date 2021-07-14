import React from 'react';

const Question = ({elemento}) => {
  return (
    <div>
          <p>{elemento.question_type}</p>
          core-availability-1
          <p>Title:{elemento.title}</p>
          <p>
            Bucket: {elemento.question_config.bucket}
          </p>
          <p>
            Attribute: {elemento.question_config.attribute_name}
          </p>

          <button>
            Edit
          </button>
          <button>
            Delete
          </button>
    </div>
  );
};

export default Question;