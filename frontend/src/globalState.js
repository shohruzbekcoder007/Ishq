import { action, observable, toJS } from "mobx";

export const globalState = observable({
    post: {
        fileId: "",
        fileName: "",
        postType: "",
        postMiniText: "",
    } 
});

export const getPostFile = action((file) => {
    globalState.post.fileId = file.id;
    globalState.post.fileName = file.filename;
})
