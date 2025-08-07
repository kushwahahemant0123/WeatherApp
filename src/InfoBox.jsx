import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
  const HOT_URL = "https://media.istockphoto.com/id/1603144296/photo/the-last-light-of-the-sunset.jpg?s=612x612&w=0&k=20&c=flcyECf6D8jzaTiqblvNfPlRN2j_lnoyhdFpCfwPbvE=";
  const COLD_URL = "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?q=80&w=1647&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1456400761117-a768c370cd6d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const imageSrc = info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL;

  return (
    <div className="info-box">
      <h2 className="weather-title">Weather Info - {info.weather}</h2>
      <div className="card-container">
        <Card className="weather-card">
          <CardMedia
            sx={{ height: 160 }}
            image={imageSrc}
            title="Weather Image"
          />
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {info.city.toUpperCase()}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              <p>🌡️ Temperature: {info.temp}&deg;C</p>
              <p>💧 Humidity: {info.humidity}</p>
              <p>🔻 Min Temp: {info.tempMin}&deg;C</p>
              <p>🔺 Max Temp: {info.rempMax}&deg;C</p>
              <p>📝 Description: <i>{info.weather}</i></p>
              <p>🥵 Feels Like: {info.feelsLike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
