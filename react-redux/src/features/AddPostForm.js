import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

import { postAdded } from './posts/postsSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUsersId] = useState('');

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };
  const onUserIdChange = (e) => {
    setUsersId(e.target.value);
  };

  const onSavePostClicked = (e) => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }
    setTitle('');
    setContent('');
  };

  const canSave = Boolean(title && content && userId);vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title :</label>
        <input
          type='text'
          id='postTitle'
          onChange={onTitleChange}
          value={title}
          name='postTitle'
        />

        <label htmlFor='postAuthor'>Author:</label>
        <select onChange={onUserIdChange} value={userId} name='postAuthor'>
          <option value=''></option>
          {usersOptions}
        </select>

        <label htmlFor='postContent'>Post Content :</label>
        <textarea
          id='postContent'
          onChange={onContentChange}
          value={content}
          name='postContent'
        />
        <button type='button' onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
