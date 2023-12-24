import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';
import moment from 'moment/moment';

type BlogDetailProps = {
  blogDetail: API.Post | undefined;
};
function BlogHeader({ blogDetail }: BlogDetailProps) {
  return (
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      title={<h1 className="text-base font-medium">{blogDetail?.title}</h1>}
      subheader={
        <h1>{moment(blogDetail?.createdAt).format('MMMM Do YYYY')}</h1>
      }
    />
  );
}

export default BlogHeader;
