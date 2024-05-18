const BOARD = [
    {
        "name": "Go",
        "type": "go",
        "corner": true
    },
    {
        "name": "Mediterranean Avenue",
        "type": "property",
        "cost": 60,
        "color": "#955438",
        "color-group": "brown",
        "rent": [2,10,30,90,160,250],
        "group": [1, 1, 2],
        "house": 50
    },
    {
        "name": "Community Chest",
        "type": "community-chest"
    },
    {
        "name": "Baltic Avenue",
        "type": "property",
        "cost": 60,
        "color": "#955438",
        "color-group": "brown",
        "rent": [4,20,60,180,320,450],
        "group": [1, 2, 2],
        "house": 50
    },
    {
        "name": "Income Tax",
        "type": "tax",
        "cost": 200
    },
    {
        "name": "Reading Railroad",
        "type": "railroad",
        "cost": 200,
        "group": [9, 1, 4]
    },
    {
        "name": "Oriental Avenue",
        "type": "property",
        "cost": 100,
        "color": "#aae0fa",
        "color-group": "light-blue",
        "rent": [6,30,90,270,400,550],
        "group": [2, 1, 3],
        "house": 50
    },
    {
        "name": "Chance",
        "type": "chance"
    },
    {
        "name": "Vermont Avenue",
        "type": "property",
        "cost": 100,
        "color": "#aae0fa",
        "color-group": "light-blue",
        "rent": [6,30,90,270,400,550],
        "group": [2, 2, 3],
        "house": 50
    },
    {
        "name": "Connecticut Avenue",
        "type": "property",
        "cost": 120,
        "color": "#aae0fa",
        "color-group": "light-blue",
        "rent": [8,40,100,300,450,600],
        "group": [2, 3, 3],
        "house": 50
    },
    {
        "name": "Jail",
        "type": "jail",
        "corner": true
    },
    {
        "name": "St. Charles Place",
        "type": "property",
        "cost": 140,
        "color": "#d93a96",
        "color-group": "pink",
        "rent": [10,50,150,450,625,750],
        "group": [3, 1, 3],
        "house": 100
    },
    {
        "name": "Electric Company",
        "type": "utility",
        "cost": 150,
        "group": [10, 1, 2]
    },
    {
        "name": "States Avenue",
        "type": "property",
        "cost": 140,
        "color": "#d93a96",
        "color-group": "pink",
        "rent": [10,50,150,450,625,750],
        "group": [3, 2, 3],
        "house": 100
    },
    {
        "name": "Virginia Avenue",
        "type": "property",
        "cost": 160,
        "color": "#d93a96",
        "color-group": "pink",
        "rent": [12,60,180,500,700,900],
        "group": [3, 3, 3],
        "house": 100
    },
    {
        "name": "Pennsylvania Railroad",
        "type": "railroad",
        "cost": 200,
        "group": [9, 2, 4]
    },
    {
        "name": "St. James Place",
        "type": "property",
        "cost": 180,
        "color": "#f7941d",
        "color-group": "orange",
        "rent": [14,70,200,550,750,950],
        "group": [4, 1, 3],
        "house": 100
    },
    {
        "name": "Community Chest",
        "type": "community-chest"
    },
    {
        "name": "Tennessee Avenue",
        "type": "property",
        "cost": 180,
        "color": "#f7941d",
        "color-group": "orange",
        "rent": [14,70,200,550,750,950],
        "group": [4, 2, 3],
        "house": 100
    },
    {
        "name": "New York Avenue",
        "type": "property",
        "cost": 200,
        "color": "#f7941d",
        "color-group": "orange",
        "rent": [16,80,220,600,800,1000],
        "group": [4, 3, 3],
        "house": 100
    },
    {
        "name": "Free Parking",
        "type": "free-parking",
        "corner": true
    },
    {
        "name": "Kentucky Avenue",
        "type": "property",
        "cost": 220,
        "color": "#ed1b24",
        "color-group": "red",
        "rent": [18,90,250,700,875,1050],
        "group": [5, 1, 3],
        "house": 150
    },
    {
        "name": "Chance",
        "type": "chance"
    },
    {
        "name": "Indiana Avenue",
        "type": "property",
        "cost": 220,
        "color": "#ed1b24",
        "color-group": "red",
        "rent": [18,90,250,700,875,1050],
        "group": [5, 2, 3],
        "house": 150
    },
    {
        "name": "Illnois Avenue",
        "type": "property",
        "cost": 240,
        "color": "#ed1b24",
        "color-group": "red",
        "rent": [20,100,300,750,925,1100],
        "group": [5, 3, 3],
        "house": 150
    },
    {
        "name": "B. & O. Railroad",
        "type": "railroad",
        "cost": 200,
        "group": [9, 3, 4]
    },
    {
        "name": "Atlatic Avenue",
        "type": "property",
        "cost": 260,
        "color": "#fef200",
        "color-group": "yellow",
        "rent": [22,110,330,800,975,1150],
        "group": [6, 1, 3],
        "house": 150
    },
    {
        "name": "Ventura Avenue",
        "type": "property",
        "cost": 260,
        "color": "#fef200",
        "color-group": "yellow",
        "rent": [22,110,330,800,975,1150],
        "group": [6, 2, 3],
        "house": 150
    },
    {
        "name": "Water Works",
        "type": "utility",
        "cost": 150,
        "group": [10, 2, 2]
    },
    {
        "name": "Marvin Gardens",
        "type": "property",
        "cost": 280,
        "color": "#fef200",
        "color-group": "yellow",
        "rent": [24,120,360,850,1025,1200],
        "group": [6, 3, 3],
        "house": 150
    },
    {
        "name": "Go To Jail",
        "type": "go-to-jail",
        "corner": true
    },
    {
        "name": "Pacific Avenue",
        "type": "property",
        "cost": 300,
        "color": "#1fb25a",
        "color-group": "green",
        "rent": [26,130,390,900,1100,1275],
        "group": [7, 1, 3],
        "house": 200
    },
    {
        "name": "North Carolina Avenue",
        "type": "property",
        "cost": 300,
        "color": "#1fb25a",
        "color-group": "green",
        "rent": [26,130,390,900,1100,1275],
        "group": [7, 2, 3],
        "house": 200
    },
    {
        "name": "Community Chest",
        "type": "community-chest"
    },
    {
        "name": "Pennsylvania Avenue",
        "type": "property",
        "cost": 320,
        "color": "#1fb25a",
        "color-group": "green",
        "rent": [28,150,450,1000,1200,1400],
        "group": [7, 3, 3],
        "house": 200
    },
    {
        "name": "Shortline",
        "type": "railroad",
        "cost": 200,
        "group": [9, 4, 4]
    },
    {
        "name": "Chance",
        "type": "chance"
    },
    {
        "name": "Park Place",
        "type": "property",
        "cost": 350,
        "color": "#0072bb",
        "color-group": "dark-blue",
        "rent": [35,175,500,1100,1300,1500],
        "group": [8, 1, 2],
        "house": 200
    },
    {
        "name": "Luxury Tax",
        "type": "tax",
        "cost": 100
    },
    {
        "name": "Boardwalk",
        "type": "property",
        "cost": 400,
        "color": "#0072bb",
        "color-group": "dark-blue",
        "rent": [50,200,600,1400,1700,2000],
        "group": [8, 2, 2],
        "house": 200
    }
]
const searchObjForName = (obj, name) => {
    // Function to search for an object in an array based on the name property
    const c = obj.find(x => x.name === name);
    return c;
}

const _sortDataIntoColorGroups = (data) => {
    // Function to sort data into color groups
    const colorGroups = {};
    data.forEach(x => {
        if (colorGroups[x[4]]) {
            colorGroups[x[4]].push(x);
        } else {
            colorGroups[x[4]] = [x];
        }
    });
    return colorGroups;
}

const main = async () => {
    // Main function
    const ctx = document.getElementById('myChart');
    let data = await (await fetch("http://127.0.0.1:5500/monopoly/stats.json")).json();
    data = [data[0].map(x => [
        x[0], x[1], x[2],
        Number(/.+\(([0-9]+)/gm.exec(x[0])[1]),
        searchObjForName(BOARD, /.[a-zA-Z]+\.?( ?.[a-zA-Z]+)?( ?.[a-zA-Z]+)?|(B\. \& O\. Railroad)/gm
            .exec(x[0])[0]).color ?? (
                (x[0].includes("Railroad") || x[0].includes("Shortline") ? "#000000" :
                (x[0].includes("Go") ? "#97dba9" :
                (x[0].includes("Chance") || x[0].includes("Chest") ? "#deced5" : "#808080"))))
    ]),
    data[1]]
    const sortDataByIndex = (arr, s) => arr.sort((a, b) => a[s] - b[s]);
    data = [sortDataByIndex(data[0], 3), data[1]];

    console.log(data[0].map(x => {
        return {
            label: x[0],
            data: [x[2]],
            backgroundColor: x[4]
        }
    }));

    const c = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Percentages"],
            datasets: data[0].map(x => {
                return {
                    label: x[0],
                    data: [x[2]],
                    backgroundColor: x[4]
                }
            })
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    console.log(c.data);
}

main();
