* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #0f172a;
    color: white;
    text-align: center;
}

nav {
    height: 70px;
    background: #020617;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
}

nav h2 {
    color: #38bdf8;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
}

nav a:hover {
    color: #38bdf8;
}

.hero {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hero h1 {
    font-size: 40px;
}

.hero h1 span {
    color: #38bdf8;
}

.hero h2 {
    margin: 15px;
    color: #a78bfa;
}

.hero p {
    color: #cbd5e1;
}

button {
    margin-top: 25px;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    background: #38bdf8;
    color: #020617;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    background: #a78bfa;
    color: white;
}

section {
    padding: 70px 10%;
}

section h2 {
    color: #38bdf8;
    margin-bottom: 20px;
}

section p {
    max-width: 650px;
    margin: auto;
    line-height: 1.7;
    color: #cbd5e1;
}

.cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.cards div {
    background: #1e293b;
    padding: 30px;
    width: 180px;
    border-radius: 10px;
    border: 1px solid #334155;
}

.cards div:hover {
    transform: translateY(-8px);
    border-color: #38bdf8;
}

footer {
    padding: 25px;
    background: #020617;
    color: #94a3b8;
}
