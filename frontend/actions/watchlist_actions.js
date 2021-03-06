import * as WatchlistAPIUtil from '../util/watchlist_api_util';

export const RECEIVE_WATCHLIST_ASSETS = "RECEIVE_WATCHLIST_ASSETS";
export const RECEIVE_WATCHLIST_ASSET = "RECEIVE_WATCHLIST_ASSET";
export const REMOVE_WATCHLIST_ASSET = "REMOVE_WATCHLIST_ASSET";

export const receiveWatchlistAssets = (assets) => {
    return {
        type: RECEIVE_WATCHLIST_ASSETS,
        assets,
    }
}

export const receiveWatchlistAsset = asset => {
    return {
        type: RECEIVE_WATCHLIST_ASSET,
        asset,
    }
}

export const removeWatchlistAsset = () => {
    return {
        type: REMOVE_WATCHLIST_ASSET,
    }
}

//thunk action creators

export const fetchAllWatchlistAssets = () => dispatch => {
    return WatchlistAPIUtil.fetchAllWatchlistAssets().then(assets => {
        return dispatch(receiveWatchlistAssets(assets));
    })
}

export const addAssetToWatchlist = (asset, currentUser) => dispatch => {
    return WatchlistAPIUtil.addAssetToWatchlist(asset, currentUser).then(assets => {
        return dispatch(receiveWatchlistAssets(assets));
    })
}

export const deleteAssetFromWatchlist = (asset, currentUser) => dispatch => {
    return WatchlistAPIUtil.deleteAssetFromWatchlist(asset, currentUser).then(response => {
        return dispatch(removeWatchlistAsset());
    })
}
