import axios from "axios";

const url = "https://evergreen-con-be.herokuapp.com/api/tasks/";

/* eslint-disable no-async-promise-executor */

class PostService {
  // get posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((post) => ({
            ...post,
            createdAt: new Date(post.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
  //Create post
  static insertPost(values) {
   
    const test = axios.post( url, {type : values.type, model: values.model, config: values.config, lat:values.lat, lon:values.lon})

    test.then( function hola() {console.log('successful');} ).catch( function (err) {console.log(err);} );
  }

  //delete post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
