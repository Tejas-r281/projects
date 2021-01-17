const result = document.querySelector('.result');
const btn = document.querySelector('.btn');

const getjokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }

        }
        const res = await fetch('https://icanhazdadjoke.com',setHeader);
        const data = await res.json();
        // console.log(data);
        result.innerHTML= data.joke;
    } catch (error) {
          console.log(error);
    }
}

btn.addEventListener('click', getjokes);

getjokes();
