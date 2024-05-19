const main = async () => {
    const ctx = document.getElementById('myChart');
    const ctx2 = document.getElementById('myChart-2');
	const data = await (await fetch("http://127.0.0.1:5500/statsDice.json")).json();
    /*data = Object.entries(data).map(x => {
        let dta = x[1];
        const lbl = x[0];
        const color = dta.color;
        delete dta.t;
        delete dta.p;
        delete dta.color;
        dta = Object.entries(dta).map(y => {
            delete y[1][0];
            return y;
        }).map(y => {
            //console.log(y[1][1])
            return y[1][1];
        });
        console.log(dta)
        return {
            label: lbl,
            data: dta,
            backgroundColor: color
        }
    });*/
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ["Percentages of Dice Rolls (Multiple Turns)"],
            datasets: Object.entries(data).map(x => ({
                label: x[0],
                data: [x[1].p],
                backgroundColor: x[1].color
            }))
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    const dat = [];
    Object.entries(data).forEach(x => {
        let dta = x[1];
        const color = dta.color;
        delete dta.color
        delete dta.t 
        delete dta.p
        dta = Object.entries(dta).map(y => {
            
            return y;
        })//.filter(x=>x);
        //console.log(dta, x)
        v = dta.map( z => {
            console.log(z, "z")
            return {
                label: z[0],
            data: [z[1]*100/1000000],
                backgroundColor: color
            }
        });
        dat.push(...v)
    })
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Percentages of Dice Rolls"],
            datasets: dat
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


};
main();