/**
 * 
 * @param {Array} arr 
 */

function songsApp(arr) {
    const songs = []
    const numOfSongs = arr.shift();
    let typeSong = arr.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < numOfSongs; i++) {
        const songData = arr[i].split("_")
        let typeList, name, time;
        [typeList, name, time] = songData;
        songs.push(new Song(typeList, name, time));
    }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.typeList === typeSong);
        filtered.forEach((i) => console.log(i.name))
    }
}


songsApp([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])

songsApp([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favou)rite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])

songsApp([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])
