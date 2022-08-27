module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = [
            "Competence like yours is underrated.", 
            "Failure is the chance to do better next time.", 
            "If you continually give, you will continually have.",
            "Never fear! The end of something marks the start of something new.",
            "Technology is the art of arranging the world so we do not notice it.",
            "Take the high road.",
            "Do not underestimate yourself. Human beings have unlimited potentials."

        ];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },

        postList: (req, res) => {
            res.status(201)
        }
    

}

