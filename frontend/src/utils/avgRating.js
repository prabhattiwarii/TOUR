const calculateAvgRating = reviews => {
   if (!Array.isArray(reviews)) {
     return {
       totalRating: 0,
       avgRating: ""
     };
   }
 
   const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
   const avgRating =
     totalRating === 0
       ? ""
       : totalRating === 1
       ? totalRating
       : (totalRating / reviews.length).toFixed(1);
 
   return {
     totalRating,
     avgRating
   };
 };
 
 export default calculateAvgRating;
 