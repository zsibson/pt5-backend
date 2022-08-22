const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const groceryList = document.getElementById("groceryList")

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
        })
}

const postList = () => {
    axios.post("http://localhost:4000/api/grocery", {name: groceryList} )
    .then(res => {
        const data = res.data;
        alert(data);
        console.log(postList)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
groceryList.addEventListener('click', postList)