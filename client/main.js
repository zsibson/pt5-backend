const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const form = document.getElementById("form")
const formInput = document.getElementById("form-input")
const section = document.getElementById("section")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });        
};

const postList = (e) => {
    e.preventDefault()
    const inputValue = formInput.value;
    console.log(inputValue);
    const body = { inputValue };
    axios.post("http://localhost:4000/api/groceries/", body)
        .then(res => {
        let list = document.createElement("div");
        list.innerHTML = `<h3>${res.data}</h3>;`;
        section.appendChild(list);
        })
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', postList)
