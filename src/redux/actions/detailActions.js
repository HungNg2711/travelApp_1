import discoverData from "../../../assets/data/discoverData";
export const changeLiked = (liked) => {
    return async (dispatch) => {
    try {
        
    } catch (error) {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(discoverData)
            },3000)
        });
        console.log("đã cập nhật trạng thái Liked");
    }
}
}