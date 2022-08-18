export const initialState = {
  songs: [],
  newSongName: '',
  sortOrder: '',
};

export const ADD_SONG = '[SONGS] Add song';
export const REMOVE_SONG = '[SONGS] Remove song';
export const CHANGE_LIKE_STATUS = '[SONGS] Change like status';
export const INI_SONG_SORT = '[SONGS] Initial sort song';
export const SET_SORT_ORDER = '[SONGS] Set sort order';
export const UPDATE_NEW_SONG_NAME = '[SONGS] Update new song name';
export const SET_SONGS  = '[SONGS] Set songs';

export const SongReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_SONGS:
      return {
        ...state,
        songs: action.payload.songs
      };
    case UPDATE_NEW_SONG_NAME:
      return {
        ...state,
        newSongName: action.payload.newSongName
      };
    case ADD_SONG:
      return {
        ...state,
        songs: [action.payload.newSong, ...state.songs]
      };
    case REMOVE_SONG:
      return {
        ...state,
        songs: state.songs.filter(song => song.id !== action.payload.songId)
      }
    case CHANGE_LIKE_STATUS:
      return {
        ...state,
        songs: state.songs.map(song => action.payload.likedSong.id === song.id ? ({...song, isLiked: !song.isLiked}) : song)
      }
    case SET_SORT_ORDER:
      if (state.songs.some((song) => song.isLiked) && state.sortOrder !== action.payload.order) {
        return {
          ...state,
          songs: (action.payload.order === 'first liked') ? [...state.songs].sort(song => !song.isLiked ? 1 : -1) : [...state.songs].sort(song => song.isLiked ? 1 : -1),
          sortOrder: action.payload.order
        }
      }
    default:
      return state
  }
}