import '../css/AboutPage.css';

const user = {
    name: 'Malphite',
    imageUrl: 'https://media1.tenor.com/m/CyqJe6K2z84AAAAd/malphite-bed.gif',
    imageSize: 1000,
};

export default function AboutPage() {
    return (
        <div className="container">
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </div>
    );
}