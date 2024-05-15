import axios from "axios";

const searchPhotos = async(term) => {
 const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers: {
        Authorization: 'Client-ID WB44t4MWNjG5q3Sd2EdkTfn8HL931NZY8R8szwgFnZs',
    },
    params:{
        query: term
    }
 });
// console.log(response.data.results);
 return response.data.results;
//  console.log(result);
}

export default searchPhotos;