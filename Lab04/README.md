# Ex 4.1

1. Criar projeto em react
    - npm create vite@latest MyApp -- --template react
2. Inicializar o projeto
    - npm i
    - npm run dev

# 4.2

1. Passar props para o componente
    Exemplo:
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

    function App() {
        <Avatar
            size={100}
            person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
            }}
        />
    }

2. Update a objetos in state

    const [position, setPosition] = useState({
      x: 0,
      y: 0
    });
    return (
      <div
        onPointerMove={e => {
          setPosition({
            x: e.clientX,
            y: e.clientY
            });
        }}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}>
        <div style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }} />

        
      </div>

3. Uso de contexto

    const LevelContext = React.createContext(1); // 1 é o valor padrão

    function heading({children}) {
        const level = useContext(LevelContext);

        switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
    }

    function App() {
        return (
            <LevelContext.Provider value={2}>
                <Heading>My Heading</Heading>
            </LevelContext.Provider>
        );
    }

# 4.3
1. Consumir API's
- useEffect Hook:
    const [data, setData] = useState(null); // const para armazenar o estado

    1. GET request
    useEffect(() => {
        fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    2. POST request
    useEffect(() => {
        fetch('https://api.example.com/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key: 'value' })
        })
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    3. DELETE request
    useEffect(() => {
        fetch('https://api.example.com/data/${id}', {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

Asyn and Await: usados para simplificar o código

    async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

2. Usar AXIOS
    - npm install axios
    - import axios from 'axios';

    async function fetchData() {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);


