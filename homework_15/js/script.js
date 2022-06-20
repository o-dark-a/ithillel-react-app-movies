/* Initial song list */
let songs = [{
  id: 0,
  name: 'Jingle Bells',
  isLiked: false,
}, {
  id: 1,
  name: 'We Wish You a Merry Christmas',
  isLiked: true,
},
];

window.addEventListener('load', function() {
	let songsList = this.document.querySelector('ul.songs');
  let songsCountSpan = document.querySelector('.count');

  function initPlayList() {

    if (!localStorage.getItem('songs') || !JSON.parse(localStorage.getItem('songs')).length) {
      localStorage.setItem('songs', JSON.stringify(songs));
    }

    let AllSong = getAllSongs();

    for (let elem of AllSong) {
      displaySong(elem.id, elem.name, elem.isLiked);
    }
    songsCountSpan.textContent = getSongsCount(AllSong);
    
  }

  function getAllSongs() {
    return localStorage.getItem('songs') ? JSON.parse(localStorage.getItem('songs')) : songs;
  }

  function addSong(songId, songName, isLiked = false) {
    let allSongs = getAllSongs();
    allSongs.push({
      id: songId,
      name: songName,
      isLiked,
    });
    localStorage.setItem('songs', JSON.stringify(allSongs));
  }

  function displaySong(songId, songName, isLiked = false) {

    let songsListItem = document.createElement('li');
    let deleteBtn = document.createElement('button');
    let likeBtn = document.createElement('button');

    songsListItem.setAttribute('id', songId);

    songsListItem.classList.add('songs-item');
    deleteBtn.classList.add('delete-btn');
    likeBtn.classList.add('like-btn');

    deleteBtn.textContent = 'Delete';
    likeBtn.textContent = 'Like';

    songsListItem.textContent = songName;

    songsList.append(songsListItem);
    songsListItem.append(likeBtn);
    songsListItem.append(deleteBtn);

    if (isLiked) {
      likeBtn.classList.add('liked-song');
      likeBtn.textContent = 'Unlike';
    }

  }

  function getSongsCount(songsArr) {
    return songsArr.length;
  }

  function removeSongList(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  function deleteSong(songHtmlElem, songId) {

    songHtmlElem.remove();

    let allSong = getAllSongs();

    allSong.splice(songId, 1);

    let updateSongList = allSong.map((elem, indx) => {
      return {
        id: indx,
        name: elem.name,
        isLiked: elem.isLiked,
      }
    });

    localStorage.setItem('songs', JSON.stringify(updateSongList));

    removeSongList(songsList);

    for (let elem of updateSongList) {
      displaySong(elem.id, elem.name, elem.isLiked);
    }

    songsCountSpan.textContent = getSongsCount(updateSongList);

  }

  initPlayList();

  let songsItem = document.querySelector('.songs');

  songsItem.addEventListener('click', function(event) {

    if (event.target.classList.contains('like-btn')) {
      event.target.classList.toggle('liked-song');
      event.target.textContent = event.target.textContent ==='Like' ? 'Unlike' : 'Like';
    }

    if (event.target.classList.contains('delete-btn')) {
      const songLi = event.target.parentElement;
      const songId = event.target.parentElement.id;
      deleteSong(songLi, songId);
    }

  });

  let addBtn = document.querySelector('.button-add');

  addBtn.addEventListener('click', function() {

    let inputBoxVal = document.querySelector('.input-box').value;
    let songId = getAllSongs().length;

    if (inputBoxVal) {

      addSong(songId, inputBoxVal);
      displaySong(songId, inputBoxVal);

      let songArr = Array.from(document.querySelector('.songs').children);

      songsCountSpan.textContent = getSongsCount(songArr);
      document.querySelector('.input-box').value = '';

    }

  });

});
