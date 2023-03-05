import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {
  fetchPosts,
  selectPosts,
  deletePost,
  setLastRequestedPage,
  selectLastRequestedPage,
  selectError,
  selectIsLoading,
} from '../../state/features/postsSlice';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { MainContainer } from '../../components/MainContainer';
import { setNotificationInfo } from '../../state/features/globalSlice';
import { OutlinedButton } from '../../components/Buttons/OutlinedButton';
import './PostsPage.css';

export const PostsPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);
  const lastRequestedPage = useAppSelector(selectLastRequestedPage);
  const navigate = useNavigate();

  useEffect(() => {
    if (posts.length === 0) {
      const firstPage = 1;

      dispatch(fetchPosts(firstPage));
      dispatch(setLastRequestedPage(firstPage));
    }
  }, []);

  const deletePostById = (postId: number) => {
    dispatch(deletePost(postId));
  };

  const handleUploadMore = () => {
    if (isLoading) {
      return;
    }

    const nextPage = lastRequestedPage + 1;

    dispatch(fetchPosts(nextPage))
      .unwrap()
      .then(receivedPosts => {
        if (receivedPosts.length === 0) {
          dispatch(setNotificationInfo({
            text: 'There are no more posts',
          }));
        } else if (receivedPosts.length > 0) {
          dispatch(setLastRequestedPage(nextPage));
        }
      });
  };

  return (
    <MainContainer>
      {error ? (
        <div>
          <h1>Failed to load posts, please try again later!</h1>
          <OutlinedButton
            onClick={() => navigate('/')}
            text="Back to home"
          />
        </div>
      ) : (
        <>
          <OutlinedButton
            onClick={handleUploadMore}
            text="Upload more"
          />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {posts.map((post) => (
              <Grid item xs={4} sm={4} md={4} key={post.id}>
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                    height: '100%',
                    padding: '15px',
                    borderRadius: '15px',
                  }}
                >
                  <h3>{post.title}</h3>
                  <p className="post-description">{post.body}</p>
                  <Button
                    onClick={() => deletePostById(post.id)}
                    startIcon={<DeleteIcon />}
                    variant="contained"
                    sx={{
                      backgroundColor: 'gray',
                    }}
                  >
                    Delete
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </MainContainer>
  );
};
