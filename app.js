const minimumScoreToWin = 100;

const matchData = {
    roundOne: {
        dolphins: [96, 108, 89],
        koalas: [88, 91, 110]
    },

    roundTwo: {
        dolphins: [97, 112, 101],
        koalas: [109, 95, 123]
    },

    roundThree: {
        dolphins: [97, 112, 101],
        koalas: [109, 95, 106]
    }
}


for (let key in matchData) {
    let teamAverages = [];

    for (let eachTeam in matchData[key]){
        const array = matchData[key][eachTeam]

        let sum = 0;
        
        for (let index = 0; index < array.length; index++) {
            const element = array[index]
            sum += element
            
        }

        teamAverages.push(Math.round(sum/array.length));
    };
    

    if ((teamAverages[0] >=  minimumScoreToWin)  && (teamAverages[0] >  teamAverages[1])) {
        console.log(`Score: ${teamAverages[0]}, Dolphins won the match with ${Math.round(teamAverages[0]-teamAverages[1])} score..`)

    }else if ((teamAverages[1] >=  minimumScoreToWin) && (teamAverages[1] > teamAverages[0])) {
        console.log(`Score: ${teamAverages[1]}, Koalas won the match with ${Math.round(teamAverages[1]-teamAverages[0])} score..`)

    }else{
        console.log(`Match Drawn!! Score ratio of Dolphins and Koalas are ${teamAverages[0]}:${teamAverages[1]}`)
    }
    

}