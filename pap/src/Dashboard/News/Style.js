import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    background:'#bbb',
  },
  card: {
    margin: 'auto',
    maxWidth: '1100px',
    marginBottom: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default useStyles;