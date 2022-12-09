
// 1) Створення обʼєкта та виклик властивостей обʼєкут(ключі)
// const playlist = {
//     name: "Мой плейлсит",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],
//     trackCount: 3,
// }
// console.log(playlist);
// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks.push("hye"));
// console.log(playlist);

// 2) Виклик через змінну
// const propertyName = "name";
// console.log(playlist[propertyName])

// 3) Короткий запис властивостей 
// const name = "Elizabeth";
// const age = 20;
// const country = "USA";

// const user = {
//     name,
//     age,
//     country,
// };
// console.log(user)

// 4) обчислювані властивості
// /* <input name="color" value="red"></input> */
// const inputName = "color";
// const inputValue = "red";

// const colorData = {
//     [inputName]: inputValue,
// }
// console.log(colorData)

// 5) Методи обʼєектів
//  const playlist = {
//     name: "Мой плейлсит",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],
//     trackCount: 3,
    
//     changeName(newName) {
//         return this.name = newName;
        
//      },
//     addTrack(newTrack) {
//         return this.tracks.push(newTrack);
//      }
// }
// console.log(playlist);

// const newNamePlaylist = playlist.changeName("New name of playlist");
// console.log(newNamePlaylist);
// console.log(playlist);

// const newTrackPlaylist = playlist.addTrack("new-track");
// console.log(newTrackPlaylist);
// console.log(playlist);

