let getStanding = async season => {
    let response = await axios.get(`http://ergast.com/api/f1/${season}/driverStandings`);
    return response.data
}


let LoadSeason = async season => {
    let data = await getStanding(season);
    console.log(data);
    console.log(data.season);
    let x = document.createElement('p');
    x.innerHTML = data.season;
    document.body.append(x);
}

LoadSeason('2019');


