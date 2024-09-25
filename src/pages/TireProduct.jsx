import { Link } from "react-router-dom";

const TireProduct = ({
  id,
  name,
  model,
  size,
  price,
  originalPrice,
  imageUrl,
}) => {
  return (
    <Link
      to={`/tire/${id}`} // Add id to the link for SingleCartPage
      className="border hover:border-orange-600 transition duration-500 bg-white cursor-pointer h-96 p-3 flex flex-col justify-between items-center"
    >
      <img
        className="w-40 h-52 mb-2 flex items-center justify-center"
        src={imageUrl} // Rasm URL'ini olish
        alt={name} // img uchun alt atributini qo'shamiz
      />
      <div className="text-start">
        <h3 className="font-bold">{name}</h3>
        <p>{model}</p>
        <p>{size}</p>
      </div>
      <p className="text-lg font-semibold">{price}</p>
      {originalPrice && (
        <p className="text-red-500 line-through">{originalPrice} ₽</p>
      )}
    </Link>
  );
};

export default TireProduct;

// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";

// const TireProduct = ({ id, name, model, size, price, originalPrice }) => {
//   const [picture, setPicture] = useState("");

//   useEffect(() => {
//     const fetchTyreImage = async () => {
//       try {
//         // Fetch tire data including image by ID
//         const response = await fetch(
//           `http://195.26.240.163:4000/api/tyres/${id}`
//         );
//         const data = await response.json();

//         // Check if the image exists in the response
//         if (data && data.picture) {
//           setPicture(data.picture); // Set the picture URL from the API response
//         } else {
//           console.error("No image found for this tire");
//         }
//       } catch (error) {
//         console.error("Error fetching tyre image:", error);
//       }
//     };

//     fetchTyreImage();
//   }, [id]);

//   return (
//     <Link
//       to={`/tire/${id}`} // Add id to the link for SingleCartPage
//       className="border hover:border-orange-600 transition duration-500 bg-white cursor-pointer h-96 p-3 flex flex-col justify-between items-center"
//     >
//       <div className="bg-gray-200 w-40 h-52 mb-2 flex items-center justify-center">
//         {/* Tire image */}
//         {picture ? (
//           <img
//             src={`https://sibirkoleso.ru${picture}`} // Use the picture from API
//             className="w-full h-full object-cover"
//             alt={name}
//           />
//         ) : (
//           <span className="text-gray-400">Image not available</span> // Placeholder when image is not available
//         )}
//       </div>
//       <div className="text-start">
//         <h3 className="font-bold">{name}</h3>
//         <p>{model}</p>
//         <p>{size}</p>
//       </div>
//       <p className="text-lg font-semibold">{price} ₽</p>
//       {originalPrice && (
//         <p className="text-red-500 line-through">{originalPrice} ₽</p>
//       )}
//     </Link>
//   );
// };

// export default TireProduct;

// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";

// const TireProduct = ({ id, name, model, size, price, originalPrice }) => {
//   const [picture, setPicture] = useState("");

//   useEffect(() => {
//     const fetchTyreImage = async () => {
//       try {
//         // Tire ma'lumotlarini ID bo'yicha olish
//         const response = await fetch(
//           `http://195.26.240.163:4000/api/tyres/${id}`
//         );

//         // API javobini JSON formatiga o'tkazish
//         const data = await response.json();

//         // Javobni konsolga chiqarish
//         console.log(data);

//         // Agar picture maydoni mavjud bo'lsa, rasm URL'sini saqlang
//         if (data && data.picture) {
//           setPicture(`https://sibirkoleso.ru${data.picture}`);
//         } else {
//           console.error("No image found for this tire");
//         }
//       } catch (error) {
//         console.error("Error fetching tyre image:", error);
//       }
//     };

//     fetchTyreImage();
//   }, [id]);

//   return (
//     <Link
//       to={`/tire/${id}`} // SingleCartPage uchun link
//       className="border hover:border-orange-600 transition duration-500 bg-white cursor-pointer h-96 p-3 flex flex-col justify-between items-center"
//     >
//       <div className="bg-gray-200 w-40 h-52 mb-2 flex items-center justify-center">
//         {/* Tire image */}
//         {picture ? (
//           <img
//             src={picture} // Fetch qilingan rasm URL'si
//             className="w-full h-full object-cover"
//             alt={name}
//           />
//         ) : (
//           <span className="text-gray-400">Image not available</span> // Rasm mavjud bo'lmasa
//         )}
//       </div>
//       <div className="text-start">
//         <h3 className="font-bold">{name}</h3>
//         <p>{model}</p>
//         <p>{size}</p>
//       </div>
//       <p className="text-lg font-semibold">{price} ₽</p>
//       {originalPrice && (
//         <p className="text-red-500 line-through">{originalPrice} ₽</p>
//       )}
//     </Link>
//   );
// };

// export default TireProduct;

// import { Link } from "react-router-dom";

// const TireProduct = ({
//   id,
//   name,
//   model,
//   size,
//   price,
//   originalPrice,
//   picture,
// }) => {
//   return (
//     <Link
//       to={`/tire/${id}`} // Add id to the link for SingleCartPage
//       className="border hover:border-orange-600 transition duration-500 bg-white cursor-pointer h-96 p-3 flex flex-col justify-between items-center"
//     >
//       <div className="bg-gray-200 w-40 h-52 mb-2 flex items-center justify-center">
//         {/* Tire image */}
//         <img
//           src={`https://sibirkoleso.ru${picture}`} // Use the picture prop
//           className="w-full h-full object-cover"
//           alt={name}
//         />
//       </div>
//       <div className="text-start">
//         <h3 className="font-bold">{name}</h3>
//         <p>{model}</p>
//         <p>{size}</p>
//       </div>
//       <p className="text-lg font-semibold">{price} ₽</p>
//       {originalPrice && (
//         <p className="text-red-500 line-through">{originalPrice} ₽</p>
//       )}
//     </Link>
//   );
// };

// export default TireProduct;
