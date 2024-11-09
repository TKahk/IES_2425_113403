import './App.css'
import  { getImageUrl } from './utils.jsx'

function Avatar({person, size}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function Clock({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      <Clock color="blue" time={new Date().toLocaleTimeString()} />
    </Card>
  );
}
