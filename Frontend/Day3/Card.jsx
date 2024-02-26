// import React from 'react';
import '../assets/css/Card.css';

import { Link } from 'react-router-dom';
import { Card , CardMedia , CardContent , CardActions , Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Carde = () => {
  return (
    <div className='main'>
        <div className="row">
              <div className='column'>
                <Card sx={{ maxWidth: 345, height:380   }}>
                <CardMedia sx={{ height: 220 }} image="https://res.cloudinary.com/dobqwdsoy/image/upload/v1708671231/1691239134865_cbdunm.jpg" title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Data Science</Typography>
                        <Typography variant="body2" color="text.secondary">
                         Data Science. Study programs in data science
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to='/col'>Learn More</Link></Button>
                    </CardActions>
                </Card>
                </div>
              <div className='column'>
              <Card sx={{ maxWidth: 345, height:380   }}>
                <CardMedia sx={{ height: 220 }} image="https://res.cloudinary.com/dobqwdsoy/image/upload/v1708671505/images_wux4qb.jpg
                
                " title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Cyber Security</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lean Cyber Security
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to='/col'>Learn More</Link></Button>
                    </CardActions>
                </Card>
                
                </div>
              <div className='column'>
                <Card sx={{ maxWidth: 345, height:380  }}>
                <CardMedia sx={{ height: 220 }} image="https://res.cloudinary.com/dobqwdsoy/image/upload/v1708671784/images_j7clx8.png" title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Block chain</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Learn all about block Chain
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to='/col'>Learn More</Link></Button>
                    </CardActions>
                </Card>
                </div>
                </div>
                </div>
  );
};

export default Carde;
