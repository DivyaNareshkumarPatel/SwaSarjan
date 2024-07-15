import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BlogCard = ({ title, content, image, onDelete }) => {
  return (
    <Card>
      {image && (
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={`http://localhost:8000/${image}`}
          title={title}
        />
      )}
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <IconButton onClick={onDelete} color="secondary">
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
