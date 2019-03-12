const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const addAuthor = authorID => {
  let authorObject = {
    id: authorID,
    first_name: "Naguib2",
    last_name: "Mahfouz2",
    imageUrl:
      "http://speakingtigerbooks.com/wp-content/uploads/2016/06/naguib-mahfouz-5.jpg",
    books: [
      {
        title: "Palace Walk2",
        color: "red"
      },
      {
        title: "Sugar Street2",
        color: "blue"
      },
      {
        title: "Miramar2",
        color: "grey"
      },
      {
        title: "Respected Sir2",
        color: "blue"
      }
    ]
  };
  return {
    type: ADD_AUTHOR,
    payload: authorObject
  };
};

export const deleteAuthor = authorObj => {
  return {
    type: DELETE_AUTHOR,
    payload: authorObj
  };
};
