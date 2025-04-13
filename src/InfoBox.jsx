import "./InfoBox.css"
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://media.istockphoto.com/id/1603144296/photo/the-last-light-of-the-sunset.jpg?s=612x612&w=0&k=20&c=flcyECf6D8jzaTiqblvNfPlRN2j_lnoyhdFpCfwPbvE=";
    const COLD_URL="https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?q=80&w=1647&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1456400761117-a768c370cd6d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">
            <h1>Weather Info - {info.weather}</h1>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity> 80? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>{info.city.toUpperCase()}</h1>
        </Typography>
        <Typography variant="body2" component={"span"}sx={{ color: 'text.secondary' }}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.rempMax}&deg;C</p>
          <p>The weather can be describe as <i>{info.weather}</i> and feels like= {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
       
    </Card>
    </div>
        </div>
    )
}